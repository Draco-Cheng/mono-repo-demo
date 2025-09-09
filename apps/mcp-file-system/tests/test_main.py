from app.main import read_file


import pytest

@pytest.mark.asyncio
async def test_hello():
    """Test the hello function."""
    assert (await read_file("hello.txt"))['content'] == "Hello World!"
