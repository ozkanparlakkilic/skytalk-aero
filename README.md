# Skytalk Aero

Skytalk Aero is a comprehensive Next.js application designed for aviation-related services and information.
It integrates several development tools and configurations for streamlined development, testing, and deployment.

## Getting Started

### Prerequisites

- Node.js
- Pnpm (or npm/yarn)
- Docker (for containerization)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ozkanparlakkilic/skytalk-aero.git
cd skytalk-aero
pnpm install
```

### Development Server

To start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser to view the project.

## Key Components

- **Husky**: This project uses Husky to manage Git hooks, ensuring quality control throughout development.
  For example, Husky can automate tasks like running lint checks and tests before each commit or push, helping maintain code standards.

- **Docker**: Docker support allows consistent environment management and deployment. You can build and run the project
  in a container using the following command:
  ```bash
  docker-compose up
  ```
  Configure settings in `docker-compose.yml` as needed for your environment.

## Features

- Scalable structure using Next.js
- Customizable and responsive design with Tailwind CSS
- Docker and Husky integration for streamlined development and deployment

## Deployment

Deploying with Vercel is recommended. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

1. Fork the repository and create a new branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request.

## License

This project is licensed under the MIT License.
