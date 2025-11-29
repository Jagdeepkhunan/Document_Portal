from .config import  get_database

from utility import  hash_password, ComparePassword

def Get_Collection(): 
    dbname = get_database()
    collection_name = dbname["user"]
    return collection_name 

def BreakAuthKey(AuthKey) : 
    parts = AuthKey.split("DOCUMENTPORTAL")
    if len(parts) == 2 :
        return parts 
    return None


def Login(AuthKey) : 
    collection = Get_Collection()
    parts = BreakAuthKey(AuthKey)
    if parts : 
        findUser = collection.find_one({"username" : parts[0] } ) 
        if findUser : 
            userkey = findUser.get("partKey",None)
            isPassMatch = ComparePassword(parts[1], userkey) 
            if isPassMatch :
                userid = findUser.get("_id",None) 
                if userid : 
                    return str(userid)
                return False
        else:
            data = collection.find_one({"name" : "Master User"} ) #  ({'_id': ID})
            print(" Master user : ", data )
            if data is None :
                part_encrypt = None
                if parts : 
                    part_encrypt = hash_password(parts[1]) 
                else :
                    print(" Master User NOT created parts are not valid"  )
                    return False
                MasterUser = {"name" : "Master User", "username" : parts[0], "partKey" : part_encrypt }
                insert_result = collection.insert_one(MasterUser)
                print(" Master User created at ", insert_result.inserted_id )
                return str(insert_result.inserted_id)
    else:
        print("user data invalid ") 
    #
    return  False
