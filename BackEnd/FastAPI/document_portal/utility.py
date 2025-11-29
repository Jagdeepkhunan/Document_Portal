import bcrypt 
# import random


def hash_password(password: str):
    saltRounds = 12 
    salt = bcrypt.gensalt(saltRounds) 
    password_hash = bcrypt.hashpw(password.encode('utf-8')  , salt).decode() # Hash the password
    # print(" -- password : ", password )
    # print(" -- password_hash : ", password_hash )
    return password_hash

def ComparePassword(password,hashed):
    # print(" type : hashed ", hashed )
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8') ) 

# def generate_numeric_otp(length=6):
#     """Generate a numeric OTP."""
#     otp = ''.join(random.choices('0123456789', k=length))
#     return otp