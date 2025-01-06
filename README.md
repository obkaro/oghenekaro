# Karo's Personal Space

I built modern personal website with Next.js and Payload CMS. It's fully dynamic - nearly everything can be updated via the CMS, thanks to Payload. Capabilities include a blog, portfolio, and dynamic content management.

## Features

- 🎨 Dynamic page builder with customizable blocks
- 📝 Blog with rich text editing
- 🔍 SEO optimization and sitemap generation
- 🌓 Dark mode support
- 📱 Responsive design
- 🔄 Live content preview
- 🔎 Built-in search ability

## Tech Stack

- **Frontend:** Next.js 15, React 19, TailwindCSS
- **Backend:** Payload CMS, PostgreSQL
- **Language:** TypeScript
- **Deployment:** Docker support, Vercel-ready

## Getting Started

Feel free to clone, modify and make it your own if you please. Contact me here or at obkaro@gmail.com if you have any questions. There are also awesome resources freely available on the web you can refer to.

### Prerequisites

- Node.js (^18.20.2 || >=20.9.0)
- pnpm (recommended)
- PostgreSQL

### Quick Start

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   pnpm install
   ```

2. **Environment Setup**

   ```bash
   cp .env.example .env
   ```

3. **Development**

   ```bash
   pnpm dev
   ```

4. **Production**
   ```bash
   pnpm build
   pnpm start
   ```

## Project Structure

```
src/
├── app/          # Next.js pages
├── blocks/       # Content blocks
├── components/   # UI components
├── collections/  # CMS collections
└── utilities/    # Helper functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.
