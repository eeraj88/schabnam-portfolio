const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = process.env.PORT || 4174;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

function send404(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  const requestPath = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const filePath = path.normalize(path.join(root, requestPath));

  if (!filePath.startsWith(root)) return send404(res);

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return send404(res);

    const ext = path.extname(filePath).toLowerCase();
    const contentType = types[ext] || 'application/octet-stream';
    const range = req.headers.range;

    if (range && ext === '.mp4') {
      const match = range.match(/bytes=(\d*)-(\d*)/);
      const start = match && match[1] ? Number(match[1]) : 0;
      const end = match && match[2] ? Number(match[2]) : stat.size - 1;
      const safeEnd = Math.min(end, stat.size - 1);

      res.writeHead(206, {
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Content-Range': `bytes ${start}-${safeEnd}/${stat.size}`,
        'Content-Length': safeEnd - start + 1,
      });
      fs.createReadStream(filePath, { start, end: safeEnd }).pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stat.size,
      'Accept-Ranges': ext === '.mp4' ? 'bytes' : 'none',
    });
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(port, () => {
  console.log(`Schabnam portfolio running at http://localhost:${port}`);
});
