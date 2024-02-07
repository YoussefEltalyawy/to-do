/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/***/ ((module) => {

!function(t,e,n,r,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var a=n.AWAITING_WEB_COMPONENTS_POLYFILL=f();a.then(o);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(i).then((function(){a.isDone=!0,a.exec()})):c(s).then((function(){c(i).then((function(){a.isDone=!0,a.exec()}))}))}function f(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function c(t){var e=f(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var t,e;t=window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e),n.d(e,"BoxIconElement",(function(){return g}));var r,o,a,i,s=n(1),f=n.n(s),c=n(2),l=n.n(c),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=(o=(r=Object).getPrototypeOf||function(t){return t.__proto__},a=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},i="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),a(new r,n.prototype)},function(t){var e=o(t);return a(t,a((function(){return i(e,arguments,o(this).constructor)}),e))}),p=window,b={},y=document.createElement("template"),h=function(){return!!p.ShadyCSS};y.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+f.a+"\n"+l.a+'\n</style>\n<div id="icon"></div>';var g=d(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(y.content,!0)),h()&&p.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),u(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&b[n]||(b[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()}))),b[n]}},{key:"define",value:function(t){t=t||this.tagName,h()&&p.ShadyCSS.prepareTemplate(y,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),u(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){h()&&p.ShadyCSS.styleElement(this)}}]),e}());e.default=g,g.define()}])}, true?module.exports=e():0}));
//# sourceMappingURL=boxicons.js.map

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
class task {
  constructor(title, description, dueDate, priority, project, checked ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.checked = checked;
  }
}


/***/ }),

/***/ "./src/taskHandler.js":
/*!****************************!*\
  !*** ./src/taskHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleTasksAndProjects),
/* harmony export */   saveTasksDataInLocalStorage: () => (/* binding */ saveTasksDataInLocalStorage)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



const mainTasksContainer = document.querySelector(".main-tasks-container");
let tasksArr;
let projectsArr = [];
if (!getTasksDataInLocalStorage()) {
  tasksArr = [];
} else {
  tasksArr = JSON.parse(getTasksDataInLocalStorage());
  tasksArr.forEach(function (task) {
    const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskUi)(task);
    if (task.checked === true) {
      markCheckCircle(checkcircle, task, titleText, detailsBtn);
    }
    checkcircle.addEventListener("click", () => {
      markCheckCircle(checkcircle, task, titleText, detailsBtn);
    });
    detailsBtn.addEventListener("click", () => {
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createAndPopulateDetailsModal)(task);
    });
    deleteBtn.addEventListener("click", () => {
      handleDeleteTask(task, taskContainer);
    });
  });
}

function handleTasksAndProjects() {
  const {
    taskModal,
    titleH3,
    titleInput,
    descriptionH3,
    descriptionInput,
    dueDateH3,
    dueDateInput,
    priorityH3,
    highPriorityInput,
    highPriorityLabel,
    mediumPriorityInput,
    mediumPriorityLabel,
    lowPriorityInput,
    lowPriorityLabel,
    projectH3,
    projectInput,
    doneBtn,
  } = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskCreationEl)();

  if (!getProjectsDataInLocalStorage()) {
    projectsArr = [];
    projectHandler();
  } else {
    console.log("2");
    projectsArr = JSON.parse(getProjectsDataInLocalStorage());
    console.log(projectsArr)
    pullProjects();
  }

  function projectHandler() {
    const nav = document.querySelector(".nav");
    const inbox = document.querySelector(".inbox");
    const addProjectBtn = document.querySelector(".new-project-btn");
    const { projectInputContainer, projectNameInput, submitProjectBtn } =
      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createProjectCreationEl)();
    function handleProjectCreation() {
      nav.appendChild(projectInputContainer);
    }
    addProjectBtn.addEventListener("click", handleProjectCreation);
    submitProjectBtn.addEventListener("click", () => {
      const projectName = projectNameInput.value;
      const projectH3 = document.createElement("h3");
      projectH3.textContent = projectName;
      nav.removeChild(projectInputContainer);
      nav.appendChild(projectH3);
      projectsArr.push(projectName);
      saveProjectsDataInLocalStorage();
      projectNameInput.value = "";
      const newOption = document.createElement("option");
      newOption.textContent = projectName;
      projectInput.appendChild(newOption);
      projectH3.addEventListener("click", () => {
        mainTasksContainer.innerHTML = "";
        tasksArr.forEach((task) => {
          if (task.project === projectName) {
            const {
              checkcircle,
              titleText,
              detailsBtn,
              deleteBtn,
              taskContainer,
            } = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskUi)(task);
            if (task.checked === true) {
              markCheckCircle(checkcircle, task, titleText, detailsBtn);
            }
            checkcircle.addEventListener("click", () => {
              markCheckCircle(checkcircle, task, titleText, detailsBtn);
            });
            detailsBtn.addEventListener("click", () => {
              (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createAndPopulateDetailsModal)(task);
            });
            deleteBtn.addEventListener("click", () => {
              handleDeleteTask(task, taskContainer);
            });
          }
        });
      });
      inbox.addEventListener("click", () => {
        mainTasksContainer.innerHTML = "";
        tasksArr.forEach((task) => {
          const {
            checkcircle,
            titleText,
            detailsBtn,
            deleteBtn,
            taskContainer,
          } = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskUi)(task);
          if (task.checked === true) {
            markCheckCircle(checkcircle, task, titleText, detailsBtn);
          }
          checkcircle.addEventListener("click", () => {
            markCheckCircle(checkcircle, task, titleText, detailsBtn);
          });
          detailsBtn.addEventListener("click", () => {
            (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createAndPopulateDetailsModal)(task);
          });
          deleteBtn.addEventListener("click", () => {
            handleDeleteTask(task, taskContainer);
          });
        });
      });
    });
  }
  function pullProjects() {
    projectsArr.forEach((project) => {
      const nav = document.querySelector(".nav");
      const projectName = project;
      const projectH3 = document.createElement("h3");
      projectH3.textContent = projectName;
      nav.appendChild(projectH3);
      const newOption = document.createElement("option");
      newOption.textContent = projectName;
      projectInput.appendChild(newOption);
      projectH3.addEventListener("click", () => {
        mainTasksContainer.innerHTML = "";
        tasksArr.forEach((task) => {
          if (task.project === projectName) {
            const {
              checkcircle,
              titleText,
              detailsBtn,
              deleteBtn,
              taskContainer,
            } = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskUi)(task);
            if (task.checked === true) {
              markCheckCircle(checkcircle, task, titleText, detailsBtn);
            }
            checkcircle.addEventListener("click", () => {
              markCheckCircle(checkcircle, task, titleText, detailsBtn);
            });
            detailsBtn.addEventListener("click", () => {
              (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createAndPopulateDetailsModal)(task);
            });
            deleteBtn.addEventListener("click", () => {
              handleDeleteTask(task, taskContainer);
            });
          }
        });
      });
    });
    const inbox = document.querySelector(".inbox");
    inbox.addEventListener("click", () => {
      mainTasksContainer.innerHTML = "";
      tasksArr.forEach((task) => {
        const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
          (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskUi)(task);
        if (task.checked === true) {
          markCheckCircle(checkcircle, task, titleText, detailsBtn);
        }
        checkcircle.addEventListener("click", () => {
          markCheckCircle(checkcircle, task, titleText, detailsBtn);
        });
        detailsBtn.addEventListener("click", () => {
          (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createAndPopulateDetailsModal)(task);
        });
        deleteBtn.addEventListener("click", () => {
          handleDeleteTask(task, taskContainer);
        });
      });
    });
  }
  const addTaskBtn = document.querySelector(".add-task-btn");

  function handleAddTask() {
    taskModal.appendChild(titleH3);
    taskModal.appendChild(titleInput);
    taskModal.appendChild(descriptionH3);
    taskModal.appendChild(descriptionInput);
    taskModal.appendChild(dueDateH3);
    taskModal.appendChild(dueDateInput);
    taskModal.appendChild(priorityH3);
    taskModal.appendChild(highPriorityInput);
    taskModal.appendChild(highPriorityLabel);
    taskModal.appendChild(mediumPriorityInput);
    taskModal.appendChild(mediumPriorityLabel);
    taskModal.appendChild(lowPriorityInput);
    taskModal.appendChild(lowPriorityLabel);
    taskModal.appendChild(projectH3);
    taskModal.appendChild(projectInput);
    taskModal.appendChild(doneBtn);
    mainTasksContainer.appendChild(taskModal);
    taskModal.showModal();
  }
  addTaskBtn.addEventListener("click", handleAddTask);

  function createTaskFromInputs() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const project = projectInput.value;
    if (!title) {
      alert("Please enter a title for the task.");
    } else if (title) {
      if (document.querySelector('input[name="priority"]:checked') === null) {
        const priority = "None";
        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](
          title,
          description,
          dueDate,
          priority,
          project,
          false
        );
        tasksArr.push(task);
        saveTasksDataInLocalStorage();
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        projectInput.value = "";
        return task;
      } else {
        const selectedPriority = document.querySelector(
          'input[name="priority"]:checked'
        );
        const priority = selectedPriority.value;
        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](
          title,
          description,
          dueDate,
          priority,
          project,
          false
        );
        tasksArr.push(task);
        saveTasksDataInLocalStorage();
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        selectedPriority.checked = false;
        projectInput.value = "";
        return task;
      }
    }
  }
  function handleDoneBtn() {
    const task = createTaskFromInputs();
    taskModal.close();
    if (task) {
      const { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer } =
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createTaskUi)(task);

      checkcircle.addEventListener("click", () => {
        markCheckCircle(checkcircle, task, titleText, detailsBtn);
      });
      detailsBtn.addEventListener("click", () => {
        (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createAndPopulateDetailsModal)(task);
      });
      deleteBtn.addEventListener("click", () => {
        handleDeleteTask(task, taskContainer);
      });
    }
  }

  doneBtn.addEventListener("click", handleDoneBtn);
}
function markCheckCircle(checkcircle, task, titleText, detailsBtn) {
  checkcircle.setAttribute("name", "check-circle");
  checkcircle.setAttribute("color", "#808080");
  task.checked = true;
  titleText.classList.add("checked");
  detailsBtn.disabled = true;
  detailsBtn.classList.add("disabled");
  saveTasksDataInLocalStorage();
}

function handleDeleteTask(task, taskContainer) {
  mainTasksContainer.removeChild(taskContainer);
  const taskIndex = tasksArr.indexOf(task);
  tasksArr.splice(taskIndex, 1);
  saveTasksDataInLocalStorage();
}

function saveTasksDataInLocalStorage() {
  localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
}

function getTasksDataInLocalStorage() {
  return localStorage.getItem("tasksArr");
}
function saveProjectsDataInLocalStorage() {
  localStorage.setItem("projectsArr", JSON.stringify(projectsArr));
}
function getProjectsDataInLocalStorage() {
  return localStorage.getItem("projectsArr");
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAndPopulateDetailsModal: () => (/* binding */ createAndPopulateDetailsModal),
/* harmony export */   createProjectCreationEl: () => (/* binding */ createProjectCreationEl),
/* harmony export */   createTaskCreationEl: () => (/* binding */ createTaskCreationEl),
/* harmony export */   createTaskUi: () => (/* binding */ createTaskUi)
/* harmony export */ });
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boxicons */ "./node_modules/boxicons/dist/boxicons.js");
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_0__);

const mainTasksContainer = document.querySelector(".main-tasks-container");
function createTaskCreationEl() {
  const taskModal = document.createElement("dialog");
  taskModal.className = " task-modal";
  const modalH1 = document.createElement("h1");
  modalH1.textContent = "Add Task Details:";
  taskModal.appendChild(modalH1);

  const titleH3 = document.createElement("h3");
  titleH3.textContent = "Title:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("placeholder", "Enter Title");

  const descriptionH3 = document.createElement("h3");
  descriptionH3.textContent = "Description:";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("placeholder", "Enter Description");

  const dueDateH3 = document.createElement("h3");
  dueDateH3.textContent = "Due Date:";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.className = "due-date-input";

  const priorityH3 = document.createElement("h3");
  priorityH3.textContent = "Priority:";
  const highPriorityInput = document.createElement("input");
  highPriorityInput.type = "radio";
  highPriorityInput.id = "high-priority";
  highPriorityInput.name = "priority";
  highPriorityInput.value = "High";

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.textContent = "High";
  highPriorityLabel.setAttribute("for", "high-priority");

  const mediumPriorityInput = document.createElement("input");
  mediumPriorityInput.type = "radio";
  mediumPriorityInput.id = "medium-priority";
  mediumPriorityInput.name = "priority";
  mediumPriorityInput.value = "Medium";

  const mediumPriorityLabel = document.createElement("label");
  mediumPriorityLabel.textContent = "Medium";
  mediumPriorityLabel.setAttribute("for", "medium-priority");

  const lowPriorityInput = document.createElement("input");
  lowPriorityInput.type = "radio";
  lowPriorityInput.id = "low-priority";
  lowPriorityInput.name = "priority";
  lowPriorityInput.value = "Low";

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.textContent = "Low";
  lowPriorityLabel.setAttribute("for", "low-priority");

  const projectH3 = document.createElement("h3");
  projectH3.textContent = "Project: ";
  const projectInput = document.createElement("select");
  projectInput.name = "projects";
  projectInput.className = 'project-input'

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done"; // Set button text here
  doneBtn.className = "done-btn";

  return {
    taskModal,
    titleH3,
    titleInput,
    descriptionH3,
    descriptionInput,
    dueDateH3,
    dueDateInput,
    priorityH3,
    highPriorityInput,
    highPriorityLabel,
    mediumPriorityInput,
    mediumPriorityLabel,
    lowPriorityInput,
    lowPriorityLabel,
    projectH3,
    projectInput,
    doneBtn,
  };
}

function createTaskUi(task) {
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  const checkcircle = document.createElement("box-icon");
  checkcircle.setAttribute("name", "circle");
  checkcircle.className = "check-circle";
  const titleText = document.createElement("p");
  titleText.className = "title";
  titleText.textContent = task.title;
  const detailsBtn = document.createElement("button");
  detailsBtn.textContent = "Details";
  detailsBtn.className = "details-btn";
  const deleteBtn = document.createElement("box-icon");
  deleteBtn.setAttribute("name", "trash");
  deleteBtn.className = "delete-btn";
  taskContainer.appendChild(checkcircle);
  taskContainer.appendChild(titleText);
  taskContainer.appendChild(detailsBtn);
  taskContainer.appendChild(deleteBtn);
  mainTasksContainer.appendChild(taskContainer);
  taskContainer.addEventListener("mouseover", () => {
    deleteBtn.classList.add("visible");
  });
  taskContainer.addEventListener("mouseout", () => {
    deleteBtn.classList.remove("visible");
  });
  return { checkcircle, titleText, detailsBtn, deleteBtn, taskContainer };
}

function createAndPopulateDetailsModal(task) {
  const detailsModal = document.createElement("dialog");
  detailsModal.className = "details-modal";
  mainTasksContainer.appendChild(detailsModal);

  const header = document.createElement("h1");
  header.textContent = "Details:";
  detailsModal.appendChild(header);

  const titleSpan = document.createElement("span");
  titleSpan.textContent = "Title: ";

  const titleH2 = document.createElement("h2");
  titleH2.appendChild(titleSpan); // Append the span to the h2 element
  titleH2.appendChild(document.createTextNode(task.title)); // Append the task title
  detailsModal.appendChild(titleH2);

  if (task.description) {
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = "Description: ";

    const descriptionH2 = document.createElement("h2");
    descriptionH2.appendChild(descriptionSpan);
    descriptionH2.appendChild(document.createTextNode(task.description));
    detailsModal.appendChild(descriptionH2);
  } else {
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = "Description: ";

    const descriptionH2 = document.createElement("h2");
    descriptionH2.appendChild(descriptionSpan);
    descriptionH2.appendChild(document.createTextNode("None"));
    detailsModal.appendChild(descriptionH2);
  }

  if (task.dueDate) {
    const formattedDueDate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(task.dueDate));

    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = "Due Date: ";
    const dueDateH2 = document.createElement("h2");
    dueDateH2.appendChild(dueDateSpan);
    dueDateH2.appendChild(document.createTextNode(formattedDueDate));
    detailsModal.appendChild(dueDateH2);
  } else {
    const dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = "Due Date: ";
    const dueDateH2 = document.createElement("h2");
    dueDateH2.appendChild(dueDateSpan);
    dueDateH2.appendChild(document.createTextNode("None"));
    detailsModal.appendChild(dueDateH2);
  }

  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = "Priority: ";
  const priorityH2 = document.createElement("h2");
  priorityH2.appendChild(prioritySpan);
  priorityH2.appendChild(document.createTextNode(task.priority));
  detailsModal.appendChild(priorityH2);

  const projectSpan = document.createElement("span");
  projectSpan.textContent = "Project: "
  const projectH2 = document.createElement("h2");
  projectH2.appendChild(projectSpan);
  projectH2.appendChild(document.createTextNode(task.project));
  detailsModal.appendChild(projectH2);

  const closeModalBtn = document.createElement("box-icon");
  closeModalBtn.setAttribute("name", "x");
  closeModalBtn.className = "close-modal-btn";
  detailsModal.appendChild(closeModalBtn);
  detailsModal.showModal();
  closeModalBtn.addEventListener("click", () => {
    detailsModal.close();
  });
}
function createProjectCreationEl() {
  const projectInputContainer = document.createElement("div");
  projectInputContainer.className = "project-input-container";
  const projectNameInput = document.createElement("input");
  projectNameInput.className = "project-name-input";
  projectNameInput.placeholder = "Project Name...";
  const submitProjectBtn = document.createElement("box-icon");
  submitProjectBtn.setAttribute("name", "check");
  submitProjectBtn.setAttribute("color", "#ffff");
  submitProjectBtn.className = "submit-project-btn";
  projectInputContainer.appendChild(projectNameInput);
  projectInputContainer.appendChild(submitProjectBtn)
  return { projectInputContainer, projectNameInput, submitProjectBtn };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskHandler */ "./src/taskHandler.js");


// if (!localStorage.getItem('tasksArr')) {
//   saveTasksDataInLocalStorage();
// }
// else {
//   handleTasksAndProjects();
// }
(0,_taskHandler__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUNsTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDSTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBc0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvYm94aWNvbnMvZGlzdC9ib3hpY29ucy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSxuLHIsbyl7aWYoXCJjdXN0b21FbGVtZW50c1wiaW4gbilvKCk7ZWxzZXtpZihuLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMKXJldHVybiB2b2lkIG4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEwudGhlbihvKTt2YXIgYT1uLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMPWYoKTthLnRoZW4obyk7dmFyIGk9bi5XRUJfQ09NUE9ORU5UU19QT0xZRklMTHx8XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy93ZWJjb21wb25lbnRzanMvMi4wLjIvd2ViY29tcG9uZW50cy1idW5kbGUuanNcIixzPW4uRVM2X0NPUkVfUE9MWUZJTEx8fFwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvY29yZS1qcy8yLjUuMy9jb3JlLm1pbi5qc1wiO1wiUHJvbWlzZVwiaW4gbj9jKGkpLnRoZW4oKGZ1bmN0aW9uKCl7YS5pc0RvbmU9ITAsYS5leGVjKCl9KSk6YyhzKS50aGVuKChmdW5jdGlvbigpe2MoaSkudGhlbigoZnVuY3Rpb24oKXthLmlzRG9uZT0hMCxhLmV4ZWMoKX0pKX0pKX1mdW5jdGlvbiBmKCl7dmFyIHQ9W107cmV0dXJuIHQuaXNEb25lPSExLHQuZXhlYz1mdW5jdGlvbigpe3Quc3BsaWNlKDApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QoKX0pKX0sdC50aGVuPWZ1bmN0aW9uKGUpe3JldHVybiB0LmlzRG9uZT9lKCk6dC5wdXNoKGUpLHR9LHR9ZnVuY3Rpb24gYyh0KXt2YXIgZT1mKCksbj1yLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIG4udHlwZT1cInRleHQvamF2YXNjcmlwdFwiLG4ucmVhZHlTdGF0ZT9uLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe1wibG9hZGVkXCIhPW4ucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT1uLnJlYWR5U3RhdGV8fChuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGUuaXNEb25lPSEwLGUuZXhlYygpKX06bi5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmlzRG9uZT0hMCxlLmV4ZWMoKX0sbi5zcmM9dCxyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnRoZW49ZS50aGVuLG59fSgwLDAsd2luZG93LGRvY3VtZW50LChmdW5jdGlvbigpe3ZhciB0LGU7dD13aW5kb3csZT1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTUpfShbZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoKGZ1bmN0aW9uKGUpe3ZhciBuPWZ1bmN0aW9uKHQsZSl7dmFyIG4scj10WzFdfHxcIlwiLG89dFszXTtpZighbylyZXR1cm4gcjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgYT0obj1vLFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpK1wiICovXCIpLGk9by5zb3VyY2VzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK28uc291cmNlUm9vdCt0K1wiICovXCJ9KSk7cmV0dXJuW3JdLmNvbmNhdChpKS5jb25jYXQoW2FdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfShlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbitcIn1cIjpufSkpLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgcj17fSxvPTA7bzx0aGlzLmxlbmd0aDtvKyspe3ZhciBhPXRoaXNbb11bMF07XCJudW1iZXJcIj09dHlwZW9mIGEmJihyW2FdPSEwKX1mb3Iobz0wO288dC5sZW5ndGg7bysrKXt2YXIgaT10W29dO1wibnVtYmVyXCI9PXR5cGVvZiBpWzBdJiZyW2lbMF1dfHwobiYmIWlbMl0/aVsyXT1uOm4mJihpWzJdPVwiKFwiK2lbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksZS5wdXNoKGkpKX19LGV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKTt0LmV4cG9ydHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/cjpyLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpO3QuZXhwb3J0cz1cInN0cmluZ1wiPT10eXBlb2Ygcj9yOnIudG9TdHJpbmcoKX0sZnVuY3Rpb24odCxlLG4peyh0LmV4cG9ydHM9bigwKSghMSkpLnB1c2goW3QuaSxcIkAtd2Via2l0LWtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGJ1cnN0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9OTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJ1cnN0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9OTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2hpbmd7MCV7b3BhY2l0eToxfTQ1JXtvcGFjaXR5OjB9OTAle29wYWNpdHk6MX19QGtleWZyYW1lcyBmbGFzaGluZ3swJXtvcGFjaXR5OjF9NDUle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtbGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtcmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtcmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS11cHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLXVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1kb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLWRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0xMCUsMjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpfTQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtMTBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MTAlLDIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyl9MzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKX00MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5ieC1zcGluLC5ieC1zcGluLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZX0uYngtdGFkYSwuYngtdGFkYS1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjp0YWRhIDEuNXMgZWFzZSBpbmZpbml0ZTthbmltYXRpb246dGFkYSAxLjVzIGVhc2UgaW5maW5pdGV9LmJ4LWZsYXNoaW5nLC5ieC1mbGFzaGluZy1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmbGFzaGluZyAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246Zmxhc2hpbmcgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWJ1cnN0LC5ieC1idXJzdC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpidXJzdCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246YnVyc3QgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtdXAsLmJ4LWZhZGUtdXAtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS11cCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS11cCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1kb3duLC5ieC1mYWRlLWRvd24taG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1kb3duIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLWRvd24gMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtbGVmdCwuYngtZmFkZS1sZWZ0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtbGVmdCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1sZWZ0IDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLXJpZ2h0LC5ieC1mYWRlLXJpZ2h0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtcmlnaHQgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtcmlnaHQgMS41cyBpbmZpbml0ZSBsaW5lYXJ9XCIsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDApKCExKSkucHVzaChbdC5pLCcuYngtcm90YXRlLTkwe3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVwifS5ieC1yb3RhdGUtMTgwe3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcIn0uYngtcm90YXRlLTI3MHt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXCJ9LmJ4LWZsaXAtaG9yaXpvbnRhbHt0cmFuc2Zvcm06c2NhbGVYKC0xKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXCJ9LmJ4LWZsaXAtdmVydGljYWx7dHJhbnNmb3JtOnNjYWxlWSgtMSk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVwifScsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpLG4uZChlLFwiQm94SWNvbkVsZW1lbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZ30pKTt2YXIgcixvLGEsaSxzPW4oMSksZj1uLm4ocyksYz1uKDIpLGw9bi5uKGMpLG09XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihlLG4scil7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksciYmdChlLHIpLGV9fSgpLGQ9KG89KHI9T2JqZWN0KS5nZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffSxhPXIuc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0saT1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0P1widW5kZWZpbmVkXCI6bShSZWZsZWN0KSk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxlLG4pe3ZhciByLG89W251bGxdO3JldHVybiBvLnB1c2guYXBwbHkobyxlKSxyPXQuYmluZC5hcHBseSh0LG8pLGEobmV3IHIsbi5wcm90b3R5cGUpfSxmdW5jdGlvbih0KXt2YXIgZT1vKHQpO3JldHVybiBhKHQsYSgoZnVuY3Rpb24oKXtyZXR1cm4gaShlLGFyZ3VtZW50cyxvKHRoaXMpLmNvbnN0cnVjdG9yKX0pLGUpKX0pLHA9d2luZG93LGI9e30seT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksaD1mdW5jdGlvbigpe3JldHVybiEhcC5TaGFkeUNTU307eS5pbm5lckhUTUw9J1xcbjxzdHlsZT5cXG46aG9zdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaXRpYWw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbjpob3N0KFtzaXplPXhzXSkge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG59XFxuOmhvc3QoW3NpemU9c21dKSB7XFxuICAgIHdpZHRoOiAxLjU1cmVtO1xcbiAgICBoZWlnaHQ6IDEuNTVyZW07XFxufVxcbjpob3N0KFtzaXplPW1kXSkge1xcbiAgICB3aWR0aDogMi4yNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1sZ10pIHtcXG4gICAgd2lkdGg6IDMuMHJlbTtcXG4gICAgaGVpZ2h0OiAzLjByZW07XFxufVxcblxcbjpob3N0KFtzaXplXTpub3QoW3NpemU9XCJcIl0pOm5vdChbc2l6ZT14c10pOm5vdChbc2l6ZT1zbV0pOm5vdChbc2l6ZT1tZF0pOm5vdChbc2l6ZT1sZ10pKSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbjpob3N0KFtwdWxsPWxlZnRdKSAjaWNvbiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW0haW1wb3J0YW50O1xcbn1cXG46aG9zdChbcHVsbD1yaWdodF0pICNpY29uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tbGVmdDogLjNlbSFpbXBvcnRhbnQ7XFxufVxcbjpob3N0KFtib3JkZXI9c3F1YXJlXSkgI2ljb24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgYm9yZGVyOiAuMDdlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxufVxcbjpob3N0KFtib3JkZXI9Y2lyY2xlXSkgI2ljb24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgYm9yZGVyOiAuMDdlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jaWNvbixcXG5zdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNpY29uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59IFxcbicrZi5hK1wiXFxuXCIrbC5hKydcXG48L3N0eWxlPlxcbjxkaXYgaWQ9XCJpY29uXCI+PC9kaXY+Jzt2YXIgZz1kKGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpO3ZhciB0PWZ1bmN0aW9uKHQsZSl7aWYoIXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT90OmV9KHRoaXMsKGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpLmNhbGwodGhpcykpO3JldHVybiB0LiR1aT10LmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHQuJHVpLmFwcGVuZENoaWxkKHQub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKHkuY29udGVudCwhMCkpLGgoKSYmcC5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodCksdC5fc3RhdGU9eyRpY29uSG9sZGVyOnQuJHVpLmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKSx0eXBlOnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKX0sdH1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX0oZSxIVE1MRWxlbWVudCksdShlLG51bGwsW3trZXk6XCJnZXRJY29uU3ZnXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLmNkblVybCtcIi9yZWd1bGFyL2J4LVwiK3QrXCIuc3ZnXCI7cmV0dXJuXCJzb2xpZFwiPT09ZT9uPXRoaXMuY2RuVXJsK1wiL3NvbGlkL2J4cy1cIit0K1wiLnN2Z1wiOlwibG9nb1wiPT09ZSYmKG49dGhpcy5jZG5VcmwrXCIvbG9nb3MvYnhsLVwiK3QrXCIuc3ZnXCIpLG4mJmJbbl18fChiW25dPW5ldyBQcm9taXNlKChmdW5jdGlvbih0LGUpe3ZhciByPW5ldyBYTUxIdHRwUmVxdWVzdDtyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM8MjAwfHx0aGlzLnN0YXR1cz49MzAwP2UobmV3IEVycm9yKHRoaXMuc3RhdHVzK1wiIFwiK3RoaXMucmVzcG9uc2VUZXh0KSk6dCh0aGlzLnJlc3BvbnNlVGV4dCl9KSksci5vbmVycm9yPWUsci5vbmFib3J0PWUsci5vcGVuKFwiR0VUXCIsbiksci5zZW5kKCl9KSkpLGJbbl19fSx7a2V5OlwiZGVmaW5lXCIsdmFsdWU6ZnVuY3Rpb24odCl7dD10fHx0aGlzLnRhZ05hbWUsaCgpJiZwLlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZSh5LHQpLGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LHRoaXMpfX0se2tleTpcImNkblVybFwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiLy91bnBrZy5jb20vYm94aWNvbnNAMi4xLjQvc3ZnXCJ9fSx7a2V5OlwidGFnTmFtZVwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiYm94LWljb25cIn19LHtrZXk6XCJvYnNlcnZlZEF0dHJpYnV0ZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5bXCJ0eXBlXCIsXCJuYW1lXCIsXCJjb2xvclwiLFwic2l6ZVwiLFwicm90YXRlXCIsXCJmbGlwXCIsXCJhbmltYXRpb25cIixcImJvcmRlclwiLFwicHVsbFwiXX19XSksdShlLFt7a2V5OlwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPXRoaXMuX3N0YXRlLiRpY29uSG9sZGVyO3N3aXRjaCh0KXtjYXNlXCJ0eXBlXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLiRpY29uSG9sZGVyLnRleHRDb250ZW50PVwiXCIsci50eXBlJiYoci50eXBlPW51bGwpLHIudHlwZT0hbnx8XCJzb2xpZFwiIT09biYmXCJsb2dvXCIhPT1uP1wicmVndWxhclwiOm4sdm9pZCAwIT09ci5jdXJyZW50TmFtZSYmdC5jb25zdHJ1Y3Rvci5nZXRJY29uU3ZnKHIuY3VycmVudE5hbWUsci50eXBlKS50aGVuKChmdW5jdGlvbih0KXtyLnR5cGU9PT1uJiYoci4kaWNvbkhvbGRlci5pbm5lckhUTUw9dCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpY29uOiBcIityLmN1cnJlbnROYW1lK1wiXFxuXCIrdCl9KSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJuYW1lXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLmN1cnJlbnROYW1lPW4sci4kaWNvbkhvbGRlci50ZXh0Q29udGVudD1cIlwiLG4mJnZvaWQgMCE9PXIudHlwZSYmdC5jb25zdHJ1Y3Rvci5nZXRJY29uU3ZnKG4sci50eXBlKS50aGVuKChmdW5jdGlvbih0KXtyLmN1cnJlbnROYW1lPT09biYmKHIuJGljb25Ib2xkZXIuaW5uZXJIVE1MPXQpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaWNvbjogXCIrbitcIlxcblwiK3QpfSkpfSh0aGlzLDAsbik7YnJlYWs7Y2FzZVwiY29sb3JcIjpyLnN0eWxlLmZpbGw9bnx8XCJcIjticmVhaztjYXNlXCJzaXplXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLnNpemUmJihyLiRpY29uSG9sZGVyLnN0eWxlLndpZHRoPXIuJGljb25Ib2xkZXIuc3R5bGUuaGVpZ2h0PVwiXCIsci5zaXplPXIuc2l6ZVR5cGU9bnVsbCksbiYmIS9eKHhzfHNtfG1kfGxnKSQvLnRlc3Qoci5zaXplKSYmKHIuc2l6ZT1uLnRyaW0oKSxyLiRpY29uSG9sZGVyLnN0eWxlLndpZHRoPXIuJGljb25Ib2xkZXIuc3R5bGUuaGVpZ2h0PXIuc2l6ZSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJyb3RhdGVcIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1yb3RhdGUtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtcm90YXRlLVwiK24pO2JyZWFrO2Nhc2VcImZsaXBcIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1mbGlwLVwiK2UpLG4mJnIuY2xhc3NMaXN0LmFkZChcImJ4LWZsaXAtXCIrbik7YnJlYWs7Y2FzZVwiYW5pbWF0aW9uXCI6ZSYmci5jbGFzc0xpc3QucmVtb3ZlKFwiYngtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtXCIrbil9fX0se2tleTpcImNvbm5lY3RlZENhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXtoKCkmJnAuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpfX1dKSxlfSgpKTtlLmRlZmF1bHQ9ZyxnLmRlZmluZSgpfV0pfSxcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkJveEljb25FbGVtZW50PWUoKTp0LkJveEljb25FbGVtZW50PWUoKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJveGljb25zLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIGNoZWNrZWQgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVUYXNrQ3JlYXRpb25FbCxcclxuICBjcmVhdGVUYXNrVWksXHJcbiAgY3JlYXRlQW5kUG9wdWxhdGVEZXRhaWxzTW9kYWwsXHJcbiAgY3JlYXRlUHJvamVjdENyZWF0aW9uRWwsXHJcbn0gZnJvbSBcIi4vdWkuanNcIjtcclxuXHJcbmNvbnN0IG1haW5UYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10YXNrcy1jb250YWluZXJcIik7XHJcbmxldCB0YXNrc0FycjtcclxubGV0IHByb2plY3RzQXJyID0gW107XHJcbmlmICghZ2V0VGFza3NEYXRhSW5Mb2NhbFN0b3JhZ2UoKSkge1xyXG4gIHRhc2tzQXJyID0gW107XHJcbn0gZWxzZSB7XHJcbiAgdGFza3NBcnIgPSBKU09OLnBhcnNlKGdldFRhc2tzRGF0YUluTG9jYWxTdG9yYWdlKCkpO1xyXG4gIHRhc2tzQXJyLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIGNvbnN0IHsgY2hlY2tjaXJjbGUsIHRpdGxlVGV4dCwgZGV0YWlsc0J0biwgZGVsZXRlQnRuLCB0YXNrQ29udGFpbmVyIH0gPVxyXG4gICAgICBjcmVhdGVUYXNrVWkodGFzayk7XHJcbiAgICBpZiAodGFzay5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1hcmtDaGVja0NpcmNsZShjaGVja2NpcmNsZSwgdGFzaywgdGl0bGVUZXh0LCBkZXRhaWxzQnRuKTtcclxuICAgIH1cclxuICAgIGNoZWNrY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1hcmtDaGVja0NpcmNsZShjaGVja2NpcmNsZSwgdGFzaywgdGl0bGVUZXh0LCBkZXRhaWxzQnRuKTtcclxuICAgIH0pO1xyXG4gICAgZGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjcmVhdGVBbmRQb3B1bGF0ZURldGFpbHNNb2RhbCh0YXNrKTtcclxuICAgIH0pO1xyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGhhbmRsZURlbGV0ZVRhc2sodGFzaywgdGFza0NvbnRhaW5lcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlVGFza3NBbmRQcm9qZWN0cygpIHtcclxuICBjb25zdCB7XHJcbiAgICB0YXNrTW9kYWwsXHJcbiAgICB0aXRsZUgzLFxyXG4gICAgdGl0bGVJbnB1dCxcclxuICAgIGRlc2NyaXB0aW9uSDMsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LFxyXG4gICAgZHVlRGF0ZUgzLFxyXG4gICAgZHVlRGF0ZUlucHV0LFxyXG4gICAgcHJpb3JpdHlIMyxcclxuICAgIGhpZ2hQcmlvcml0eUlucHV0LFxyXG4gICAgaGlnaFByaW9yaXR5TGFiZWwsXHJcbiAgICBtZWRpdW1Qcmlvcml0eUlucHV0LFxyXG4gICAgbWVkaXVtUHJpb3JpdHlMYWJlbCxcclxuICAgIGxvd1ByaW9yaXR5SW5wdXQsXHJcbiAgICBsb3dQcmlvcml0eUxhYmVsLFxyXG4gICAgcHJvamVjdEgzLFxyXG4gICAgcHJvamVjdElucHV0LFxyXG4gICAgZG9uZUJ0bixcclxuICB9ID0gY3JlYXRlVGFza0NyZWF0aW9uRWwoKTtcclxuXHJcbiAgaWYgKCFnZXRQcm9qZWN0c0RhdGFJbkxvY2FsU3RvcmFnZSgpKSB7XHJcbiAgICBwcm9qZWN0c0FyciA9IFtdO1xyXG4gICAgcHJvamVjdEhhbmRsZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coXCIyXCIpO1xyXG4gICAgcHJvamVjdHNBcnIgPSBKU09OLnBhcnNlKGdldFByb2plY3RzRGF0YUluTG9jYWxTdG9yYWdlKCkpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnIpXHJcbiAgICBwdWxsUHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByb2plY3RIYW5kbGVyKCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idG5cIik7XHJcbiAgICBjb25zdCB7IHByb2plY3RJbnB1dENvbnRhaW5lciwgcHJvamVjdE5hbWVJbnB1dCwgc3VibWl0UHJvamVjdEJ0biB9ID1cclxuICAgICAgY3JlYXRlUHJvamVjdENyZWF0aW9uRWwoKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVByb2plY3RDcmVhdGlvbigpIHtcclxuICAgICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q3JlYXRpb24pO1xyXG4gICAgc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByb2plY3RIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgcHJvamVjdEgzLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgIG5hdi5yZW1vdmVDaGlsZChwcm9qZWN0SW5wdXRDb250YWluZXIpO1xyXG4gICAgICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdEgzKTtcclxuICAgICAgcHJvamVjdHNBcnIucHVzaChwcm9qZWN0TmFtZSk7XHJcbiAgICAgIHNhdmVQcm9qZWN0c0RhdGFJbkxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG4gICAgICBwcm9qZWN0SDMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtYWluVGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0YXNrc0Fyci5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgY2hlY2tjaXJjbGUsXHJcbiAgICAgICAgICAgICAgdGl0bGVUZXh0LFxyXG4gICAgICAgICAgICAgIGRldGFpbHNCdG4sXHJcbiAgICAgICAgICAgICAgZGVsZXRlQnRuLFxyXG4gICAgICAgICAgICAgIHRhc2tDb250YWluZXIsXHJcbiAgICAgICAgICAgIH0gPSBjcmVhdGVUYXNrVWkodGFzayk7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBtYXJrQ2hlY2tDaXJjbGUoY2hlY2tjaXJjbGUsIHRhc2ssIHRpdGxlVGV4dCwgZGV0YWlsc0J0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2tjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBtYXJrQ2hlY2tDaXJjbGUoY2hlY2tjaXJjbGUsIHRhc2ssIHRpdGxlVGV4dCwgZGV0YWlsc0J0bik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlQW5kUG9wdWxhdGVEZXRhaWxzTW9kYWwodGFzayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBoYW5kbGVEZWxldGVUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWFpblRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGFza3NBcnIuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjaGVja2NpcmNsZSxcclxuICAgICAgICAgICAgdGl0bGVUZXh0LFxyXG4gICAgICAgICAgICBkZXRhaWxzQnRuLFxyXG4gICAgICAgICAgICBkZWxldGVCdG4sXHJcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIsXHJcbiAgICAgICAgICB9ID0gY3JlYXRlVGFza1VpKHRhc2spO1xyXG4gICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBtYXJrQ2hlY2tDaXJjbGUoY2hlY2tjaXJjbGUsIHRhc2ssIHRpdGxlVGV4dCwgZGV0YWlsc0J0bik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGVja2NpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBtYXJrQ2hlY2tDaXJjbGUoY2hlY2tjaXJjbGUsIHRhc2ssIHRpdGxlVGV4dCwgZGV0YWlsc0J0bik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlQW5kUG9wdWxhdGVEZXRhaWxzTW9kYWwodGFzayk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGVUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHB1bGxQcm9qZWN0cygpIHtcclxuICAgIHByb2plY3RzQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdDtcclxuICAgICAgY29uc3QgcHJvamVjdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICBwcm9qZWN0SDMudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICAgICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3RIMyk7XHJcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuICAgICAgcHJvamVjdEgzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbWFpblRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGFza3NBcnIuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgIGNoZWNrY2lyY2xlLFxyXG4gICAgICAgICAgICAgIHRpdGxlVGV4dCxcclxuICAgICAgICAgICAgICBkZXRhaWxzQnRuLFxyXG4gICAgICAgICAgICAgIGRlbGV0ZUJ0bixcclxuICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLFxyXG4gICAgICAgICAgICB9ID0gY3JlYXRlVGFza1VpKHRhc2spO1xyXG4gICAgICAgICAgICBpZiAodGFzay5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgbWFya0NoZWNrQ2lyY2xlKGNoZWNrY2lyY2xlLCB0YXNrLCB0aXRsZVRleHQsIGRldGFpbHNCdG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWFya0NoZWNrQ2lyY2xlKGNoZWNrY2lyY2xlLCB0YXNrLCB0aXRsZVRleHQsIGRldGFpbHNCdG4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZUFuZFBvcHVsYXRlRGV0YWlsc01vZGFsKHRhc2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlVGFzayh0YXNrLCB0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XHJcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtYWluVGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGFza3NBcnIuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2hlY2tjaXJjbGUsIHRpdGxlVGV4dCwgZGV0YWlsc0J0biwgZGVsZXRlQnRuLCB0YXNrQ29udGFpbmVyIH0gPVxyXG4gICAgICAgICAgY3JlYXRlVGFza1VpKHRhc2spO1xyXG4gICAgICAgIGlmICh0YXNrLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIG1hcmtDaGVja0NpcmNsZShjaGVja2NpcmNsZSwgdGFzaywgdGl0bGVUZXh0LCBkZXRhaWxzQnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIG1hcmtDaGVja0NpcmNsZShjaGVja2NpcmNsZSwgdGFzaywgdGl0bGVUZXh0LCBkZXRhaWxzQnRuKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBjcmVhdGVBbmRQb3B1bGF0ZURldGFpbHNNb2RhbCh0YXNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGhhbmRsZURlbGV0ZVRhc2sodGFzaywgdGFza0NvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGFzaygpIHtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZCh0aXRsZUgzKTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkgzKTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChkdWVEYXRlSDMpO1xyXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlIMyk7XHJcbiAgICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5SW5wdXQpO1xyXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eUxhYmVsKTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eUlucHV0KTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eUxhYmVsKTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUlucHV0KTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eUxhYmVsKTtcclxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChwcm9qZWN0SDMpO1xyXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XHJcbiAgICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XHJcbiAgICBtYWluVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza01vZGFsKTtcclxuICAgIHRhc2tNb2RhbC5zaG93TW9kYWwoKTtcclxuICB9XHJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQWRkVGFzayk7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tSW5wdXRzKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdGl0bGUgZm9yIHRoZSB0YXNrLlwiKTtcclxuICAgIH0gZWxzZSBpZiAodGl0bGUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IFwiTm9uZVwiO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgICBwcm9qZWN0LFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRhc2tzQXJyLnB1c2godGFzayk7XHJcbiAgICAgICAgc2F2ZVRhc2tzRGF0YUluTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBzZWxlY3RlZFByaW9yaXR5LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgICBwcm9qZWN0LFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIHRhc2tzQXJyLnB1c2godGFzayk7XHJcbiAgICAgICAgc2F2ZVRhc2tzRGF0YUluTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBzZWxlY3RlZFByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0YXNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZURvbmVCdG4oKSB7XHJcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFza0Zyb21JbnB1dHMoKTtcclxuICAgIHRhc2tNb2RhbC5jbG9zZSgpO1xyXG4gICAgaWYgKHRhc2spIHtcclxuICAgICAgY29uc3QgeyBjaGVja2NpcmNsZSwgdGl0bGVUZXh0LCBkZXRhaWxzQnRuLCBkZWxldGVCdG4sIHRhc2tDb250YWluZXIgfSA9XHJcbiAgICAgICAgY3JlYXRlVGFza1VpKHRhc2spO1xyXG5cclxuICAgICAgY2hlY2tjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBtYXJrQ2hlY2tDaXJjbGUoY2hlY2tjaXJjbGUsIHRhc2ssIHRpdGxlVGV4dCwgZGV0YWlsc0J0bik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQW5kUG9wdWxhdGVEZXRhaWxzTW9kYWwodGFzayk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBoYW5kbGVEZWxldGVUYXNrKHRhc2ssIHRhc2tDb250YWluZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURvbmVCdG4pO1xyXG59XHJcbmZ1bmN0aW9uIG1hcmtDaGVja0NpcmNsZShjaGVja2NpcmNsZSwgdGFzaywgdGl0bGVUZXh0LCBkZXRhaWxzQnRuKSB7XHJcbiAgY2hlY2tjaXJjbGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrLWNpcmNsZVwiKTtcclxuICBjaGVja2NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcIiM4MDgwODBcIik7XHJcbiAgdGFzay5jaGVja2VkID0gdHJ1ZTtcclxuICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XHJcbiAgZGV0YWlsc0J0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgc2F2ZVRhc2tzRGF0YUluTG9jYWxTdG9yYWdlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRhc2sodGFzaywgdGFza0NvbnRhaW5lcikge1xyXG4gIG1haW5UYXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrc0Fyci5pbmRleE9mKHRhc2spO1xyXG4gIHRhc2tzQXJyLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xyXG4gIHNhdmVUYXNrc0RhdGFJbkxvY2FsU3RvcmFnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tzRGF0YUluTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NBcnJcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NBcnIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3NEYXRhSW5Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NBcnJcIik7XHJcbn1cclxuZnVuY3Rpb24gc2F2ZVByb2plY3RzRGF0YUluTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBcnJcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnIpKTtcclxufVxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0c0RhdGFJbkxvY2FsU3RvcmFnZSgpIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FyclwiKTtcclxufVxyXG4iLCJpbXBvcnQgXCJib3hpY29uc1wiO1xyXG5jb25zdCBtYWluVGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tdGFza3MtY29udGFpbmVyXCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza0NyZWF0aW9uRWwoKSB7XHJcbiAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcclxuICB0YXNrTW9kYWwuY2xhc3NOYW1lID0gXCIgdGFzay1tb2RhbFwiO1xyXG4gIGNvbnN0IG1vZGFsSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgbW9kYWxIMS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2sgRGV0YWlsczpcIjtcclxuICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIMSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgdGl0bGVIMy50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XHJcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgVGl0bGVcIik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgZGVzY3JpcHRpb25IMy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgRGVzY3JpcHRpb25cIik7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBkdWVEYXRlSDMudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSBcImR1ZS1kYXRlLWlucHV0XCI7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgcHJpb3JpdHlIMy50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgY29uc3QgaGlnaFByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaGlnaFByaW9yaXR5SW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICBoaWdoUHJpb3JpdHlJbnB1dC5pZCA9IFwiaGlnaC1wcmlvcml0eVwiO1xyXG4gIGhpZ2hQcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgaGlnaFByaW9yaXR5SW5wdXQudmFsdWUgPSBcIkhpZ2hcIjtcclxuXHJcbiAgY29uc3QgaGlnaFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgaGlnaFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICBoaWdoUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBtZWRpdW1Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIG1lZGl1bVByaW9yaXR5SW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICBtZWRpdW1Qcmlvcml0eUlucHV0LmlkID0gXCJtZWRpdW0tcHJpb3JpdHlcIjtcclxuICBtZWRpdW1Qcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgbWVkaXVtUHJpb3JpdHlJbnB1dC52YWx1ZSA9IFwiTWVkaXVtXCI7XHJcblxyXG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbWVkaXVtUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XHJcbiAgbWVkaXVtUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZWRpdW0tcHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IGxvd1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgbG93UHJpb3JpdHlJbnB1dC50eXBlID0gXCJyYWRpb1wiO1xyXG4gIGxvd1ByaW9yaXR5SW5wdXQuaWQgPSBcImxvdy1wcmlvcml0eVwiO1xyXG4gIGxvd1ByaW9yaXR5SW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcclxuICBsb3dQcmlvcml0eUlucHV0LnZhbHVlID0gXCJMb3dcIjtcclxuXHJcbiAgY29uc3QgbG93UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsb3dQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICBsb3dQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImxvdy1wcmlvcml0eVwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIHByb2plY3RIMy50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCI7XHJcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBwcm9qZWN0SW5wdXQubmFtZSA9IFwicHJvamVjdHNcIjtcclxuICBwcm9qZWN0SW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3QtaW5wdXQnXHJcblxyXG4gIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRvbmVCdG4udGV4dENvbnRlbnQgPSBcIkRvbmVcIjsgLy8gU2V0IGJ1dHRvbiB0ZXh0IGhlcmVcclxuICBkb25lQnRuLmNsYXNzTmFtZSA9IFwiZG9uZS1idG5cIjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRhc2tNb2RhbCxcclxuICAgIHRpdGxlSDMsXHJcbiAgICB0aXRsZUlucHV0LFxyXG4gICAgZGVzY3JpcHRpb25IMyxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXHJcbiAgICBkdWVEYXRlSDMsXHJcbiAgICBkdWVEYXRlSW5wdXQsXHJcbiAgICBwcmlvcml0eUgzLFxyXG4gICAgaGlnaFByaW9yaXR5SW5wdXQsXHJcbiAgICBoaWdoUHJpb3JpdHlMYWJlbCxcclxuICAgIG1lZGl1bVByaW9yaXR5SW5wdXQsXHJcbiAgICBtZWRpdW1Qcmlvcml0eUxhYmVsLFxyXG4gICAgbG93UHJpb3JpdHlJbnB1dCxcclxuICAgIGxvd1ByaW9yaXR5TGFiZWwsXHJcbiAgICBwcm9qZWN0SDMsXHJcbiAgICBwcm9qZWN0SW5wdXQsXHJcbiAgICBkb25lQnRuLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrVWkodGFzaykge1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YXNrLWNvbnRhaW5lclwiO1xyXG4gIGNvbnN0IGNoZWNrY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJveC1pY29uXCIpO1xyXG4gIGNoZWNrY2lyY2xlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaXJjbGVcIik7XHJcbiAgY2hlY2tjaXJjbGUuY2xhc3NOYW1lID0gXCJjaGVjay1jaXJjbGVcIjtcclxuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0aXRsZVRleHQuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xyXG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgY29uc3QgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGV0YWlsc0J0bi50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xyXG4gIGRldGFpbHNCdG4uY2xhc3NOYW1lID0gXCJkZXRhaWxzLWJ0blwiO1xyXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib3gtaWNvblwiKTtcclxuICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRyYXNoXCIpO1xyXG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZS1idG5cIjtcclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrY2lyY2xlKTtcclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XHJcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzQnRuKTtcclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgbWFpblRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG4gIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgfSk7XHJcbiAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xyXG4gIH0pO1xyXG4gIHJldHVybiB7IGNoZWNrY2lyY2xlLCB0aXRsZVRleHQsIGRldGFpbHNCdG4sIGRlbGV0ZUJ0biwgdGFza0NvbnRhaW5lciB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kUG9wdWxhdGVEZXRhaWxzTW9kYWwodGFzaykge1xyXG4gIGNvbnN0IGRldGFpbHNNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgZGV0YWlsc01vZGFsLmNsYXNzTmFtZSA9IFwiZGV0YWlscy1tb2RhbFwiO1xyXG4gIG1haW5UYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWwpO1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXRhaWxzOlwiO1xyXG4gIGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjtcclxuXHJcbiAgY29uc3QgdGl0bGVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB0aXRsZUgyLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7IC8vIEFwcGVuZCB0aGUgc3BhbiB0byB0aGUgaDIgZWxlbWVudFxyXG4gIHRpdGxlSDIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay50aXRsZSkpOyAvLyBBcHBlbmQgdGhlIHRhc2sgdGl0bGVcclxuICBkZXRhaWxzTW9kYWwuYXBwZW5kQ2hpbGQodGl0bGVIMik7XHJcblxyXG4gIGlmICh0YXNrLmRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGRlc2NyaXB0aW9uU3Bhbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBkZXNjcmlwdGlvbkgyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU3Bhbik7XHJcbiAgICBkZXNjcmlwdGlvbkgyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhc2suZGVzY3JpcHRpb24pKTtcclxuICAgIGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkgyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBkZXNjcmlwdGlvblNwYW4udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZGVzY3JpcHRpb25IMi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNwYW4pO1xyXG4gICAgZGVzY3JpcHRpb25IMi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5vbmVcIikpO1xyXG4gICAgZGV0YWlsc01vZGFsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSDIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRhc2suZHVlRGF0ZSkge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRHVlRGF0ZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgfSkuZm9ybWF0KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkpO1xyXG5cclxuICAgIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiO1xyXG4gICAgY29uc3QgZHVlRGF0ZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZHVlRGF0ZUgyLmFwcGVuZENoaWxkKGR1ZURhdGVTcGFuKTtcclxuICAgIGR1ZURhdGVIMi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmb3JtYXR0ZWREdWVEYXRlKSk7XHJcbiAgICBkZXRhaWxzTW9kYWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUgyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XHJcbiAgICBjb25zdCBkdWVEYXRlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBkdWVEYXRlSDIuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xyXG4gICAgZHVlRGF0ZUgyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTm9uZVwiKSk7XHJcbiAgICBkZXRhaWxzTW9kYWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUgyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHByaW9yaXR5U3Bhbi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xyXG4gIGNvbnN0IHByaW9yaXR5SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgcHJpb3JpdHlIMi5hcHBlbmRDaGlsZChwcmlvcml0eVNwYW4pO1xyXG4gIHByaW9yaXR5SDIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay5wcmlvcml0eSkpO1xyXG4gIGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0eUgyKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBwcm9qZWN0U3Bhbi50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCJcclxuICBjb25zdCBwcm9qZWN0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgcHJvamVjdEgyLmFwcGVuZENoaWxkKHByb2plY3RTcGFuKTtcclxuICBwcm9qZWN0SDIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay5wcm9qZWN0KSk7XHJcbiAgZGV0YWlsc01vZGFsLmFwcGVuZENoaWxkKHByb2plY3RIMik7XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm94LWljb25cIik7XHJcbiAgY2xvc2VNb2RhbEJ0bi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwieFwiKTtcclxuICBjbG9zZU1vZGFsQnRuLmNsYXNzTmFtZSA9IFwiY2xvc2UtbW9kYWwtYnRuXCI7XHJcbiAgZGV0YWlsc01vZGFsLmFwcGVuZENoaWxkKGNsb3NlTW9kYWxCdG4pO1xyXG4gIGRldGFpbHNNb2RhbC5zaG93TW9kYWwoKTtcclxuICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkZXRhaWxzTW9kYWwuY2xvc2UoKTtcclxuICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENyZWF0aW9uRWwoKSB7XHJcbiAgY29uc3QgcHJvamVjdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc05hbWUgPSBcInByb2plY3QtbmFtZS1pbnB1dFwiO1xyXG4gIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZS4uLlwiO1xyXG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm94LWljb25cIik7XHJcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2hlY2tcIik7XHJcbiAgc3VibWl0UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcIiNmZmZmXCIpO1xyXG4gIHN1Ym1pdFByb2plY3RCdG4uY2xhc3NOYW1lID0gXCJzdWJtaXQtcHJvamVjdC1idG5cIjtcclxuICBwcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XHJcbiAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3RCdG4pXHJcbiAgcmV0dXJuIHsgcHJvamVjdElucHV0Q29udGFpbmVyLCBwcm9qZWN0TmFtZUlucHV0LCBzdWJtaXRQcm9qZWN0QnRuIH07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhhbmRsZVRhc2tzQW5kUHJvamVjdHMgZnJvbSBcIi4vdGFza0hhbmRsZXJcIjtcclxuaW1wb3J0IHNhdmVUYXNrc0RhdGFJbkxvY2FsU3RvcmFnZSBmcm9tIFwiLi90YXNrSGFuZGxlclwiXHJcbi8vIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzQXJyJykpIHtcclxuLy8gICBzYXZlVGFza3NEYXRhSW5Mb2NhbFN0b3JhZ2UoKTtcclxuLy8gfVxyXG4vLyBlbHNlIHtcclxuLy8gICBoYW5kbGVUYXNrc0FuZFByb2plY3RzKCk7XHJcbi8vIH1cclxuaGFuZGxlVGFza3NBbmRQcm9qZWN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==