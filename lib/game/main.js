ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug',
	
	'game.entities.block',
	'game.entities.box_block',
	'game.entities.j_block',
	'game.entities.l_block',
	'game.entities.t_block',
	'game.entities.tower_piece',
	'game.entities.zag_piece',
	'game.entities.zig_piece',
	'game.entities.trigger'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/font_normal.font.png' ),
	white_background: new ig.Image('media/white_background.png'),
	clearColor: null,
	
	finalPos: {x:0,y:0},
	xRand: (Math.round((Math.floor(Math.random()*(920))/20)))*20,
	blockRand: Math.floor(Math.random()*(7)),
	blockArray: ['EntityBox_block','EntityJ_block','EntityL_block','EntityT_block','EntityTower_piece','EntityZag_piece','EntityPolymathe'],
	
	init: function() {
		
		ig.input.bind(ig.KEY.A, 'left');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.S, 'down' );
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind(ig.KEY.D, 'right');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		
		//ig.game.spawnEntity(this.blockArray[this.blockRand],0,0);
		ig.game.spawnEntity(EntityBox_block,this.xRand,0);
		
	},
	
	update: function() {
		
		this.parent();
	},
	
	draw: function() {
		this.white_background.draw(0,0);
		this.parent();
		
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		//this.font.draw( 'Battle!', x, y, ig.Font.ALIGN.CENTER );
	}
});


Credits = ig.Game.extend({
	font_white: new ig.Font( 'media/font_white.font.png' ),
	credits: [
		'Proudly made in Chicago',
		'by Lunar Giant',
		'',
		'(but mostly by Jay Margalus)'
	],
		//selectSFX: new ig.Sound('media/audio/menuSelect.*'),
		init: function(){
			ig.input.bind(ig.KEY.SPACE, 'start');
			ig.input.bind(ig.KEY.MOUSE1, 'start' );
			this.creditsTimer = new ig.Timer();
		},
		update: function(){
			this.mousex = ig.input.mouse.x + ig.game.screen.x;
			this.mousey = ig.input.mouse.y + ig.game.screen.y;
			document.body.style.cursor = "default";
			if (ig.input.pressed('start')){
				ig.system.setGame(MyGame);
			}
			this.parent();
		},
		draw: function(){
			this.parent();
			
			var x1 = ig.system.width/2;
			var y1 = ig.system.height - 5;
			var y2 = ig.system.height - 50;
			var credit_counter = 0;
			var indent = 0;
			this.font_white.draw('Credits', x1, 5, ig.Font.ALIGN.CENTER);
			credit_counter = this.creditsTimer.delta()*7;
			for(i=0;i<this.credits.length;i++) {
				this.font_white.draw(this.credits[i], x1, y2+indent-credit_counter, ig.Font.ALIGN.CENTER);
				indent = indent + 30;
			}
			this.font_white.draw('Press Spacebar to Start', x1, y2+this.creditsTimer, ig.Font.ALIGN.CENTER);
		}
});


StartScreen = ig.Game.extend({
	font_white: new ig.Font( 'media/font_white.font.png' ),
	//selectSFX: new ig.Sound('media/audio/menuSelect.*'),
		init: function(){
			ig.input.bind(ig.KEY.SPACE, 'start');
			ig.input.bind(ig.KEY.MOUSE1, 'start' );
			ig.input.bind(ig.KEY.ENTER, 'credits');
		},
		update: function(){
			this.mousex = ig.input.mouse.x + ig.game.screen.x;
			this.mousey = ig.input.mouse.y + ig.game.screen.y;
			document.body.style.cursor = "default";
			if (ig.input.pressed('start')){
				ig.system.setGame(MyGame);
				//ig.game.selectSFX.play();
			}
			if (ig.input.pressed('credits')){
				ig.system.setGame(Credits);
				//ig.game.selectSFX.play();
			}
			this.parent();
		},
		draw: function(){
			this.parent();
			var x = ig.system.width/2;
			var y = ig.system.height - 30;
			var y2 = 100;
			this.font_white.draw('Tetris with Guns!', x, y2, ig.Font.ALIGN.CENTER);
		}
});


ig.main( '#canvas', MyGame, 60, 920, 680, 1 );

});
