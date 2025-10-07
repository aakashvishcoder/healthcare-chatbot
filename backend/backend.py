from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("") # finish checking later

class PredictionRequest(BaseModel):
    prompt: str

@app.get("/")
async def serve_frontend():
    return FileResponse("healthcare-chatbot/index.html")

@app.post("/api/predict")
async def predict(request: PredictionRequest):
    try:
        return JSONResponse(content={
            "output": 
        })
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )

if __name__ == "__main__":
    uvicorn.app("backend:app", host="0.0.0.0", port=int(os.environ.get("PORT",5500)), reload=True)