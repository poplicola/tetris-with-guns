ig.module('game.entities.zig_piece')
.requires('impact.entity')
.defines(function(){
	EntityZig_piece = ig.Entity.extend({
	    init: function(x, y, settings) {

			ig.game.spawnEntity(EntityBlock,ig.game.xRand,0);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand-20,0);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand-20,-20);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand-40,-40);
			
			this.parent(x,y,settings);
	    }
	});
});