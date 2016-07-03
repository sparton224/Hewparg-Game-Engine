/* =========================================================================================
	
	Script name : Hewparg Game Engine
	Script Creator : Jamie Nicholls
	Script Creator Email : jngaming92@gmail.com
	
	Copyright (C) Jamie Nicholls, Hewparg ( 2016 )

	staticEntity, Stores variables for a static entity, which is unable to move round the map.
	
	// Functions	
		update() - update function
		render(context) - allows the engine to render the texture in the correct place
		getX() - returns X variable
		getY() - returns Y variable
		getHeight() - return Height variable
		getWidth()  - return Width variable
		getCollidable() - return collide boolean
		   
========================================================================================= */

var staticEntity = function(texture, x, y, height = 32, width = 32, collide = false){
	
	var obj = this;
	
	this.options = {
		x : 0,
		y : 0,
		height : 32,
		width : 32,
		texture : null,
		collide : false
	};
	
	this.update = function(){                                                                                          // On update do this
	};
	
	this.render = function(context){                                                                                   // Render image to canvas
		if(obj.options.texture == null || obj.options.texture == undefined){ return null; }	                           // Error Handle
		context.drawImage(obj.options.texture, obj.options.x, obj.options.y, obj.options.width, obj.options.height);
	};
	
	this.getX = function(){                                                                                             // Returns X
		return obj.options.x;
	};
	
	this.getY = function(){                                                                                             // Return Y
		return obj.options.y;
	};
	
	this.getHeight = function(){                                                                                        // Return Height
		return obj.options.height;
	};
	
	this.getWidth = function(){                                                                                         // Return Width
		return obj.options.width;
	};
	
	this.getCollidable = function(){                                                                                    // Return boolean
		return obj.options.collide;
	};
	
	if(!texture){console.log("Failed to get texture"); return null;}
	if(!x){console.log("Failed to place X"); return null;}
	if(!y){console.log("Failed to place Y"); return null;}
	
	obj.options.texture = new Image();
	obj.options.texture.src = texture;
	obj.options.x = x;
	obj.options.y = y;
	obj.options.height = height;
	obj.options.width = width;
	obj.options.collide = collide;
};