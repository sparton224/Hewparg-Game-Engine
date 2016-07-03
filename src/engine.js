/* =========================================================================================
	
	Script name : Hewparg Game Engine
	Script Creator : Jamie Nicholls
	Script Creator Email : jngaming92@gmail.com
	
	Copyright (C) Jamie Nicholls, Hewparg ( 2016 )

	Engine is designed to store and hold infomation based on the game it is running,
	it will handle the Updates ( ticks ) and rendering on to the Canvas.
	
	// Functions
		createCanvas() // Creates canvas
	
		update() // Ticks
		render() // Draws to screen
		addUpdateFunction() // Add a new item to tick
		removeUpdateFunction() // Remove tick item based on id
		addRenderFunction() // Add's object to be rendered and what layer to render it on
		removeRenderFunction() // Remove render object based on id
		
		
		start(FPS) // Creates interval to update game. with required FPS
		stop()     // Stop the interval timer
		
		clear()    // Clears the screen should never be called apart from in the core update
========================================================================================= */


var Engine = function(canvasOptions){
	
	var obj = this;
	
	this.canvasOptions = { height : 720, width : 1280,	display : "block" };	// Default canvas options
	
	this.canvas = null;															// Canvas object handler
	this.context = null;														// Canvas Context Handler
	
	this.createCanvas = function(){												// Create the canvas element and stores in memory
		var key;
		var data = document.createElement("canvas");
		for(key in obj.canvasOptions){
			if(key === "height"){												// Setting height and width as a attribute
				data.height = obj.canvasOptions[key];							// NOT IN STYLE
			}else if(key === "width"){											// This stops scaling issues;
				data.width = obj.canvasOptions[key];
			}else{
				data.style[key] = obj.canvasOptions[key];
			}
		}
		
		obj.canvas = data;
		obj.context = data.getContext("2d");
		document.body.appendChild(data);										// Draws Canvas to body of document
	};
	
	this.fullScreen = function(){
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var h = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
		obj.canvas.height = parseInt(h) + "px";
		obj.canvas.width = parseInt(w) + "px";
		
		window.addEventListener("resize", function(){
			var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			var h = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
			obj.canvas.height = parseInt(h) + "px";
			obj.canvas.width = parseInt(w) + "px";
		});
	}
	
	
	this.updateFunctions = {};													// Storage for update functions
	
	this.update = function(){													// Run's through all update function ( Entities )
		var key;
		for(key in obj.updateFunctions){
			obj.updateFunctions[key]();
		}
	};
	
	this.addUpdateFunction = function(name, callback){							// Add's Update Functions
		obj.updateFunctions[name] = callback;									// If object is going to be removed make unique id
	};
	
	this.removeUpdateFunction = function(name){									// Removes Update Functions useing unique id
		delete obj.updateFunctions[name];
	};
	
	this.renderFunctions = {};													// Storage for render functions
	
	this.render = function(){													// Run's through all render functions while passing the 2d context
		var key;																// ( World, Entities, Other Images )
		for(key in obj.renderFunctions){
			obj.renderFunctions[key](obj.context);
		}
	};
	
	this.addRenderFunction = function(name, callback){							// Add's render function
		obj.renderFunctions[name] = callback;									// If object is gong to be removed make unique id
	};
	
	this.removeRenderFunction = function(name){									// Removes render function using unique id
		delete obj.renderFunctions[name];
	};
	
	this.clear = function(){                                                    // Clears Canvas Screen to stop texture blur
		obj.context.clearRect(0, 0, obj.canvas.width, obj.canvas.height);
		console.log("Canvas Cleared");
	};
	
	this.intervalHandler = null;                                                // Timer Handler
	
	this.start = function(FPS){                                                 // Starts game timer
		obj.intervalHandler = setInterval(function(){
			obj.clear();
			obj.render();
			obj.update();
		}, 1000 / FPS);
	};
	
	this.stop = function(){                                                     // Stops game timer
		delete obj.intervalHandler;
	};
	
	
	if(typeof canvasOptions === "object"){										// Stores personal style options for canvas
		var key;
		for(key in canvasOptions){
			obj.canvasOptions[key] = canvasOptions[key];
		}
	}
	obj.createCanvas();															// Run's Constructor
};