ig.module('game.entities.box_block')
.requires('impact.entity')
.defines(function(){
	EntityBox_block = ig.Entity.extend({
		
	    size: {x:40, y:40},
		offset: {x:0, y:0},
		pos: {x:ig.game.xRand,y:0},
		
		mover: 1,
		
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		
		animSheet: new ig.AnimationSheet('media/box_block.png',40,40),
		
	    init: function(x, y, settings) {
			
			this.addAnim('idle', 1, [0]);

			this.blockTimer = new ig.Timer();
			
			var settings = {
				'posX':this.pos.x,
				'posY':this.pos.y
			}

			ig.game.spawnEntity(EntityBlock,0,0,settings);
			ig.game.spawnEntity(EntityBlock,0,0);
			ig.game.spawnEntity(EntityBlock,0,0);
			ig.game.spawnEntity(EntityBlock,0,0);
			
			this.parent(x,y,settings);
	    },
		update: function(){
			if(this.blockTimer.delta()>=this.mover && !this.standing) {
				this.pos.y = this.pos.y+20;
				this.mover = this.mover+1;
			} else {
				//kill entity and spawn new entity
			}
			
			if( ig.input.pressed('left') ) {
				this.pos.x = this.pos.x-20;
			}
			else if( ig.input.pressed('right') ) {
				this.pos.x = this.pos.x+20;
			}
			else if(ig.input.pressed('down')) {
				this.pos.y = this.pos.y+20;
			}
		}
	});
});