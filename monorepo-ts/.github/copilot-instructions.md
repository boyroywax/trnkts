# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Structure

This is a TypeScript monorepo using npm workspaces. The project structure
follows these conventions:

- `packages/`: Contains all workspace packages
- Each package should have its own `src/`, `tests/`, and `package.json`
- Shared configurations are at the root level

## Development Guidelines

### TypeScript

- Use strict TypeScript configuration
- Prefer explicit typing over `any`
- Use consistent import/export patterns
- Enable all strict mode flags

### Testing

- Use Jest with ts-jest for testing
- Write tests for all public APIs
- Place tests in `__tests__` directories or use `.test.ts` suffix
- Aim for high test coverage

### Code Style

- Follow Prettier configuration for formatting
- Use ESLint rules consistently
- Prefer functional programming patterns where appropriate
- Use meaningful variable and function names

### Monorepo Practices

- Each package should be independently buildable
- Use workspace dependencies for internal packages
- Keep shared utilities in a common package
- Maintain consistent naming conventions across packages

### Dependencies

- Use exact versions for production dependencies when possible
- Keep devDependencies at the root level when shared
- Document any peer dependencies clearly
