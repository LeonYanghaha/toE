//渲染进程


const ipc = require('electron').ipcRenderer;

ipc.on('selected-directory', function (event, path) {
  document.getElementById('mainDic').innerHTML = `You selected: ${path}`
});