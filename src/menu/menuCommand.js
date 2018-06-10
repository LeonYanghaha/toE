const electron = require('electron');
const ipc = require('electron').ipcMain;
const dialog = electron.dialog;





let menuCommand = {};
/*
* Describe:
* Date:2018-06-09  17:25
* By Yangk. 
**/
menuCommand.newFile = ()=>{
  console.log("newFile");

};

menuCommand.openFile = (item, focusedWindow)=> {




};

menuCommand.saveFile = ()=> {
  console.log("saveFile");
};

menuCommand.saveNewFile = ()=> {
  console.log("saveNewFile");
};

exports.menuCommand = menuCommand ;