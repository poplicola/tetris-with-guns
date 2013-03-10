ig.module('game.entities.block')
.requires('impact.entity')
.defines(function(){
	EntityBlock = ig.Entity.extend({
	    size: {x:20, y:20},
		offset: {x:0, y:0},
		
		vel: {x:0,y:0},
		maxVel: {x: 100, y: 200},
		friction: {x: 600, y: 0},
		gravityFactor: 2,
		health: 10,
		
		flip: false,
		accelGround: 400,
		accelAir: 200,
		jump: 200,
		
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.FIXED,
		
		animSheet: new ig.AnimationSheet('media/block.png',20,20),

	    init: function(x, y, settings) {
			this.addAnim('idle', 1, [0]);
			this.parent(x,y,settings);
	    },
		update: function(){
			
			var accel = this.standing ? this.accelGround : this.accelAir;
			
			if( ig.input.state('left') ) {
				this.accel.x = -accel;
			}
			else if( ig.input.state('right') ) {
				this.accel.x = accel;
			}
			else if(ig.input.state('down')) {
				this.accel.y = accel;
			}
			else {
				this.accel.x = 0;
				this.accel.y = 0;
			}
			
			this.parent();
		},
		draw:function(){
			this.parent();
		}
	});
});