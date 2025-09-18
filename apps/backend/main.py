from fastapi import FastAPI

app = FastAPI()

# Health check endpoint for wait-on and monitoring
@app.get("/")
def health_check():
    """
    Health check endpoint for monitoring and CI/CD.
    """
    return {"status": "ok", "service": "backend"}

# All backend API routes are now under /api/*
@app.get("/api/ping")
def ping():
    """
    Simple health check endpoint for frontend-backend integration.
    """
    return {"result": "pong"}