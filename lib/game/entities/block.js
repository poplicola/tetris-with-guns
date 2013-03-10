ig.module('game.entities.block')
.requires('impact.entity')
.defines(function(){
	EntityBlock = ig.Entity.extend({
	    size: {x:20, y:20},
		offset: {x:0, y:0},
		pos: {x:0,y:0},
		
		health: 10,
		
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.FIXED,
		
		animSheet: new ig.AnimationSheet('media/block.png',20,20),

	    init: function(x, y, settings) {
			this.addAnim('idle', 1, [0]);
			this.parent(x,y,settings);
	    },
		update: function(){
			var follow = ig.game.getEntitiesByType(EntityBox_block)[0];
			if (follow) {
				this.pos.x = follow.pos.x;
				this.pos.y = follow.pos.y;
			}
			
			this.parent();
		},
		draw:function(){
			this.parent();
		}
	});
});