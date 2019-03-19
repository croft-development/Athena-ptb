var remote = require('electron').remote;
function end() {
  var window = remote.getCurrentWindow();
  window.close();
};
function min() {
  const { remote } = require('electron')
  remote.BrowserWindow.getFocusedWindow().minimize();
};
function max() {
  const { remote } = require('electron')
  remote.BrwoserWindow.getFocusedWindow().maximize();
}
