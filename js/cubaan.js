var CUBAAN = (function(module) {
    
    module.Buat = function(resultObject) {
      resultObject.prepend(Date() + '<br />');
    };
    
    return module;
} (CUBAAN || {}));