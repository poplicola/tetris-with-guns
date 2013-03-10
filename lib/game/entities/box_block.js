ig.module('game.entities.box_block')
.requires('impact.entity')
.defines(function(){
	EntityBox_block = ig.Entity.extend({
	    init: function(x, y, settings) {

			ig.game.spawnEntity(EntityBlock,ig.game.xRand,0);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand+20,20);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand,20);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand+20,0);
			
			this.parent(x,y,settings);
	    }
	});
});