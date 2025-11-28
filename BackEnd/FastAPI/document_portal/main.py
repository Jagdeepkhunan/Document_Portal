from fastapi import FastAPI

from typing import List, Optional, Any, Dict
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Request, Header
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path
import os
from dotenv import load_dotenv


# Load environment variables from .env file
load_dotenv()

API_Access_key = os.getenv("API_Access_key", "Empty")
print(" -- API_Access_key -- ", API_Access_key )
if API_Access_key == "Empty" :
    raise Exception("Access Code Required")


app = FastAPI(title="Document Portal API", version="1.0")

BASE_DIR = Path(__file__).resolve().parent # .parent
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=[], # ['*']
    allow_credentials=False, # True,
    allow_methods=[], # ["*"],
    allow_headers=[], # ["*"],
)

@app.get("/")
async def root(x_app_auth: str = Header(None)):
    #  print(" -- x_app_auth : ", x_app_auth )
    if x_app_auth != API_Access_key :
        raise HTTPException(status_code=403, detail="No Access")
    return {"message": "Hello World"}