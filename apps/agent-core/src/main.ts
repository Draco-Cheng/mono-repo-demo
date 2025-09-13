// agent-core/src/index.ts

import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { AgentExecutor, createToolCallingAgent } from 'langchain/agents';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { readFileTool } from './tools';
import * as readline from 'node:readline';

import * as dotenv from 'dotenv';
dotenv.config();

// Make sure to set the GOOGLE_API_KEY environment variable.
if (!process.env.GOOGLE_API_KEY) {
  console.error("Please set the GOOGLE_API_KEY environment variable.");
  process.exit(1);
}

// Create an instance of the Google Gemini model.
const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
});

// Use ChatPromptTemplate instead of PromptTemplate for the agent.
const promptTemplate = ChatPromptTemplate.fromTemplate(
  `You are an AI assistant that helps with code-related tasks. You have access to tools to interact with the file system.
  When a user asks you to read a file, you must use the 'read_file' tool.

  User message: {input}

  {agent_scratchpad}`
);

// Define the list of tools for the agent.
const tools = [readFileTool];

// Create an AI agent executor.
async function createAgentExecutor() {
  const agent = await createToolCallingAgent({
    llm: model,
    tools,
    prompt: promptTemplate,
  });

  return new AgentExecutor({
    agent,
    tools,
  });
}

// Create a simple CLI interface.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("AI Codebase Assistant is ready! Type 'exit' to quit.");

// Start the interaction.
async function askQuestion(agentExecutor: AgentExecutor) {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    try {
      console.log("AI: Thinking...");

      const result = await agentExecutor.invoke({
        input: input,
      });

      console.log("AI:", result.output);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    // Ask the next question.
    askQuestion(agentExecutor);
  });
}

// Main function to start the application.
async function main() {
  const executor = await createAgentExecutor();
  askQuestion(executor);
}

main();