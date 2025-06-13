# 🧠 Nx Monorepo – buildSpace

Welcome to my personal Nx workspace! This monorepo contains my portfolio and other growing projects built using modern full-stack technologies and best practices.

## 📁 Structure

```
apps/
├── devAman/          → Personal portfolio (React/Next.js)
├── kinzokupe/        → Experimental app/project
└── api/              → Backend services (Node.js/FastAPI/Spring Boot)

libs/
├── shared/           → Shared utilities and types
├── ui/               → Reusable UI components
└── data/             → Data access layer

tools/
├── nx-generators/    → Custom Nx generators
├── scripts/          → Build and deployment scripts
└── configs/          → Shared configurations
```

## 🚀 Live Projects

| Project       | Live Demo                                           | Source Code            | Tech Stack        |
|---------------|-----------------------------------------------------|------------------------|-------------------|
| **devAman**   | [devaman.vercel.app](https://devaman.vercel.app)   | [`apps/devAman`](apps/devAman)     | Next.js, React   |
| **kinzokupe** | [kinzokupe.vercel.app](https://kinzokupe.vercel.app) | [`apps/kinzokupe`](apps/kinzokupe) | React, TypeScript |

## 🛠️ Tech Stack

### Frontend
- **Nx** – Monorepo & Build System
- **React / Next.js** – Frontend frameworks
- **TypeScript** – Type safety and developer experience
- **Tailwind CSS** – Styling

### Backend
- **Node.js** – JavaScript runtime
- **FastAPI** – Python web framework
- **Spring Boot** – Java enterprise framework

### Database & Services
- **Supabase / Firebase** – Backend-as-a-Service
- **PostgreSQL** – Primary database

### Deployment & Infrastructure
- **Vercel** – Frontend hosting
- **Docker** – Containerization
- **GitHub Actions** – CI/CD

## 📦 Getting Started

### Prerequisites
- Node.js (18+)
- pnpm (recommended package manager)
- Python 3.9+ (for FastAPI projects)
- Java 17+ (for Spring Boot projects)

### Installation

```bash
# Install dependencies
pnpm install

# Install Python dependencies (if using FastAPI)
pip install -r requirements.txt

# Install Java dependencies (if using Spring Boot)
./gradlew build  # or mvn install
```

### Development

```bash
# Run frontend apps
pnpm nx serve devAman
pnpm nx serve kinzokupe

# Run backend services
pnpm nx serve api           # Node.js API
python -m uvicorn main:app --reload  # FastAPI
./gradlew bootRun          # Spring Boot

# Run all apps in parallel
pnpm nx run-many --target=serve --all
```

### Building for Production

```bash
# Build specific app
pnpm nx build devAman

# Build all apps
pnpm nx run-many --target=build --all

# Build with dependencies
pnpm nx build devAman --with-deps
```

### Testing

```bash
# Run tests
pnpm nx test

# Run e2e tests
pnpm nx e2e devAman-e2e

# Run all tests
pnpm nx run-many --target=test --all
```

## 🔧 Available Scripts

```bash
# Nx commands
pnpm nx graph                    # View dependency graph
pnpm nx format:check            # Check code formatting
pnpm nx format:write            # Format code
pnpm nx lint                    # Lint all projects
pnpm nx affected:build          # Build affected projects
pnpm nx affected:test           # Test affected projects

# Custom scripts
pnpm clean                      # Clean build artifacts
pnpm reset                      # Reset node_modules and reinstall
```

## 🏗️ Project Structure

### Adding New Apps

```bash
# Generate React app
pnpm nx g @nx/react:app my-app

# Generate Next.js app
pnpm nx g @nx/next:app my-next-app

# Generate Node.js API
pnpm nx g @nx/node:app my-api

# Generate library
pnpm nx g @nx/react:lib my-lib
```

### Libraries

- **`@buildspace/shared`** - Common utilities and constants
- **`@buildspace/ui`** - Reusable UI components
- **`@buildspace/data`** - Data access and API clients

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Deploy to Vercel
vercel --prod

# Or use GitHub integration for automatic deployments
```

### Backend Services
```bash
# Docker deployment
docker build -t my-app .
docker run -p 3000:3000 my-app

# Using docker-compose
docker-compose up --build
```

## 🌱 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Use conventional commits for commit messages

## 📈 Performance & Monitoring

- **Bundle Analysis**: `pnpm nx build --analyze`
- **Lighthouse CI**: Automated performance testing
- **Dependency Graph**: `pnpm nx graph` to visualize project relationships

## 🤝 Support

Need help setting up a similar monorepo or have questions about the architecture? Feel free to:

- Open an issue for bugs or feature requests
- Start a discussion for general questions
- Check out the [Nx documentation](https://nx.dev)

## 📜 License

MIT License - feel free to use and remix this setup for your own projects!

---

**Built with ❤️ using Nx, React, and modern web technologies**