// agent-core/src/tools.ts

import { StructuredTool } from "@langchain/core/tools";
import axios from 'axios';
import { z } from 'zod';

const FILE_SYSTEM_MCP_URL = 'http://localhost:8000';

const readFileInputSchema = z.object({
  path: z.string().describe("The path to the file to read."),
});

class ReadFileTool extends StructuredTool {
  name = "read_file";
  description = "Reads the content of a file from the project's codebase. Use this tool when asked to read or view a file's content.";
  schema = readFileInputSchema;

  async _call(input: z.infer<typeof readFileInputSchema>): Promise<string> {
    try {
      const response = await axios.post(`${FILE_SYSTEM_MCP_URL}/read_file`, {
        file_path: input.path,
      });
      return `File content: ${response.data.content}`;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return `Error: Could not read file. ${error.response.data.detail}`;
      }
      return `An unexpected error occurred: ${error}`;
    }
  }
}

export const readFileTool = new ReadFileTool();
