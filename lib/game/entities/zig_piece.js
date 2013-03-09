ig.module('game.entities.zig_piece')
.requires('impact.entity')
.defines(function(){
	EntityZig_piece = ig.Entity.extend({
	    size: {x:20, y:20},
		offset: {x:0, y:0},
		maxVel: {x:300, y:1000},
		
		health: 10,
		
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.FIXED,
		
		animSheet: new ig.AnimationSheet('media/block.png',20,20),

	    init: function(x, y, settings) {
			this.addAnim('idle', 1, [0]);
			this.parent(x,y,settings);
	    },
		update: function(){
			this.parent();
		},
		draw:function(){
			this.parent();
		}
	});
});