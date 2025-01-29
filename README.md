# Node.js Server: Multiple server.listen() calls

This repository demonstrates a common error in Node.js: attempting to start a server's listener multiple times.  The initial code attempts to repeatedly start the server, resulting in an uncaught exception.  The solution shows how to implement a graceful shutdown, preventing this issue.

## How to reproduce the bug:
1. Clone the repository.
2. Run `node bug.js`.
3. Observe the error message in the console.  Attempting to restart the server will consistently reproduce the error.

## How the solution works:
The solution demonstrates proper server shutdown.  By adding an event listener for `SIGINT` (interrupt signal, typically sent with Ctrl+C) and `SIGTERM` (termination signal), the server gracefully closes, and prevents the 'Uncaught Exception' error when restarted.

## Lessons learned:
* Always handle server shutdowns gracefully.
* Properly closing a server is crucial for preventing multiple listener errors.