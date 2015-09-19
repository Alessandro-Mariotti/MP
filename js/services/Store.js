var Store = function() {
  this.consts = {
      MEDIA_PATHS: 'MEDIA_PATHS',
  };
  this.mediaPaths = [];
};

Store.prototype.addMediaPath = function(entryId) {
  this.mediaPaths.push(entryId);
  return this;
};
  
Store.prototype.save = function() {
  var o = {};
  o[this.consts.MEDIA_PATHS] = this.mediaPaths;
  chrome.storage.local.set(o);
};
  
Store.prototype.getMediaPaths = function() {
  chrome.storage.local.get(this.consts.MEDIA_PATHS, (paths) => {
    this.mediaPaths = paths;
  });
};