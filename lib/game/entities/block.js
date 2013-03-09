// Create your own entity, subclassed from ig.Enitity
ig.module('game.entities.block')
.requires('impact.entity')
.defines(function(){
	EntityBlock = ig.Entity.extend({
	    size: {x:15, y:15},
		offset: {x:0, y:0},
		maxVel: {x:300, y:1000},
		health: 10,
		animSheet: new ig.AnimationSheet('media/block.png',15,15),

	    init: function(x, y, settings) {
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