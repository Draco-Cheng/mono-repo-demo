import os

from fastapi import FastAPI, HTTPException

app = FastAPI()

def assetsPathPrefix():
    def decorator(func):
        def wrapper(*args, **kwargs):
            modified_args = (f"assets/{args[0]}",) + args[1:]
            return func(*modified_args, **kwargs)
        return wrapper
    return decorator

@app.post("/read_file")
@assetsPathPrefix()
async def read_file(file_path: str):
    try:
        if not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail=f"File not found: {file_path}")
        
        # read the file content and return
        with open(file_path) as file:
            content = file.read()
        return {"content": content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading file: {e}") from e

@app.post("/write_file")
@assetsPathPrefix()
async def write_file(file_path: str, content: str):
    try:
        # write the content to the file
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(content)
        return {"status": "success", "message": f"File written: {file_path}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error writing file: {e}") from e