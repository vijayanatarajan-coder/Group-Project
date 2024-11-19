/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/scripts/footer.js':
      /*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFooter: () => (/* binding */ loadFooter)\n/* harmony export */ });\n// footer.js\nfunction loadFooter() {\n  const footer = document.getElementById("footer");\n  footer.innerHTML = `\n      <p>&copy; 2024 My Portfolio. All rights reserved.</p>\n    `;\n}\n\n\n//# sourceURL=webpack://group-project/./src/scripts/footer.js?'
        );

        /***/
      },

    /***/ './src/scripts/header.js':
      /*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHeader: () => (/* binding */ loadHeader)\n/* harmony export */ });\n// header.js\nfunction loadHeader() {\n  const header = document.getElementById("header");\n  header.innerHTML = `\n      <nav>\n        <h1>My Portfolio</h1>\n        <ul>\n          <li><a href="#about">About</a></li>\n          <li><a href="#projects">Projects</a></li>\n          <li><a href="#contact">Contact</a></li>\n        </ul>\n      </nav>\n    `;\n}\n\n\n//# sourceURL=webpack://group-project/./src/scripts/header.js?'
        );

        /***/
      },

    /***/ './src/scripts/index.js':
      /*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/scripts/header.js");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/scripts/footer.js");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./src/scripts/main.js");\n// index.js\n\n\n\n\n// Load modules\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();\n(0,_main_js__WEBPACK_IMPORTED_MODULE_2__.loadMainContent)();\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.loadFooter)();\n\n\n//# sourceURL=webpack://group-project/./src/scripts/index.js?'
        );

        /***/
      },

    /***/ './src/scripts/main.js':
      /*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMainContent: () => (/* binding */ loadMainContent)\n/* harmony export */ });\n// main.js\nfunction loadMainContent() {\n  const projects = [\n    {\n      title: "Project 1",\n      description: "A description of Project 1.",\n      link: "https://example.com/project1",\n    },\n    {\n      title: "Project 2",\n      description: "A description of Project 2.",\n      link: "https://example.com/project2",\n    },\n    {\n      title: "Project 3",\n      description: "A description of Project 3.",\n      link: "https://example.com/project3",\n    },\n    {\n      title: "Project 4",\n      description: "A description of Project 4.",\n      link: "https://example.com/project4",\n    },\n  ];\n\n  const main = document.getElementById("main");\n  main.innerHTML = `\n      <section id="projects">\n        <h2>My Projects</h2>\n        <div class="projects-container">\n          ${projects\n            .map(\n              (project) => `\n            <div class="project">\n              <h3>${project.title}</h3>\n              <p>${project.description}</p>\n              <a href="${project.link}" target="_blank">View Project</a>\n            </div>\n          `\n            )\n            .join("")}\n        </div>\n      </section>\n    `;\n}\n\n\n//# sourceURL=webpack://group-project/./src/scripts/main.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__(
    './src/scripts/index.js'
  );
  /******/
  /******/
})();
