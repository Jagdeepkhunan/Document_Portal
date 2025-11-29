from pymongo import MongoClient
import os

CONNECTION_STRING = os.getenv("MONOGO_DB_CONNECTION_STRING", None)
databaseName = os.getenv("MONOGO_DB_NAME", None )

print("databaseName : ", databaseName )

if not CONNECTION_STRING or not databaseName : 
    raise Exception("DataBase configuration is not loaded")


def get_database():
#    # Encode username and password
#    username = quote_plus("doadmin")
#    password = quote_plus("j3pk1IQ2hMJ84976")
   
#    # Updated connection string -- submodule --check 2
#    CONNECTION_STRING = f"mongodb+srv://{username}:{password}@private-prod-mongo-a1ac376b.mongo.ondigitalocean.com/development_ziemtee?tls=true&authSource=admin&replicaSet=prod-mongo"
#    # CONNECTION_STRING = "mongodb://127.0.0.1:27017" 
   
   # Initialize MongoDB client
   client = MongoClient(CONNECTION_STRING)
   
   # Define database name
   # databaseName = "development_ziemtee"

   return client[databaseName]