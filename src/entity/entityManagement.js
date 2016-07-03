/* =========================================================================================
	
	Script name : Hewparg Game Engine
	Script Creator : Jamie Nicholls
	Script Creator Email : jngaming92@gmail.com
	
	Copyright (C) Jamie Nicholls, Hewparg ( 2016 )

	EntityManagement, Stores variables for a static entitys
	
	// Functions	
		
		ANNOTATIONS TO COME .....   
========================================================================================= */

var EntityManager = function(){
	
	var obj = this;
	
	this.staticEntitys = [];
	
	this.Entitys = [];
	
	this.Player = null;
	
	
	this.setPlayer = function(object){
		obj.Player = object;
	};
	
	this.addStaticEntity = function(object){
		obj.staticEntitys.push(object);
	};
	
	this.addEntity = function(object){
		obj.Entitys.push(object);
	};
	
	this.render = function(context){
		for(var i = 0; i < obj.staticEntitys.length; i++){
			obj.staticEntitys[i].render(context);
		}
		for(var i = 0; i < obj.Entitys.length; i++){
			obj.Entitys[i].render(context);
		}
		obj.Player.render(context);
	};
	
	this.update = function(){
		for(var i = 0; i < obj.staticEntitys.length; i++){
			obj.staticEntitys[i].update();
		}
		for(var i = 0; i < obj.Entitys.length; i++){
			obj.Entitys[i].update();
		}
		obj.Player.update();
	};
	
	this.getEntityList = function(){
		var list = [];
		list.push(obj.staticEntitys);
		list.push(obj.Entitys);
		return list;
	};
};