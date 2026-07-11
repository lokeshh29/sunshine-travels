import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom Vite plugin to handle local API for packages
const localApiPlugin = () => {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/packages' && req.method === 'GET') {
          const filePath = path.resolve(__dirname, 'src/data/packages.json');
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.end('[]');
          }
          return;
        }

        if (req.url === '/api/packages' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const filePath = path.resolve(__dirname, 'src/data/packages.json');
              
              // Ensure directory exists
              const dir = path.dirname(filePath);
              if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
              }

              // Verify it's valid JSON before writing
              JSON.parse(body);
              fs.writeFileSync(filePath, body);
              
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid JSON data' }));
            }
          });
          return;
        }
        
        next();
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), localApiPlugin()],
  server: {
    port: 3000,
    open: true
  }
})
