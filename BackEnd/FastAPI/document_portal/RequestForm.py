from pydantic import BaseModel, Field, constr


class LoginRequest(BaseModel) :
    AuthCode : str

class BasicRequest(BaseModel) :
    session : str