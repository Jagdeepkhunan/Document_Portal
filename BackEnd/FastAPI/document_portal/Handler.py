import traceback , json, os
from Database import DB_User, DB_Session

async def Login( req_data, background_tasks ) :
    ReturnRes = { "Error" : True }
    try : 
        AuthCode = req_data.AuthCode
        print(" -- AuthCode : ", AuthCode )
        sessionID = False
        userid = DB_User.Login(AuthCode)
        if userid : 
            sessionID =  DB_Session.CreateSession(userid)
        ReturnRes = { "Error" : False, "noError" : True, "sessionID" : sessionID }
    except Exception as E : 
        full_info = traceback.format_exc()
        E_str = str(E) + "\n ----------- \n " + str(full_info)
        print(" ----------- \n", E_str )
    return ReturnRes

async def Logout( req_data, background_tasks ) :
    ReturnRes = { "Error" : True }
    try : 
        session = req_data.session
        print(" -- session : ", session )
        isdeactivated = DB_Session.deactivateSession(session)
        ReturnRes = { "Error" : False, "noError" : True, "isdeactivated" : isdeactivated }
    except Exception as E : 
        full_info = traceback.format_exc()
        E_str = str(E) + "\n ----------- \n " + str(full_info)
        print(" ----------- \n", E_str )
    return ReturnRes

async def getAllSession( req_data, background_tasks ) :
    ReturnRes = { "Error" : True }
    try : 
        session = req_data.session
        print(" -- session : ", session )
        session = DB_Session.getAllSession(session)
        ReturnRes = { "Error" : False, "noError" : True, "session" : session }
    except Exception as E : 
        full_info = traceback.format_exc()
        E_str = str(E) + "\n ----------- \n " + str(full_info)
        print(" ----------- \n", E_str )
    return ReturnRes