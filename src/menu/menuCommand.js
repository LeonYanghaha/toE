const electron = require('electron');
const dialog = electron.dialog;

let menuCommand = {};

menuCommand.newFile = ()=>{

};

menuCommand.openFile = ()=> {


  dialog.showOpenDialog({
    defaultPath :defaultpath,
    properties: [
      'openFile',
    ],
    filters: [
      { name: 'zby', extensions: ['json'] },
    ]
  },function(res){
    callback(res[0]) //我这个是打开单个文件的
  })


};

menuCommand.saveFile = ()=> {

};

menuCommand.saveNewFile = ()=> {

};

exports.menuCommand = menuCommand ;