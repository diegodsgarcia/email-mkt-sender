const fs = require('fs');
const path = require('path');

module.exports = (directory) => {
  const dir = path.resolve(`${__dirname}/${verifyIfHasADirectory(directory)}`);
  return readFile(dir);
}

function verifyIfHasADirectory(directory) {
  return directory.trim() ? directory : 'index.html';
}

function readFile(directory) {
  return new Promise((resolve, reject) => {
    fs.readFile(directory, 'utf8', (error, datas) => {
      if(error) {
        reject(error)
      } else {
        resolve(datas);
      }
    })
  })
}
