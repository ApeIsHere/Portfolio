import "../scss/style.scss";

import forms from "./modules/forms";
import hamburger from "./modules/hamburger";
import scrollTop from "./modules/scrollTop";
import contacts from "./modules/contacts";
// import validateEmail from "./modules/validateEmail";s

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  hamburger();
  scrollTop();
  forms();
  contacts();
});
