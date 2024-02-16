import forms from "./modules/forms";
import hamburger from "./modules/hamburger";
import fillPercentBar from "./modules/percentage";
import scrollTop from "./modules/scrollTop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    hamburger()
    scrollTop();
    fillPercentBar();
    forms();
});
