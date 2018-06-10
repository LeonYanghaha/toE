const path = require('path');
const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

const debug = /--debug/.test(process.argv[2]);
const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;

if (process.mas) app.setName('Electron APIs');

let mainWindow = null;
/*
* Describe:
* Date:2018-06-09  17:25
* By Yangk. 
**/
function initialize () {
  let shouldQuit = makeSingleInstance();
  if (shouldQuit) return app.quit();

  loadDemos();

  function createWindow () {
    let windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    };

    // if (process.platform === 'linux') {
    //   windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
    // }

    mainWindow = new BrowserWindow(windowOptions);
    mainWindow.loadURL(path.join('file://', __dirname, '/page/index.html'));

    // Launch fullscreen with DevTools open, usage: npm run debug
    // if (debug) {
      mainWindow.webContents.openDevTools();
    //   mainWindow.maximize();
    //   require('devtron').install()
    // }

    mainWindow.on('closed', function () {
      mainWindow = null
    })
  }

  app.on('ready', function () {
    createWindow();
    // autoUpdater.initialize()
  });

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });

  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })









}

function makeSingleInstance () {
  if (process.mas) return false;

  return app.makeSingleInstance(function () {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus()
    }
  })
}

// Require each JS file in the main-process dir
function loadDemos () {
  // let files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  // files.forEach(function (file) {
  //   require(file)
  // })
  // autoUpdater.updateMenu()
  require("./menu/setMenu")
}


/*
* Describe:
* Date:2018-06-09  17:25
* By Yangk. 
**/
(()=>{

  initialize();

})();