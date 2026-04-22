/**
 * Optional native `fsevents` from chokidar 1.x breaks on current Node (e.g. 21+).
 * Removing it makes chokidar use Node's fs watcher so `npm start` works.
 */
const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, '..', 'node_modules', 'fsevents');
try {
  fs.rmSync(target, { recursive: true, force: true });
} catch (_) {
  // ignore
}
