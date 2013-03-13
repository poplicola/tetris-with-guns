ig.module('game.entities.box_block')
.requires('impact.entity')
.defines(function(){
	EntityBox_block = ig.Entity.extend({
		
	    size: {x:40, y:40},
		offset: {x:0, y:0},
		pos: {x:0,y:0},
		
		mover: 1,
		health: 10,
		
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		
		animSheet: new ig.AnimationSheet('media/box_block.png',40,40),
		
	    init: function(x, y, settings) {
			
			this.addAnim('idle', 1, [0]);

			this.blockTimer = new ig.Timer();
			
			var settings1 = {
				shiftX:0, shiftY:0
			}
			
			var settings2 = {
				shiftX:0, shiftY:20
			}
			
			var settings3 = {
				shiftX:20, shiftY:0
			}
			
			var settings4 = {
				shiftX:20, shiftY:20
			}

			ig.game.spawnEntity(EntityBlock,0,0,settings1);
			ig.game.spawnEntity(EntityBlock,0,0,settings2);
			ig.game.spawnEntity(EntityBlock,0,0,settings3);
			ig.game.spawnEntity(EntityBlock,0,0,settings4);
			
			this.parent(x,y,settings);
	    },
		update: function(){
			
			if(this.blockTimer.delta()>=this.mover && this.pos.y<=620) {
				this.pos.y = this.pos.y+20;
				this.mover = ++this.mover;
			} else {
				ig.game.finalPos.x = this.pos.x;
				ig.game.fianlPos.y = this.pos.y;
				//create a stationary object
				//kill the entity and its children
				//spawn new block
				//alert('Boom');
			}
			
			if( ig.input.pressed('left') && this.pos.y<=620 ) {
				this.pos.x = this.pos.x-20;
			}
			else if( ig.input.pressed('right') && this.pos.y<=620 ) {
				this.pos.x = this.pos.x+20;
			}
			else if( ig.input.pressed('down') && this.pos.y<=620 ) {
				this.pos.y = this.pos.y+20;
			}
		}
	});
});