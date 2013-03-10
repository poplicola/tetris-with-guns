ig.module('game.entities.tower_piece')
.requires('impact.entity')
.defines(function(){
	EntityTower_piece = ig.Entity.extend({
	    init: function(x, y, settings) {

			ig.game.spawnEntity(EntityBlock,ig.game.xRand,0);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand,20);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand,40);
			ig.game.spawnEntity(EntityBlock,ig.game.xRand,60);
			
			this.parent(x,y,settings);
	    }
	});
});