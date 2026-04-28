import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const port = Number(process.env.PORT || 4173);
const root = join(process.cwd(), 'dist', 'frontend', 'browser');

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webp', 'image/webp'],
]);

const sendFile = async (requestPath, response) => {
  const cleanedPath = requestPath.split('?')[0];
  const relativePath =
    cleanedPath === '/' ? 'index.html' : normalize(cleanedPath.replace(/^\/+/, ''));
  const filePath = join(root, relativePath);

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    return false;
  }

  const fileStat = await stat(filePath);
  const targetPath = fileStat.isDirectory() ? join(filePath, 'index.html') : filePath;

  if (!existsSync(targetPath)) {
    return false;
  }

  response.writeHead(200, {
    'Cache-Control':
      extname(targetPath) === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    'Content-Type': contentTypes.get(extname(targetPath)) || 'application/octet-stream',
  });

  createReadStream(targetPath).pipe(response);
  return true;
};

createServer(async (request, response) => {
  const requestPath = request.url || '/';

  try {
    const served = await sendFile(requestPath, response);

    if (served) {
      return;
    }

    const fallbackServed = await sendFile('/index.html', response);

    if (fallbackServed) {
      return;
    }

    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Server error');
  }
}).listen(port, () => {
  console.log(`Serving dist from http://localhost:${port}`);
});
