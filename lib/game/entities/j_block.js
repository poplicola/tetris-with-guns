ig.module('game.entities.j_block')
.requires('impact.entity')
.defines(function(){
	EntityJ_block = ig.Entity.extend({
	    init: function(x, y, settings) {

			ig.game.spawnEntity(EntityBlock,ig.game.xRand,0);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand,20);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand,40);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand-20,40);
			
			this.parent(x,y,settings);
	    }
	});
});