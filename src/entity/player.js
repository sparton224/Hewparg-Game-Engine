/* =========================================================================================
	
	Script name : Hewparg Game Engine
	Script Creator : Jamie Nicholls
	Script Creator Email : jngaming92@gmail.com
	
	Copyright (C) Jamie Nicholls, Hewparg ( 2016 )

	Player Class, Keeps all variables for the player
	Handles player movements
	and other play events.
	
	// Functions	
		update() // Ticks
		render() // Draws to screen
		
		moveX()  // Moves player if triggered
		moveY()  // Moves player if triggered
		
		getX()   // Returns Player x
		getY()   // Returns Player y
		
		setWalking() // Changes player speed to walking
		setRunning() // Changes player speed to running
		
		setTexture() // Sets the player image to the player
		
		intersect() // Check Player in not colliding with other entities.
========================================================================================= */


var Player = function(){
	var obj = this;
	
	this.options = {                                                                                                   // Default player options
		x : 0,
		y : 0,
		width : 32,
		height : 32,
		texture : null,
		speed : {
			walking : 2,
			running : 4
		},
		currentSpeed : 2
	};
	
	this.render = function(context){                                                                                    // Add this function to the render method in engine
		if(obj.options.texture === null){                                                                               // Render Player to Screen in correct location
			return console.log("Player x : " + obj.options.x + " / y : " + obj.options.y);
		}
		context.drawImage(obj.options.texture, obj.options.x, obj.options.y, obj.options.width, obj.options.height);
	};
	
	this.update = function(){                                                                                           // Add this function to the update method in engine
	};                                                                                                                  // Update player on each update / tick

	this.moveX = function(offsetX){                                                                                     // Moves player East or West 
		if(offsetX > 0){
			obj.options.x += obj.options.currentSpeed;
		}else if(offsetX < 0){
			obj.options.x -= obj.options.currentSpeed;
		}
	};
	
	this.moveY = function(offsetY){                                                                                      // Moves player North or South
		if(offsetY > 0){
			obj.options.y += obj.options.currentSpeed;
		}else if(offsetY < 0){
			obj.options.y -= obj.options.currentSpeed;
		}
	};
	
	
	this.getX = function(){                                                                                               // Returns player X
		return obj.options.x;
	};
	
	this.getY = function(){                                                                                               // Returns player Y
		return obj.options.y;
	};
	
	this.getCurrentSpeed = function(){
		return obj.options.currentSpeed;
	};
	
	this.setWalking = function(){                                                                                         // Changes player speed to walking
		obj.options.currentSpeed = obj.options.speed.walking;
	};
	
	this.setRunning = function(){                                                                                         // Changes player speed to running
		obj.options.currentSpeed = obj.options.speed.running;
	};
	
	this.setTexture = function(src){                                                                                      // Sets player texture
		obj.options.texture = new Image();                                                                                // Creates new image variable
		obj.options.texture.src = src;                                                                                    // Loads image
	};
	
	this.intersect = function(entity, offsetX, offsetY){
		var r1 = {
			right : (obj.options.x + obj.options.width + offsetX),
			left : obj.options.x + offsetX,
			top : obj.options.y + offsetY,
			bottom : (obj.options.y + obj.options.height + offsetY)
		};
		for(var i = 0; i < entity.length; i++){
			for(var x = 0; x < entity[i].length; x++){
				var r2 = {
					right : ( entity[i][x].getX() + entity[i][x].getWidth() ),
					left : entity[i][x].getX(),
					top : entity[i][x].getY(),
					bottom : ( entity[i][x].getY() + entity[i][x].getHeight() )
				};
				if(!(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top)){
					return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
				}
			}
		}
		return false;
	};
};