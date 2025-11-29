from datetime import datetime, timedelta
from .config import get_database
from bson import ObjectId

def Get_Session_Collection():
    dbname = get_database()
    return dbname["session"]


def CreateSession(userId):
    try : 
        ObjectId(userId)
    except Exception as E : 
        print("userid conversion  error for : ", userId )
        return False

    session_col = Get_Session_Collection()

    # 1. Mark previous sessions inactive
    session_col.update_many(
        {"userId": userId, "isActive": True},
        {"$set": {"isActive": False}}
    )

    # 2. Create new session
    new_session = {
        "userId": userId,
        "isActive": True,
        "createdAt": datetime.utcnow(),
        "expiresAt": datetime.utcnow() + timedelta(days=7)   # optional 7 days
    }

    insert_result = session_col.insert_one(new_session)

    # 3. Return the session ID as string
    return str(insert_result.inserted_id)

def deactivateSession(sessionId) : 
    session_obj_id = None
    try:
        session_obj_id = ObjectId(sessionId)
    except Exception as E:
        print("Session ID conversion error for:", sessionId)
        return False

    session_col = Get_Session_Collection()

    result = session_col.update_one(
        {"_id": session_obj_id},
        {"$set": {"isActive": False}}
    )

    if result.modified_count > 0:
        return True

    return False

def getAllSession(sessionId) : 
    try:
        session_obj = ObjectId(sessionId)
    except Exception as e:
        print("Session ID conversion error for:", sessionId)
        return []

    session_col = Get_Session_Collection()

    # 1. Find session using sessionId
    current_session = session_col.find_one({"_id": session_obj})
    if not current_session:
        print("Session not found for ID:", sessionId)
        return []

    # 2. Extract userId from session
    userId = current_session.get("userId")
    if not userId:
        print("No userId found inside this session")
        return []

    # 3. Find all sessions for this user
    all_sessions = list(session_col.find({"userId": userId}).sort("createdAt", -1)).limit(8)

    # 4. Transform sessions to required response
    result = []
    for s in all_sessions:
        result.append({
            "_id": str(s["_id"]),
            "createdAt": s["createdAt"].strftime("%Y-%m-%d") if "createdAt" in s else "",
            "isActive": s.get("isActive", False)
        })

    return result