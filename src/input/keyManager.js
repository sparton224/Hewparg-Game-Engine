/* =========================================================================================
	
	Script name : Hewparg Game Engine
	Script Creator : Jamie Nicholls
	Script Creator Email : jngaming92@gmail.com
	
	Copyright (C) Jamie Nicholls, Hewparg ( 2016 )

	KeyManager, Stores what keys have be pressed, and returns them false if released.
	
	// Functions	
		getKey(KeyCode) // returns true or false
		   
========================================================================================= */

var KeyManager = function(){
	
	var obj = this;
	
	this.keys = [];                                                                      // Key Storage
	
	this.getKey = function(keyCode){                                                     // Return true or false, True if key is pressed
		if(obj.keys[keyCode] == undefined || obj.keys[keyCode] == null){                 // Stops errors from occuring
			return false;
		}
		return obj.keys[keyCode];
	};
	
	document.addEventListener("keydown", function(evt){                                  // Add listening event to the document
		obj.keys[evt.keyCode] = true;
	});
	
	document.addEventListener("keyup", function(evt){                                    // Add listening event to the document
		obj.keys[evt.keyCode] = false;
	});
	
};