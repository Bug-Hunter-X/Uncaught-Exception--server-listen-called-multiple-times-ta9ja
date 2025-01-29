const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isRunning = false; // Track if the server is currently running

function startServer() {
  if (!isRunning) {
    const port = 8080;
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      isRunning = true;
    });
  }
}

function stopServer() {
  if (isRunning) {
    server.close(() => {
      console.log('Server closed gracefully.');
      isRunning = false;
    });
  }
}

// Start the server
startServer();

// Handle graceful shutdown (SIGINT/SIGTERM)
process.on('SIGINT', () => {
  stopServer();
  process.exit(0);
});
process.on('SIGTERM', () => {
  stopServer();
  process.exit(0);
});