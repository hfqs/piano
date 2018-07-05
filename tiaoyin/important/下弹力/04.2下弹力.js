(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"04.2下弹力_atlas_P_", frames: [[0,0,1768,923],[983,925,24,24],[0,925,981,588]]}
];


// symbols:



(lib.形状1拷贝61 = function() {
	this.spriteSheet = ss["04.2下弹力_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.point = function() {
	this.spriteSheet = ss["04.2下弹力_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.跳音知识点04下弹力 = function() {
	this.spriteSheet = ss["04.2下弹力_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.point();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.point_1, new cjs.Rectangle(0,0,24,24), null);


(lib.BGtitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.BGtitle, null, null);


(lib.播放_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.播放_1, null, null);


(lib.content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.content, null, null);


(lib.形状1拷贝61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.形状1拷贝61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.形状1拷贝61_1, new cjs.Rectangle(0,0,1768,923), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-106.6,-32.2).lineTo(106.6,-32.2).curveTo(119.3,-32.2,128.3,-23.2).curveTo(137.3,-14.2,137.3,-1.4).lineTo(137.3,1.5).curveTo(137.3,14.3,128.3,23.2).curveTo(119.3,32.2,106.6,32.2).lineTo(-106.6,32.2).curveTo(-119.3,32.2,-128.3,23.2).curveTo(-137.3,14.2,-137.3,1.5).lineTo(-137.3,-1.4).curveTo(-137.3,-14.2,-128.3,-23.2).curveTo(-119.3,-32.2,-106.6,-32.2).closePath();
	this.shape.setTransform(30,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E8A02B").beginStroke().moveTo(-106.6,32.2).curveTo(-119.4,32.2,-128.3,23.2).curveTo(-137.4,14.2,-137.3,1.5).lineTo(-137.3,-1.4).curveTo(-137.4,-14.2,-128.3,-23.2).curveTo(-119.4,-32.2,-106.6,-32.2).lineTo(106.5,-32.2).curveTo(119.2,-32.2,128.3,-23.2).curveTo(137.3,-14.2,137.3,-1.4).lineTo(137.3,1.5).curveTo(137.3,14.3,128.3,23.2).curveTo(119.3,32.2,106.5,32.2).closePath();
	this.shape_1.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-108.3,-33.2,276.7,66.5), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.5,12.8).lineTo(3.1,11.9).lineTo(4.8,12).lineTo(6.2,12).lineTo(7,11.9).lineTo(7.6,11.8).lineTo(7.7,11.4).lineTo(7.7,9.4).lineTo(-7.4,9.4).lineTo(-7.4,13.7).lineTo(-9.6,13.7).lineTo(-9.6,1).lineTo(9.9,1).lineTo(9.9,11.4).curveTo(10,12.3,9.7,12.7).curveTo(9.4,13.2,8.7,13.4).curveTo(8,13.7,6.8,13.7).lineTo(3.8,13.7).lineTo(3.5,12.8).closePath().moveTo(-7.4,7.8).lineTo(7.7,7.8).lineTo(7.7,5.9).lineTo(-7.4,5.9).closePath().moveTo(-7.4,4.4).lineTo(7.7,4.4).lineTo(7.7,2.6).lineTo(-7.4,2.6).closePath().moveTo(5.7,0.2).lineTo(5.7,-2.4).lineTo(0.5,-2.4).lineTo(0.5,-3.9).lineTo(5.7,-3.9).lineTo(5.7,-5.8).lineTo(-0.2,-5.8).lineTo(-0.2,-7.4).lineTo(3.4,-7.4).lineTo(3,-8.4).lineTo(2.4,-9.5).lineTo(4,-9.8).curveTo(4.4,-9.3,4.7,-8.6).lineTo(5.2,-7.4).lineTo(8.1,-7.4).lineTo(8.8,-8.6).lineTo(9.3,-9.8).lineTo(11.1,-9.4).lineTo(10.5,-8.3).lineTo(10,-7.4).lineTo(13.8,-7.4).lineTo(13.8,-5.8).lineTo(7.8,-5.8).lineTo(7.8,-3.9).lineTo(12.9,-3.9).lineTo(12.9,-2.4).lineTo(7.8,-2.4).lineTo(7.8,0.2).closePath().moveTo(-10.1,-0.4).lineTo(-10.1,-4.8).curveTo(-10.4,-3.6,-10.9,-2.5).curveTo(-11.5,-1.4,-12.2,-0.4).lineTo(-12.9,-1.1).lineTo(-13.8,-1.7).curveTo(-12.8,-2.9,-12.3,-4.2).curveTo(-11.9,-5.6,-11.7,-6.9).curveTo(-11.5,-8.2,-11.6,-9.3).lineTo(-11.6,-12.4).lineTo(-1,-12.4).lineTo(-1,-7.4).lineTo(-9.7,-7.4).lineTo(-9.8,-6.7).lineTo(-9.9,-5.9).lineTo(-0.7,-5.9).lineTo(-0.7,-0.4).closePath().moveTo(-8.3,-1.9).lineTo(-2.7,-1.9).lineTo(-2.7,-4.5).lineTo(-8.3,-4.5).closePath().moveTo(-9.6,-9.3).lineTo(-9.6,-8.9).lineTo(-2.9,-8.9).lineTo(-2.9,-11).lineTo(-9.6,-11).closePath().moveTo(0.5,-10.2).lineTo(0.5,-11.7).lineTo(5.7,-11.7).lineTo(5.4,-12.6).lineTo(5,-13.3).lineTo(7,-13.7).lineTo(7.5,-12.8).lineTo(8,-11.7).lineTo(12.9,-11.7).lineTo(12.9,-10.2).closePath();
	this.shape.setTransform(116.6,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5,12.7).lineTo(4.6,11.6).lineTo(7,11.6).lineTo(8.5,11.6).lineTo(9,11.5).curveTo(9,11.4,9,11.4).curveTo(9.1,11.3,9.1,11.3).curveTo(9.1,11.2,9.1,11.2).curveTo(9.1,11.1,9.1,11).lineTo(9.1,-4.7).lineTo(11.3,-4.7).lineTo(11.3,11).curveTo(11.3,12,11,12.5).curveTo(10.8,13.1,10.1,13.3).curveTo(9.4,13.6,8.2,13.7).lineTo(5.4,13.7).lineTo(5,12.7).closePath().moveTo(-6.1,12.7).lineTo(-6.5,11.7).lineTo(-4.5,11.8).lineTo(-3.3,11.8).lineTo(-2.8,11.6).curveTo(-2.8,11.6,-2.8,11.6).curveTo(-2.7,11.5,-2.7,11.5).curveTo(-2.7,11.4,-2.7,11.4).curveTo(-2.7,11.3,-2.7,11.2).lineTo(-2.7,7.2).lineTo(-9.3,7.2).lineTo(-9.3,13.7).lineTo(-11.5,13.7).lineTo(-11.5,-4.1).lineTo(-0.5,-4.1).lineTo(-0.5,11.2).curveTo(-0.5,12.1,-0.8,12.6).curveTo(-1,13.1,-1.6,13.3).curveTo(-2.2,13.6,-3.2,13.6).lineTo(-5.8,13.7).lineTo(-6.1,12.7).closePath().moveTo(-9.3,5.5).lineTo(-2.7,5.5).lineTo(-2.7,2.5).lineTo(-9.3,2.5).closePath().moveTo(-9.3,0.7).lineTo(-2.7,0.7).lineTo(-2.7,-2.2).lineTo(-9.3,-2.2).closePath().moveTo(3.1,8.3).lineTo(3.1,-3.8).lineTo(5.2,-3.8).lineTo(5.2,8.3).closePath().moveTo(-13.3,-6.8).lineTo(-13.3,-8.9).lineTo(-6,-8.9).curveTo(-6.4,-9.8,-7.1,-10.8).lineTo(-8.7,-12.8).lineTo(-6.7,-13.6).lineTo(-4.9,-11.5).curveTo(-4.1,-10.3,-3.7,-9.4).lineTo(-5.1,-8.9).lineTo(3.8,-8.9).lineTo(5.4,-11.3).lineTo(6.6,-13.7).lineTo(9,-12.9).lineTo(7.7,-10.8).lineTo(6.3,-8.9).lineTo(13.3,-8.9).lineTo(13.3,-6.8).closePath();
	this.shape_1.setTransform(86.7,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,13).lineTo(0.9,12).lineTo(0.3,10.9).lineTo(2.6,11).lineTo(4.5,11.1).lineTo(5.8,11.1).curveTo(6.4,11.1,6.7,11).curveTo(7.1,10.9,7.4,10.7).curveTo(7.9,10.3,8.4,9.1).curveTo(8.8,7.8,9.2,5.6).lineTo(9.9,-0.1).lineTo(-7.4,-0.1).lineTo(-9.2,-0.2).lineTo(-8.2,-4.1).lineTo(-7.2,-8.7).lineTo(-6.4,-13.2).lineTo(-4.1,-13).lineTo(-4.4,-11.4).lineTo(-4.7,-9.7).lineTo(11.9,-9.7).lineTo(11.9,-7.6).lineTo(-5.2,-7.6).lineTo(-5.8,-4.8).lineTo(-6.4,-2.2).lineTo(12.4,-2.2).lineTo(12.4,-2).lineTo(12.3,-1.5).lineTo(12.3,-1.2).curveTo(11.9,3.1,11.4,5.8).curveTo(11,8.5,10.5,10).curveTo(9.9,11.5,9.3,12.1).curveTo(8.7,12.7,8.1,12.9).curveTo(7.4,13.2,6.5,13.1).lineTo(4.2,13.2).lineTo(1.1,13).closePath().moveTo(-12.4,6.3).lineTo(-12.4,4.1).lineTo(6.2,4.1).lineTo(6.2,6.3).closePath();
	this.shape_2.setTransform(55.9,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,13.7).lineTo(-4.1,-1).lineTo(-12,-1).lineTo(-12,-3.1).lineTo(10.4,-3.1).lineTo(10.4,6.8).curveTo(10.4,7.8,10.1,8.5).curveTo(9.8,9,9,9.3).curveTo(8.2,9.5,6.7,9.6).lineTo(3.2,9.6).curveTo(3.2,9.2,3,8.5).lineTo(2.5,7.4).lineTo(4.7,7.4).lineTo(6.4,7.4).lineTo(7.4,7.4).curveTo(7.8,7.4,7.9,7.2).curveTo(8.1,7.1,8.1,6.8).lineTo(8.1,-1).lineTo(-1.8,-1).lineTo(-1.8,13.7).closePath().moveTo(4,-4.7).lineTo(4,-8.1).lineTo(-4,-8.1).lineTo(-4,-4.7).lineTo(-6.2,-4.7).lineTo(-6.2,-8.1).lineTo(-13.2,-8.1).lineTo(-13.2,-10.3).lineTo(-6.2,-10.3).lineTo(-6.2,-13.7).lineTo(-4,-13.7).lineTo(-4,-10.3).lineTo(4,-10.3).lineTo(4,-13.7).lineTo(6.3,-13.7).lineTo(6.3,-10.3).lineTo(13.2,-10.3).lineTo(13.2,-8.1).lineTo(6.3,-8.1).lineTo(6.3,-4.7).closePath();
	this.shape_3.setTransform(26.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.7,12.6).lineTo(-13.6,11.7).curveTo(-9.6,10.3,-7.2,8.8).curveTo(-4.8,7.2,-3.5,5.6).curveTo(-2.2,4,-1.8,2.4).lineTo(-13,2.4).lineTo(-13,0.2).lineTo(-1.3,0.2).lineTo(-1.3,-0.7).lineTo(-1.3,-1.5).lineTo(-1.3,-5.1).lineTo(-11.2,-5.1).lineTo(-11.2,-7.3).lineTo(-5.4,-7.3).lineTo(-6.1,-9).lineTo(-7.1,-10.8).lineTo(-8.3,-12.5).lineTo(-6.5,-13.4).lineTo(-5.2,-11.8).lineTo(-4.1,-10).curveTo(-3.6,-9.1,-3.4,-8.4).lineTo(-5.4,-7.3).lineTo(2.9,-7.3).lineTo(4.1,-9.4).lineTo(5.2,-11.5).lineTo(6.2,-13.6).lineTo(8.5,-12.8).lineTo(6.9,-10).lineTo(5.3,-7.3).lineTo(11.2,-7.3).lineTo(11.2,-5.1).lineTo(1.2,-5.1).lineTo(1.2,-1.5).lineTo(1.2,-0.7).lineTo(1.2,0.2).lineTo(12.8,0.2).lineTo(12.8,2.4).lineTo(1.8,2.4).curveTo(3.5,5.7,6.5,8).curveTo(9.5,10.3,13.6,11.3).lineTo(12.7,12.3).lineTo(12,13.5).curveTo(8,12.3,5.1,9.9).curveTo(2.2,7.5,0.3,4.1).curveTo(-0.3,5.8,-1.8,7.5).curveTo(-3.2,9.2,-5.7,10.7).curveTo(-8.2,12.3,-12,13.6).lineTo(-12.7,12.6).closePath();
	this.shape_4.setTransform(-3.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.7,13.1).lineTo(-13.7,12.6).curveTo(-12.7,10.4,-12.2,7.9).curveTo(-11.7,5.4,-11.6,2.8).lineTo(-11.5,-1.9).lineTo(-11.5,-12.7).lineTo(-2.8,-12.7).lineTo(-2.8,10.7).curveTo(-2.8,11.6,-3,12.1).curveTo(-3.2,12.7,-3.8,12.9).curveTo(-4.4,13.2,-5.3,13.3).lineTo(-7.7,13.4).lineTo(-8,12.3).lineTo(-8.4,11.2).lineTo(-6.5,11.3).lineTo(-5.4,11.3).curveTo(-5.3,11.3,-5.3,11.3).curveTo(-5.2,11.3,-5.1,11.2).curveTo(-5.1,11.2,-5,11.2).curveTo(-5,11.2,-5,11.1).curveTo(-4.9,11.1,-4.9,11).curveTo(-4.9,11,-4.9,10.9).curveTo(-4.8,10.9,-4.8,10.8).curveTo(-4.8,10.8,-4.8,10.7).lineTo(-4.8,3.5).lineTo(-9.6,3.5).curveTo(-9.8,6.2,-10.4,8.9).curveTo(-10.9,11.5,-11.9,13.7).lineTo(-12.7,13.1).closePath().moveTo(-9.5,-1.9).lineTo(-9.5,-0.3).lineTo(-9.5,1.4).lineTo(-4.8,1.4).lineTo(-4.8,-3.6).lineTo(-9.5,-3.6).closePath().moveTo(-9.5,-5.7).lineTo(-4.8,-5.7).lineTo(-4.8,-10.6).lineTo(-9.5,-10.6).closePath().moveTo(3.4,13.6).lineTo(3.1,12.5).lineTo(2.6,11.3).lineTo(5.4,11.4).lineTo(7.1,11.4).curveTo(7.5,11.4,7.7,11.2).curveTo(7.9,11,7.9,10.6).lineTo(7.9,-4.6).lineTo(-1.9,-4.6).lineTo(-1.9,-6.9).lineTo(7.9,-6.9).lineTo(7.9,-13.7).lineTo(10,-13.7).lineTo(10,-6.9).lineTo(13.7,-6.9).lineTo(13.7,-4.6).lineTo(10,-4.6).lineTo(10,10.6).curveTo(10,11.7,9.7,12.3).curveTo(9.4,12.9,8.7,13.2).curveTo(8,13.5,6.8,13.6).lineTo(4.7,13.6).lineTo(3.4,13.6).closePath().moveTo(2.4,3.8).lineTo(1.2,1.3).lineTo(-0.2,-1).lineTo(1.6,-1.8).lineTo(3.1,0.5).lineTo(4.4,3).lineTo(5.2,5.1).lineTo(3.2,6).curveTo(2.9,5,2.4,3.8).closePath();
	this.shape_5.setTransform(-33.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,1.5).curveTo(-1.9,0.9,-2,0.1).curveTo(-1.9,-0.9,-1.4,-1.5).curveTo(-0.8,-2.1,-0,-2.1).curveTo(0.8,-2.1,1.4,-1.5).curveTo(1.9,-0.9,2,0.1).curveTo(1.9,0.9,1.4,1.5).curveTo(0.8,2.1,-0,2.1).curveTo(-0.8,2.1,-1.4,1.5).closePath();
	this.shape_6.setTransform(-52.5,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.9,11.2).lineTo(-6.9,9.6).curveTo(-1.7,5.1,0.8,1.6).curveTo(3.2,-1.8,3.2,-4.6).curveTo(3.2,-6.6,2.2,-7.7).curveTo(1.2,-8.9,-0.8,-9).curveTo(-2.2,-9,-3.3,-8.2).curveTo(-4.5,-7.5,-5.4,-6.4).lineTo(-7,-8).curveTo(-5.7,-9.4,-4.1,-10.3).curveTo(-2.6,-11.2,-0.5,-11.2).curveTo(1.5,-11.2,2.9,-10.4).curveTo(4.3,-9.6,5.1,-8.2).curveTo(5.9,-6.7,5.9,-4.7).curveTo(5.9,-2.5,4.8,-0.3).curveTo(3.7,1.9,1.8,4.3).curveTo(-0.1,6.6,-2.7,9).lineTo(-0.9,8.9).lineTo(0.9,8.8).lineTo(7,8.8).lineTo(7,11.2).closePath();
	this.shape_7.setTransform(-65.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-107.7,-32.2).lineTo(107.6,-32.2).curveTo(120.5,-32.2,129.6,-23.1).curveTo(138.6,-14.1,138.6,-1.2).lineTo(138.6,1.3).curveTo(138.6,14.1,129.6,23.2).curveTo(120.5,32.2,107.6,32.2).lineTo(-107.7,32.2).curveTo(-120.5,32.2,-129.6,23.2).curveTo(-138.6,14.1,-138.6,1.3).lineTo(-138.6,-1.2).curveTo(-138.6,-14.1,-129.6,-23.1).curveTo(-120.5,-32.2,-107.7,-32.2).closePath();
	this.shape_8.setTransform(31.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#E8A02B").beginStroke().moveTo(-107.7,32.2).curveTo(-120.5,32.2,-129.6,23.2).curveTo(-138.7,14.1,-138.7,1.3).lineTo(-138.7,-1.2).curveTo(-138.7,-14.1,-129.6,-23.1).curveTo(-120.5,-32.2,-107.7,-32.2).lineTo(107.7,-32.2).curveTo(120.5,-32.2,129.5,-23.1).curveTo(138.6,-14.1,138.6,-1.2).lineTo(138.6,1.3).curveTo(138.6,14.1,129.5,23.2).curveTo(120.5,32.2,107.7,32.2).closePath();
	this.shape_9.setTransform(31.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-108.3,-33.2,279.3,66.5), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(8,1,1).moveTo(29.5,-0).lineTo(-29.5,-34.1).lineTo(-29.5,34.1).closePath();
	this.shape.setTransform(29.5,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-4,-4,67.1,76.2), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.1,12.8).curveTo(4.5,12.2,2.3,11.2).curveTo(-0.1,12.1,-2.8,12.7).curveTo(-5.4,13.3,-8.2,13.6).lineTo(-8.6,12.7).lineTo(-9.2,11.8).curveTo(-6.8,11.5,-4.5,11.1).curveTo(-2.2,10.7,-0.1,10).curveTo(-1.5,9.2,-2.8,8.1).curveTo(-4,7.1,-4.9,5.8).lineTo(-3.8,5.4).lineTo(-7.8,5.4).lineTo(-7.8,3.5).lineTo(9.2,3.5).lineTo(9.6,3.4).lineTo(11,4.2).curveTo(9.9,6.1,8.3,7.5).curveTo(6.7,9,4.8,10.1).curveTo(6.7,10.8,9,11.2).curveTo(11.3,11.7,13.8,11.9).lineTo(13.1,12.8).lineTo(12.5,13.8).curveTo(9.7,13.5,7.1,12.8).closePath().moveTo(-0.5,7.4).curveTo(0.8,8.3,2.4,9.1).curveTo(4,8.4,5.3,7.5).curveTo(6.7,6.5,7.6,5.4).lineTo(-2.7,5.4).curveTo(-1.8,6.5,-0.5,7.4).closePath().moveTo(-12.7,13.2).lineTo(-13.8,12.8).curveTo(-12.6,10.5,-12,7.8).curveTo(-11.4,5.1,-11.3,2.4).curveTo(-11.1,-0.3,-11.1,-2.6).lineTo(-11.1,-10.6).lineTo(0.4,-10.6).lineTo(-0.1,-12).lineTo(-0.8,-13.2).lineTo(1.4,-13.8).lineTo(2.3,-12.2).lineTo(3,-10.6).lineTo(13.4,-10.6).lineTo(13.4,-8.6).lineTo(-8.9,-8.6).lineTo(-8.9,-2.6).lineTo(-9,1.4).curveTo(-9.1,3.4,-9.4,5.6).curveTo(-9.7,7.8,-10.3,9.9).curveTo(-10.9,12,-11.8,13.8).lineTo(-12.7,13.2).closePath().moveTo(-3.4,1.6).lineTo(-3.4,-3.3).lineTo(-8.2,-3.3).lineTo(-8.2,-5.2).lineTo(-3.4,-5.2).lineTo(-3.4,-7.8).lineTo(-1.2,-7.8).lineTo(-1.2,-5.2).lineTo(6,-5.2).lineTo(6,-7.8).lineTo(8.2,-7.8).lineTo(8.2,-5.2).lineTo(13,-5.2).lineTo(13,-3.3).lineTo(8.2,-3.3).lineTo(8.2,1.6).closePath().moveTo(-1.2,-0.2).lineTo(6,-0.2).lineTo(6,-3.3).lineTo(-1.2,-3.3).closePath();
	this.shape.setTransform(197.7,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.8,12.8).lineTo(-12.7,12).curveTo(-9.6,10.1,-7.7,8).curveTo(-5.7,5.9,-4.6,3.8).curveTo(-3.4,1.6,-2.9,-0.7).curveTo(-2.3,-2.9,-2.2,-5).lineTo(-11.8,-5).lineTo(-11.8,-7.3).lineTo(-2,-7.3).lineTo(-2,-7.9).lineTo(-2,-8.6).lineTo(-2,-13.8).lineTo(0.2,-13.8).lineTo(0.2,-8.6).lineTo(0.2,-7.9).lineTo(0.2,-7.3).lineTo(12.7,-7.3).lineTo(12.7,-7).lineTo(12.7,-6.6).lineTo(12.6,-6.1).lineTo(12.2,1.7).curveTo(11.9,4.9,11.6,7.1).curveTo(11.3,9.2,10.9,10.4).curveTo(10.6,11.6,10,12.1).curveTo(9.6,12.8,8.9,13).curveTo(8.4,13.3,7.5,13.3).curveTo(6.7,13.4,5.4,13.4).lineTo(2.7,13.3).lineTo(2.5,12.1).curveTo(2.3,11.5,1.9,11).lineTo(4.8,11.2).lineTo(6.7,11.2).lineTo(7.4,11.1).lineTo(8,10.7).curveTo(8.5,10.2,9,8.5).curveTo(9.4,6.8,9.7,3.5).lineTo(10.4,-5).lineTo(0.1,-5).curveTo(0,-2.7,-0.5,-0.3).curveTo(-1.2,2.2,-2.3,4.7).curveTo(-3.6,7.1,-5.6,9.4).curveTo(-7.8,11.7,-11,13.8).lineTo(-11.8,12.8).closePath();
	this.shape_1.setTransform(167.1,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,13.1).lineTo(0.9,11.9).lineTo(0.3,10.8).lineTo(2.6,11).lineTo(4.5,11).lineTo(5.8,11).curveTo(6.4,11.1,6.7,11).curveTo(7.1,11,7.4,10.7).curveTo(7.9,10.3,8.4,9).curveTo(8.8,7.8,9.2,5.5).lineTo(9.9,-0.1).lineTo(-7.4,-0.1).lineTo(-9.2,-0.1).lineTo(-8.2,-4.1).lineTo(-7.2,-8.7).lineTo(-6.4,-13.2).lineTo(-4.1,-12.9).lineTo(-4.4,-11.4).lineTo(-4.7,-9.7).lineTo(11.9,-9.7).lineTo(11.9,-7.6).lineTo(-5.2,-7.6).lineTo(-5.8,-4.8).lineTo(-6.4,-2.2).lineTo(12.4,-2.2).lineTo(12.4,-2).lineTo(12.3,-1.6).lineTo(12.3,-1.1).curveTo(11.9,3.1,11.4,5.8).curveTo(11,8.5,10.5,10).curveTo(9.9,11.5,9.3,12.2).curveTo(8.7,12.7,8.1,12.9).curveTo(7.4,13.2,6.5,13.2).lineTo(4.2,13.2).lineTo(1.1,13.1).closePath().moveTo(-12.4,6.2).lineTo(-12.4,4.1).lineTo(6.2,4.1).lineTo(6.2,6.2).closePath();
	this.shape_2.setTransform(136.9,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.1,12.8).curveTo(4.5,12.2,2.3,11.2).curveTo(-0.1,12.1,-2.8,12.7).curveTo(-5.4,13.3,-8.2,13.6).lineTo(-8.6,12.7).lineTo(-9.2,11.8).curveTo(-6.8,11.5,-4.5,11.1).curveTo(-2.2,10.7,-0.1,10).curveTo(-1.5,9.2,-2.8,8.1).curveTo(-4,7.1,-4.9,5.8).lineTo(-3.8,5.4).lineTo(-7.8,5.4).lineTo(-7.8,3.5).lineTo(9.2,3.5).lineTo(9.6,3.4).lineTo(11,4.2).curveTo(9.9,6.1,8.3,7.5).curveTo(6.7,9,4.8,10.1).curveTo(6.7,10.8,9,11.2).curveTo(11.3,11.7,13.8,11.9).lineTo(13.1,12.8).lineTo(12.5,13.8).curveTo(9.7,13.5,7.1,12.8).closePath().moveTo(-0.5,7.4).curveTo(0.8,8.3,2.4,9.1).curveTo(4,8.4,5.3,7.5).curveTo(6.7,6.5,7.6,5.4).lineTo(-2.7,5.4).curveTo(-1.8,6.5,-0.5,7.4).closePath().moveTo(-12.7,13.2).lineTo(-13.8,12.8).curveTo(-12.6,10.5,-12,7.8).curveTo(-11.4,5.1,-11.3,2.4).curveTo(-11.1,-0.3,-11.1,-2.6).lineTo(-11.1,-10.6).lineTo(0.4,-10.6).lineTo(-0.1,-12).lineTo(-0.8,-13.2).lineTo(1.4,-13.8).lineTo(2.3,-12.2).lineTo(3,-10.6).lineTo(13.4,-10.6).lineTo(13.4,-8.6).lineTo(-8.9,-8.6).lineTo(-8.9,-2.6).lineTo(-9,1.4).curveTo(-9.1,3.4,-9.4,5.6).curveTo(-9.7,7.8,-10.3,9.9).curveTo(-10.9,12,-11.8,13.8).lineTo(-12.7,13.2).closePath().moveTo(-3.4,1.6).lineTo(-3.4,-3.3).lineTo(-8.2,-3.3).lineTo(-8.2,-5.2).lineTo(-3.4,-5.2).lineTo(-3.4,-7.8).lineTo(-1.2,-7.8).lineTo(-1.2,-5.2).lineTo(6,-5.2).lineTo(6,-7.8).lineTo(8.2,-7.8).lineTo(8.2,-5.2).lineTo(13,-5.2).lineTo(13,-3.3).lineTo(8.2,-3.3).lineTo(8.2,1.6).closePath().moveTo(-1.2,-0.2).lineTo(6,-0.2).lineTo(6,-3.3).lineTo(-1.2,-3.3).closePath();
	this.shape_3.setTransform(107.7,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.7,11.7).curveTo(-12.5,10.5,-11.3,9.7).curveTo(-10.2,8.8,-9.2,8.4).lineTo(-9.2,-0.9).lineTo(-13.6,-0.9).lineTo(-13.6,-3).lineTo(-7,-3).lineTo(-7,8.5).lineTo(-6,9.1).lineTo(-4.7,9.9).curveTo(-3.3,10.7,-1.3,10.9).curveTo(0.5,11.2,3,11.2).lineTo(6.7,11.1).lineTo(10.4,10.9).lineTo(13.7,10.7).lineTo(13.3,11.8).lineTo(13.1,12.9).lineTo(11,13).lineTo(8.3,13.1).lineTo(5.4,13.2).lineTo(2.9,13.2).curveTo(0.3,13.2,-1.7,12.9).curveTo(-3.6,12.6,-5.2,11.7).lineTo(-6.8,10.6).curveTo(-7.6,10.2,-8.1,10.1).curveTo(-8.6,10.1,-9.3,10.6).lineTo(-10.8,11.8).lineTo(-12.3,13.6).closePath().moveTo(2.5,10).lineTo(2.5,3).curveTo(1.1,4.9,-0.6,6.5).curveTo(-2.5,8.1,-4.3,9.1).lineTo(-5,8.2).lineTo(-5.8,7.4).curveTo(-4.5,6.8,-3.1,5.8).curveTo(-1.7,4.9,-0.5,3.7).curveTo(0.7,2.5,1.5,1.3).lineTo(-4.3,1.3).lineTo(-4.3,-6.1).lineTo(2.5,-6.1).lineTo(2.5,-8.6).lineTo(-5.5,-8.6).lineTo(-5.5,-10.5).lineTo(2.5,-10.5).lineTo(2.5,-13.6).lineTo(4.8,-13.6).lineTo(4.8,-10.5).lineTo(13.2,-10.5).lineTo(13.2,-8.6).lineTo(4.8,-8.6).lineTo(4.8,-6.1).lineTo(11.9,-6.1).lineTo(11.9,1.3).lineTo(5.4,1.3).lineTo(8.1,3.2).lineTo(10.6,5.2).curveTo(11.9,6.2,12.6,7.1).lineTo(11.3,8.6).lineTo(9.5,6.9).lineTo(7.2,4.9).lineTo(4.8,3).lineTo(4.8,10).closePath().moveTo(4.8,-0.5).lineTo(9.7,-0.5).lineTo(9.7,-4.3).lineTo(4.8,-4.3).closePath().moveTo(-2.2,-0.5).lineTo(2.5,-0.5).lineTo(2.5,-4.3).lineTo(-2.2,-4.3).closePath().moveTo(-9.5,-7.7).lineTo(-11.2,-9.5).lineTo(-12.9,-11.2).lineTo(-11.2,-12.4).lineTo(-9.5,-10.8).lineTo(-7.8,-9).lineTo(-6.5,-7.4).lineTo(-8.3,-6.1).curveTo(-8.8,-6.8,-9.5,-7.7).closePath();
	this.shape_4.setTransform(77.8,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,1.5).curveTo(-1.9,1,-2,0).curveTo(-1.9,-0.9,-1.4,-1.5).curveTo(-0.8,-2.1,-0,-2.1).curveTo(0.8,-2.1,1.4,-1.5).curveTo(1.9,-0.9,2,0).curveTo(1.9,1,1.4,1.5).curveTo(0.8,2.1,-0,2.1).curveTo(-0.8,2.1,-1.4,1.5).closePath();
	this.shape_5.setTransform(58.5,42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,11).lineTo(2,4.9).lineTo(-7.5,4.9).lineTo(-7.5,3.1).lineTo(1.6,-11).lineTo(4.6,-11).lineTo(4.6,2.8).lineTo(7.5,2.8).lineTo(7.5,4.9).lineTo(4.6,4.9).lineTo(4.6,11).closePath().moveTo(1.2,-6.3).lineTo(0.3,-4.7).lineTo(-4.7,2.8).lineTo(2,2.8).lineTo(2,-4).lineTo(2,-5.3).lineTo(2.1,-6.7).lineTo(2.2,-8).lineTo(2,-8).lineTo(1.2,-6.3).closePath();
	this.shape_6.setTransform(45.9,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-103.8,-32.5).lineTo(103.7,-32.5).curveTo(118.2,-32.5,128.6,-23).curveTo(138.9,-13.4,138.9,0).curveTo(138.9,13.4,128.6,23).curveTo(118.3,32.5,103.7,32.5).lineTo(-103.8,32.5).curveTo(-118.3,32.5,-128.6,23).curveTo(-138.9,13.5,-138.9,0).curveTo(-138.9,-13.4,-128.6,-23).curveTo(-118.3,-32.5,-103.8,-32.5).closePath();
	this.shape_7.setTransform(138.9,32.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#E8A02B").beginStroke().moveTo(-103.7,32.5).curveTo(-118.3,32.5,-128.6,23).curveTo(-138.9,13.5,-138.8,0).curveTo(-138.9,-13.4,-128.6,-23).curveTo(-118.3,-32.5,-103.7,-32.5).lineTo(103.7,-32.5).curveTo(118.2,-32.5,128.6,-23).curveTo(138.8,-13.4,138.8,0).curveTo(138.8,13.4,128.6,23).curveTo(118.3,32.5,103.7,32.5).closePath();
	this.shape_8.setTransform(138.9,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,279.7,67);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.9,13.5).lineTo(-6.3,12.3).lineTo(-6.8,11.1).lineTo(-4.7,11.1).lineTo(-3,11.1).lineTo(-1.9,11.1).curveTo(-1.5,11.1,-1.3,10.9).curveTo(-1.1,10.8,-1.1,10.3).lineTo(-1.1,-13.5).lineTo(1.3,-13.5).lineTo(1.3,10.3).curveTo(1.3,11.5,0.9,12.2).curveTo(0.6,12.8,-0.2,13.1).curveTo(-1,13.3,-2.4,13.4).lineTo(-4.6,13.5).lineTo(-5.9,13.5).closePath().moveTo(10.5,3.3).curveTo(9.6,1,8.5,-1.4).curveTo(7.4,-3.8,6.1,-6).lineTo(8.1,-6.9).curveTo(9.5,-4.7,10.7,-2.4).curveTo(11.9,0,12.7,2.3).curveTo(13.6,4.5,14,6.3).lineTo(11.7,7.4).curveTo(11.3,5.6,10.5,3.3).closePath().moveTo(-13,6.5).lineTo(-14,5.9).curveTo(-12.7,4.3,-11.7,2.2).curveTo(-10.6,0,-10,-2.2).curveTo(-9.3,-4.5,-8.9,-6.5).lineTo(-6.5,-6.1).curveTo(-7,-3.8,-7.7,-1.4).curveTo(-8.5,1,-9.6,3.2).curveTo(-10.6,5.5,-12.1,7.2).lineTo(-13,6.5).closePath();
	this.shape.setTransform(167.7,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.9,12.7).lineTo(-13.7,12).curveTo(-11.8,10.3,-10.8,8.4).curveTo(-9.7,6.4,-9.2,4.4).curveTo(-8.6,2.4,-8.5,0.4).lineTo(-13.5,0.4).lineTo(-13.5,-1.6).lineTo(-8.4,-1.6).lineTo(-8.3,-2.2).lineTo(-8.3,-2.8).lineTo(-8.3,-7.4).lineTo(-10,-7.4).curveTo(-10.4,-6,-10.9,-4.9).curveTo(-11.3,-3.7,-11.9,-2.7).lineTo(-12.7,-3.3).lineTo(-13.6,-3.9).curveTo(-12.9,-5.1,-12.4,-6.7).curveTo(-11.9,-8.2,-11.5,-9.9).curveTo(-11.1,-11.6,-10.8,-13.4).lineTo(-8.9,-13.1).lineTo(-9.1,-11.2).lineTo(-9.5,-9.4).lineTo(-2.6,-9.4).lineTo(-2.6,-7.4).lineTo(-6.3,-7.4).lineTo(-6.3,-2.7).lineTo(-6.3,-2.2).lineTo(-6.3,-1.6).lineTo(-2.3,-1.6).lineTo(-2.3,0.4).lineTo(-6.4,0.4).lineTo(-6.6,1.5).lineTo(-6.8,2.8).lineTo(-5.7,4.1).lineTo(-4.4,5.8).lineTo(-3.2,7.5).lineTo(-2.4,8.5).lineTo(-3.8,10.3).lineTo(-4.7,8.8).lineTo(-6,7).lineTo(-7.2,5.1).curveTo(-7.9,7.4,-9,9.5).curveTo(-10.3,11.7,-12.2,13.5).lineTo(-12.9,12.7).closePath().moveTo(-2.8,13).lineTo(-2.8,11).lineTo(6.5,11).lineTo(7.5,8.6).lineTo(8.4,6).lineTo(9.2,3.6).lineTo(11.5,4).lineTo(10,7.6).lineTo(8.6,11).lineTo(13.7,11).lineTo(13.7,13).closePath().moveTo(1.8,8.5).lineTo(1,6.4).lineTo(0.2,4.2).lineTo(2,3.8).lineTo(2.9,5.8).lineTo(3.7,8).lineTo(4.2,9.9).lineTo(2.2,10.4).lineTo(1.8,8.5).closePath().moveTo(-0.7,2.5).lineTo(-0.7,-6.9).lineTo(12.2,-6.9).lineTo(12.2,2.5).closePath().moveTo(1.5,0.5).lineTo(10,0.5).lineTo(10,-4.9).lineTo(1.5,-4.9).closePath().moveTo(-1.6,-10.1).lineTo(-1.6,-12.2).lineTo(13.4,-12.2).lineTo(13.4,-10.1).closePath();
	this.shape_1.setTransform(137.7,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.5,12.7).curveTo(-12.7,12,-12,11).curveTo(-11.2,10.1,-10.6,9).curveTo(-9.9,7.9,-9.4,6.7).lineTo(-7.3,7.3).curveTo(-8.1,9.1,-9.2,10.8).curveTo(-10.3,12.5,-11.5,13.7).closePath().moveTo(10.5,11.6).lineTo(9.1,9.4).lineTo(7.6,7.3).lineTo(9.5,6.6).lineTo(11.1,8.6).lineTo(12.5,10.7).lineTo(13.5,12.6).lineTo(11.4,13.5).lineTo(10.5,11.6).closePath().moveTo(-4.1,11.7).lineTo(-4.3,9.6).lineTo(-4.7,7.5).lineTo(-2.5,7.4).lineTo(-2.2,9.4).lineTo(-1.9,11.4).lineTo(-1.8,13.2).lineTo(-4,13.5).lineTo(-4.1,11.7).closePath().moveTo(3.1,11.6).lineTo(2.4,9.6).lineTo(1.5,7.6).lineTo(3.5,7.1).lineTo(4.4,9.1).lineTo(5.2,11.1).lineTo(5.8,12.9).lineTo(3.6,13.4).lineTo(3.1,11.6).closePath().moveTo(-9.8,4.9).lineTo(-9.8,-4.6).lineTo(-1.2,-4.6).lineTo(-1.2,-13.7).lineTo(1,-13.7).lineTo(1,-10.5).lineTo(12.3,-10.5).lineTo(12.3,-8.4).lineTo(1,-8.4).lineTo(1,-4.6).lineTo(10.1,-4.6).lineTo(10.1,4.9).closePath().moveTo(-7.7,2.8).lineTo(7.9,2.8).lineTo(7.9,-2.5).lineTo(-7.7,-2.5).closePath();
	this.shape_2.setTransform(107.6,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.9,13.2).lineTo(-13.7,12.7).curveTo(-12.9,11.1,-12.4,9.2).curveTo(-12,7.3,-11.8,5.4).curveTo(-11.7,3.5,-11.7,1.8).lineTo(-11.7,-3.5).lineTo(-12,-3.2).lineTo(-12.3,-2.9).lineTo(-13.1,-3.6).lineTo(-14,-4.2).curveTo(-12.3,-6,-11.2,-8.5).curveTo(-9.9,-10.9,-9.2,-13.7).lineTo(-7.2,-13.3).lineTo(-7.5,-12.2).lineTo(-7.9,-11.1).lineTo(-4,-11.1).lineTo(-3.6,-11.2).lineTo(-2.3,-10.3).lineTo(-3.2,-8.2).lineTo(-4.3,-6.2).lineTo(-1.1,-6.2).lineTo(-1.1,11.1).curveTo(-1.1,11.7,-1.3,12.2).curveTo(-1.5,12.6,-1.9,12.8).curveTo(-2.3,13.1,-2.9,13.1).lineTo(-4.5,13.2).lineTo(-4.7,12.3).lineTo(-5.1,11.4).lineTo(-4,11.4).lineTo(-3.4,11.4).lineTo(-3.1,11.3).lineTo(-3,11.1).lineTo(-3,6.2).lineTo(-5.5,6.2).lineTo(-5.5,12.8).lineTo(-7.2,12.8).lineTo(-7.2,6.2).lineTo(-10,6.2).curveTo(-10.2,8.2,-10.7,10.2).curveTo(-11.2,12.1,-12.2,13.7).lineTo(-12.9,13.2).closePath().moveTo(-5.5,4.5).lineTo(-3,4.5).lineTo(-3,0.8).lineTo(-5.5,0.8).closePath().moveTo(-9.8,1.8).lineTo(-9.8,3.1).lineTo(-9.9,4.5).lineTo(-7.2,4.5).lineTo(-7.2,0.8).lineTo(-9.8,0.8).closePath().moveTo(-5.5,-0.9).lineTo(-3,-0.9).lineTo(-3,-4.4).lineTo(-5.5,-4.4).closePath().moveTo(-9.8,-0.9).lineTo(-7.2,-0.9).lineTo(-7.2,-4.4).lineTo(-9.8,-4.4).closePath().moveTo(-9.2,-7.7).lineTo(-10,-6.2).lineTo(-6.2,-6.2).lineTo(-5.5,-7.7).lineTo(-4.9,-9.3).lineTo(-8.6,-9.3).lineTo(-9.2,-7.7).closePath().moveTo(11.7,12.3).lineTo(11.2,10.8).lineTo(7,11.4).lineTo(3,11.9).lineTo(-0.4,12.4).lineTo(-0.7,10.3).lineTo(2,10).lineTo(5.2,9.6).lineTo(5.2,3.9).lineTo(5.3,3.9).lineTo(5.3,3.3).lineTo(0.2,3.3).lineTo(0.2,-7.9).lineTo(5.2,-7.9).lineTo(5.2,-13.6).lineTo(7.4,-13.6).lineTo(7.4,-7.9).lineTo(12.4,-7.9).lineTo(12.4,3.3).lineTo(7.2,3.3).lineTo(7.2,3.9).lineTo(7.4,3.9).lineTo(7.4,9.3).lineTo(10.4,8.9).lineTo(9.7,7.1).lineTo(8.9,5.5).lineTo(10.6,4.9).lineTo(12,7.6).lineTo(13.2,10.4).lineTo(13.9,12.8).lineTo(12,13.5).lineTo(11.7,12.3).closePath().moveTo(7.2,1.4).lineTo(10.4,1.4).lineTo(10.4,-6).lineTo(7.2,-6).closePath().moveTo(2.1,1.4).lineTo(5.3,1.4).lineTo(5.3,-6).lineTo(2.1,-6).closePath();
	this.shape_3.setTransform(77.7,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,1.5).curveTo(-1.9,1,-2,0).curveTo(-1.9,-0.9,-1.4,-1.5).curveTo(-0.8,-2.1,-0,-2.1).curveTo(0.8,-2.1,1.4,-1.5).curveTo(1.9,-0.9,2,0).curveTo(1.9,1,1.4,1.5).curveTo(0.8,2.1,-0,2.1).curveTo(-0.8,2.1,-1.4,1.5).closePath();
	this.shape_4.setTransform(58.5,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,10.7).curveTo(-4.4,10.4,-5.4,9.7).curveTo(-6.3,9,-7.1,8.3).lineTo(-5.8,6.5).curveTo(-4.8,7.4,-3.5,8.1).curveTo(-2.2,8.9,-0.4,8.9).curveTo(1,8.9,2,8.3).curveTo(3.1,7.6,3.7,6.5).curveTo(4.3,5.4,4.4,3.7).curveTo(4.3,1.4,3.1,0).curveTo(1.9,-1.3,-0.3,-1.3).curveTo(-1.3,-1.3,-2.2,-1).curveTo(-2.9,-0.6,-3.9,0).lineTo(-5.3,-0.9).lineTo(-4.6,-11.2).lineTo(6,-11.2).lineTo(6,-8.9).lineTo(-2.3,-8.9).lineTo(-2.8,-2.5).curveTo(-2.1,-2.9,-1.3,-3.1).curveTo(-0.5,-3.4,0.4,-3.4).curveTo(2.3,-3.3,3.8,-2.7).curveTo(5.3,-1.9,6.2,-0.3).curveTo(7,1.2,7.1,3.6).curveTo(7,6,6,7.8).curveTo(5.1,9.4,3.4,10.3).curveTo(1.8,11.2,-0.1,11.2).curveTo(-1.8,11.2,-3.1,10.7).closePath();
	this.shape_5.setTransform(45.7,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-103.8,-32.5).lineTo(103.7,-32.5).curveTo(118.2,-32.5,128.6,-23).curveTo(138.9,-13.4,138.9,0).curveTo(138.9,13.4,128.6,23).curveTo(118.3,32.5,103.7,32.5).lineTo(-103.8,32.5).curveTo(-118.3,32.5,-128.6,23).curveTo(-138.9,13.5,-138.9,0).curveTo(-138.9,-13.4,-128.6,-23).curveTo(-118.3,-32.5,-103.8,-32.5).closePath();
	this.shape_6.setTransform(138.9,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#E8A02B").beginStroke().moveTo(-103.7,32.5).curveTo(-118.3,32.5,-128.6,23).curveTo(-138.9,13.5,-138.8,0).curveTo(-138.9,-13.4,-128.6,-23).curveTo(-118.3,-32.5,-103.7,-32.5).lineTo(103.7,-32.5).curveTo(118.2,-32.5,128.6,-23).curveTo(138.8,-13.4,138.8,0).curveTo(138.8,13.4,128.6,23).curveTo(118.3,32.5,103.7,32.5).closePath();
	this.shape_7.setTransform(138.9,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,279.7,67);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,13.1).lineTo(-3.8,12.4).curveTo(-2.1,11.3,-0.7,9.4).curveTo(0.6,7.6,1.5,5).lineTo(0.2,3.8).curveTo(-0.5,3.2,-1.2,2.8).lineTo(-0.2,1.3).lineTo(1,2.1).lineTo(2.1,2.9).lineTo(2.6,0.4).lineTo(2.9,-2.3).lineTo(0.2,-2.3).curveTo(-0.4,-0.4,-1.2,1.2).curveTo(-1.9,2.9,-2.9,4.2).lineTo(-3.6,3.6).lineTo(-4.4,2.9).curveTo(-3,1.2,-2.1,-1.3).curveTo(-1.1,-3.8,-0.7,-6.5).lineTo(1.2,-6.2).lineTo(1,-5.2).lineTo(0.7,-4.1).lineTo(3.4,-4.1).lineTo(3.8,-4.2).lineTo(4.9,-4).curveTo(4.5,0.9,3.6,4.3).curveTo(2.6,7.8,1.1,10.1).curveTo(-0.4,12.5,-2.4,13.9).lineTo(-3.1,13.1).closePath().moveTo(-13,13.1).lineTo(-13.9,12.7).curveTo(-13,10.6,-12.5,8.1).curveTo(-12.1,5.5,-11.9,2.9).lineTo(-11.8,-1.8).lineTo(-11.8,-12.5).lineTo(-4.4,-12.5).lineTo(-4.4,11).curveTo(-4.4,11.8,-4.6,12.4).curveTo(-4.8,12.9,-5.3,13.1).curveTo(-5.9,13.4,-6.7,13.5).lineTo(-9,13.5).lineTo(-9.2,12.5).lineTo(-9.6,11.5).lineTo(-7.9,11.6).lineTo(-6.8,11.6).lineTo(-6.4,11.4).lineTo(-6.3,10.9).lineTo(-6.3,3.7).lineTo(-10.1,3.7).curveTo(-10.3,6.3,-10.8,9).curveTo(-11.2,11.6,-12.2,13.7).lineTo(-13,13.1).closePath().moveTo(-10,-1.8).lineTo(-10,-0.2).lineTo(-10,1.6).lineTo(-6.3,1.6).lineTo(-6.3,-3.5).lineTo(-10,-3.5).closePath().moveTo(-10,-5.6).lineTo(-6.3,-5.6).lineTo(-6.3,-10.5).lineTo(-10,-10.5).closePath().moveTo(8.5,13.5).lineTo(7.5,13.4).curveTo(7,13.2,6.6,12.9).curveTo(6.3,12.8,6.2,12.5).curveTo(6,12.2,5.9,11.6).lineTo(5.8,10).lineTo(5.8,-4.7).lineTo(12.7,-4.7).lineTo(12.7,4.4).curveTo(12.7,5.1,12.5,5.5).curveTo(12.4,5.8,11.9,6.1).curveTo(11.4,6.3,10.6,6.4).lineTo(8.7,6.4).lineTo(8.5,5.5).lineTo(8.1,4.7).lineTo(9.6,4.7).lineTo(10.4,4.7).lineTo(10.8,4.6).lineTo(10.8,4.4).lineTo(10.8,-3).lineTo(7.7,-3).lineTo(7.7,10.2).lineTo(7.7,11.1).curveTo(7.8,11.6,8,11.7).lineTo(8.4,11.8).lineTo(8.9,11.8).lineTo(10.4,11.8).lineTo(11,11.8).lineTo(11.4,11.7).curveTo(11.5,11.6,11.5,11.6).curveTo(11.6,11.6,11.6,11.6).curveTo(11.7,11.5,11.7,11.5).curveTo(11.7,11.4,11.8,11.4).lineTo(12,10.9).lineTo(12.1,9.8).lineTo(12.2,8).lineTo(13,8.4).lineTo(13.9,8.8).lineTo(13.8,10.7).lineTo(13.5,12.1).lineTo(13.1,12.8).curveTo(12.9,13.1,12.5,13.2).lineTo(11.6,13.4).lineTo(10.6,13.5).closePath().moveTo(11.4,-8.7).lineTo(-1.1,-8.7).lineTo(-1.1,-5.6).lineTo(-3.1,-5.6).lineTo(-3.1,-10.7).lineTo(4.5,-10.7).lineTo(3.8,-11.9).lineTo(3.1,-13.2).lineTo(5,-13.9).lineTo(6,-12.3).lineTo(6.8,-10.7).lineTo(13.6,-10.7).lineTo(13.6,-5.7).lineTo(11.4,-5.6).closePath();
	this.shape.setTransform(228.8,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.6,13.6).lineTo(-7.1,12.5).lineTo(-7.6,11.4).lineTo(-5.2,11.5).lineTo(-3.2,11.5).lineTo(-2,11.4).curveTo(-1.5,11.4,-1.3,11.2).curveTo(-1.1,11,-1.1,10.6).lineTo(-1.1,4).lineTo(-13.5,4).lineTo(-13.5,1.8).lineTo(-1.1,1.8).lineTo(-1.1,-3.1).lineTo(-11.5,-3.1).lineTo(-11.5,-5.2).lineTo(-1.1,-5.2).lineTo(-1.1,-9.8).lineTo(-6.1,-9.4).lineTo(-10.9,-9.1).lineTo(-11.1,-10.2).lineTo(-11.5,-11.1).lineTo(-5.9,-11.4).curveTo(-3.1,-11.6,-0.3,-12).lineTo(4.7,-12.7).curveTo(7.1,-13.1,8.8,-13.6).lineTo(10.5,-11.9).curveTo(8.5,-11.3,6.2,-10.8).lineTo(1.1,-10.1).lineTo(1.1,-5.2).lineTo(11.7,-5.2).lineTo(11.7,-3.1).lineTo(1.1,-3.1).lineTo(1.1,1.8).lineTo(13.4,1.8).lineTo(13.4,4).lineTo(1.1,4).lineTo(1.1,10.6).curveTo(1.1,11.8,0.8,12.4).curveTo(0.3,13,-0.4,13.2).curveTo(-1.3,13.5,-2.8,13.6).lineTo(-5.2,13.6).lineTo(-6.6,13.6).closePath();
	this.shape_1.setTransform(199.1,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.8,11.9).lineTo(-12.7,11.3).curveTo(-11.1,9.4,-10.4,7.1).curveTo(-9.6,4.9,-9.3,2.5).curveTo(-9.1,0.2,-9.1,-1.9).lineTo(-9.1,-12.7).lineTo(12.7,-12.7).lineTo(12.7,9.6).curveTo(12.7,10.6,12.4,11.2).curveTo(12.1,11.8,11.4,12).curveTo(10.6,12.3,9.2,12.4).lineTo(5.8,12.4).lineTo(5.5,11.3).lineTo(5.1,10.2).lineTo(7.1,10.3).lineTo(8.8,10.3).lineTo(9.8,10.3).curveTo(10.1,10.3,10.3,10.1).curveTo(10.6,9.9,10.6,9.5).lineTo(10.6,3.4).lineTo(2.5,3.4).lineTo(2.5,12.3).lineTo(0.2,12.3).lineTo(0.2,3.4).lineTo(-7.2,3.4).curveTo(-7.6,6,-8.4,8.4).curveTo(-9.4,10.8,-11,12.7).lineTo(-11.8,11.9).closePath().moveTo(2.5,1.3).lineTo(10.6,1.3).lineTo(10.6,-3.7).lineTo(2.5,-3.7).closePath().moveTo(-7,-1.9).lineTo(-7,-0.4).lineTo(-7.1,1.3).lineTo(0.2,1.3).lineTo(0.2,-3.7).lineTo(-7,-3.7).closePath().moveTo(2.5,-5.8).lineTo(10.6,-5.8).lineTo(10.6,-10.6).lineTo(2.5,-10.6).closePath().moveTo(-7,-5.8).lineTo(0.2,-5.8).lineTo(0.2,-10.6).lineTo(-7,-10.6).closePath();
	this.shape_2.setTransform(167.8,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.6,13.8).lineTo(-9.6,-3.7).lineTo(-11.3,-1.7).lineTo(-12.9,0.2).lineTo(-13.3,-0.5).lineTo(-13.7,-1.3).lineTo(-14.2,-1.9).curveTo(-12.7,-3.4,-11.2,-5.3).curveTo(-9.8,-7.2,-8.6,-9.4).curveTo(-7.4,-11.6,-6.5,-13.8).lineTo(-4.4,-13.2).curveTo(-5,-11.6,-5.8,-10).lineTo(-7.5,-7).lineTo(-7.5,13.8).closePath().moveTo(-5.6,12.8).lineTo(-6.3,11.9).curveTo(-4.1,11.3,-2.6,10.6).curveTo(-1,9.8,-0,8.9).curveTo(-1.3,7.9,-2.4,6.6).curveTo(-3.5,5.4,-4.4,4).lineTo(-2.5,3.4).curveTo(-1.8,4.5,-0.9,5.5).curveTo(0.1,6.6,1.3,7.4).curveTo(2,6.4,2.4,5.2).curveTo(2.8,4,2.9,2.8).lineTo(-4.4,2.8).lineTo(-4.4,-5.4).lineTo(3.1,-5.4).lineTo(3.1,-8.4).lineTo(-5.2,-8.4).lineTo(-5.2,-10.5).lineTo(3.1,-10.5).lineTo(3.1,-13.6).lineTo(5.3,-13.6).lineTo(5.3,-10.5).lineTo(13.9,-10.5).lineTo(13.9,-8.4).lineTo(5.3,-8.4).lineTo(5.3,-5.4).lineTo(12.9,-5.4).lineTo(12.9,2.8).lineTo(5.1,2.8).curveTo(4.9,4.3,4.5,5.7).curveTo(4,7.2,3.1,8.5).curveTo(5.4,9.7,8.2,10.6).curveTo(11,11.3,14.2,11.7).lineTo(13.4,12.6).lineTo(12.8,13.7).curveTo(9.7,13.2,6.9,12.4).curveTo(4.1,11.5,1.8,10.1).curveTo(0.7,11.2,-1,12.1).curveTo(-2.7,13.1,-5,13.7).lineTo(-5.6,12.8).closePath().moveTo(5.3,-0.5).lineTo(5.3,0.2).lineTo(5.2,0.9).lineTo(10.8,0.9).lineTo(10.8,-3.6).lineTo(5.3,-3.6).closePath().moveTo(-2.3,0.9).lineTo(3,0.9).lineTo(3.1,0.2).lineTo(3.1,-0.5).lineTo(3.1,-3.6).lineTo(-2.3,-3.6).closePath();
	this.shape_3.setTransform(138.9,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,13.1).curveTo(-3.9,12.7,-4.3,12.5).curveTo(-2.9,11,-2.2,9.2).curveTo(-1.5,7.3,-1.3,5.4).curveTo(-1.1,3.6,-1.1,1.8).lineTo(-1.1,-4.2).lineTo(-1.8,-3.4).lineTo(-2.6,-2.7).lineTo(-3.2,-3.5).lineTo(-3.9,-4.4).curveTo(-2,-6.1,-0.4,-8.5).curveTo(1.1,-11,2.1,-13.8).lineTo(4.1,-13.3).lineTo(3.7,-12.2).lineTo(3.3,-11.2).lineTo(8.9,-11.2).lineTo(9.3,-11.3).lineTo(10.7,-10.3).curveTo(10.2,-9.3,9.4,-8.2).curveTo(8.6,-7,7.8,-6.1).lineTo(13.3,-6.1).lineTo(13.3,11).curveTo(13.3,11.9,13.1,12.4).curveTo(12.9,12.9,12.3,13.1).curveTo(11.8,13.4,10.8,13.4).lineTo(8.4,13.5).lineTo(8.2,12.5).lineTo(7.9,11.5).lineTo(9.6,11.5).lineTo(10.7,11.5).lineTo(11.1,11.4).lineTo(11.2,11).lineTo(11.2,6.5).lineTo(6.9,6.5).lineTo(6.9,12.6).lineTo(4.9,12.6).lineTo(4.9,6.5).lineTo(0.6,6.5).curveTo(0.3,8.5,-0.4,10.3).curveTo(-1.2,12.2,-2.6,13.8).lineTo(-3.4,13.1).closePath().moveTo(6.9,4.5).lineTo(11.2,4.5).lineTo(11.2,1).lineTo(6.9,1).closePath().moveTo(1,1.8).lineTo(0.9,3.2).lineTo(0.9,4.5).lineTo(4.9,4.5).lineTo(4.9,1).lineTo(1,1).closePath().moveTo(6.9,-0.9).lineTo(11.2,-0.9).lineTo(11.2,-4.1).lineTo(6.9,-4.1).closePath().moveTo(1,-0.9).lineTo(4.9,-0.9).lineTo(4.9,-4.1).lineTo(1,-4.1).closePath().moveTo(1.4,-7.6).lineTo(0.3,-6.1).lineTo(5.5,-6.1).lineTo(6.6,-7.6).lineTo(7.7,-9.3).lineTo(2.3,-9.3).lineTo(1.4,-7.6).closePath().moveTo(-10.7,12.4).lineTo(-10.7,1.5).lineTo(-11.4,2.8).lineTo(-12.2,4).lineTo(-12.5,3.3).lineTo(-12.9,2.4).lineTo(-13.3,1.6).curveTo(-11.7,-0.6,-10.7,-3.6).curveTo(-9.6,-6.6,-9.1,-10).lineTo(-12.6,-10).lineTo(-12.6,-12.1).lineTo(-2.6,-12.1).lineTo(-2.6,-10).lineTo(-7,-10).curveTo(-7.3,-8.2,-7.8,-6.4).lineTo(-8.8,-2.9).lineTo(-3.6,-2.9).lineTo(-3.6,10).lineTo(-8.8,10).lineTo(-8.8,12.4).closePath().moveTo(-8.8,8).lineTo(-5.4,8).lineTo(-5.4,-0.9).lineTo(-8.8,-0.9).closePath();
	this.shape_4.setTransform(108.4,31.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.4,12).lineTo(-13.4,9.7).lineTo(-9.3,9.7).lineTo(-9.3,-4.3).lineTo(-7,-4.3).lineTo(-7,9.7).lineTo(-0.4,9.7).lineTo(-0.4,-9.8).lineTo(-12.2,-9.8).lineTo(-12.2,-12).lineTo(12.4,-12).lineTo(12.4,-9.8).lineTo(1.9,-9.8).lineTo(1.9,-1.8).lineTo(11.3,-1.8).lineTo(11.3,0.4).lineTo(1.9,0.4).lineTo(1.9,9.7).lineTo(13.3,9.7).lineTo(13.3,12).closePath();
	this.shape_5.setTransform(79,31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,1.5).curveTo(-1.9,1,-2,0).curveTo(-1.9,-0.9,-1.4,-1.5).curveTo(-0.8,-2.1,-0,-2.1).curveTo(0.8,-2.1,1.4,-1.5).curveTo(1.9,-0.9,2,0).curveTo(1.9,1,1.4,1.5).curveTo(0.8,2.1,-0,2.1).curveTo(-0.8,2.1,-1.4,1.5).closePath();
	this.shape_6.setTransform(59.8,41.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,10.9).curveTo(-4.4,10.5,-5.3,9.9).curveTo(-6.3,9.2,-7,8.4).lineTo(-5.7,6.6).curveTo(-4.7,7.6,-3.4,8.3).curveTo(-2.1,9.1,-0.2,9.1).curveTo(1.8,9.1,3,8).curveTo(4.2,6.9,4.3,5).curveTo(4.3,3.7,3.6,2.7).curveTo(3,1.7,1.5,1.1).curveTo(-0.1,0.7,-2.6,0.6).lineTo(-2.6,-1.5).curveTo(-0.3,-1.5,1,-2).curveTo(2.4,-2.6,2.9,-3.5).curveTo(3.5,-4.5,3.5,-5.7).curveTo(3.5,-7.3,2.5,-8.2).curveTo(1.5,-9.1,-0.2,-9.2).curveTo(-1.5,-9.1,-2.7,-8.6).curveTo(-3.8,-8,-4.8,-7.1).lineTo(-6.2,-8.8).curveTo(-5,-9.9,-3.5,-10.7).curveTo(-2,-11.4,-0.1,-11.4).curveTo(1.8,-11.4,3.2,-10.7).curveTo(4.6,-10.1,5.5,-8.9).curveTo(6.3,-7.7,6.3,-5.9).curveTo(6.3,-3.9,5.2,-2.6).curveTo(4.2,-1.3,2.4,-0.6).lineTo(2.4,-0.5).curveTo(3.7,-0.1,4.7,0.6).curveTo(5.8,1.4,6.4,2.5).curveTo(7,3.6,7,5.1).curveTo(7,7.1,6.1,8.5).curveTo(5.2,9.9,3.6,10.7).curveTo(2,11.4,-0,11.4).curveTo(-1.7,11.4,-3,10.9).closePath();
	this.shape_7.setTransform(46.9,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1,1,1).moveTo(-103.8,-32.5).lineTo(103.8,-32.5).curveTo(118.2,-32.5,128.6,-23).curveTo(138.8,-13.4,138.8,0).curveTo(138.8,13.4,128.6,23).curveTo(118.3,32.5,103.8,32.5).lineTo(-103.8,32.5).curveTo(-118.3,32.5,-128.5,23).curveTo(-138.8,13.5,-138.8,0).curveTo(-138.8,-13.4,-128.5,-23).curveTo(-118.3,-32.5,-103.8,-32.5).closePath();
	this.shape_8.setTransform(138.9,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#E8A02B").beginStroke().moveTo(-103.8,32.5).curveTo(-118.3,32.5,-128.6,23).curveTo(-138.8,13.5,-138.9,0).curveTo(-138.8,-13.4,-128.6,-23).curveTo(-118.3,-32.5,-103.8,-32.5).lineTo(103.8,-32.5).curveTo(118.2,-32.5,128.5,-23).curveTo(138.9,-13.4,138.9,0).curveTo(138.9,13.4,128.5,23).curveTo(118.3,32.5,103.8,32.5).closePath();
	this.shape_9.setTransform(138.9,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,279.7,67);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 重点：下弹力跳音
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-17.2,26.1).lineTo(-17.2,1.3).lineTo(17.8,1.3).lineTo(17.8,26).lineTo(13.5,26).lineTo(13.5,24).lineTo(-13.1,24).lineTo(-13.1,26.1).closePath().moveTo(-13.1,20.4).lineTo(13.5,20.4).lineTo(13.5,14.2).lineTo(-13.1,14.2).closePath().moveTo(-13.1,10.9).lineTo(13.5,10.9).lineTo(13.5,4.9).lineTo(-13.1,4.9).closePath().moveTo(-25.1,-3.5).lineTo(-25.1,-7.3).lineTo(-10.9,-7.3).curveTo(-11.3,-9.2,-12.2,-11.4).curveTo(-13.1,-13.6,-14.2,-15.4).lineTo(-10.2,-16.4).curveTo(-8.8,-14.3,-7.9,-12).curveTo(-6.8,-9.7,-6.5,-7.8).lineTo(-8.3,-7.3).lineTo(6.3,-7.3).lineTo(7.8,-10.3).lineTo(9.2,-13.6).lineTo(10.4,-16.6).lineTo(14.9,-15.5).lineTo(12.8,-11.3).lineTo(10.8,-7.3).lineTo(25.1,-7.3).lineTo(25.1,-3.5).closePath().moveTo(-21.8,-16.8).lineTo(-21.8,-20.5).lineTo(-1.5,-20.5).lineTo(-2.5,-23).lineTo(-3.7,-25.3).lineTo(0.5,-26.1).curveTo(1.3,-24.9,2.1,-23.4).curveTo(2.8,-21.9,3.3,-20.5).lineTo(22.3,-20.5).lineTo(22.3,-16.8).closePath();
	this.shape.setTransform(333.1,49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-6.9,24.4).curveTo(-7.7,23.4,-8.4,22.8).curveTo(-4.7,21,-2.5,18.3).curveTo(-0.3,15.6,0.7,12.4).curveTo(1.8,9.2,2.2,5.8).lineTo(-1.9,8.9).lineTo(-5.7,11.9).lineTo(-8.1,8.1).lineTo(-3.3,5.1).lineTo(2.4,1.5).lineTo(2.4,-0.4).lineTo(2.4,-2.2).lineTo(2.4,-25.9).lineTo(6.3,-25.9).lineTo(6.3,-2.2).curveTo(6.4,1.6,6,5.6).curveTo(5.6,9.6,4.4,13.3).curveTo(3.2,17.2,0.8,20.3).curveTo(-1.6,23.6,-5.7,25.9).lineTo(-6.9,24.4).closePath().moveTo(13.2,24.4).curveTo(12,23.8,11.6,22.4).curveTo(11.2,21.1,11.2,18.6).lineTo(11.2,-25.9).lineTo(15.1,-25.9).lineTo(15.1,0.2).lineTo(16,-0.5).lineTo(19.7,2.3).curveTo(21.6,3.9,23.3,5.6).curveTo(25,7.1,26.2,8.4).lineTo(23.4,11.3).curveTo(22,9.6,19.8,7.6).curveTo(17.5,5.4,15.1,3.4).lineTo(15.1,18.6).curveTo(15.1,20.1,15.4,20.6).curveTo(15.7,21.1,16.6,21.1).lineTo(21.2,21.1).curveTo(21.8,21.1,22.1,20.5).curveTo(22.3,20,22.4,18.5).lineTo(22.7,14.6).lineTo(24.3,15.6).curveTo(25.4,16.1,26.2,16.3).curveTo(26,21,25,22.9).curveTo(23.9,24.9,21.4,24.9).lineTo(16.1,24.9).lineTo(15.8,24.9).curveTo(14.1,24.9,13.2,24.4).closePath().moveTo(-26.3,18.4).lineTo(-23.3,17.7).lineTo(-23.3,-1.4).lineTo(-20.1,-1.4).lineTo(-20.1,16.9).lineTo(-16.4,16).lineTo(-16.4,-5.9).lineTo(-23.4,-5.9).lineTo(-23.4,-23).lineTo(-7.1,-23).lineTo(-7.1,-5.9).lineTo(-12.9,-5.9).lineTo(-12.9,1.3).lineTo(-6.9,1.3).lineTo(-6.9,5).lineTo(-12.9,5).lineTo(-12.9,15.2).lineTo(-5.9,13.4).lineTo(-5.6,16.9).lineTo(-16,19.8).lineTo(-25.4,22.2).closePath().moveTo(-19.9,-9.5).lineTo(-10.7,-9.5).lineTo(-10.7,-19.4).lineTo(-19.9,-19.4).closePath().moveTo(15.2,-6.2).lineTo(17.4,-10.1).lineTo(19.6,-14.6).curveTo(20.7,-16.8,21.4,-18.8).lineTo(25.3,-16.9).lineTo(23,-12.6).lineTo(20.5,-8.3).curveTo(19.3,-6.2,18.2,-4.6).closePath().moveTo(-2.3,-8.6).curveTo(-3.1,-10.8,-4.1,-12.9).curveTo(-5.2,-15.1,-6.3,-17).lineTo(-3,-18.5).curveTo(-1.8,-16.6,-0.8,-14.5).curveTo(0.3,-12.3,1,-10.3).curveTo(1.8,-8.1,2.2,-6.5).lineTo(-1.3,-4.8).curveTo(-1.7,-6.6,-2.3,-8.6).closePath();
	this.shape_1.setTransform(276.6,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-22.3,24.1).curveTo(-23.2,23.2,-24,22.6).curveTo(-18.3,19.2,-14.5,15.2).curveTo(-10.8,11.3,-8.7,7.1).curveTo(-6.5,2.9,-5.4,-1.3).curveTo(-4.4,-5.6,-4.2,-9.5).lineTo(-22.3,-9.5).lineTo(-22.3,-13.7).lineTo(-3.9,-13.7).lineTo(-3.9,-15).lineTo(-3.9,-16.1).lineTo(-3.9,-25.9).lineTo(0.4,-25.9).lineTo(0.4,-16.1).lineTo(0.4,-15).lineTo(0.4,-13.7).lineTo(24,-13.7).lineTo(24,-13.2).lineTo(24,-12.3).lineTo(23.8,-11.5).curveTo(23.4,-2.8,22.9,3.3).curveTo(22.4,9.4,21.9,13.4).curveTo(21.3,17.4,20.6,19.6).curveTo(19.9,21.9,18.9,23).curveTo(18,24.2,16.9,24.7).curveTo(15.7,25.1,14.2,25.3).curveTo(12.6,25.4,10.1,25.3).lineTo(5.1,25.1).curveTo(5,24.1,4.6,22.9).curveTo(4.3,21.7,3.7,20.8).curveTo(6.6,21,9,21.1).lineTo(12.6,21.2).curveTo(13.4,21.2,14.1,21).curveTo(14.6,20.8,15.2,20.3).curveTo(16.2,19.4,17,16.2).curveTo(17.7,12.9,18.3,6.7).curveTo(19,0.4,19.5,-9.5).lineTo(0.2,-9.5).curveTo(-0.1,-5.1,-1.1,-0.5).curveTo(-2.2,4.3,-4.4,8.8).curveTo(-6.7,13.5,-10.7,17.8).curveTo(-14.7,22.2,-20.7,25.9).curveTo(-21.3,25.1,-22.3,24.1).closePath();
	this.shape_2.setTransform(218.7,49.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(6.5,25.8).lineTo(6.5,15.4).lineTo(-8.7,15.4).lineTo(-8.7,11.5).lineTo(6.5,11.5).lineTo(6.5,6.9).lineTo(-5.4,6.9).lineTo(-5.4,-14).lineTo(10.4,-14).curveTo(11.5,-15.6,12.7,-17.7).lineTo(14.8,-21.9).curveTo(15.9,-23.9,16.6,-25.8).lineTo(20.8,-24.5).lineTo(17.9,-19).lineTo(14.7,-14).lineTo(22.9,-14).lineTo(22.9,6.9).lineTo(10.7,6.9).lineTo(10.7,11.5).lineTo(25.4,11.5).lineTo(25.4,15.4).lineTo(10.7,15.4).lineTo(10.7,25.8).closePath().moveTo(10.7,3.5).lineTo(18.9,3.5).lineTo(18.9,-2).lineTo(10.7,-2).closePath().moveTo(-1.6,3.5).lineTo(6.5,3.5).lineTo(6.5,-2).lineTo(-1.6,-2).closePath().moveTo(10.7,-5.2).lineTo(18.9,-5.2).lineTo(18.9,-10.5).lineTo(10.7,-10.5).closePath().moveTo(-1.6,-5.2).lineTo(6.5,-5.2).lineTo(6.5,-10.5).lineTo(-1.6,-10.5).closePath().moveTo(-22.9,25.5).curveTo(-23,24.4,-23.4,23.3).curveTo(-23.7,22.3,-24.3,21.3).lineTo(-20.4,21.6).lineTo(-17.7,21.7).lineTo(-16.6,21.5).curveTo(-16.2,21.4,-15.7,21.1).curveTo(-15.2,20.6,-14.9,18.8).curveTo(-14.5,17.1,-14.2,14).lineTo(-13.6,5.6).lineTo(-25.1,5.6).lineTo(-24.8,0.5).lineTo(-24.6,-5.2).lineTo(-24.5,-10.9).lineTo(-13.6,-10.9).lineTo(-13.6,-19.5).lineTo(-25.4,-19.5).lineTo(-25.4,-23.3).lineTo(-9.6,-23.3).lineTo(-9.6,-7).lineTo(-20.9,-7).lineTo(-21,-2.5).lineTo(-21.2,1.9).lineTo(-9.5,1.9).lineTo(-9.5,2.5).lineTo(-9.6,3.7).curveTo(-9.9,10.4,-10.3,14.5).curveTo(-10.7,18.5,-11.2,20.8).curveTo(-11.7,23,-12.5,23.8).curveTo(-13.2,24.7,-14,25).curveTo(-14.9,25.4,-16.1,25.5).lineTo(-19,25.6).lineTo(-22.9,25.5).closePath().moveTo(1,-17.8).lineTo(-0.9,-21).lineTo(-3,-24).lineTo(0.4,-25.5).curveTo(2.1,-23.4,3.6,-21).curveTo(5.1,-18.6,5.9,-16.7).lineTo(2.5,-14.9).curveTo(1.9,-16.2,1,-17.8).closePath();
	this.shape_3.setTransform(163.7,49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-22.9,24.3).lineTo(-24.8,23.2).curveTo(-21.9,18.9,-20.5,13.7).curveTo(-19.1,8.5,-18.7,3.3).curveTo(-18.3,-1.9,-18.3,-6.4).lineTo(-18.3,-21.4).curveTo(-13.6,-21.6,-8.6,-22).lineTo(1.2,-22.9).curveTo(5.9,-23.5,10.1,-24.1).curveTo(14.2,-24.8,17.3,-25.7).lineTo(20.7,-22.4).curveTo(16.1,-21.1,10.4,-20.2).curveTo(4.6,-19.3,-1.7,-18.7).curveTo(-7.9,-18.1,-14.1,-17.8).lineTo(-14.1,-9).lineTo(16.3,-9).lineTo(17.1,-9.2).lineTo(20,-8).curveTo(18.1,-1.1,14.9,4.3).curveTo(11.6,9.6,7.3,13.7).curveTo(10.9,16.3,15.3,18.2).curveTo(19.6,20.2,24.8,21.3).curveTo(24,22,23.3,23.1).lineTo(22.1,25).curveTo(16.8,23.6,12.3,21.5).curveTo(7.8,19.3,4.1,16.4).curveTo(0.2,19.5,-4.3,21.6).curveTo(-8.7,23.8,-13.5,25.3).curveTo(-13.9,24.4,-14.6,23.3).curveTo(-15.3,22.2,-15.9,21.5).curveTo(-11.4,20.3,-7.1,18.3).curveTo(-2.9,16.3,0.9,13.5).curveTo(-2.9,9.9,-5.6,5.2).curveTo(-8.4,0.6,-10.3,-5).lineTo(-14.1,-5).curveTo(-14.1,-1.5,-14.4,2.5).curveTo(-14.7,6.5,-15.5,10.6).curveTo(-16.2,14.7,-17.6,18.6).curveTo(-19,22.4,-21.2,25.7).curveTo(-21.8,25.1,-22.9,24.3).closePath().moveTo(-1.9,3.7).curveTo(0.7,7.7,4,10.9).curveTo(7.5,7.8,10.1,3.8).curveTo(12.8,-0.1,14.5,-5).lineTo(-6.1,-5).curveTo(-4.4,-0.3,-1.9,3.7).closePath();
	this.shape_4.setTransform(106.3,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// point
	this.instance = new lib.point_1();
	this.instance.parent = this;
	this.instance.setTransform(42,49,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#FF9900").setStrokeStyle(5,1,1).moveTo(-209.6,-49).lineTo(167.4,-49).curveTo(184.9,-49,197.3,-34.6).curveTo(209.6,-20.3,209.6,0).curveTo(209.6,20.3,197.3,34.6).curveTo(184.9,49,167.4,49).lineTo(-209.6,49).closePath();
	this.shape_5.setTransform(209.6,49);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-209.6,49).lineTo(-209.6,-49).lineTo(167.4,-49).curveTo(184.9,-49,197.3,-34.6).curveTo(209.6,-20.3,209.6,0).curveTo(209.6,20.3,197.3,34.7).curveTo(184.9,49,167.4,49).closePath();
	this.shape_6.setTransform(209.6,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// BG-title
	this.instance_1 = new lib.BGtitle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(884,408.5,1,1,0,0,0,884,408.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-2.4,-2.5,424.1,102.9), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-17.2,26.1).lineTo(-17.2,1.3).lineTo(17.8,1.3).lineTo(17.8,26).lineTo(13.5,26).lineTo(13.5,24).lineTo(-13.1,24).lineTo(-13.1,26.1).closePath().moveTo(-13.1,20.4).lineTo(13.5,20.4).lineTo(13.5,14.2).lineTo(-13.1,14.2).closePath().moveTo(-13.1,10.8).lineTo(13.5,10.8).lineTo(13.5,4.9).lineTo(-13.1,4.9).closePath().moveTo(-25.1,-3.5).lineTo(-25.1,-7.3).lineTo(-10.9,-7.3).curveTo(-11.3,-9.2,-12.2,-11.4).curveTo(-13.1,-13.6,-14.2,-15.4).lineTo(-10.2,-16.4).curveTo(-8.8,-14.4,-7.9,-12).curveTo(-6.8,-9.7,-6.5,-7.8).lineTo(-8.3,-7.3).lineTo(6.3,-7.3).lineTo(7.8,-10.3).lineTo(9.2,-13.6).lineTo(10.4,-16.6).lineTo(14.9,-15.5).lineTo(12.8,-11.3).lineTo(10.8,-7.3).lineTo(25.1,-7.3).lineTo(25.1,-3.5).closePath().moveTo(-21.8,-16.8).lineTo(-21.8,-20.6).lineTo(-1.5,-20.6).lineTo(-2.5,-23).lineTo(-3.7,-25.3).lineTo(0.5,-26.1).curveTo(1.3,-24.9,2.1,-23.4).curveTo(2.8,-21.9,3.3,-20.6).lineTo(22.3,-20.6).lineTo(22.3,-16.8).closePath();
	this.shape.setTransform(333.1,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-6.9,24.4).curveTo(-7.7,23.4,-8.4,22.8).curveTo(-4.7,21,-2.5,18.3).curveTo(-0.3,15.6,0.7,12.4).curveTo(1.8,9.2,2.2,5.8).lineTo(-1.9,9).lineTo(-5.7,11.9).lineTo(-8.1,8.1).lineTo(-3.3,5.1).lineTo(2.4,1.5).lineTo(2.4,-0.4).lineTo(2.4,-2.2).lineTo(2.4,-25.9).lineTo(6.3,-25.9).lineTo(6.3,-2.2).curveTo(6.4,1.7,6,5.6).curveTo(5.6,9.6,4.4,13.4).curveTo(3.2,17.1,0.8,20.3).curveTo(-1.6,23.6,-5.7,26).lineTo(-6.9,24.4).closePath().moveTo(13.2,24.4).curveTo(12,23.9,11.6,22.5).curveTo(11.2,21.1,11.2,18.6).lineTo(11.2,-25.9).lineTo(15.1,-25.9).lineTo(15.1,0.2).lineTo(16,-0.6).lineTo(19.7,2.3).curveTo(21.6,4,23.3,5.6).curveTo(25,7.1,26.2,8.3).lineTo(23.4,11.3).curveTo(22,9.7,19.8,7.5).curveTo(17.5,5.5,15.1,3.5).lineTo(15.1,18.6).curveTo(15.1,20.2,15.4,20.7).curveTo(15.7,21.2,16.6,21.1).lineTo(21.2,21.1).curveTo(21.8,21.2,22.1,20.6).curveTo(22.3,20,22.4,18.5).lineTo(22.7,14.6).lineTo(24.3,15.6).curveTo(25.4,16.1,26.2,16.3).curveTo(26,21,25,22.9).curveTo(23.9,25,21.4,24.9).lineTo(16.1,24.9).lineTo(15.8,24.9).curveTo(14.1,24.9,13.2,24.4).closePath().moveTo(-26.3,18.4).lineTo(-23.3,17.7).lineTo(-23.3,-1.4).lineTo(-20.1,-1.4).lineTo(-20.1,17).lineTo(-16.4,16.1).lineTo(-16.4,-5.9).lineTo(-23.4,-5.9).lineTo(-23.4,-23.1).lineTo(-7.1,-23.1).lineTo(-7.1,-5.9).lineTo(-12.9,-5.9).lineTo(-12.9,1.2).lineTo(-6.9,1.2).lineTo(-6.9,4.9).lineTo(-12.9,4.9).lineTo(-12.9,15.3).lineTo(-5.9,13.5).lineTo(-5.6,17).lineTo(-16,19.8).lineTo(-25.4,22.2).closePath().moveTo(-19.9,-9.5).lineTo(-10.7,-9.5).lineTo(-10.7,-19.5).lineTo(-19.9,-19.5).closePath().moveTo(15.2,-6.2).lineTo(17.4,-10).lineTo(19.6,-14.6).curveTo(20.7,-16.9,21.4,-18.8).lineTo(25.3,-16.9).lineTo(23,-12.6).lineTo(20.5,-8.3).curveTo(19.3,-6.2,18.2,-4.6).closePath().moveTo(-2.3,-8.7).curveTo(-3.1,-10.8,-4.1,-12.9).curveTo(-5.2,-15.1,-6.3,-17).lineTo(-3,-18.5).curveTo(-1.8,-16.5,-0.8,-14.4).curveTo(0.3,-12.3,1,-10.3).curveTo(1.8,-8.1,2.2,-6.5).lineTo(-1.3,-4.8).curveTo(-1.7,-6.5,-2.3,-8.7).closePath();
	this.shape_1.setTransform(276.6,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-22.3,24.2).curveTo(-23.2,23.2,-24,22.6).curveTo(-18.3,19.2,-14.5,15.2).curveTo(-10.8,11.3,-8.7,7.1).curveTo(-6.5,2.9,-5.4,-1.3).curveTo(-4.4,-5.5,-4.2,-9.5).lineTo(-22.3,-9.5).lineTo(-22.3,-13.7).lineTo(-3.9,-13.7).lineTo(-3.9,-15).lineTo(-3.9,-16.1).lineTo(-3.9,-26).lineTo(0.4,-26).lineTo(0.4,-16.1).lineTo(0.4,-15).lineTo(0.4,-13.7).lineTo(24,-13.7).lineTo(24,-13.3).lineTo(24,-12.4).lineTo(23.8,-11.5).curveTo(23.4,-2.8,22.9,3.3).curveTo(22.4,9.4,21.9,13.4).curveTo(21.3,17.4,20.6,19.7).curveTo(19.9,21.9,18.9,23).curveTo(18,24.2,16.9,24.6).curveTo(15.7,25.1,14.2,25.3).curveTo(12.6,25.4,10.1,25.3).lineTo(5.1,25.1).curveTo(5,24.1,4.6,22.9).curveTo(4.3,21.7,3.7,20.8).curveTo(6.6,21.1,9,21.1).lineTo(12.6,21.2).curveTo(13.4,21.2,14.1,21).curveTo(14.6,20.8,15.2,20.3).curveTo(16.2,19.4,17,16.2).curveTo(17.7,12.9,18.3,6.6).curveTo(19,0.4,19.5,-9.5).lineTo(0.2,-9.5).curveTo(-0.1,-5.1,-1.1,-0.5).curveTo(-2.2,4.2,-4.4,8.9).curveTo(-6.7,13.4,-10.7,17.8).curveTo(-14.7,22.1,-20.7,26).curveTo(-21.3,25.1,-22.3,24.2).closePath();
	this.shape_2.setTransform(218.7,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(6.5,25.8).lineTo(6.5,15.4).lineTo(-8.7,15.4).lineTo(-8.7,11.6).lineTo(6.5,11.6).lineTo(6.5,6.9).lineTo(-5.4,6.9).lineTo(-5.4,-14).lineTo(10.4,-14).curveTo(11.5,-15.6,12.7,-17.7).lineTo(14.8,-21.9).curveTo(15.9,-23.9,16.6,-25.8).lineTo(20.8,-24.4).lineTo(17.9,-19).lineTo(14.7,-14).lineTo(22.9,-14).lineTo(22.9,6.9).lineTo(10.7,6.9).lineTo(10.7,11.6).lineTo(25.4,11.6).lineTo(25.4,15.4).lineTo(10.7,15.4).lineTo(10.7,25.8).closePath().moveTo(10.7,3.5).lineTo(18.9,3.5).lineTo(18.9,-1.9).lineTo(10.7,-1.9).closePath().moveTo(-1.6,3.5).lineTo(6.5,3.5).lineTo(6.5,-1.9).lineTo(-1.6,-1.9).closePath().moveTo(10.7,-5.2).lineTo(18.9,-5.2).lineTo(18.9,-10.5).lineTo(10.7,-10.5).closePath().moveTo(-1.6,-5.2).lineTo(6.5,-5.2).lineTo(6.5,-10.5).lineTo(-1.6,-10.5).closePath().moveTo(-22.9,25.5).curveTo(-23,24.4,-23.4,23.4).curveTo(-23.7,22.3,-24.3,21.3).lineTo(-20.4,21.6).lineTo(-17.7,21.7).lineTo(-16.6,21.6).curveTo(-16.2,21.4,-15.7,21).curveTo(-15.2,20.6,-14.9,18.9).curveTo(-14.5,17.1,-14.2,13.9).lineTo(-13.6,5.6).lineTo(-25.1,5.6).lineTo(-24.8,0.5).lineTo(-24.6,-5.2).lineTo(-24.5,-10.8).lineTo(-13.6,-10.8).lineTo(-13.6,-19.5).lineTo(-25.4,-19.5).lineTo(-25.4,-23.3).lineTo(-9.6,-23.3).lineTo(-9.6,-7).lineTo(-20.9,-7).lineTo(-21,-2.5).lineTo(-21.2,1.9).lineTo(-9.5,1.9).lineTo(-9.5,2.6).lineTo(-9.6,3.7).curveTo(-9.9,10.4,-10.3,14.5).curveTo(-10.7,18.6,-11.2,20.8).curveTo(-11.7,23,-12.5,23.8).curveTo(-13.2,24.7,-14,25).curveTo(-14.9,25.4,-16.1,25.5).lineTo(-19,25.6).lineTo(-22.9,25.5).closePath().moveTo(1,-17.8).lineTo(-0.9,-21).lineTo(-3,-24).lineTo(0.4,-25.5).curveTo(2.1,-23.4,3.6,-21).curveTo(5.1,-18.6,5.9,-16.8).lineTo(2.5,-15).curveTo(1.9,-16.2,1,-17.8).closePath();
	this.shape_3.setTransform(163.7,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,23.6).lineTo(-3.4,-19.3).lineTo(-25,-19.3).lineTo(-25,-23.6).lineTo(25,-23.6).lineTo(25,-19.3).lineTo(1.1,-19.3).lineTo(1.1,-9.4).lineTo(1.8,-10.2).curveTo(5.2,-8.6,9,-6.5).lineTo(16.2,-2.2).curveTo(19.7,-0.1,22,1.6).lineTo(19.1,5.5).curveTo(17,3.9,14.1,1.9).curveTo(11.1,-0,7.7,-2.1).lineTo(1.1,-5.9).lineTo(1.1,23.6).closePath();
	this.shape_4.setTransform(106.6,52.9);

	this.instance = new lib.point_1();
	this.instance.parent = this;
	this.instance.setTransform(42,50.6,1,1,0,0,0,12,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-209.6,49).lineTo(-209.6,-49).lineTo(167.4,-49).curveTo(184.9,-49,197.3,-34.7).curveTo(209.6,-20.3,209.6,-0).curveTo(209.6,20.3,197.3,34.6).curveTo(184.9,49,167.4,49).closePath();
	this.shape_5.setTransform(209.6,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,419.2,101.1);


(lib.弹框重点下弹力跳音 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.instance = new lib.content();
	this.instance.parent = this;
	this.instance.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 播放_1
	this.instance_1 = new lib.播放_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 注：手指触键动作方向是由上而下
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-2.3,16).lineTo(-2.3,-13.1).lineTo(-16.9,-13.1).lineTo(-16.9,-16).lineTo(16.9,-16).lineTo(16.9,-13.1).lineTo(0.7,-13.1).lineTo(0.7,-6.4).lineTo(1.3,-6.9).curveTo(3.5,-5.8,6.1,-4.4).curveTo(8.7,-3,11,-1.5).curveTo(13.4,-0.1,14.9,1.1).lineTo(12.9,3.8).curveTo(11.5,2.7,9.5,1.3).lineTo(5.2,-1.4).lineTo(0.7,-4).lineTo(0.7,16).closePath();
	this.shape.setTransform(634,816.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-15.1,16.5).lineTo(-15.1,-8.1).lineTo(-3.5,-8.1).lineTo(-2.8,-10.8).lineTo(-2.3,-13.7).lineTo(-17,-13.7).lineTo(-17,-16.5).lineTo(17.1,-16.5).lineTo(17.1,-13.7).lineTo(1.2,-13.7).lineTo(0.3,-10.8).lineTo(-0.6,-8.1).lineTo(15.1,-8.1).lineTo(15.1,12.9).curveTo(15.1,14.1,14.8,14.8).curveTo(14.5,15.5,13.6,15.8).curveTo(12.8,16.1,11.3,16.2).curveTo(9.9,16.3,7.8,16.3).curveTo(7.7,15.7,7.4,15).curveTo(7.1,14.2,6.8,13.6).lineTo(9.8,13.7).lineTo(11.5,13.6).curveTo(11.9,13.6,12.1,13.5).curveTo(12.2,13.3,12.2,12.9).lineTo(12.2,-5.4).lineTo(5.7,-5.4).lineTo(5.7,15.3).lineTo(2.9,15.3).lineTo(2.9,-5.4).lineTo(-3.4,-5.4).lineTo(-3.4,15.3).lineTo(-6.2,15.3).lineTo(-6.2,-5.4).lineTo(-12.3,-5.4).lineTo(-12.3,16.5).closePath();
	this.shape_1.setTransform(595.7,816.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-17,16.3).lineTo(-17,13.5).lineTo(-2.8,13.5).lineTo(-2.8,-16.3).lineTo(0.3,-16.3).lineTo(0.3,-4.5).lineTo(14.6,-4.5).lineTo(14.6,-1.7).lineTo(0.3,-1.7).lineTo(0.3,13.5).lineTo(17,13.5).lineTo(17,16.3).closePath();
	this.shape_2.setTransform(557.2,814.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-14.7,17.5).lineTo(-14.7,-10.1).lineTo(-1.6,-10.1).lineTo(-1.6,-17.5).lineTo(1.3,-17.5).lineTo(1.3,-10.1).lineTo(14.7,-10.1).lineTo(14.7,17.3).lineTo(11.8,17.3).lineTo(11.8,15.2).lineTo(-11.9,15.2).lineTo(-11.9,17.5).closePath().moveTo(1.3,12.3).lineTo(11.8,12.3).lineTo(11.8,3.8).lineTo(1.3,3.8).closePath().moveTo(-11.9,12.3).lineTo(-1.6,12.3).lineTo(-1.6,3.8).lineTo(-11.9,3.8).closePath().moveTo(1.3,1).lineTo(11.8,1).lineTo(11.8,-7.3).lineTo(1.3,-7.3).closePath().moveTo(-11.9,1).lineTo(-1.6,1).lineTo(-1.6,-7.3).lineTo(-11.9,-7.3).closePath();
	this.shape_3.setTransform(518.9,815.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-16.4,15.7).lineTo(-17.6,14.7).curveTo(-14.6,12.8,-12.8,9.7).curveTo(-11,6.5,-10.1,2.3).lineTo(-7.3,2.7).lineTo(-7.8,4.6).lineTo(-8.3,6.5).curveTo(-7.1,9.1,-5.3,10.5).curveTo(-3.6,12,-1,12.6).lineTo(-1,1.1).lineTo(-16.8,1.1).lineTo(-16.8,-1.5).lineTo(16.9,-1.5).lineTo(16.9,1.1).lineTo(1.8,1.1).lineTo(1.8,5.3).lineTo(14.4,5.3).lineTo(14.4,7.8).lineTo(1.8,7.8).lineTo(1.8,13.1).lineTo(3.9,13.2).lineTo(6.3,13.3).lineTo(7.8,13.3).lineTo(10.3,13.3).lineTo(13.2,13.3).lineTo(15.8,13.3).lineTo(17.6,13.3).lineTo(17,14.5).lineTo(16.6,16).lineTo(6.2,16).curveTo(2.3,16,-0.7,15.5).curveTo(-3.6,14.9,-5.8,13.5).curveTo(-8,12.1,-9.5,9.6).curveTo(-10.7,11.8,-12.2,13.6).curveTo(-13.7,15.4,-15.5,16.8).lineTo(-16.4,15.7).closePath().moveTo(-12.8,-4.1).lineTo(-12.8,-16.8).lineTo(12.7,-16.8).lineTo(12.7,-4.1).closePath().moveTo(-9.9,-6.3).lineTo(9.9,-6.3).lineTo(9.9,-9.4).lineTo(-9.9,-9.4).closePath().moveTo(-9.9,-11.5).lineTo(9.9,-11.5).lineTo(9.9,-14.6).lineTo(-9.9,-14.6).closePath();
	this.shape_4.setTransform(480.5,816.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(6.5,17.5).lineTo(6.1,16).lineTo(5.4,14.6).lineTo(8.1,14.6).lineTo(10.2,14.6).lineTo(11.6,14.6).curveTo(12.1,14.6,12.3,14.4).curveTo(12.5,14.2,12.5,13.7).lineTo(12.5,-8.1).lineTo(-12.5,-8.1).lineTo(-12.5,17.5).lineTo(-15.3,17.5).lineTo(-15.3,-10.9).lineTo(-4.9,-10.9).lineTo(-3.5,-14.2).curveTo(-2.9,-16,-2.5,-17.5).lineTo(0.9,-16.7).lineTo(-0.4,-13.7).lineTo(-1.7,-10.9).lineTo(15.4,-10.9).lineTo(15.4,13.7).curveTo(15.4,15.1,14.9,15.9).curveTo(14.6,16.7,13.6,17).curveTo(12.6,17.4,10.9,17.5).lineTo(8.1,17.5).lineTo(6.5,17.5).closePath().moveTo(-7.5,12.4).lineTo(-7.5,-3).lineTo(7.3,-3).lineTo(7.3,9.6).lineTo(-4.9,9.6).lineTo(-4.9,12.4).closePath().moveTo(-4.9,7.1).lineTo(4.7,7.1).lineTo(4.7,-0.5).lineTo(-4.9,-0.5).closePath();
	this.shape_5.setTransform(442.2,815.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-15.8,16.5).lineTo(-16.9,15.4).curveTo(-13.3,13.5,-11.1,10.9).curveTo(-8.9,8.3,-7.8,5.1).curveTo(-6.7,2,-6.3,-1.4).curveTo(-5.8,-4.7,-5.7,-8).lineTo(-16.1,-8).lineTo(-16.1,-10.8).lineTo(0.7,-10.8).lineTo(0,-12.6).lineTo(-0.9,-14.7).lineTo(-1.9,-16.6).lineTo(0.8,-17.7).lineTo(2.4,-14.7).curveTo(3.1,-13.2,3.6,-12).lineTo(0.9,-10.8).lineTo(16.9,-10.8).lineTo(16.9,-8).lineTo(-2.6,-8).lineTo(-2.8,-5).lineTo(-3.1,-2).lineTo(13.2,-2).lineTo(13.2,-1.5).lineTo(13.1,-0.6).curveTo(12.7,4.7,12.3,8.1).curveTo(11.9,11.5,11.4,13.3).curveTo(10.8,15.1,10.1,15.8).curveTo(9.4,16.5,8.6,16.8).curveTo(7.9,17.1,6.8,17.2).lineTo(4,17.2).lineTo(0.4,17).curveTo(0.3,16.3,0.1,15.6).curveTo(-0.2,14.8,-0.6,14.3).lineTo(2,14.4).lineTo(4.3,14.5).lineTo(5.8,14.5).lineTo(6.9,14.4).curveTo(7.3,14.3,7.6,14.1).curveTo(8.2,13.6,8.6,12.1).curveTo(9.1,10.6,9.4,7.8).curveTo(9.8,5.1,10.1,0.8).lineTo(-3.5,0.8).curveTo(-4.1,4.2,-5.4,7.3).curveTo(-6.7,10.4,-9,13.1).curveTo(-11.3,15.7,-14.8,17.7).lineTo(-15.8,16.5).closePath();
	this.shape_6.setTransform(403.4,815.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(2.9,17.4).lineTo(2.9,-8.5).lineTo(0.3,-8.5).curveTo(-1,-6.2,-2.3,-4.1).curveTo(-3.8,-2.1,-5.2,-0.5).lineTo(-6.2,-1.5).lineTo(-7.4,-2.4).curveTo(-5.7,-4.2,-4.1,-6.5).curveTo(-2.5,-8.9,-1.3,-11.6).curveTo(0,-14.3,1,-17.1).lineTo(3.8,-16.3).lineTo(2.8,-13.7).lineTo(1.6,-11.2).lineTo(17.6,-11.2).lineTo(17.6,-8.5).lineTo(5.8,-8.5).lineTo(5.8,-3).lineTo(16.7,-3).lineTo(16.7,-0.3).lineTo(5.8,-0.3).lineTo(5.8,5.5).lineTo(17.3,5.5).lineTo(17.3,8.2).lineTo(5.8,8.2).lineTo(5.8,17.4).closePath().moveTo(-12.1,17.4).lineTo(-12.1,-3.9).lineTo(-14,-1.5).lineTo(-15.9,0.6).lineTo(-16.4,-0.3).lineTo(-17,-1.3).lineTo(-17.6,-2.2).curveTo(-15.7,-4.1,-14,-6.5).curveTo(-12.2,-8.9,-10.7,-11.7).curveTo(-9.2,-14.5,-8.2,-17.4).lineTo(-5.4,-16.5).curveTo(-6.2,-14.5,-7.2,-12.4).lineTo(-9.3,-8.3).lineTo(-9.3,17.4).closePath();
	this.shape_7.setTransform(365.4,815.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-0.4,16.1).lineTo(-1.5,15.1).curveTo(1,12.7,2.5,9.4).curveTo(4,6.1,4.7,2.1).curveTo(5.4,-1.9,5.7,-6.3).lineTo(0.3,-6.3).lineTo(0.3,-9).lineTo(5.8,-9).lineTo(5.9,-13.1).lineTo(5.9,-17.2).lineTo(8.6,-17.2).lineTo(8.6,-13.1).lineTo(8.6,-9).lineTo(17,-9).lineTo(17,-8.7).lineTo(16.9,-8.1).lineTo(16.9,-7.6).lineTo(16.6,2.3).curveTo(16.4,6.4,16.1,9).curveTo(15.8,11.7,15.5,13.1).curveTo(15.2,14.6,14.7,15.2).curveTo(14.1,15.9,13.4,16.2).curveTo(12.8,16.6,11.9,16.7).lineTo(9.6,16.7).lineTo(6.6,16.6).lineTo(6.3,15.2).curveTo(6.1,14.4,5.8,13.8).lineTo(8.7,14).lineTo(10.7,14).curveTo(11.2,14.1,11.5,13.9).curveTo(11.9,13.8,12.2,13.4).curveTo(12.7,12.9,13.1,10.8).curveTo(13.4,8.8,13.7,4.6).lineTo(14.1,-6.3).lineTo(8.5,-6.3).curveTo(8.2,-1.6,7.5,2.8).curveTo(6.7,7.1,5.1,10.8).curveTo(3.5,14.5,0.7,17.2).lineTo(-0.4,16.1).closePath().moveTo(-15.6,12.4).lineTo(-15.7,12.4).lineTo(-15.7,12.5).lineTo(-16,11.2).lineTo(-16.5,9.8).curveTo(-16,9.7,-15.7,9).curveTo(-15.3,8.3,-14.8,7.2).lineTo(-13.9,5).lineTo(-12.8,1.4).curveTo(-12.1,-0.7,-11.7,-3).lineTo(-17,-3).lineTo(-17,-5.6).lineTo(-0.2,-5.6).lineTo(-0.2,-3).lineTo(-8.7,-3).curveTo(-9.5,0.1,-10.5,3.1).curveTo(-11.5,6.1,-12.7,8.7).lineTo(-3.6,6.8).lineTo(-4.7,3.8).lineTo(-5.8,1).lineTo(-3.4,0.3).lineTo(-1.9,4).lineTo(-0.5,7.7).lineTo(0.5,10.9).lineTo(-2.1,11.7).lineTo(-2.3,10.5).lineTo(-2.8,9.2).lineTo(-9.1,10.6).lineTo(-12.8,11.5).lineTo(-14.7,12.1).lineTo(-15.6,12.5).closePath().moveTo(-15.6,-12.1).lineTo(-15.6,-14.7).lineTo(-0.9,-14.7).lineTo(-0.9,-12.1).closePath();
	this.shape_8.setTransform(327.1,815.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-6.5,16.6).lineTo(-7.6,15.8).curveTo(-6.2,14.8,-5,13.3).curveTo(-3.8,11.9,-2.9,10).curveTo(-3.8,8.7,-4.4,6.9).curveTo(-5.1,5.2,-5.7,3.1).lineTo(-3.5,2.4).curveTo(-3.2,3.8,-2.7,5).curveTo(-2.3,6.2,-1.8,7.2).curveTo(-1.2,5.4,-0.8,3.3).curveTo(-0.3,1.2,-0,-1.3).lineTo(-5.4,-1.3).lineTo(-4.1,-4.6).lineTo(-2.6,-8.4).lineTo(-1.1,-12.3).lineTo(-5.4,-12.3).lineTo(-5.4,-14.7).lineTo(2.2,-14.7).lineTo(0.9,-11).lineTo(-0.6,-7.1).lineTo(-2,-3.5).lineTo(0.6,-3.5).lineTo(1,-3.6).lineTo(2.5,-3.2).curveTo(2.1,0.7,1.4,4).curveTo(0.8,7.2,-0.2,9.7).curveTo(1.4,11.7,3.3,12.8).curveTo(5.2,13.9,7.4,14.3).curveTo(9.7,14.7,12,14.7).lineTo(13.6,14.7).lineTo(16,14.6).lineTo(17.8,14.6).lineTo(17.2,15.8).lineTo(16.9,17.1).lineTo(11.9,17.1).curveTo(9.3,17.1,6.9,16.7).curveTo(4.5,16.3,2.5,15.2).curveTo(0.4,14.1,-1.4,12.1).curveTo(-2.2,13.9,-3.4,15.2).curveTo(-4.4,16.5,-5.7,17.5).lineTo(-6.5,16.6).closePath().moveTo(-13.2,17.1).lineTo(-13.2,17).lineTo(-13.2,17.1).lineTo(-13.8,16.2).lineTo(-14.5,15.3).lineTo(-13.8,14.6).curveTo(-13.4,14.1,-13.1,13.4).curveTo(-12.8,12.6,-12.8,11.7).lineTo(-12.8,3.9).lineTo(-17.1,3.9).lineTo(-17.1,1.4).lineTo(-12.8,1.4).lineTo(-12.8,-3.9).lineTo(-15.5,-3.9).lineTo(-15.5,-6.3).lineTo(-7.2,-6.3).lineTo(-7.2,-3.9).lineTo(-10.4,-3.9).lineTo(-10.4,1.4).lineTo(-6.2,1.4).lineTo(-6.2,3.9).lineTo(-10.4,3.9).lineTo(-10.4,11.9).lineTo(-6.6,9.5).lineTo(-6.2,10.6).lineTo(-5.8,11.6).lineTo(-10.1,14.7).lineTo(-12.3,16.3).lineTo(-13.2,17.1).closePath().moveTo(8.1,13.3).lineTo(8.1,8.7).lineTo(2.2,8.7).lineTo(2.2,6.4).lineTo(8.1,6.4).lineTo(8.1,3.4).lineTo(3.2,3.4).lineTo(3.2,1).lineTo(8.1,1).lineTo(8.1,-1.8).lineTo(3.7,-1.8).lineTo(3.7,-4).lineTo(8.1,-4).lineTo(8.1,-6.9).lineTo(2.1,-6.9).lineTo(2.1,-9.2).lineTo(8.1,-9.2).lineTo(8.1,-12.1).lineTo(3.7,-12.1).lineTo(3.7,-14.3).lineTo(8.1,-14.3).lineTo(8.1,-17.5).lineTo(10.4,-17.5).lineTo(10.4,-14.3).lineTo(15.8,-14.3).lineTo(15.8,-9.2).lineTo(17.5,-9.2).lineTo(17.5,-6.9).lineTo(15.8,-6.9).lineTo(15.8,-1.8).lineTo(10.4,-1.8).lineTo(10.4,1).lineTo(15.8,1).lineTo(15.8,3.4).lineTo(10.4,3.4).lineTo(10.4,6.4).lineTo(16.5,6.4).lineTo(16.5,8.7).lineTo(10.4,8.7).lineTo(10.4,13.3).closePath().moveTo(10.4,-4).lineTo(13.6,-4).lineTo(13.6,-6.9).lineTo(10.4,-6.9).closePath().moveTo(10.4,-9.2).lineTo(13.6,-9.2).lineTo(13.6,-12.1).lineTo(10.4,-12.1).closePath().moveTo(-17,-6.9).lineTo(-17.8,-8.1).curveTo(-16.4,-9.9,-15.4,-12.3).curveTo(-14.4,-14.7,-13.8,-17.4).lineTo(-11.5,-16.8).lineTo(-12,-14.9).lineTo(-12.6,-13.1).lineTo(-6.3,-13.1).lineTo(-6.3,-10.6).lineTo(-13.6,-10.6).curveTo(-14.2,-9.2,-14.9,-8).curveTo(-15.6,-6.8,-16.3,-5.8).lineTo(-17,-6.9).closePath();
	this.shape_9.setTransform(288.8,815.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-16.5,16.9).lineTo(-17.6,16.2).curveTo(-16.4,14.2,-15.9,11.7).curveTo(-15.3,9.3,-15.1,6.9).lineTo(-15,2.3).lineTo(-15,-4.5).lineTo(-15.3,-4).lineTo(-15.7,-3.7).lineTo(-16.7,-4.6).lineTo(-17.8,-5.4).curveTo(-15.8,-7.7,-14.2,-10.9).curveTo(-12.7,-14,-11.8,-17.5).lineTo(-9.2,-17).lineTo(-9.6,-15.5).lineTo(-10.1,-14.2).lineTo(-5.1,-14.2).lineTo(-4.6,-14.3).lineTo(-2.9,-13.2).lineTo(-4.1,-10.5).lineTo(-5.4,-7.9).lineTo(-1.5,-7.9).lineTo(-1.5,14.2).curveTo(-1.5,15,-1.7,15.5).curveTo(-1.9,16.1,-2.5,16.4).curveTo(-3,16.7,-3.8,16.8).lineTo(-5.7,16.9).lineTo(-6,15.8).lineTo(-6.5,14.5).lineTo(-5.1,14.6).lineTo(-4.2,14.5).lineTo(-3.9,14.5).lineTo(-3.8,14.2).lineTo(-3.8,8).lineTo(-7.1,8).lineTo(-7.1,16.3).lineTo(-9.2,16.3).lineTo(-9.2,8).lineTo(-12.8,8).curveTo(-13.1,10.5,-13.7,13).curveTo(-14.3,15.5,-15.5,17.6).lineTo(-16.5,16.9).closePath().moveTo(-7.1,5.8).lineTo(-3.8,5.8).lineTo(-3.8,1).lineTo(-7.1,1).closePath().moveTo(-12.6,2.3).lineTo(-12.6,4).lineTo(-12.7,5.8).lineTo(-9.2,5.8).lineTo(-9.2,1).lineTo(-12.6,1).closePath().moveTo(-7.1,-1.1).lineTo(-3.8,-1.1).lineTo(-3.8,-5.6).lineTo(-7.1,-5.6).closePath().moveTo(-12.6,-1.1).lineTo(-9.2,-1.1).lineTo(-9.2,-5.6).lineTo(-12.6,-5.6).closePath().moveTo(-11.8,-9.8).lineTo(-12.8,-7.9).lineTo(-8,-7.9).lineTo(-7.1,-9.8).curveTo(-6.6,-10.8,-6.2,-11.8).lineTo(-10.9,-11.8).lineTo(-11.8,-9.8).closePath().moveTo(14.9,15.7).lineTo(14.3,13.9).lineTo(9,14.6).lineTo(3.9,15.3).lineTo(-0.5,15.9).lineTo(-0.9,13.2).lineTo(2.5,12.7).lineTo(6.6,12.3).lineTo(6.6,5.1).lineTo(6.7,5.1).lineTo(6.7,4.2).lineTo(0.3,4.2).lineTo(0.3,-10.1).lineTo(6.6,-10.1).lineTo(6.6,-17.4).lineTo(9.4,-17.4).lineTo(9.4,-10.1).lineTo(15.8,-10.1).lineTo(15.8,4.2).lineTo(9.2,4.2).lineTo(9.2,5.1).lineTo(9.4,5.1).lineTo(9.4,11.9).lineTo(13.4,11.4).lineTo(12.4,9.1).lineTo(11.3,7).lineTo(13.6,6.2).curveTo(14.5,7.9,15.4,9.7).lineTo(16.9,13.3).curveTo(17.5,15.1,17.8,16.4).lineTo(15.3,17.3).lineTo(14.9,15.7).closePath().moveTo(9.2,1.7).lineTo(13.4,1.7).lineTo(13.4,-7.7).lineTo(9.2,-7.7).closePath().moveTo(2.7,1.7).lineTo(6.7,1.7).lineTo(6.7,-7.7).lineTo(2.7,-7.7).closePath();
	this.shape_10.setTransform(250.4,815.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-15.4,17.5).lineTo(-15.8,16.2).lineTo(-16.3,14.9).lineTo(-13.9,14.9).lineTo(-12.5,14.9).curveTo(-12.1,14.9,-12,14.7).curveTo(-11.8,14.6,-11.8,14.2).lineTo(-11.8,4).lineTo(-14.4,4.7).lineTo(-16.8,5.5).lineTo(-17.6,2.7).lineTo(-14.9,2).lineTo(-11.8,1.1).lineTo(-11.8,-7.1).lineTo(-17.1,-7.1).lineTo(-17.1,-9.8).lineTo(-11.8,-9.8).lineTo(-11.8,-17.5).lineTo(-9,-17.5).lineTo(-9,-9.8).lineTo(-4.5,-9.8).lineTo(-4.5,-7.1).lineTo(-9,-7.1).lineTo(-9,0.3).lineTo(-6.6,-0.4).lineTo(-4.3,-1.1).lineTo(-3.9,1.5).lineTo(-9,3.1).lineTo(-9,14.2).curveTo(-9,15.4,-9.3,16).curveTo(-9.6,16.7,-10.4,17).curveTo(-11.1,17.3,-12.3,17.4).lineTo(-14.2,17.5).lineTo(-15.4,17.5).closePath().moveTo(-2,17.5).lineTo(-2,0.8).lineTo(15.9,0.8).lineTo(15.9,17.3).lineTo(13.1,17.3).lineTo(13.1,15.7).lineTo(0.7,15.7).lineTo(0.7,17.5).closePath().moveTo(0.7,13.4).lineTo(13.1,13.4).lineTo(13.1,9.4).lineTo(0.7,9.4).closePath().moveTo(0.7,7).lineTo(13.1,7).lineTo(13.1,3.2).lineTo(0.7,3.2).closePath().moveTo(0.2,-2.7).curveTo(-1.1,-3.1,-1.5,-4).curveTo(-2,-4.9,-2,-6.6).lineTo(-2,-17.4).lineTo(0.8,-17.4).lineTo(0.8,-11.6).lineTo(5.3,-12.7).lineTo(9.6,-13.9).curveTo(11.6,-14.6,13.1,-15.2).lineTo(15.3,-13.1).curveTo(13.3,-12.3,10.9,-11.7).lineTo(5.9,-10.4).lineTo(0.8,-9.3).lineTo(0.8,-6.6).curveTo(0.8,-5.9,1,-5.6).curveTo(1.2,-5.2,1.8,-5.1).lineTo(3.7,-5).lineTo(12.3,-5).curveTo(13.3,-5,13.9,-5.3).curveTo(14.4,-5.7,14.7,-6.7).curveTo(14.9,-7.8,15,-9.8).curveTo(15.5,-9.4,16.2,-9.1).lineTo(17.6,-8.7).curveTo(17.4,-6.2,16.9,-4.8).curveTo(16.5,-3.5,15.4,-2.9).curveTo(14.4,-2.4,12.5,-2.4).lineTo(3.5,-2.4).lineTo(3,-2.4).curveTo(1.2,-2.4,0.2,-2.7).closePath();
	this.shape_11.setTransform(211.7,815.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(-8.4,17.4).lineTo(-9,16).lineTo(-9.7,14.6).lineTo(-6.6,14.7).lineTo(-4.1,14.7).lineTo(-2.6,14.6).curveTo(-2,14.6,-1.7,14.4).curveTo(-1.4,14.1,-1.4,13.6).lineTo(-1.4,5.1).lineTo(-17.2,5.1).lineTo(-17.2,2.3).lineTo(-1.4,2.3).lineTo(-1.4,-3.9).lineTo(-14.6,-3.9).lineTo(-14.6,-6.7).lineTo(-1.4,-6.7).lineTo(-1.4,-12.6).lineTo(-7.8,-12).lineTo(-13.9,-11.7).lineTo(-14.2,-13).lineTo(-14.6,-14.2).lineTo(-7.5,-14.6).curveTo(-4,-14.9,-0.5,-15.3).curveTo(3.1,-15.7,6.1,-16.2).curveTo(9.1,-16.7,11.3,-17.4).lineTo(13.5,-15.1).curveTo(10.9,-14.4,8,-13.8).curveTo(4.9,-13.3,1.5,-12.9).lineTo(1.5,-6.7).lineTo(15.1,-6.7).lineTo(15.1,-3.9).lineTo(1.5,-3.9).lineTo(1.5,2.3).lineTo(17.2,2.3).lineTo(17.2,5.1).lineTo(1.5,5.1).lineTo(1.5,13.6).curveTo(1.5,15.1,1,15.9).curveTo(0.5,16.6,-0.6,16.9).curveTo(-1.6,17.3,-3.6,17.4).lineTo(-6.6,17.4).lineTo(-8.4,17.4).closePath();
	this.shape_12.setTransform(173.7,815.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-2,11.5).curveTo(-2.8,10.7,-2.9,9.4).curveTo(-2.8,8.1,-2,7.3).curveTo(-1.2,6.5,0,6.5).curveTo(1.2,6.5,2,7.3).curveTo(2.9,8.1,2.9,9.4).curveTo(2.9,10.7,2,11.5).curveTo(1.2,12.3,0,12.3).curveTo(-1.2,12.3,-2,11.5).closePath().moveTo(-2,-7.3).curveTo(-2.8,-8,-2.9,-9.3).curveTo(-2.8,-10.7,-2,-11.5).curveTo(-1.2,-12.2,0,-12.3).curveTo(1.2,-12.2,2,-11.5).curveTo(2.9,-10.7,2.9,-9.3).curveTo(2.9,-8,2,-7.3).curveTo(1.2,-6.5,0,-6.5).curveTo(-1.2,-6.5,-2,-7.3).closePath();
	this.shape_13.setTransform(125.7,818);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-16.3,15.5).lineTo(-14.1,11.9).lineTo(-11.5,7.6).curveTo(-10.2,5.3,-9.1,3.1).lineTo(-7,5).lineTo(-9.2,9.2).lineTo(-11.6,13.5).lineTo(-14,17.4).closePath().moveTo(-7.6,16.6).lineTo(-7.6,13.9).lineTo(3.7,13.9).lineTo(3.7,4).lineTo(-4.9,4).lineTo(-4.9,1.3).lineTo(3.7,1.3).lineTo(3.7,-7.2).lineTo(-6.4,-7.2).lineTo(-6.4,-9.9).lineTo(16.6,-9.9).lineTo(16.6,-7.2).lineTo(6.6,-7.2).lineTo(6.6,1.3).lineTo(15.3,1.3).lineTo(15.3,4).lineTo(6.6,4).lineTo(6.6,13.9).lineTo(17.5,13.9).lineTo(17.5,16.6).closePath().moveTo(-12.4,-1.4).lineTo(-15,-2.9).lineTo(-17.5,-4.2).lineTo(-16,-6.3).lineTo(-13.4,-5.1).lineTo(-10.8,-3.7).lineTo(-8.8,-2.5).lineTo(-10.5,-0).lineTo(-12.4,-1.4).closePath().moveTo(4.1,-12.1).curveTo(3.7,-13.1,3,-14.3).lineTo(1.8,-16.5).lineTo(4.4,-17.4).lineTo(5.7,-15.3).lineTo(6.8,-13.1).lineTo(7.7,-11.2).lineTo(4.9,-10.1).curveTo(4.7,-11,4.1,-12.1).closePath().moveTo(-10.3,-11.8).lineTo(-12.9,-13.4).lineTo(-15.4,-14.7).lineTo(-13.9,-16.8).lineTo(-11.3,-15.5).lineTo(-8.7,-14.1).lineTo(-6.7,-12.8).lineTo(-8.3,-10.5).lineTo(-10.3,-11.8).closePath();
	this.shape_14.setTransform(97,815.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 形状 1 拷贝 61
	this.instance_2 = new lib.形状1拷贝61_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(884,474.5,1,1,0,0,0,884,461.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.弹框重点下弹力跳音, new cjs.Rectangle(0,13,1768,923), null);


(lib.shi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_5.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.movieClip_5 = new lib.元件6();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.parent = this;
	this.movieClip_5.setTransform(107.4,32.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.shi, new cjs.Rectangle(-0.5,-0.5,278.3,65.5), null);


(lib.duan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_6.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,13.7).lineTo(-1.5,0.6).lineTo(12.5,0.6).lineTo(12.5,13.5).lineTo(10.3,13.5).lineTo(10.3,12.3).lineTo(0.6,12.3).lineTo(0.6,13.7).closePath().moveTo(0.6,10.5).lineTo(10.3,10.5).lineTo(10.3,7.3).lineTo(0.6,7.3).closePath().moveTo(0.6,5.5).lineTo(10.3,5.5).lineTo(10.3,2.5).lineTo(0.6,2.5).closePath().moveTo(-12.3,12.6).lineTo(-12.8,11.7).lineTo(-10.9,11.7).lineTo(-9.8,11.7).lineTo(-9.3,11.6).curveTo(-9.3,11.5,-9.3,11.5).curveTo(-9.3,11.4,-9.2,11.4).curveTo(-9.2,11.3,-9.2,11.2).curveTo(-9.2,11.2,-9.2,11.1).lineTo(-9.2,3.1).lineTo(-11.2,3.7).lineTo(-13.1,4.3).lineTo(-13.8,2.1).lineTo(-11.7,1.6).lineTo(-9.2,0.9).lineTo(-9.2,-5.6).lineTo(-13.4,-5.6).lineTo(-13.4,-7.6).lineTo(-9.2,-7.6).lineTo(-9.2,-13.7).lineTo(-7,-13.7).lineTo(-7,-7.6).lineTo(-3.5,-7.6).lineTo(-3.5,-5.6).lineTo(-7,-5.6).lineTo(-7,0.2).lineTo(-5.2,-0.3).lineTo(-3.3,-0.9).lineTo(-3,1.2).lineTo(-7,2.5).lineTo(-7,11.1).curveTo(-7,12,-7.3,12.5).curveTo(-7.5,13,-8.1,13.3).curveTo(-8.7,13.6,-9.6,13.6).lineTo(-12.1,13.7).lineTo(-12.3,12.6).closePath().moveTo(0.1,-2.1).curveTo(-0.8,-2.5,-1.2,-3.1).curveTo(-1.6,-3.9,-1.5,-5.1).lineTo(-1.5,-13.6).lineTo(0.6,-13.6).lineTo(0.6,-9.1).lineTo(4.2,-10).lineTo(7.5,-10.9).curveTo(9.1,-11.4,10.2,-11.9).lineTo(12,-10.2).curveTo(10.4,-9.7,8.5,-9.1).lineTo(4.6,-8.2).lineTo(0.6,-7.3).lineTo(0.6,-5.1).curveTo(0.6,-4.7,0.7,-4.4).curveTo(1,-4.1,1.5,-4).lineTo(2.9,-3.9).lineTo(9.6,-3.9).curveTo(10.5,-3.9,10.8,-4.2).curveTo(11.3,-4.4,11.4,-5.3).curveTo(11.6,-6.1,11.7,-7.6).lineTo(12.7,-7.2).lineTo(13.8,-6.8).curveTo(13.6,-4.8,13.2,-3.8).curveTo(12.8,-2.7,12.1,-2.3).curveTo(11.2,-1.9,9.7,-1.9).lineTo(2.8,-1.9).lineTo(2.3,-1.9).curveTo(1,-1.9,0.1,-2.1).closePath();
	this.shape.setTransform(221.2,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.7,13.6).lineTo(-7,12.5).lineTo(-7.6,11.4).lineTo(-5.2,11.5).lineTo(-3.3,11.5).lineTo(-2.1,11.4).curveTo(-1.5,11.4,-1.4,11.2).curveTo(-1.2,11,-1.2,10.6).lineTo(-1.2,4).lineTo(-13.4,4).lineTo(-13.4,1.8).lineTo(-1.2,1.8).lineTo(-1.2,-3.1).lineTo(-11.4,-3.1).lineTo(-11.4,-5.2).lineTo(-1.2,-5.2).lineTo(-1.2,-9.8).lineTo(-6.1,-9.4).lineTo(-10.9,-9.1).lineTo(-11.2,-10.2).lineTo(-11.5,-11.1).lineTo(-6,-11.4).curveTo(-3.1,-11.6,-0.4,-12).lineTo(4.7,-12.7).curveTo(7.1,-13.1,8.8,-13.6).lineTo(10.5,-11.9).curveTo(8.5,-11.3,6.2,-10.8).lineTo(1.1,-10.1).lineTo(1.1,-5.2).lineTo(11.8,-5.2).lineTo(11.8,-3.1).lineTo(1.1,-3.1).lineTo(1.1,1.8).lineTo(13.5,1.8).lineTo(13.5,4).lineTo(1.1,4).lineTo(1.1,10.6).curveTo(1.1,11.8,0.8,12.4).curveTo(0.3,13,-0.5,13.2).curveTo(-1.3,13.5,-2.8,13.6).lineTo(-5.2,13.6).lineTo(-6.7,13.6).closePath();
	this.shape_1.setTransform(191.5,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.1,13).lineTo(0.9,12).lineTo(0.3,10.9).lineTo(2.6,11).lineTo(4.5,11).lineTo(5.8,11).curveTo(6.4,11.1,6.7,11).curveTo(7.1,10.9,7.4,10.7).curveTo(7.9,10.3,8.4,9.1).curveTo(8.8,7.8,9.2,5.6).lineTo(9.9,-0.1).lineTo(-7.4,-0.1).lineTo(-9.2,-0.1).lineTo(-8.2,-4.1).lineTo(-7.2,-8.7).lineTo(-6.4,-13.2).lineTo(-4.1,-13).lineTo(-4.4,-11.4).lineTo(-4.7,-9.7).lineTo(11.9,-9.7).lineTo(11.9,-7.6).lineTo(-5.2,-7.6).lineTo(-5.8,-4.8).lineTo(-6.4,-2.2).lineTo(12.4,-2.2).lineTo(12.4,-2).lineTo(12.3,-1.6).lineTo(12.3,-1.2).curveTo(11.9,3.1,11.4,5.8).curveTo(11,8.5,10.5,10).curveTo(9.9,11.5,9.3,12.1).curveTo(8.7,12.7,8.1,12.9).curveTo(7.4,13.1,6.5,13.1).lineTo(4.2,13.2).lineTo(1.1,13).closePath().moveTo(-12.4,6.3).lineTo(-12.4,4.1).lineTo(6.2,4.1).lineTo(6.2,6.3).closePath();
	this.shape_2.setTransform(160.6,31.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,13.7).lineTo(-4.1,-1).lineTo(-12,-1).lineTo(-12,-3.2).lineTo(10.4,-3.2).lineTo(10.4,6.8).curveTo(10.4,7.8,10.1,8.5).curveTo(9.8,9,9,9.3).curveTo(8.2,9.6,6.7,9.6).lineTo(3.2,9.6).curveTo(3.2,9.2,3,8.5).lineTo(2.5,7.4).lineTo(4.7,7.4).lineTo(6.4,7.4).lineTo(7.4,7.4).curveTo(7.8,7.4,7.9,7.3).curveTo(8.1,7.1,8.1,6.7).lineTo(8.1,-1).lineTo(-1.9,-1).lineTo(-1.9,13.7).closePath().moveTo(4,-4.7).lineTo(4,-8.1).lineTo(-4,-8.1).lineTo(-4,-4.7).lineTo(-6.2,-4.7).lineTo(-6.2,-8.1).lineTo(-13.2,-8.1).lineTo(-13.2,-10.3).lineTo(-6.2,-10.3).lineTo(-6.2,-13.7).lineTo(-4,-13.7).lineTo(-4,-10.3).lineTo(4,-10.3).lineTo(4,-13.7).lineTo(6.3,-13.7).lineTo(6.3,-10.3).lineTo(13.2,-10.3).lineTo(13.2,-8.1).lineTo(6.3,-8.1).lineTo(6.3,-4.7).closePath();
	this.shape_3.setTransform(131.4,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.7,12.6).lineTo(-13.6,11.7).curveTo(-9.6,10.3,-7.2,8.8).curveTo(-4.8,7.2,-3.5,5.6).curveTo(-2.2,4,-1.8,2.4).lineTo(-13,2.4).lineTo(-13,0.2).lineTo(-1.3,0.2).lineTo(-1.3,-0.7).lineTo(-1.3,-1.5).lineTo(-1.3,-5.1).lineTo(-11.2,-5.1).lineTo(-11.2,-7.3).lineTo(-5.4,-7.3).lineTo(-6.1,-9).lineTo(-7.1,-10.8).lineTo(-8.3,-12.5).lineTo(-6.5,-13.4).lineTo(-5.2,-11.8).lineTo(-4.1,-10).curveTo(-3.6,-9.1,-3.4,-8.4).lineTo(-5.4,-7.3).lineTo(2.9,-7.3).lineTo(4.1,-9.4).lineTo(5.2,-11.5).lineTo(6.2,-13.6).lineTo(8.5,-12.8).lineTo(6.9,-10).lineTo(5.3,-7.3).lineTo(11.2,-7.3).lineTo(11.2,-5.1).lineTo(1.2,-5.1).lineTo(1.2,-1.5).lineTo(1.2,-0.7).lineTo(1.2,0.2).lineTo(12.8,0.2).lineTo(12.8,2.4).lineTo(1.8,2.4).curveTo(3.5,5.7,6.5,8).curveTo(9.5,10.3,13.6,11.3).lineTo(12.7,12.3).lineTo(12,13.5).curveTo(8,12.3,5.1,9.9).curveTo(2.2,7.5,0.3,4.1).curveTo(-0.3,5.8,-1.8,7.5).curveTo(-3.2,9.2,-5.7,10.7).curveTo(-8.2,12.3,-12,13.6).lineTo(-12.7,12.6).closePath();
	this.shape_4.setTransform(101.5,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6,12.8).lineTo(-6.5,11.9).lineTo(-4.5,12).lineTo(-2.9,12).lineTo(-1.9,12).curveTo(-1.5,12,-1.3,11.8).curveTo(-1.3,11.8,-1.3,11.8).curveTo(-1.3,11.7,-1.2,11.7).curveTo(-1.2,11.6,-1.2,11.5).curveTo(-1.2,11.5,-1.2,11.4).lineTo(-1.2,9.5).lineTo(-13.2,9.5).lineTo(-13.2,7.9).lineTo(-1.2,7.9).lineTo(-1.2,5.9).lineTo(-11.5,5.9).lineTo(-11.5,4.3).lineTo(-1.2,4.3).lineTo(-1.2,2.5).lineTo(-5.7,2.6).lineTo(-10.1,2.7).lineTo(-10.2,1.9).lineTo(-10.5,1.2).lineTo(-5.4,1.1).lineTo(-0.3,0.8).lineTo(4.5,0.5).curveTo(6.7,0.3,8.4,-0).lineTo(9.7,1.4).curveTo(8,1.7,5.7,1.9).lineTo(1,2.3).lineTo(1,4.3).lineTo(11.6,4.3).lineTo(11.6,5.9).lineTo(1,5.9).lineTo(1,7.9).lineTo(13.2,7.9).lineTo(13.2,9.5).lineTo(1,9.5).lineTo(1,11.4).curveTo(1,12.3,0.7,12.8).curveTo(0.4,13.2,-0.3,13.4).curveTo(-1.1,13.6,-2.4,13.7).lineTo(-5.7,13.7).lineTo(-6,12.8).closePath().moveTo(-8.3,-0.6).lineTo(-8.3,-6).lineTo(8.4,-6).lineTo(8.4,-0.6).closePath().moveTo(-6.2,-2.1).lineTo(6.2,-2.1).lineTo(6.2,-4.5).lineTo(-6.2,-4.5).closePath().moveTo(10.4,-3.8).lineTo(10.4,-7.9).lineTo(-10.4,-7.9).lineTo(-10.4,-3.8).lineTo(-12.6,-3.8).lineTo(-12.6,-9.7).lineTo(-7.5,-9.7).lineTo(-8.5,-11.3).lineTo(-9.6,-12.8).lineTo(-7.7,-13.6).curveTo(-7,-12.8,-6.4,-11.9).lineTo(-5.4,-10.4).lineTo(-6.7,-9.7).lineTo(-1.2,-9.7).lineTo(-1.2,-13.7).lineTo(1.1,-13.7).lineTo(1.1,-9.7).lineTo(6.6,-9.7).lineTo(5.2,-10.3).lineTo(6.6,-11.9).lineTo(7.7,-13.6).lineTo(9.9,-12.8).lineTo(8.5,-11.2).lineTo(7.1,-9.7).lineTo(12.6,-9.7).lineTo(12.6,-3.8).closePath();
	this.shape_5.setTransform(71.5,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.4,1.5).curveTo(-1.9,1,-2,0.1).curveTo(-1.9,-0.9,-1.4,-1.5).curveTo(-0.8,-2.1,-0,-2.1).curveTo(0.8,-2.1,1.4,-1.5).curveTo(1.9,-0.9,2,0.1).curveTo(1.9,1,1.4,1.5).curveTo(0.8,2.1,-0,2.1).curveTo(-0.8,2.1,-1.4,1.5).closePath();
	this.shape_6.setTransform(52.2,40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6,11).lineTo(-6,8.7).lineTo(-1.1,8.7).lineTo(-1.1,-7.7).lineTo(-5,-7.7).lineTo(-5,-9.5).curveTo(-3.6,-9.7,-2.5,-10.1).curveTo(-1.4,-10.4,-0.5,-11).lineTo(1.6,-11).lineTo(1.6,8.7).lineTo(6,8.7).lineTo(6,11).closePath();
	this.shape_7.setTransform(40.1,31.5);

	this.movieClip_6 = new lib.元件7();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.parent = this;
	this.movieClip_6.setTransform(107.4,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(9.8,16.2).curveTo(7.8,15,5.5,13.9).lineTo(1,11.9).lineTo(3,10).curveTo(5.1,10.8,7.4,11.9).curveTo(9.7,12.9,11.8,14.1).curveTo(13.8,15.2,15.3,16.2).lineTo(13.2,18.3).curveTo(11.9,17.3,9.8,16.2).closePath().moveTo(-14.1,17.2).curveTo(-14.6,16.5,-15.1,16.1).curveTo(-11.7,15.2,-9.3,14.1).curveTo(-6.9,13,-5.4,11.9).curveTo(-3.9,10.7,-3.1,9.5).lineTo(-13,9.5).lineTo(-13,7.1).lineTo(-1.9,7.1).lineTo(-1.6,5.4).lineTo(-1.5,3.8).lineTo(-1.5,3.8).lineTo(-7.5,3.8).lineTo(-7.5,2.2).curveTo(-9.4,4,-11.7,5.5).curveTo(-13.9,6.9,-16.7,8.1).curveTo(-17,7.5,-17.6,6.8).curveTo(-18.1,6.1,-18.6,5.8).curveTo(-15,4.4,-12.3,2.4).curveTo(-9.5,0.4,-7.5,-2).lineTo(-17.8,-2).lineTo(-17.8,-4.4).lineTo(-5.7,-4.4).lineTo(-4.8,-5.9).lineTo(-4,-7.5).lineTo(-13.4,-7.5).lineTo(-13.4,-9.8).lineTo(-3,-9.8).lineTo(-2.6,-11.3).lineTo(-2.2,-12.8).lineTo(-15,-12.8).lineTo(-15,-15.2).lineTo(-1.7,-15.2).lineTo(-1.5,-16.8).lineTo(-1.4,-18.4).lineTo(1.5,-18.2).lineTo(1.4,-16.7).lineTo(1.2,-15.2).lineTo(14.8,-15.2).lineTo(14.8,-12.8).lineTo(0.7,-12.8).lineTo(0.4,-11.3).lineTo(-0.1,-9.8).lineTo(13.2,-9.8).lineTo(13.2,-7.5).lineTo(-0.9,-7.5).lineTo(-1.6,-5.9).lineTo(-2.4,-4.4).lineTo(17.5,-4.4).lineTo(17.5,-2).lineTo(7,-2).curveTo(9.1,0.5,12.2,2.5).curveTo(15.2,4.4,18.6,5.5).lineTo(17.6,6.6).lineTo(16.7,7.8).curveTo(14.1,6.9,11.8,5.5).curveTo(9.4,4,7.4,2.2).lineTo(7.4,3.8).lineTo(1.2,3.8).lineTo(1.2,3.9).lineTo(1.2,5.5).lineTo(0.9,7.1).lineTo(12.7,7.1).lineTo(12.7,9.5).lineTo(0.1,9.5).curveTo(-0.6,11.1,-2.2,12.7).curveTo(-3.8,14.2,-6.5,15.6).curveTo(-9.2,17.1,-13.3,18.3).lineTo(-14.1,17.2).closePath().moveTo(6.6,1.3).lineTo(5.1,-0.3).curveTo(4.4,-1,3.9,-2).lineTo(-3.9,-2).lineTo(-5.2,-0.3).curveTo(-5.9,0.6,-6.7,1.3).lineTo(6.6,1.3).lineTo(6.6,1.3).closePath();
	this.shape_8.setTransform(125.3,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,17.5).lineTo(-1.3,16.6).curveTo(0.1,13.8,0.7,10.7).curveTo(1.4,7.7,1.6,4.5).curveTo(1.9,1.4,1.8,-1.7).lineTo(1.8,-14.3).lineTo(6.6,-15.5).lineTo(11.1,-16.9).curveTo(13.3,-17.6,14.8,-18.4).lineTo(17.2,-16.2).curveTo(15.5,-15.4,13.5,-14.7).curveTo(11.4,-14,9.1,-13.4).lineTo(4.6,-12.4).lineTo(4.6,-5).lineTo(17.4,-5).lineTo(17.4,-2.2).lineTo(13.2,-2.2).lineTo(13.2,18.3).lineTo(10.5,18.3).lineTo(10.5,-2.2).lineTo(4.6,-2.2).lineTo(4.6,-1.7).curveTo(4.7,1.9,4.4,5.3).curveTo(4.1,8.8,3.3,12).curveTo(2.5,15.3,0.9,18.4).lineTo(-0.1,17.5).closePath().moveTo(-17.4,14.1).lineTo(-17.4,-16.9).lineTo(-14.8,-16.9).lineTo(-14.8,11.5).lineTo(-0.8,11.5).lineTo(-0.8,14.1).closePath().moveTo(-8.1,10.3).lineTo(-8.1,0.2).curveTo(-9.1,2.5,-10.5,4.6).curveTo(-11.8,6.6,-13.2,8).lineTo(-13.7,6.8).lineTo(-14.5,5.6).curveTo(-13.3,4.5,-12.2,3).curveTo(-11,1.5,-10.1,-0.3).curveTo(-9.1,-2,-8.4,-3.8).lineTo(-13.7,-3.8).lineTo(-13.7,-6.4).lineTo(-8.1,-6.4).lineTo(-8.1,-18.2).lineTo(-5.5,-18.2).lineTo(-5.5,-6.4).lineTo(0.3,-6.4).lineTo(0.3,-3.8).lineTo(-5.5,-3.8).lineTo(-5.5,-3.3).lineTo(-4.3,-2).lineTo(-2.6,-0.1).lineTo(-1,1.7).lineTo(0,3).lineTo(-1.7,5.1).lineTo(-2.7,3.5).lineTo(-4,1.6).lineTo(-5.5,-0.4).lineTo(-5.5,10.3).closePath().moveTo(-4.7,-8.6).lineTo(-3.8,-10.8).lineTo(-3,-13.4).lineTo(-2.3,-15.7).lineTo(0.1,-15).lineTo(-1.5,-11.2).curveTo(-2.2,-9.3,-3,-8).closePath().moveTo(-12,-11.4).curveTo(-12.6,-13.3,-13.2,-15).lineTo(-11.3,-15.6).curveTo(-10.8,-14.5,-10.5,-13.3).lineTo(-9.8,-10.9).curveTo(-9.5,-9.7,-9.4,-8.7).lineTo(-11.5,-8).curveTo(-11.6,-9.5,-12,-11.4).closePath();
	this.shape_9.setTransform(86,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.movieClip_6},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.duan, new cjs.Rectangle(-0.5,-0.5,275.7,65.5), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,209.6,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(-209.6,-50.5,419.2,101.1), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,138.8,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(-139.8,-33.4,279.7,67), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,138.8,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(-139.8,-33.4,279.7,67), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,138.8,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(-139.8,-33.4,279.7,67), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_7.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.movieClip_7 = new lib.元件19();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(-139.3,-32.9,278.7,66), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_5.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.movieClip_5 = new lib.元件16();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(-139.3,-32.9,278.7,66), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_6.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.movieClip_6 = new lib.元件17();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-139.3,-32.9,278.7,66), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件5();
	this.instance.parent = this;
	this.instance.setTransform(29.5,34,1,1,0,0,0,29.5,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,67.1,76.2);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_9.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.movieClip_9 = new lib.title();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.parent = this;
	this.movieClip_9.setTransform(884,410.1,1,1,0,0,0,884,408.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_9).wait(1));

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(-2.4,-0.9,424.1,102.9), null);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.movieClip_8.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("已单击鼠标");
			// 结束您的自定义代码
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.movieClip_8 = new lib.元件20();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.parent = this;
	this.movieClip_8.setTransform(209.6,50.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_8).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(0,0,419.2,101.1), null);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10.5,1,1,1,0,0,0,29.5,34);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#4C5C77").setStrokeStyle(5).moveTo(82.1,-0).curveTo(82.1,16.7,75.7,31.9).curveTo(69.4,46.7,58.1,58.1).curveTo(46.7,69.4,32,75.7).curveTo(16.7,82.1,0,82.1).curveTo(-16.7,82.1,-31.9,75.7).curveTo(-46.7,69.4,-58.1,58.1).curveTo(-69.4,46.7,-75.7,31.9).curveTo(-82.1,16.7,-82.1,-0).curveTo(-82.1,-16.7,-75.7,-32).curveTo(-69.4,-46.7,-58.1,-58.1).curveTo(-46.7,-69.4,-31.9,-75.7).curveTo(-16.7,-82.1,0,-82.1).curveTo(16.7,-82.1,32,-75.7).curveTo(46.7,-69.4,58.1,-58.1).curveTo(69.4,-46.7,75.7,-32).curveTo(82.1,-16.7,82.1,-0).closePath();
	this.shape.setTransform(1.5,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E8A02B").beginStroke().moveTo(-27.3,64.7).curveTo(-39.9,59.3,-49.7,49.6).curveTo(-70.2,29.1,-70.2,-0).curveTo(-70.2,-14.2,-64.7,-27.3).curveTo(-59.3,-39.9,-49.7,-49.6).curveTo(-39.9,-59.3,-27.3,-64.7).curveTo(-14.3,-70.2,0,-70.2).curveTo(14.3,-70.2,27.3,-64.7).curveTo(39.9,-59.3,49.7,-49.6).curveTo(59.4,-39.9,64.7,-27.3).curveTo(70.2,-14.3,70.2,-0).curveTo(70.2,14.3,64.7,27.3).curveTo(59.4,39.9,49.7,49.6).curveTo(39.9,59.3,27.3,64.7).curveTo(14.3,70.2,0,70.2).curveTo(-14.3,70.2,-27.3,64.7).closePath();
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.1,-83.6,169.3,169.3);


(lib.play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.5,regY:1,x:69,y:68.2},0).wait(1).to({y:67.8},0).wait(1).to({y:67.5},0).wait(1).to({y:67.1},0).wait(1).to({y:66.8},0).wait(1).to({y:66.4},0).wait(1).to({y:66.1},0).wait(1).to({y:65.7},0).wait(1).to({y:65.4},0).wait(1).to({y:65},0).wait(1).to({y:64.7},0).wait(1).to({y:64.3},0).wait(1).to({y:64},0).wait(1).to({y:63.6},0).wait(1).to({y:63.3},0).wait(1).to({y:62.9},0).wait(1).to({y:62.6},0).wait(1).to({y:62.2},0).wait(1).to({y:61.9},0).wait(1).to({y:61.5},0).wait(1).to({y:61.2},0).wait(1).to({y:60.8},0).wait(1).to({y:60.5},0).wait(1).to({y:60.8},0).wait(1).to({y:61.2},0).wait(1).to({y:61.5},0).wait(1).to({y:61.8},0).wait(1).to({y:62.2},0).wait(1).to({y:62.5},0).wait(1).to({y:62.8},0).wait(1).to({y:63.2},0).wait(1).to({y:63.5},0).wait(1).to({y:63.8},0).wait(1).to({y:64.2},0).wait(1).to({y:64.5},0).wait(1).to({y:64.8},0).wait(1).to({y:65.2},0).wait(1).to({y:65.5},0).wait(1).to({y:65.8},0).wait(1).to({y:66.2},0).wait(1).to({y:66.5},0).wait(1).to({y:66.8},0).wait(1).to({y:67.2},0).wait(1).to({y:67.5},0).wait(1).to({y:67.8},0).wait(1).to({y:68.2},0).wait(1).to({y:68.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-16.1,169.3,169.3);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9,-0.1,1,1,0,0,0,29.5,34);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#4C5C77").setStrokeStyle(5).moveTo(82.1,-0).curveTo(82.1,16.7,75.7,31.9).curveTo(69.4,46.7,58.1,58.1).curveTo(46.7,69.4,32,75.7).curveTo(16.7,82.1,0,82.1).curveTo(-16.7,82.1,-31.9,75.7).curveTo(-46.7,69.4,-58.1,58.1).curveTo(-69.4,46.7,-75.7,31.9).curveTo(-82.1,16.7,-82.1,-0).curveTo(-82.1,-16.7,-75.7,-32).curveTo(-69.4,-46.7,-58.1,-58.1).curveTo(-46.7,-69.4,-31.9,-75.7).curveTo(-16.7,-82.1,0,-82.1).curveTo(16.7,-82.1,32,-75.7).curveTo(46.7,-69.4,58.1,-58.1).curveTo(69.4,-46.7,75.7,-32).curveTo(82.1,-16.7,82.1,-0).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E8A02B").beginStroke().moveTo(-27.3,64.7).curveTo(-39.9,59.3,-49.7,49.6).curveTo(-70.2,29.1,-70.2,-0).curveTo(-70.2,-14.2,-64.7,-27.3).curveTo(-59.3,-39.9,-49.7,-49.6).curveTo(-39.9,-59.3,-27.3,-64.7).curveTo(-14.3,-70.2,0,-70.2).curveTo(14.3,-70.2,27.3,-64.7).curveTo(39.9,-59.3,49.7,-49.6).curveTo(59.4,-39.9,64.7,-27.3).curveTo(70.2,-14.3,70.2,-0).curveTo(70.2,14.3,64.7,27.3).curveTo(59.4,39.9,49.7,49.6).curveTo(39.9,59.3,27.3,64.7).curveTo(14.3,70.2,0,70.2).curveTo(-14.3,70.2,-27.3,64.7).closePath();
	this.shape_1.setTransform(-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(-84.6,-84.6,169.3,169.3), null);


(lib.menu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.movieClip_2.on('click', function(){
		/*
		将播放头移动到时间轴中的指定帧编号并继续从该帧播放。
		可在主时间轴或影片剪辑时间轴上使用。
		*/
		_this.gotoAndPlay(2);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// 图层_1
	this.movieClip_2 = new lib.play();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(0,-2,1,1,0,0,0,69,68.5);

	this.movieClip_3 = new lib.duan();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(-32.1,83.7,1,1,0,0,0,107.4,32.2);
	this.movieClip_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_2}]}).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).to({state:[{t:this.movieClip_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1).to({_off:false},0).wait(1).to({regX:137.3,x:-2.2,y:-64.5},0).wait(1).to({x:-2.3,y:-170.1},0).wait(1).to({x:-2.4,y:-245.7},0).wait(1).to({x:-2.5,y:-301.1},0).wait(1).to({x:-2.6,y:-343.7},0).wait(1).to({x:-2.7,y:-378.9},0).wait(1).to({x:-2.8,y:-410.3},0).wait(1).to({x:-2.9,y:-440.1},0).wait(1).to({x:-3,y:-469.2},0).wait(1).to({x:-3.1,y:-498.4},0).wait(1));

	// 图层_6
	this.movieClip_3_1 = new lib.元件14();
	this.movieClip_3_1.name = "movieClip_3_1";
	this.movieClip_3_1.parent = this;
	this.movieClip_3_1.setTransform(-0.6,436);
	this.movieClip_3_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3_1).wait(1).to({_off:false},0).wait(1).to({x:-0.7,y:376.8},0).wait(1).to({x:-0.8,y:317.6},0).wait(1).to({x:-0.9,y:258.4},0).wait(1).to({x:-1,y:199.2},0).wait(1).to({x:-1.1,y:140},0).wait(1).to({x:-1.2,y:80.8},0).wait(1).to({x:-1.3,y:21.6},0).wait(1).to({x:-1.4,y:-37.6},0).wait(1).to({x:-1.5,y:-96.8},0).wait(1).to({y:-156},0).wait(1));

	// 图层_5
	this.movieClip_1 = new lib.元件12();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(-0.6,351.6);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({_off:false},0).wait(1).to({x:-0.7,y:292.4},0).wait(1).to({x:-0.8,y:233.2},0).wait(1).to({x:-0.9,y:174},0).wait(1).to({x:-1,y:114.8},0).wait(1).to({x:-1.1,y:55.6},0).wait(1).to({x:-1.2,y:-3.6},0).wait(1).to({x:-1.3,y:-62.8},0).wait(1).to({x:-1.4,y:-122},0).wait(1).to({x:-1.5,y:-181.2},0).wait(1).to({y:-240.4},0).wait(1));

	// 图层_4
	this.movieClip_2_1 = new lib.元件13();
	this.movieClip_2_1.name = "movieClip_2_1";
	this.movieClip_2_1.parent = this;
	this.movieClip_2_1.setTransform(-0.6,256.4);
	this.movieClip_2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2_1).wait(1).to({_off:false},0).wait(1).to({x:-0.7,y:198.2},0).wait(1).to({x:-0.8,y:140},0).wait(1).to({x:-0.9,y:81.8},0).wait(1).to({x:-1,y:23.6},0).wait(1).to({x:-1.1,y:-34.5},0).wait(1).to({x:-1.2,y:-92.7},0).wait(1).to({x:-1.3,y:-150.9},0).wait(1).to({x:-1.4,y:-209.1},0).wait(1).to({x:-1.5,y:-267.3},0).wait(1).to({y:-325.5},0).wait(1));

	// 图层_2
	this.movieClip_4 = new lib.shi();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(-32.1,169.2,1,1,0,0,0,107.4,32.2);
	this.movieClip_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1).to({_off:false},0).wait(1).to({regX:138.7,x:-0.8,y:85.2},0).wait(1).to({x:-0.9,y:7.1},0).wait(1).to({x:-1,y:-65.4},0).wait(1).to({x:-1.1,y:-131.9},0).wait(1).to({x:-1.2,y:-192.8},0).wait(1).to({x:-1.3,y:-247.8},0).wait(1).to({x:-1.4,y:-297},0).wait(1).to({x:-1.5,y:-340.5},0).wait(1).to({x:-1.6,y:-378.1},0).wait(1).to({x:-1.7,y:-410},0).wait(1));

	// 图层_1
	this.movieClip_4_1 = new lib.元件15();
	this.movieClip_4_1.name = "movieClip_4_1";
	this.movieClip_4_1.parent = this;
	this.movieClip_4_1.setTransform(0.1,-1.9);
	this.movieClip_4_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4_1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.6,-86.6,169.3,169.3);


// stage content:
(lib._042下弹力 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(440.8,392.9,1,1,0,0,0,440.8,204.6);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209.6,102.1,1,1,0,0,0,209.6,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层_3
	this.instance_2 = new lib.跳音知识点04下弹力();
	this.instance_2.parent = this;
	this.instance_2.setTransform(394,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 弹框-重点-下弹力跳音
	this.instance_3 = new lib.menu();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1630.9,800.4,1,1,0,0,0,0,-2);

	this.instance_4 = new lib.弹框重点下弹力跳音();
	this.instance_4.parent = this;
	this.instance_4.setTransform(884,461.5,1,1,0,0,0,884,474.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(881.6,462,1770.5,923);
// library properties:
lib.properties = {
	id: '0B5F01FFDB030B4FBC7EECCCA1DB3D05',
	width: 1768,
	height: 924,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/04.2下弹力_atlas_P_.png?1530788535590", id:"04.2下弹力_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0B5F01FFDB030B4FBC7EECCCA1DB3D05'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;