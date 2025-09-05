"""Hello unit test module."""

from apps/mcp_file_system.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello apps/mcp-file-system"
