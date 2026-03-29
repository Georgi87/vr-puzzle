const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8443;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.fbx':  'application/octet-stream',
  '.mp3':  'audio/mpeg',
  '.pem':  'text/plain',
  '.json': 'application/json',
};

const options = {
  key:  fs.readFileSync(path.join(ROOT, 'key.pem')),
  cert: fs.readFileSync(path.join(ROOT, 'cert.pem')),
};

https.createServer(options, (req, res) => {

  // Static file serving
  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);
  // Prevent path traversal outside root
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});
