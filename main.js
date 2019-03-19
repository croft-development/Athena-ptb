const {app, BrowserWindow} = require('electron')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 466,
    minimizable:false,
    resizable:false,
    transparent: true,
    frame: false,
    alwaysOnTop:true,
    icon: __dirname+'/images/icon.png',
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('accept.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
 
