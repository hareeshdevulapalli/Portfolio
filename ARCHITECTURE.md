# Clean Architecture Implementation

This portfolio has been reorganized following Clean Architecture principles and SOLID design patterns.

## Architecture Layers

### 1. Domain Layer (`src/domain/`)

- **Entities** (`entities.ts`): Core business objects (Project, Experience, Education, etc.)
- **Interfaces** (`interfaces.ts`): Repository and service contracts
- **Constants** (`constants.ts`): Domain enums, errors, and constants

### 2. Application Layer (`src/application/`)

- **Use Cases** (`use-cases/`): Business logic implementation
  - `project-use-cases.ts`: Project-related operations
  - `experience-use-cases.ts`: Experience-related operations
  - `education-use-cases.ts`: Education-related operations
  - `message-use-cases.ts`: AI assistant operations
- **Services** (`services/`): Application services for cross-cutting concerns

### 3. Infrastructure Layer (`src/infrastructure/`)

- **Repositories** (`repositories/`): Data access implementations
- **Services** (`services/`): External service implementations
- **DI Container** (`di/container.ts`): Dependency injection configuration

### 4. Presentation Layer (`src/presentation/`)

- **Components** (`components/`): UI components following single responsibility
- **Hooks** (`hooks/`): Custom hooks for data management

### 5. Shared Layer (`src/shared/`)

- **Constants** (`constants.ts`): Application-wide constants
- **Utils** (`utils.ts`): Utility functions

## SOLID Principles Applied

### Single Responsibility Principle (SRP)

- Each component has one reason to change
- Components are broken down into smaller, focused sub-components
- Example: `ProjectCard` → `TechStack` + `Highlights` sub-components

### Open/Closed Principle (OCP)

- Components are open for extension, closed for modification
- New features can be added without changing existing code
- Repository pattern allows easy swapping of data sources

### Liskov Substitution Principle (LSP)

- All repository implementations can be substituted without breaking functionality
- Interface contracts ensure consistent behavior

### Interface Segregation Principle (ISP)

- Interfaces are focused and specific to their use cases
- No component depends on methods it doesn't use

### Dependency Inversion Principle (DIP)

- High-level modules don't depend on low-level modules
- Both depend on abstractions (interfaces)
- Dependency injection container manages dependencies

## Benefits

1. **Maintainability**: Clear separation of concerns makes code easier to maintain
2. **Testability**: Each layer can be tested independently
3. **Scalability**: Easy to add new features without affecting existing code
4. **Flexibility**: Can swap implementations (e.g., different data sources)
5. **Reusability**: Components and services can be reused across the application

## File Structure

```
src/
├── domain/                 # Business logic and entities
│   ├── entities.ts
│   ├── interfaces.ts
│   └── constants.ts
├── application/           # Use cases and application services
│   ├── use-cases/
│   └── services/
├── infrastructure/       # External concerns
│   ├── repositories/
│   ├── services/
│   └── di/
├── presentation/         # UI components and hooks
│   ├── components/
│   └── hooks/
├── shared/              # Shared utilities and constants
│   ├── constants.ts
│   └── utils.ts
└── pages/               # Page components
```

This architecture ensures the codebase is maintainable, testable, and follows industry best practices.
