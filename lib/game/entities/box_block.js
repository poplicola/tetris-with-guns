ig.module('game.entities.box_block')
.requires('game.entities.block')
.defines(function(){
	EntityBox_block = ig.Entity.extend({
		
	    size: {x:40, y:40},
		offset: {x:0, y:0},
		pos: {x:0, y:0},
		child_pos: {x:0, y:0},
		pos_settings: [
			{x:0,y:0},
			{x:0,y:20},
			{x:20,y:0},
			{x:20,y:20}
		],
		
		mover: 1,
		health: 10,
		entity_count: 4,
		
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		
		animSheet: new ig.AnimationSheet('media/box_block.png',40,40),
		
	    init: function(x, y, settings) {
			
			this.addAnim('idle', 1, [0]);

			this.blockTimer = new ig.Timer();
			
			for (var i=1;i<this.entity_count;i++) {
				ig.game.spawnEntity(EntityBlock,0,0,this.pos_settings[i]);
			}
			
			this.parent(x,y,settings);
	    },
		update: function(){
			
			if(this.blockTimer.delta()>=this.mover && this.pos.y<=620) {
				this.pos.y = this.pos.y+20;
				this.mover = ++this.mover;
			} else if (this.pos.y == 620) {
				//get resting coords for entity's children
				ig.game.childrenPos(this.child_pos.x,this.child_pos.y);
				//create a stationary object
				//kill the entity and its children
				//spawn new block
				//alert('Boom');
			}
			
			if( ig.input.pressed('left') && this.pos.y<=620 && this.pos.x>=20 ) {
				this.pos.x = this.pos.x-20;
			}
			else if( ig.input.pressed('right') && this.pos.y<=620 && this.pos.x<=860 ) {
				this.pos.x = this.pos.x+20;
			}
			else if( ig.input.pressed('down') && this.pos.y<=620 ) {
				this.pos.y = this.pos.y+20;
			}
		}
	});
});
