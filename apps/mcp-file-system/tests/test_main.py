"""Hello unit test module."""

from appp.main import read_file


def test_hello():
    """Test the hello function."""
    assert read_file() == "Hello apps/mcp-file-system"
