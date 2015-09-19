var FileSystem = function() {
};
FileSystem.prototype.addMediaPath = function() {
  
  chrome.fileSystem.chooseEntry({
    type: 'openDirectory'
  }, entry => {
    var store = new Store();
    store.addMediaPath(chrome.fileSystem.retainEntry(entry)).save();
  });
};
