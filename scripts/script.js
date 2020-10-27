/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Copyleft 2016-2019 */

// globale declaraties:
// eerst declareren we variabelen voor alle elementen in de HTML die een rol spelen in dit script

var menuIcon = document.querySelector('.hamburger-menu');
var navbar = document.querySelector('.navbar');

function openMenu () {
        navbar.classList.toggle('change');
}

menuIcon.addEventListener('click', openMenu);