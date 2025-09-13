# AI_README: Agent Core Conventions & Index

This file provides guidelines for AI assistants and future contributors to the agent-core project.

---

## Framework & Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Dependency Management:** NPM
- **Architecture:** Modular agent design
- **Testing:** Jest
- **Containerization:** Docker

---

## Directory Structure

```
apps/agent-core/
├── src/
│   ├── main.ts        # Core application entry point
│   ├── tools.ts       # AI tool definitions and interfaces
│   └── app/           # Application-specific modules
├── project.json       # Nx build/serve/test configurations
└── tsconfig.json      # TypeScript configuration
```

---

## Conventions

- **Typing:** Use strict TypeScript typing
- **Modularity:** Design tools and agents as independent, reusable modules
- **Tool Interface:** Implement consistent tool definition structure
- **Error Handling:** Provide comprehensive error management
- **Logging:** Implement detailed logging for agent interactions

---

## Tool Development

### Tool Interface Guidelines

- Each tool should implement:
  - `name`: Unique identifier
  - `description`: Purpose of the tool
  - `execute()`: Primary method for tool functionality
- Use TypeScript interfaces for tool definitions
- Provide comprehensive error handling
- Include type-safe input and output

---

## Agent Interaction

- Tools are designed to be dynamically loaded and executed
- Implement a consistent method for tool registration and discovery
- Support context-aware tool selection and execution
- Provide mechanisms for tool chaining and complex task decomposition

---

## AI Interaction Principles

- Maintain clear separation between tool definition and execution
- Design tools to be stateless and side-effect free where possible
- Implement robust input validation and sanitization
- Support comprehensive logging and traceability of agent actions

---

## Development Guidelines

- Write comprehensive unit tests for each tool
- Document tool purpose, inputs, and expected outputs
- Follow TypeScript best practices and style guidelines
- Use dependency injection for improved modularity
- Implement graceful error handling and recovery mechanisms

---

## Performance Considerations

- Optimize tool execution time
- Implement caching mechanisms where appropriate
- Design tools to be lightweight and focused
- Support parallel tool execution when possible

---

## Security Considerations

- Validate and sanitize all inputs
- Implement strict access controls
- Use environment-based configuration
- Avoid hardcoding sensitive information
- Implement logging without exposing sensitive data

---

## AI Usage Notes

- Reference this file for consistent tool and agent development
- Follow the outlined conventions and best practices
- Ensure new tools integrate seamlessly with existing architecture
- Prioritize modularity, type safety, and error resilience