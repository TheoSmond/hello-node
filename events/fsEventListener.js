const fs = require('fs');

const bigFileWatcher = fs.watch('../bigFile1');

bigFileWatcher.on("change",(changerType) => console.log(changerType));