/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/percentage */ "./src/js/modules/percentage.js");
/* harmony import */ var _modules_scrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollTop */ "./src/js/modules/scrollTop.js");




window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_scrollTop__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_percentage__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textareas = document.querySelectorAll('textarea'),
    server = 'assets/server.php';
  const message = {
    loading: '<span style="font-size: 2rem; font-weight: bold; color: yellow;">Загрузка...</span>',
    contact: '<span style="font-size: 2rem; font-weight: bold; color: green;">Спасибо, я скоро с вами свяжусь</span>',
    failure: '<span style="font-size: 2rem; font-weight: bold; color: red;">Что-то пошло не так...</span>',
    email: '<span style="font-size: 2rem; font-weight: bold; color: red;">Некорректный e-mail</span>',
    spinner: 'assets/icons/forms/spinner.gif',
    ok: 'assets/icons/forms/ok.png',
    fail: 'assets/icons/forms/fail.png'
  };
  let isEmailCorrect = false;
  const clearInputs = () => {
    inputs.forEach(input => input.value = '');
    textareas.forEach(textarea => textarea.value = '');
  };
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.text();
  };
  const animateStatus = item => {
    item.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => {
      item.classList.remove('animate__fadeIn');
      item.classList.add('animate__fadeOut');
      setTimeout(() => {
        item.style.display = 'none';
      }, 800);
    }, 3000);
  };
  const showBtnImg = (parent, src, alt) => {
    const img = document.createElement('img');
    img.style.width = '30px';
    img.src = src;
    img.alt = alt;
    parent.innerHTML = '';
    animateStatus(img);
    parent.appendChild(img);
  };
  forms.forEach(form => {
    const button = form.querySelector('button'),
      statusMessage = form.querySelector('[data-status-message]'),
      emailInput = document.querySelector('[type="email"]'),
      initialButtonValue = button.innerHTML,
      initialStatusMessageValue = statusMessage.innerHTML;

    // validating email before accepting it
    const validateEmail = email => {
      return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const validate = () => {
      const emailMessage = document.getElementById('emailMessage'),
        email = emailInput.value;
      emailMessage.textContent = '';
      if (validateEmail(email)) {
        emailMessage.textContent = email + ' корректный адрес.';
        emailMessage.style.color = 'green';
        isEmailCorrect = true;
        button.removeAttribute('disabled');
      } else {
        emailMessage.textContent = email + ' некорректный адрес.';
        emailMessage.style.color = 'red';
        isEmailCorrect = false;
        button.setAttribute('disabled', 'true');
      }
      return isEmailCorrect;
    };
    emailInput.addEventListener('input', validate);
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      showBtnImg(button, message.spinner, 'loading...');
      statusMessage.innerHTML = message.loading;
      postData(server, formData).then(res => {
        showBtnImg(button, message.ok, 'ok');
        statusMessage.innerHTML = message.contact;
        console.log(res);
      }).catch(error => {
        showBtnImg(button, message.fail, 'fail');
        statusMessage.innerHTML = message.failure;
        console.log(error.message);
      }).finally(() => {
        setTimeout(() => {
          clearInputs();
          button.innerHTML = initialButtonValue;
          statusMessage.innerHTML = initialStatusMessageValue;
        }, 3800);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = () => {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuBlock = menu.querySelector('.menu__block'),
    close = document.querySelector('.menu__close');
  let isOpen = false;
  const toggleMenu = () => {
    menu.classList.toggle('active');
    isOpen = !isOpen;
  };
  const closeMenu = () => {
    menu.classList.remove('active');
    isOpen = !isOpen;
  };
  document.addEventListener('click', e => {
    if (isOpen && !menuBlock.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
  hamburger.addEventListener('click', () => {
    toggleMenu();
  });
  close.addEventListener('click', () => {
    closeMenu();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/percentage.js":
/*!**************************************!*\
  !*** ./src/js/modules/percentage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fillPercentBar = () => {
  const counters = document.querySelectorAll('.skills__progress__item-percent'),
    lines = document.querySelectorAll('.skills__progress__item__bar-fill');
  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
};
/* harmony default export */ __webpack_exports__["default"] = (fillPercentBar);

/***/ }),

/***/ "./src/js/modules/scrollTop.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrollTop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrollTop = () => {
  const toTopbtn = document.querySelector('.toTop');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 400) {
      toTopbtn.classList.add('show');
    } else {
      toTopbtn.classList.remove('show');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (scrollTop);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map