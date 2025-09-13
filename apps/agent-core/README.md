# Agent Core

This is the core agent application for the Nx monorepo, built with TypeScript and designed to support AI-driven agent functionality.

---

## Features

- **TypeScript** - Strongly typed JavaScript
- **Modular Architecture** - Flexible agent core design
- **Tool Integration** - Support for various AI tools and agents
- **Nx Integration** - Monorepo management
- **Docker Support** - Containerization ready

---

## Project Structure

```
apps/agent-core/
├── src/
│   ├── main.ts        # Application entry point
│   ├── tools.ts       # AI tool definitions
│   └── app/           # Application-specific modules
├── project.json       # Nx targets for build/serve/test
├── tsconfig.json      # TypeScript configuration
└── package.json       # NPM dependencies
```

---

## Development

### 1. Install Dependencies

From the monorepo root:
```sh
npx nx build agent-core
```

### 2. Start the Application

From the monorepo root:
```sh
npx nx serve agent-core
```

---

## Testing

```sh
# Run tests via Nx
npx nx test agent-core
```

---

## Docker

```sh
# Build the image
docker build -t agent-core .

# Run the container
docker run agent-core
```

---

## Nx Integration

- **`nx build agent-core`** - Build the project
- **`nx serve agent-core`** - Start development server
- **`nx test agent-core`** - Run tests

---

## Best Practices

- Use TypeScript type annotations
- Write comprehensive tests
- Follow modular design principles
- Document tool and agent interactions

---

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Nx Documentation](https://nx.dev)
- [Docker Documentation](https://docs.docker.com/)