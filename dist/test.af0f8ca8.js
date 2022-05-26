// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"HdJB":[function(require,module,exports) {
var string = "\n<style>\n.mainHead *{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    user-select:none;\n}\n.mainHead{\n    position: relative;\n    left:50%; \n    margin-left:-100px;\n    border: 1px solid black;\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    background-color:#0097e3 ;\n    \n}\n.face{\n    border: 1px solid black;\n    position: absolute;\n    width: 170px;\n    height: 150px;\n    left: 14px;\n    top: 40px;\n    border-radius: 80%;\n    background-color:white ;\n}\n.nose{\n    border: 1px solid black;\nborder-radius: 100% ;\nbackground-color: #cc0000;\nposition: absolute;\nleft: 50%;\nmargin-left:-10px;\ntop: 70px;\nwidth: 20px;\nheight: 20px;\n}\n\n.eye-right{\n    border: 1px solid black;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    border-radius: 40%;\n    left: 50%;\n    top: -43px;\n    background-color: white;\n}\n.eye-left{\n    border: 1px solid black;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    border-radius: 40%;\n    top: -43px;\n    left:-40px;\n    background-color: white;\n}\n.eye-ball-left{\n    border: 1px solid black;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    left:32px;\n    top: 30px;\n    border-radius: 100%;\n    background-color: black;\n}\n.eye-ball-right{\n    border: 1px solid black;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    right:32px;\n    top: 30px;\n    border-radius: 100%;\n    background-color: black;\n}\n.middleLine{\n    position: absolute;\n    height: 70px;\n    width: 1px;\n    left: 8px;\n    top: 19px;\n    background-color: #969696;\n    z-index: 2;\n}\n\n.mouth{\n    border: 1px solid black;\n    position:absolute;\n    border-radius: 60%;\n    width: 150px;\n    height: 100px;\n    left: -66px;\n    top: -10px;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-right-color: transparent;\n}\n.beard-middle{\n    position: absolute;\n    width: 160px;\n    height: 1px;\n    top: 40px;\n    left: -71px;\n    background-color: black;\n}\n.beard-up{\n    position: absolute;\n    width: 160px;\n    height: 1px;\n    top: 40px;\n    left: -71px;\n    transform: rotate(15deg);\n    background-color: black;\n}\n.beard-down{\n    position: absolute;\n    width: 160px;\n    height: 1px;\n    top: 40px;\n    left: -71px;\n    transform: rotate(-15deg);\n    background-color: black;\n\n}\n.shadow{\n    position: absolute;\n    width: 80px;\n    height: 30px;\n    left: -31px;\n    top: 25px;\n    background-color: white;\n}  \n.mainBody{\n    position: absolute;\n    width: 300px;\n    height: 90px;\n    top: 185px;\n    left: 50%;\n    margin-left: -150px;\n    overflow: hidden;\n}\n.pocket{\n    position: absolute;\n    border: 1px solid black;\n    background-color: white;\n    width: 100px;\n    height: 90px;\n    left: 50%;\n    top: -10px;\n    margin-left: -50px;\n    border-radius: 60px;\n\n}\n.innerPocket{\n    position: absolute;\n    border: 1px solid black;\n    width: 70px;\n    height: 38px;\n    left: 50%;\n    top: 40px;\n    margin-left: -35px;\n    border-radius: 0 0px 60px 60px;\n}\n.neck{\n    position: absolute;\n    border: 1px solid black;\n    background-color: #cc0000;\n    border-radius: 10px;\n    width: 136px;\n    height: 10px;\n    left: 50%;\n    margin-left:-68px ;\n}\n.body2{\n    position:absolute;\n    border: 1px solid black;\n    width: 130px;\n    height: 120px;\n    left: 50%;\n    margin-left: -65px;\n    background-color: #0097e3;\n\n}\n.line1{\n    position: absolute;\n    border: 1px solid #0097e3;\n    width: 0px;\n    height: 40px;\n    left: 85px;\n    top: 9px;\n}\n.line2{\n    position: absolute;\n    border: 1px solid #0097e3;\n    width: 0;\n    height: 40px;\n    left: 213px;\n    top: 9px;\n}\n.ring{\n    border: 1px solid black;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    left: 50%;\n    margin-left: -10px;\n    top: 4px;\n    background-color: yellow;\n    overflow: hidden;\n}\n.ringPart1{\n    position:absolute;\n    border: 1px solid black;\n    background-color: black;\n    width: 6px;\n    height: 6px;\n    border-radius: 100%;\n    left: 50%;\n    margin-left: -3px;\n    top: 7px;\n}\n.ringPart2{\n    position: absolute;\n    height: 6px;\n    width: 1px;\n    background-color: black;\n    left: 50%;\n    margin-left: -0.5px;\n    top: 13px;\n}\n.ringPart3{\n    position: absolute;\n    border: 1px solid black;\n    width: 20px;\n    height: 3px;\n    left: 50%;\n    margin-left: -10px;\n    top: 3px;\n}\n.arm-left{\n    border: 1px solid black;\n    position: absolute;\n    width: 50px;\n    height: 31px;\n    left: 52px;\n    top: 21px;\n    transform: rotate(-40deg);\n    background-color: #0097e3;\n    z-index: -1;\n}\n.hand-left{\n    position: absolute;\n    border: 1px solid black;\n    height: 34px;\n    width: 34px;\n    border-radius: 100%;\n    left: -20px;\n    top: -2px;\n    background-color: white;\n}\n\n\n.arm-right{\n    border: 1px solid black;\n    position: absolute;\n    width: 50px;\n    height: 31px;\n    right: 52px;\n    top: 21px;\n    transform: rotate(-140deg);\n    background-color: #0097e3;\n    z-index: -1;\n}\n.hand-right{\n    position: absolute;\n    border: 1px solid black;\n    height: 34px;\n    width: 34px;\n    border-radius: 100%;\n    left: -20px;\n    top: -3px;\n    background-color: white;\n}\n.foot-left{\n    position: absolute;\n    border: 1px solid black;\n    position: absolute;\n    width: 74px;\n    height:18px ;\n    top: 270px;\n    left: 50%;\n    margin-left: 2px;\n    border-radius: 10px 20px 10px 10px;\n    background-color: white;\n}\n.foot-right {\n    position: absolute;\n    border: 1px solid black;\n    position: absolute;\n    width: 74px;\n    height:18px ;\n    top: 270px;\n    left: 24px;\n    border-radius: 20px 10px 10px 10px;\n    background-color: white;\n}\n</style>";

var n = 1;
demo1.innerHTML = string.substring(0, n);
demo2.innerText = string.substring(0, n);

var time = 100;

var run = function run() {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return;
    }
    demo1.innerHTML = string.substring(0, n);
    demo2.innerText = string.substring(0, n);
    demo2.scrollTop = demo2.scrollHeight;
};
var play = function play() {
    clearInterval(id);
    return setInterval(run, time);
};
var pause = function pause() {
    window.clearInterval(id);
};
var id = play();
buttonPause.onclick = function () {
    pause();
};
buttonPlay.onclick = function () {
    id = play();
};
buttonFast.onclick = function () {
    window.clearInterval(id);
    time = 0;
    id = play();
};
buttonNormal.onclick = function () {
    pause();
    time = 100;
    id = play();
};
buttonSlow.onclick = function () {
    pause();
    time = 300;
    id = play();
};
buttonClear.onclick = function () {
    location.reload();
};
},{}]},{},["HdJB"], null)
//# sourceMappingURL=test.af0f8ca8.map