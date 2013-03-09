ig.module('game.entities.box_block')
.requires('impact.entity')
.defines(function(){
	EntityBox_block = ig.Entity.extend({
	    size: {x:20, y:20},
		offset: {x:0, y:0},
		vel: {x:0,y:0},
		maxVel: {x:300, y:1000},
		gravityFactor: 0,
		travelVelocity: 10,
		
		health: 10,
		
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.FIXED,

	    init: function(x, y, settings) {

			ig.game.spawnEntity(EntityBlock,0,0);
			ig.game.spawnEntity(EntityBlock,20,20);
			ig.game.spawnEntity(EntityBlock,0,20);
			ig.game.spawnEntity(EntityBlock,20,0);
			
			this.parent(x,y,settings);
	    },
		update: function(){
			this.vel.y=10;
			this.parent();
		},
		draw:function(){
			this.parent();
		}
	});
});