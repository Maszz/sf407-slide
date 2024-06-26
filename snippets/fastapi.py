from fastapi import FastAPI
import uvicorn

# region snippet
app = FastAPI()


@app.get("/")
async def read_root():
    return {"message": "Hello World!"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
# endregion snippet
