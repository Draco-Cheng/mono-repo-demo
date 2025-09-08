from fastapi import FastAPI, HTTPException
import os

app = FastAPI()

@app.post("/read_file")
async def read_file(file_path: str):
    try:
        if not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail=f"File not found: {file_path}")
        
        # 讀取檔案內容並回傳
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
        return {"content": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading file: {e}")

@app.post("/write_file")
async def write_file(file_path: str, content: str):
    try:
        # 將內容寫入檔案
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(content)
        return {"status": "success", "message": f"File successfully written to {file_path}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error writing file: {e}")