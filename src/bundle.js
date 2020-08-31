// var jQuery = require('jquery');
import jQuery from 'jquery';
import chroma from 'chroma-js';
import './style.css';
// var chroma = require('chroma-js')

function appendText() {
	var txt1 = "<p>Text.</p>";               // Create element with HTML 
	var txt2 = jQuery("<p></p>").text("Text.");   // Create with jQuery
	txt2.addClass('brutal'); 
	var txt3 = document.createElement("p");  // Create with DOM
	txt3.innerHTML = "Text.";
	jQuery("body").append(txt1, txt2, txt3);      // Append the new elements
}
console.log(chroma("red").hex())
appendText()