(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: "03 跳音知识点_03含义_atlas_P_",
            frames: [[0, 0, 1768, 923], [104, 925, 91, 65], [0, 925, 102, 76], [197, 925, 24, 24]]
        },
        {
            name: "03 跳音知识点_03含义_atlas_NP_",
            frames: [[0, 0, 1920, 1080], [0, 1082, 1920, 1080], [1922, 0, 1920, 1080], [1922, 1082, 1920, 1080], [0, 2164, 1920, 1080]]
        }
    ];


// symbols:


    (lib._02 = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_P_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();


    (lib.apple = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_P_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();


    (lib.applesDropShadow = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_P_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();


    (lib.BGtitle = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_NP_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();


    (lib.形状1拷贝2 = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_NP_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();


    (lib.形状1拷贝3 = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_NP_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();


    (lib.形状5拷贝 = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_NP_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();


    (lib.形状6 = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_NP_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();


    (lib.point = function () {
        this.spriteSheet = ss["03 跳音知识点_03含义_atlas_P_"];
        this.gotoAndStop(3);
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


    (lib.applesDropShadow_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.applesDropShadow();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.applesDropShadow_1, new cjs.Rectangle(0, 0, 102, 76), null);


    (lib.apple_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.apple();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.apple_1, new cjs.Rectangle(0, 0, 91, 65), null);


    (lib.apple_2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = getMCSymbolPrototype(lib.apple_2, null, null);


    (lib.point_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.point();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.point_1, new cjs.Rectangle(0, 0, 24, 24), null);


    (lib.BGtitle_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.moveTo(-130.9, 49).lineTo(-130.9, -49).lineTo(88.7, -49).curveTo(106.2, -49, 118.6, -34.6).curveTo(130.9, -20.3, 130.9, 0).curveTo(130.9, 20.3, 118.6, 34.7).curveTo(106.2, 49, 88.7, 49).closePath();
        mask.setTransform(130.9, 49);

        // 图层_1
        this.instance = new lib.BGtitle();
        this.instance.parent = this;
        this.instance.setTransform(-76, -132);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.BGtitle_1, new cjs.Rectangle(0, 0, 261.9, 98), null);


    (lib.遮罩 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

    }).prototype = getMCSymbolPrototype(lib.遮罩, null, null);


    (lib.形状6_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.moveTo(-71, 5).lineTo(-71, -5).lineTo(71, -5).lineTo(71, 5).closePath();
        mask.setTransform(71, 5);

        // 图层_1
        this.instance = new lib.形状6();
        this.instance.parent = this;
        this.instance.setTransform(-1511, -553);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.形状6_1, new cjs.Rectangle(0, 0, 142, 10), null);


    (lib.形状5拷贝_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.moveTo(-14.4, 14.1).curveTo(-20.5, 8.1, -20.5, -0.7).curveTo(-20.5, -8.2, -14.4, -14).curveTo(-8.2, -20, 0.4, -20).curveTo(8, -20, 14.2, -14).curveTo(20.5, -8, 20.5, -0.7).curveTo(20.5, 7.9, 14.4, 14.1).curveTo(8.4, 20, 0.4, 20).curveTo(-8.4, 20, -14.4, 14.1).closePath();
        mask.setTransform(20.5, 20);

        // 图层_1
        this.instance = new lib.形状5拷贝();
        this.instance.parent = this;
        this.instance.setTransform(-1121, -789);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.形状5拷贝_1, new cjs.Rectangle(0, 0, 41, 40), null);


    (lib.形状1拷贝3_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.moveTo(-65.2, 230).curveTo(-80.4, 218.5, -80.4, 199.2).curveTo(-80.4, 183.5, -70.4, 167.9).curveTo(-61, 153.3, -44.6, 141.2).curveTo(-28.7, 129.4, -10, 122.6).curveTo(9.2, 115.6, 26.8, 115.6).curveTo(39.7, 115.6, 50.4, 119.1).curveTo(60.9, 122.6, 68.1, 129.1).lineTo(68.1, -241).lineTo(80.5, -241).lineTo(80.5, 160.6).lineTo(80.4, 160.6).curveTo(79.3, 175.6, 68.9, 190.5).curveTo(59.1, 204.6, 42.9, 216.2).curveTo(27.1, 227.7, 8.6, 234.2).curveTo(-10.4, 241, -27.7, 241).curveTo(-50.6, 241, -65.2, 230).closePath();
        mask.setTransform(80.5, 241);

        // 图层_1
        this.instance = new lib.形状1拷贝3();
        this.instance.parent = this;
        this.instance.setTransform(-268, -258);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.形状1拷贝3_1, new cjs.Rectangle(0, 0, 160.9, 482), null);


    (lib.形状1拷贝2_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.moveTo(-65.2, 230).curveTo(-80.4, 218.5, -80.5, 199.2).curveTo(-80.4, 183.5, -70.4, 167.9).curveTo(-61, 153.3, -44.6, 141.2).curveTo(-28.7, 129.4, -10, 122.6).curveTo(9.2, 115.6, 26.8, 115.6).curveTo(39.7, 115.6, 50.4, 119.1).curveTo(60.9, 122.6, 68.1, 129.1).lineTo(68.1, -241).lineTo(80.5, -241).lineTo(80.5, 160.6).lineTo(80.4, 160.6).curveTo(79.3, 175.6, 68.9, 190.5).curveTo(59.1, 204.6, 42.9, 216.2).curveTo(27.1, 227.7, 8.6, 234.2).curveTo(-10.4, 241, -27.7, 241).curveTo(-50.6, 241, -65.2, 230).closePath();
        mask.setTransform(80.5, 241);

        // 图层_1
        this.instance = new lib.形状1拷贝2();
        this.instance.parent = this;
        this.instance.setTransform(-1061, -258);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.形状1拷贝2_1, new cjs.Rectangle(0, 0, 160.9, 482), null);


    (lib.元件7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1, 1, 1).moveTo(-76.6, -32.2).lineTo(76.6, -32.2).curveTo(89.3, -32.2, 98.3, -23.2).curveTo(107.3, -14.2, 107.3, -1.4).lineTo(107.3, 1.5).curveTo(107.3, 14.2, 98.3, 23.2).curveTo(89.3, 32.2, 76.6, 32.2).lineTo(-76.6, 32.2).curveTo(-89.3, 32.2, -98.3, 23.2).curveTo(-107.3, 14.2, -107.3, 1.5).lineTo(-107.3, -1.4).curveTo(-107.3, -14.2, -98.3, -23.2).curveTo(-89.3, -32.2, -76.6, -32.2).closePath();

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#E8A02B").beginStroke().moveTo(-76.6, 32.2).curveTo(-89.4, 32.2, -98.3, 23.2).curveTo(-107.4, 14.2, -107.3, 1.5).lineTo(-107.3, -1.4).curveTo(-107.4, -14.2, -98.3, -23.2).curveTo(-89.4, -32.2, -76.6, -32.2).lineTo(76.5, -32.2).curveTo(89.3, -32.2, 98.3, -23.2).curveTo(107.4, -14.2, 107.4, -1.4).lineTo(107.4, 1.5).curveTo(107.4, 14.2, 98.3, 23.2).curveTo(89.3, 32.2, 76.5, 32.2).closePath();

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-108.3, -33.2, 216.7, 66.5), null);


    (lib.元件6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-13.3, 18.2).lineTo(-13.3, -3.8).lineTo(-15, -1.5).lineTo(-16.7, 0.5).lineTo(-17.2, -0.4).lineTo(-17.8, -1.5).lineTo(-18.4, -2.4).curveTo(-16.5, -4.3, -14.8, -6.9).curveTo(-13.1, -9.4, -11.7, -12.3).curveTo(-10.2, -15.2, -9.2, -18.2).lineTo(-6.5, -17.4).curveTo(-7.3, -15, -8.4, -12.7).curveTo(-9.4, -10.4, -10.6, -8.2).lineTo(-10.6, 18.2).closePath().moveTo(-8.3, 17.1).lineTo(-8.3, 14.5).lineTo(-4.5, 14.5).lineTo(-4.5, -7.9).lineTo(2.4, -7.9).lineTo(2.7, -9.6).lineTo(3.1, -11.5).lineTo(-6.6, -11.5).lineTo(-6.6, -14.2).lineTo(3.6, -14.2).lineTo(3.9, -16.3).lineTo(4.1, -18.3).lineTo(7.3, -18).lineTo(6.9, -16.1).lineTo(6.5, -14.2).lineTo(17.2, -14.2).lineTo(17.2, -11.5).lineTo(6, -11.5).lineTo(5.5, -9.6).lineTo(5.1, -7.9).lineTo(14.8, -7.9).lineTo(14.8, 14.5).lineTo(18.4, 14.5).lineTo(18.4, 17.1).closePath().moveTo(-1.8, 14.5).lineTo(12.1, 14.5).lineTo(12.1, 11.2).lineTo(-1.8, 11.2).closePath().moveTo(-1.8, 9.1).lineTo(12.1, 9.1).lineTo(12.1, 5.6).lineTo(-1.8, 5.6).closePath().moveTo(-1.8, 3.5).lineTo(12.1, 3.5).lineTo(12.1, 0.1).lineTo(-1.8, 0.1).closePath().moveTo(-1.8, -2.2).lineTo(12.1, -2.2).lineTo(12.1, -5.5).lineTo(-1.8, -5.5).closePath();
        this.shape.setTransform(17.6, 2.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.7, 17.9).lineTo(2.3, 16.4).lineTo(1.7, 14.9).lineTo(4.6, 15).lineTo(7.1, 15).lineTo(8.5, 15).curveTo(9.1, 15, 9.4, 14.7).curveTo(9.6, 14.5, 9.6, 13.9).lineTo(9.6, -7.3).lineTo(-3.3, -7.3).lineTo(-3.3, -10.2).lineTo(9.6, -10.2).lineTo(9.6, -18).lineTo(12.7, -18).lineTo(12.7, -10.2).lineTo(17.4, -10.2).lineTo(17.4, -7.3).lineTo(12.7, -7.3).lineTo(12.7, 13.9).curveTo(12.7, 15.5, 12.1, 16.3).curveTo(11.7, 17.1, 10.6, 17.4).curveTo(9.6, 17.8, 7.6, 17.9).lineTo(4.6, 18).lineTo(2.7, 17.9).closePath().moveTo(-17.5, 14.1).lineTo(-17.5, -14.8).lineTo(-5.1, -14.8).lineTo(-5.1, 11).lineTo(-14.7, 11).lineTo(-14.7, 14.1).closePath().moveTo(-14.7, 8.3).lineTo(-7.9, 8.3).lineTo(-7.9, -0.8).lineTo(-14.7, -0.8).closePath().moveTo(-14.7, -3.4).lineTo(-7.9, -3.4).lineTo(-7.9, -12.2).lineTo(-14.7, -12.2).closePath().moveTo(2.5, 4).lineTo(0.3, 0.6).lineTo(-1.9, -2.8).lineTo(0.5, -4.1).lineTo(2.8, -0.8).lineTo(5, 2.6).lineTo(6.8, 5.5).lineTo(4.2, 7).lineTo(2.5, 4).closePath();
        this.shape_1.setTransform(-21.4, 2.8);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill().beginStroke("#FFFFFF").setStrokeStyle(1, 1, 1).moveTo(-665.4, -280).lineTo(665.4, -280).curveTo(776.2, -280, 854.6, -201.7).curveTo(932.9, -123.3, 932.9, -12.5).lineTo(932.9, 12.5).curveTo(932.9, 123.3, 854.6, 201.6).curveTo(776.2, 280, 665.4, 280).lineTo(-665.4, 280).curveTo(-776.2, 280, -854.6, 201.6).curveTo(-932.9, 123.3, -932.9, 12.5).lineTo(-932.9, -12.5).curveTo(-932.9, -123.3, -854.6, -201.7).curveTo(-776.2, -280, -665.4, -280).closePath();
        this.shape_2.setTransform(0, 0, 0.115, 0.115);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#E8A02B").beginStroke().moveTo(-665.4, 280).curveTo(-776.2, 280, -854.6, 201.6).curveTo(-932.9, 123.3, -932.9, 12.5).lineTo(-932.9, -12.5).curveTo(-932.9, -123.3, -854.6, -201.7).curveTo(-776.2, -280, -665.4, -280).lineTo(665.4, -280).curveTo(776.2, -280, 854.6, -201.7).curveTo(932.9, -123.3, 932.9, -12.5).lineTo(932.9, 12.5).curveTo(932.9, 123.3, 854.6, 201.6).curveTo(776.2, 280, 665.4, 280).closePath();
        this.shape_3.setTransform(0, 0, 0.115, 0.115);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-108.3, -33.2, 216.7, 66.5), null);


    (lib.苹果按钮 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // apple
        this.instance = new lib.apple_2();
        this.instance.parent = this;
        this.instance.setTransform(68, 75, 1, 1, 0, 0, 0, 51, 38);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.苹果按钮, null, null);


    (lib.title = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 含义
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(10.7, 20.3).curveTo(4.9, 16.9, 0.1, 12.4).curveTo(-4.6, 16.6, -10.5, 20).curveTo(-16.4, 23.4, -23.7, 25.9).lineTo(-24.7, 24.1).lineTo(-26, 22.3).curveTo(-19, 20, -13.2, 16.8).curveTo(-7.5, 13.6, -2.8, 9.5).curveTo(-8.3, 3.8, -12.6, -3.2).curveTo(-16.8, -10.1, -19.8, -18).lineTo(-16, -19.2).curveTo(-13.2, -11.9, -9.1, -5.4).curveTo(-5.1, 1.1, 0.3, 6.4).curveTo(6, 0.7, 9.9, -6.4).curveTo(13.9, -13.5, 16.5, -21.6).lineTo(20.8, -20.2).curveTo(17.8, -11.6, 13.5, -4.2).curveTo(9.3, 3.2, 3.3, 9.3).curveTo(8.1, 13.7, 13.8, 16.9).curveTo(19.5, 20.1, 26, 22.2).curveTo(25.2, 22.9, 24.4, 23.9).curveTo(23.6, 25, 23.2, 25.9).curveTo(16.4, 23.7, 10.7, 20.3).closePath().moveTo(-0.7, -15.1).curveTo(-1.6, -17.5, -2.7, -19.9).lineTo(-4.8, -24.6).lineTo(-1.2, -25.9).lineTo(1, -21.3).lineTo(3.1, -16.6).lineTo(4.6, -12.5).lineTo(0.7, -10.9).curveTo(0.2, -12.7, -0.7, -15.1).closePath();
        this.shape.setTransform(163.1, 49.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-18.2, 25.9).lineTo(-18.2, 6.9).lineTo(2.4, 6.9).lineTo(5.9, 3.2).lineTo(9.2, -0.5).lineTo(-17.6, -0.5).lineTo(-17.6, -4.3).lineTo(12.7, -4.3).lineTo(13.4, -4.5).lineTo(16.5, -3).curveTo(14.7, -0.7, 12.3, 1.9).lineTo(7.8, 6.9).lineTo(17.8, 6.9).lineTo(17.8, 25.8).lineTo(13.6, 25.8).lineTo(13.6, 23.2).lineTo(-14, 23.2).lineTo(-14, 25.9).closePath().moveTo(-14, 19.5).lineTo(13.6, 19.5).lineTo(13.6, 10.6).lineTo(-14, 10.6).closePath().moveTo(-24.7, -6).curveTo(-25.4, -7.1, -26.2, -7.9).curveTo(-20.8, -9.6, -15.9, -12.3).curveTo(-11, -15, -6.9, -18.4).curveTo(-2.8, -21.9, -0.1, -25.9).lineTo(3.8, -24.1).lineTo(3.1, -23.1).lineTo(2.3, -22.3).curveTo(5, -19.3, 8.9, -16.5).curveTo(12.8, -13.8, 17.3, -11.6).curveTo(21.7, -9.5, 26.2, -8.3).lineTo(24.7, -6.5).curveTo(23.8, -5.5, 23.3, -4.5).curveTo(19.1, -5.9, 14.8, -8.2).curveTo(10.5, -10.4, 6.8, -13.3).curveTo(3, -16.2, 0.1, -19.5).curveTo(-4.5, -14.5, -10.5, -10.6).curveTo(-16.6, -6.7, -23.3, -4.1).curveTo(-23.9, -5, -24.7, -6).closePath().moveTo(0.4, -7.2).lineTo(-2.6, -9.3).curveTo(-4.3, -10.5, -5.8, -11.3).lineTo(-2.8, -13.6).lineTo(0.4, -11.7).lineTo(3.4, -9.6).lineTo(5.8, -7.6).lineTo(2.8, -5.2).lineTo(0.4, -7.2).closePath();
        this.shape_1.setTransform(106.7, 49.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1));

        // point
        this.instance = new lib.point_1();
        this.instance.parent = this;
        this.instance.setTransform(42, 49, 1, 1, 0, 0, 0, 12, 12);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // BG-title
        this.instance_1 = new lib.BGtitle_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(884, 408, 1, 1, 0, 0, 0, 884, 408);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-76, -132, 1920, 1080), null);


    (lib.content = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // = 拷贝
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-53.1, 34).lineTo(-53.1, 19).lineTo(53.1, 19).lineTo(53.1, 34).closePath().moveTo(-53.1, -19).lineTo(-53.1, -34).lineTo(53.1, -34).lineTo(53.1, -19).closePath();
        this.shape.setTransform(1115.1, 326.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // 2
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-36.5, 59.6).lineTo(-36.5, 50.9).curveTo(-9, 27.1, 4.1, 8.7).curveTo(17.2, -9.6, 17.1, -24.5).curveTo(17.1, -34.7, 11.8, -41).curveTo(6.5, -47.5, -4.4, -47.6).curveTo(-11.6, -47.4, -17.7, -43.7).curveTo(-23.8, -39.9, -28.7, -34).lineTo(-37.1, -42.4).curveTo(-30.1, -50.3, -21.8, -54.8).curveTo(-13.6, -59.5, -2.7, -59.6).curveTo(7.9, -59.5, 15.4, -55.3).curveTo(23.1, -50.9, 27.2, -43.3).curveTo(31.2, -35.5, 31.3, -24.9).curveTo(31.2, -13.3, 25.6, -1.5).curveTo(19.9, 10.5, 9.6, 22.8).curveTo(-0.6, 35.1, -14.4, 48.1).lineTo(-4.8, 47.3).curveTo(0.2, 47, 4.7, 47).lineTo(37.1, 47).lineTo(37.1, 59.6).closePath();
        this.shape_1.setTransform(1313.1, 383.9);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

        // 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-32.1, 58.5).lineTo(-32.1, 46.3).lineTo(-6, 46.3).lineTo(-6, -40.9).lineTo(-26.8, -40.9).lineTo(-26.8, -50.2).curveTo(-19, -51.6, -13.1, -53.6).curveTo(-7.3, -55.7, -2.5, -58.5).lineTo(8.6, -58.5).lineTo(8.6, 46.3).lineTo(32.1, 46.3).lineTo(32.1, 58.5).closePath();
        this.shape_2.setTransform(1315.7, 215);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

        // 1_1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-44.5, 81.2).lineTo(-44.5, 64.3).lineTo(-8.4, 64.3).lineTo(-8.4, -56.9).lineTo(-37.2, -56.9).lineTo(-37.2, -69.8).curveTo(-26.5, -71.7, -18.3, -74.5).curveTo(-10.1, -77.4, -3.5, -81.2).lineTo(11.9, -81.2).lineTo(11.9, 64.3).lineTo(44.5, 64.3).lineTo(44.5, 81.2).closePath();
        this.shape_3.setTransform(496.6, 327.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

        // =
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-53.1, 34).lineTo(-53.1, 19).lineTo(53.1, 19).lineTo(53.1, 34).closePath().moveTo(-53.1, -19).lineTo(-53.1, -34).lineTo(53.1, -34).lineTo(53.1, -19).closePath();
        this.shape_4.setTransform(320.1, 326.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

        // 形状 5 拷贝
        this.instance = new lib.形状5拷贝_1();
        this.instance.parent = this;
        this.instance.setTransform(692, 282, 1, 1, 0, 0, 0, -161, -249);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // 形状 1 拷贝 3
        this.instance_1 = new lib.形状1拷贝3_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(692, 282, 1, 1, 0, 0, 0, 692, 282);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

        // 形状 1 拷贝 2
        this.instance_2 = new lib.形状1拷贝2_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(692, 282, 1, 1, 0, 0, 0, -101, 282);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

        // 形状 6
        this.instance_3 = new lib.形状6_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(692, 282, 1, 1, 0, 0, 0, -551, -13);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.content, new cjs.Rectangle(-268, -258, 1920, 1080), null);


    (lib.shi = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。

		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/

            this.movieClip_5.addEventListener("click", fl_MouseClickHandler_4.bind(this));

            function fl_MouseClickHandler_4() {
                // 开始您的自定义代码
                // 此示例代码在"输出"面板中显示"已单击鼠标"。
                //alert("已单击鼠标");
                //window.location.href='跳音含义-创意/跳音知识点-03含义-创意02.html'
                // 结束您的自定义代码
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // 图层_1
        this.movieClip_5 = new lib.元件6();
        this.movieClip_5.name = "movieClip_5";
        this.movieClip_5.parent = this;
        this.movieClip_5.setTransform(107.4, 32.2);

        this.timeline.addTween(cjs.Tween.get(this.movieClip_5).wait(1));

    }).prototype = getMCSymbolPrototype(lib.shi, new cjs.Rectangle(-0.5, -0.5, 215.7, 65.5), null);


    (lib.duan = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。

		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/

            this.movieClip_6.addEventListener("click", fl_MouseClickHandler_5.bind(this));

            function fl_MouseClickHandler_5() {
                // 开始您的自定义代码
                // 此示例代码在"输出"面板中显示"已单击鼠标"。
                //alert("已单击鼠标");
                window.location.href = '跳音含义-创意/跳音知识点-03含义-创意02.html'
                // 结束您的自定义代码
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // 图层_1
        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(9.8, 16.2).curveTo(7.8, 15, 5.5, 13.9).lineTo(1, 11.9).lineTo(3, 10).curveTo(5.1, 10.8, 7.4, 11.9).curveTo(9.7, 12.9, 11.8, 14.1).curveTo(13.8, 15.2, 15.3, 16.2).lineTo(13.2, 18.3).curveTo(11.9, 17.3, 9.8, 16.2).closePath().moveTo(-14.1, 17.2).curveTo(-14.6, 16.5, -15.1, 16.1).curveTo(-11.7, 15.2, -9.3, 14.1).curveTo(-6.9, 13, -5.4, 11.9).curveTo(-3.9, 10.7, -3.1, 9.5).lineTo(-13, 9.5).lineTo(-13, 7.1).lineTo(-1.9, 7.1).lineTo(-1.6, 5.4).lineTo(-1.5, 3.8).lineTo(-1.5, 3.8).lineTo(-7.5, 3.8).lineTo(-7.5, 2.2).curveTo(-9.4, 4, -11.7, 5.5).curveTo(-13.9, 6.9, -16.7, 8.1).curveTo(-17, 7.5, -17.6, 6.8).curveTo(-18.1, 6.1, -18.6, 5.8).curveTo(-15, 4.4, -12.3, 2.4).curveTo(-9.5, 0.4, -7.5, -2).lineTo(-17.8, -2).lineTo(-17.8, -4.4).lineTo(-5.7, -4.4).lineTo(-4.8, -5.9).lineTo(-4, -7.5).lineTo(-13.4, -7.5).lineTo(-13.4, -9.8).lineTo(-3, -9.8).lineTo(-2.6, -11.3).lineTo(-2.2, -12.8).lineTo(-15, -12.8).lineTo(-15, -15.2).lineTo(-1.7, -15.2).lineTo(-1.5, -16.8).lineTo(-1.4, -18.4).lineTo(1.5, -18.2).lineTo(1.4, -16.7).lineTo(1.2, -15.2).lineTo(14.8, -15.2).lineTo(14.8, -12.8).lineTo(0.7, -12.8).lineTo(0.4, -11.3).lineTo(-0.1, -9.8).lineTo(13.2, -9.8).lineTo(13.2, -7.5).lineTo(-0.9, -7.5).lineTo(-1.6, -5.9).lineTo(-2.4, -4.4).lineTo(17.5, -4.4).lineTo(17.5, -2).lineTo(7, -2).curveTo(9.1, 0.5, 12.2, 2.5).curveTo(15.2, 4.4, 18.6, 5.5).lineTo(17.6, 6.6).lineTo(16.7, 7.8).curveTo(14.1, 6.9, 11.8, 5.5).curveTo(9.4, 4, 7.4, 2.2).lineTo(7.4, 3.8).lineTo(1.2, 3.8).lineTo(1.2, 3.9).lineTo(1.2, 5.5).lineTo(0.9, 7.1).lineTo(12.7, 7.1).lineTo(12.7, 9.5).lineTo(0.1, 9.5).curveTo(-0.6, 11.1, -2.2, 12.7).curveTo(-3.8, 14.2, -6.5, 15.6).curveTo(-9.2, 17.1, -13.3, 18.3).lineTo(-14.1, 17.2).closePath().moveTo(6.6, 1.3).lineTo(5.1, -0.3).curveTo(4.4, -1, 3.9, -2).lineTo(-3.9, -2).lineTo(-5.2, -0.3).curveTo(-5.9, 0.6, -6.7, 1.3).lineTo(6.6, 1.3).lineTo(6.6, 1.3).closePath();
        this.shape.setTransform(127.6, 32.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1, 17.5).lineTo(-1.3, 16.6).curveTo(0, 13.8, 0.7, 10.7).curveTo(1.4, 7.7, 1.6, 4.5).curveTo(1.8, 1.4, 1.8, -1.7).lineTo(1.8, -14.3).lineTo(6.6, -15.5).lineTo(11.1, -16.9).curveTo(13.3, -17.6, 14.8, -18.4).lineTo(17.3, -16.2).curveTo(15.6, -15.4, 13.5, -14.7).curveTo(11.4, -14, 9.1, -13.4).lineTo(4.6, -12.4).lineTo(4.6, -5).lineTo(17.4, -5).lineTo(17.4, -2.2).lineTo(13.2, -2.2).lineTo(13.2, 18.3).lineTo(10.4, 18.3).lineTo(10.4, -2.2).lineTo(4.6, -2.2).lineTo(4.6, -1.7).curveTo(4.7, 1.9, 4.3, 5.3).curveTo(4.1, 8.8, 3.3, 12).curveTo(2.5, 15.3, 1, 18.4).lineTo(-0.1, 17.5).closePath().moveTo(-17.4, 14.1).lineTo(-17.4, -16.9).lineTo(-14.8, -16.9).lineTo(-14.8, 11.5).lineTo(-0.7, 11.5).lineTo(-0.7, 14.1).closePath().moveTo(-8, 10.3).lineTo(-8, 0.2).curveTo(-9.1, 2.5, -10.5, 4.6).curveTo(-11.7, 6.6, -13.2, 8).lineTo(-13.8, 6.8).lineTo(-14.4, 5.6).curveTo(-13.3, 4.5, -12.2, 3).curveTo(-11.1, 1.5, -10.1, -0.3).curveTo(-9.1, -2, -8.4, -3.8).lineTo(-13.8, -3.8).lineTo(-13.8, -6.4).lineTo(-8, -6.4).lineTo(-8, -18.2).lineTo(-5.5, -18.2).lineTo(-5.5, -6.4).lineTo(0.3, -6.4).lineTo(0.3, -3.8).lineTo(-5.5, -3.8).lineTo(-5.5, -3.3).lineTo(-4.3, -2).lineTo(-2.6, -0.1).lineTo(-1, 1.7).lineTo(-0, 3).lineTo(-1.7, 5.1).lineTo(-2.7, 3.5).lineTo(-4.1, 1.6).lineTo(-5.5, -0.4).lineTo(-5.5, 10.3).closePath().moveTo(-4.8, -8.6).lineTo(-3.9, -10.8).lineTo(-3, -13.4).lineTo(-2.3, -15.7).lineTo(0.1, -15).lineTo(-1.5, -11.2).curveTo(-2.3, -9.3, -3, -8).closePath().moveTo(-12.1, -11.4).curveTo(-12.5, -13.3, -13.2, -15).lineTo(-11.3, -15.6).curveTo(-10.8, -14.5, -10.5, -13.3).lineTo(-9.8, -10.9).curveTo(-9.5, -9.7, -9.4, -8.7).lineTo(-11.5, -8).curveTo(-11.6, -9.5, -12.1, -11.4).closePath();
        this.shape_1.setTransform(88.3, 32.5);

        this.movieClip_6 = new lib.元件7();
        this.movieClip_6.name = "movieClip_6";
        this.movieClip_6.parent = this;
        this.movieClip_6.setTransform(107.4, 32.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(9.8, 16.2).curveTo(7.8, 15, 5.5, 13.9).lineTo(1, 11.9).lineTo(3, 10).curveTo(5.1, 10.8, 7.4, 11.9).curveTo(9.7, 12.9, 11.8, 14.1).curveTo(13.8, 15.2, 15.3, 16.2).lineTo(13.2, 18.3).curveTo(11.9, 17.3, 9.8, 16.2).closePath().moveTo(-14.1, 17.2).curveTo(-14.6, 16.5, -15.1, 16.1).curveTo(-11.7, 15.2, -9.3, 14.1).curveTo(-6.9, 13, -5.4, 11.9).curveTo(-3.9, 10.7, -3.1, 9.5).lineTo(-13, 9.5).lineTo(-13, 7.1).lineTo(-1.9, 7.1).lineTo(-1.6, 5.4).lineTo(-1.5, 3.8).lineTo(-1.5, 3.8).lineTo(-7.5, 3.8).lineTo(-7.5, 2.2).curveTo(-9.4, 4, -11.7, 5.5).curveTo(-13.9, 6.9, -16.7, 8.1).curveTo(-17, 7.5, -17.6, 6.8).curveTo(-18.1, 6.1, -18.6, 5.8).curveTo(-15, 4.4, -12.3, 2.4).curveTo(-9.5, 0.4, -7.5, -2).lineTo(-17.8, -2).lineTo(-17.8, -4.4).lineTo(-5.7, -4.4).lineTo(-4.8, -5.9).lineTo(-4, -7.5).lineTo(-13.4, -7.5).lineTo(-13.4, -9.8).lineTo(-3, -9.8).lineTo(-2.6, -11.3).lineTo(-2.2, -12.8).lineTo(-15, -12.8).lineTo(-15, -15.2).lineTo(-1.7, -15.2).lineTo(-1.5, -16.8).lineTo(-1.4, -18.4).lineTo(1.5, -18.2).lineTo(1.4, -16.7).lineTo(1.2, -15.2).lineTo(14.8, -15.2).lineTo(14.8, -12.8).lineTo(0.7, -12.8).lineTo(0.4, -11.3).lineTo(-0.1, -9.8).lineTo(13.2, -9.8).lineTo(13.2, -7.5).lineTo(-0.9, -7.5).lineTo(-1.6, -5.9).lineTo(-2.4, -4.4).lineTo(17.5, -4.4).lineTo(17.5, -2).lineTo(7, -2).curveTo(9.1, 0.5, 12.2, 2.5).curveTo(15.2, 4.4, 18.6, 5.5).lineTo(17.6, 6.6).lineTo(16.7, 7.8).curveTo(14.1, 6.9, 11.8, 5.5).curveTo(9.4, 4, 7.4, 2.2).lineTo(7.4, 3.8).lineTo(1.2, 3.8).lineTo(1.2, 3.9).lineTo(1.2, 5.5).lineTo(0.9, 7.1).lineTo(12.7, 7.1).lineTo(12.7, 9.5).lineTo(0.1, 9.5).curveTo(-0.6, 11.1, -2.2, 12.7).curveTo(-3.8, 14.2, -6.5, 15.6).curveTo(-9.2, 17.1, -13.3, 18.3).lineTo(-14.1, 17.2).closePath().moveTo(6.6, 1.3).lineTo(5.1, -0.3).curveTo(4.4, -1, 3.9, -2).lineTo(-3.9, -2).lineTo(-5.2, -0.3).curveTo(-5.9, 0.6, -6.7, 1.3).lineTo(6.6, 1.3).lineTo(6.6, 1.3).closePath();
        this.shape_2.setTransform(125.3, 35.2);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1, 17.5).lineTo(-1.3, 16.6).curveTo(0.1, 13.8, 0.7, 10.7).curveTo(1.4, 7.7, 1.6, 4.5).curveTo(1.9, 1.4, 1.8, -1.7).lineTo(1.8, -14.3).lineTo(6.6, -15.5).lineTo(11.1, -16.9).curveTo(13.3, -17.6, 14.8, -18.4).lineTo(17.2, -16.2).curveTo(15.5, -15.4, 13.5, -14.7).curveTo(11.4, -14, 9.1, -13.4).lineTo(4.6, -12.4).lineTo(4.6, -5).lineTo(17.4, -5).lineTo(17.4, -2.2).lineTo(13.2, -2.2).lineTo(13.2, 18.3).lineTo(10.5, 18.3).lineTo(10.5, -2.2).lineTo(4.6, -2.2).lineTo(4.6, -1.7).curveTo(4.7, 1.9, 4.4, 5.3).curveTo(4.1, 8.8, 3.3, 12).curveTo(2.5, 15.3, 0.9, 18.4).lineTo(-0.1, 17.5).closePath().moveTo(-17.4, 14.1).lineTo(-17.4, -16.9).lineTo(-14.8, -16.9).lineTo(-14.8, 11.5).lineTo(-0.8, 11.5).lineTo(-0.8, 14.1).closePath().moveTo(-8.1, 10.3).lineTo(-8.1, 0.2).curveTo(-9.1, 2.5, -10.5, 4.6).curveTo(-11.8, 6.6, -13.2, 8).lineTo(-13.7, 6.8).lineTo(-14.5, 5.6).curveTo(-13.3, 4.5, -12.2, 3).curveTo(-11, 1.5, -10.1, -0.3).curveTo(-9.1, -2, -8.4, -3.8).lineTo(-13.7, -3.8).lineTo(-13.7, -6.4).lineTo(-8.1, -6.4).lineTo(-8.1, -18.2).lineTo(-5.5, -18.2).lineTo(-5.5, -6.4).lineTo(0.3, -6.4).lineTo(0.3, -3.8).lineTo(-5.5, -3.8).lineTo(-5.5, -3.3).lineTo(-4.3, -2).lineTo(-2.6, -0.1).lineTo(-1, 1.7).lineTo(0, 3).lineTo(-1.7, 5.1).lineTo(-2.7, 3.5).lineTo(-4, 1.6).lineTo(-5.5, -0.4).lineTo(-5.5, 10.3).closePath().moveTo(-4.7, -8.6).lineTo(-3.8, -10.8).lineTo(-3, -13.4).lineTo(-2.3, -15.7).lineTo(0.1, -15).lineTo(-1.5, -11.2).curveTo(-2.2, -9.3, -3, -8).closePath().moveTo(-12, -11.4).curveTo(-12.6, -13.3, -13.2, -15).lineTo(-11.3, -15.6).curveTo(-10.8, -14.5, -10.5, -13.3).lineTo(-9.8, -10.9).curveTo(-9.5, -9.7, -9.4, -8.7).lineTo(-11.5, -8).curveTo(-11.6, -9.5, -12, -11.4).closePath();
        this.shape_3.setTransform(86, 35.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.movieClip_6}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.duan, new cjs.Rectangle(-0.5, -0.5, 215.7, 65.5), null);


    (lib.元件3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.apple_1();
        this.instance.parent = this;
        this.instance.setTransform(21.4, 38.2, 1.174, 1.174, 0, 0, 0, 45.5, 32.5);

        this.instance_1 = new lib.applesDropShadow_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(21.5, 38.1, 1.174, 1.174, 0, 0, 0, 51, 38);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_1}, {t: this.instance}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-38.4, -6.5, 119.7, 89.2);


    (lib.元件1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.元件3("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(91.1, 82.1, 1, 1, 0, 0, 0, 29.5, 34);

        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill().beginStroke("#4C5C77").setStrokeStyle(5).moveTo(82.1, -0).curveTo(82.1, 16.7, 75.7, 31.9).curveTo(69.4, 46.7, 58.1, 58.1).curveTo(46.7, 69.4, 32, 75.7).curveTo(16.7, 82.1, 0, 82.1).curveTo(-16.7, 82.1, -31.9, 75.7).curveTo(-46.7, 69.4, -58.1, 58.1).curveTo(-69.4, 46.7, -75.7, 31.9).curveTo(-82.1, 16.7, -82.1, -0).curveTo(-82.1, -16.7, -75.7, -32).curveTo(-69.4, -46.7, -58.1, -58.1).curveTo(-46.7, -69.4, -31.9, -75.7).curveTo(-16.7, -82.1, 0, -82.1).curveTo(16.7, -82.1, 32, -75.7).curveTo(46.7, -69.4, 58.1, -58.1).curveTo(69.4, -46.7, 75.7, -32).curveTo(82.1, -16.7, 82.1, -0).closePath();
        this.shape.setTransform(82.1, 82.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#E8A02B").beginStroke().moveTo(-27.3, 64.7).curveTo(-39.9, 59.3, -49.7, 49.6).curveTo(-70.2, 29.1, -70.2, -0).curveTo(-70.2, -14.2, -64.7, -27.3).curveTo(-59.3, -39.9, -49.7, -49.6).curveTo(-39.9, -59.3, -27.3, -64.7).curveTo(-14.3, -70.2, 0, -70.2).curveTo(14.3, -70.2, 27.3, -64.7).curveTo(39.9, -59.3, 49.7, -49.6).curveTo(59.4, -39.9, 64.7, -27.3).curveTo(70.2, -14.3, 70.2, -0).curveTo(70.2, 14.3, 64.7, 27.3).curveTo(59.4, 39.9, 49.7, 49.6).curveTo(39.9, 59.3, 27.3, 64.7).curveTo(14.3, 70.2, 0, 70.2).curveTo(-14.3, 70.2, -27.3, 64.7).closePath();
        this.shape_1.setTransform(81.6, 82.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}, {t: this.instance}]}).wait(1));

    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-2.5, -2.5, 169.3, 169.3), null);


    (lib.menu = function (mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.元件1();
        this.instance.parent = this;
        this.instance.setTransform(0.1, -2, 1, 1, 0, 0, 0, 82.1, 82.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y: -2.5}, 0).wait(1).to({y: -3.1}, 0).wait(1).to({y: -3.6}, 0).wait(1).to({y: -4.2}, 0).wait(1).to({y: -4.7}, 0).wait(1).to({y: -5.3}, 0).wait(1).to({y: -5.8}, 0).wait(1).to({y: -6.4}, 0).wait(1).to({y: -6.9}, 0).wait(1).to({y: -7.5}, 0).wait(1).to({y: -8}, 0).wait(1).to({y: -8.6}, 0).wait(1).to({y: -9.1}, 0).wait(1).to({y: -9.7}, 0).wait(1).to({y: -10.2}, 0).wait(1).to({y: -10.8}, 0).wait(1).to({y: -11.4}, 0).wait(1).to({y: -10.7}, 0).wait(1).to({y: -10.1}, 0).wait(1).to({y: -9.5}, 0).wait(1).to({y: -8.8}, 0).wait(1).to({y: -8.2}, 0).wait(1).to({y: -7.6}, 0).wait(1).to({y: -7}, 0).wait(1).to({y: -6.3}, 0).wait(1).to({y: -5.7}, 0).wait(1).to({y: -5.1}, 0).wait(1).to({y: -4.5}, 0).wait(1).to({y: -3.8}, 0).wait(1).to({y: -3.2}, 0).wait(1).to({y: -2.6}, 0).wait(1).to({y: -2}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-84.5, -86.6, 169.3, 169.3);


// stage content:
    (lib._03跳音知识点03含义 = function (mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            /* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。

		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/

            this.movieClip_1.addEventListener("click", fl_MouseClickHandler.bind(this));

            function fl_MouseClickHandler() {
                // 开始您的自定义代码
                // 此示例代码在"输出"面板中显示"已单击鼠标"。
                //alert("已单击鼠标");
                window.location.href = '../跳音含义-创意/跳音知识点-03含义-创意02.html';
                // 结束您的自定义代码
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // 弹框-含义
        this.movieClip_1 = new lib.menu();
        this.movieClip_1.name = "movieClip_1";
        this.movieClip_1.parent = this;
        this.movieClip_1.setTransform(1645.3, 817.2, 1, 1, 0, 0, 0, 0, -2);

        this.instance = new lib.苹果按钮();
        this.instance.parent = this;
        this.instance.setTransform(1621.1, 821.4, 1, 1, 0, 0, 0, 67.5, 67.5);

        this.instance_1 = new lib.title();
        this.instance_1.parent = this;
        this.instance_1.setTransform(884.6, 461.9, 1, 1, 0, 0, 0, 884, 408);

        this.instance_2 = new lib.content();
        this.instance_2.parent = this;
        this.instance_2.setTransform(884.6, 461.9, 1, 1, 0, 0, 0, 692, 282);

        this.shape = new cjs.Shape();
        this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-12.8, 17.5).lineTo(-12.8, -3.6).curveTo(-13.6, -2.5, -14.4, -1.5).lineTo(-16, 0.5).lineTo(-16.5, -0.3).lineTo(-17, -1.4).lineTo(-17.6, -2.3).curveTo(-15.8, -4.1, -14.2, -6.6).curveTo(-12.6, -9, -11.2, -11.8).curveTo(-9.8, -14.5, -8.8, -17.5).lineTo(-6.2, -16.6).curveTo(-7, -14.4, -8, -12.2).curveTo(-9, -10, -10.2, -7.9).lineTo(-10.2, 17.5).closePath().moveTo(-7.9, 16.4).lineTo(-7.9, 13.9).lineTo(-4.3, 13.9).lineTo(-4.3, -7.5).lineTo(2.3, -7.5).lineTo(2.7, -9.2).lineTo(3, -11.1).lineTo(-6.3, -11.1).lineTo(-6.3, -13.6).lineTo(3.4, -13.6).lineTo(3.7, -15.6).lineTo(4, -17.5).lineTo(7, -17.3).lineTo(6.6, -15.5).lineTo(6.3, -13.6).lineTo(16.5, -13.6).lineTo(16.5, -11.1).lineTo(5.7, -11.1).lineTo(5.3, -9.2).lineTo(4.8, -7.5).lineTo(14.2, -7.5).lineTo(14.2, 13.9).lineTo(17.6, 13.9).lineTo(17.6, 16.4).closePath().moveTo(-1.7, 13.9).lineTo(11.5, 13.9).lineTo(11.5, 10.8).lineTo(-1.7, 10.8).closePath().moveTo(-1.7, 8.7).lineTo(11.5, 8.7).lineTo(11.5, 5.4).lineTo(-1.7, 5.4).closePath().moveTo(-1.7, 3.3).lineTo(11.5, 3.3).lineTo(11.5, 0).lineTo(-1.7, 0).closePath().moveTo(-1.7, -2.1).lineTo(11.5, -2.1).lineTo(11.5, -5.3).lineTo(-1.7, -5.3).closePath();
        this.shape.setTransform(902.8, 803.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(2.1, 15.8).curveTo(1.9, 15, 1.5, 14.4).lineTo(4.4, 14.4).lineTo(6.7, 14.4).lineTo(8.2, 14.4).curveTo(8.8, 14.4, 9, 14.2).curveTo(9.2, 13.9, 9.3, 13.4).lineTo(9.3, -7).lineTo(-3.2, -7).lineTo(-3.2, -9.8).lineTo(9.3, -9.8).lineTo(9.3, -17.2).lineTo(12.1, -17.2).lineTo(12.1, -9.8).lineTo(16.7, -9.8).lineTo(16.7, -7).lineTo(12.1, -7).lineTo(12.1, 13.4).curveTo(12.1, 14.9, 11.7, 15.6).curveTo(11.2, 16.4, 10.2, 16.7).curveTo(9.2, 17.1, 7.3, 17.1).lineTo(2.6, 17.2).lineTo(2.1, 15.8).closePath().moveTo(-16.7, 13.6).lineTo(-16.7, -14.2).lineTo(-4.9, -14.2).lineTo(-4.9, 10.6).lineTo(-14.1, 10.6).lineTo(-14.1, 13.6).closePath().moveTo(-14.1, 8).lineTo(-7.6, 8).lineTo(-7.6, -0.7).lineTo(-14.1, -0.7).closePath().moveTo(-14.1, -3.3).lineTo(-7.6, -3.3).lineTo(-7.6, -11.6).lineTo(-14.1, -11.6).closePath().moveTo(2.4, 3.9).lineTo(0.3, 0.6).lineTo(-1.8, -2.6).lineTo(0.5, -3.9).lineTo(2.7, -0.7).lineTo(4.8, 2.5).lineTo(6.5, 5.3).lineTo(4, 6.7).lineTo(2.4, 3.9).closePath();
        this.shape_1.setTransform(865.5, 803.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-1.6, 17.5).lineTo(-1.6, 6.6).lineTo(-17, 6.6).lineTo(-17, 3.8).lineTo(-1.6, 3.8).lineTo(-1.6, -2.3).lineTo(-14.6, -2.3).lineTo(-14.6, -5.1).lineTo(-1.6, -5.1).lineTo(-1.6, -17.4).lineTo(1.3, -17.4).lineTo(1.3, -5.1).lineTo(14.8, -5.1).lineTo(14.8, -2.3).lineTo(1.3, -2.3).lineTo(1.3, 3.8).lineTo(17, 3.8).lineTo(17, 6.6).lineTo(1.3, 6.6).lineTo(1.3, 17.5).closePath().moveTo(5.9, -7.9).lineTo(7.6, -10.5).lineTo(9.2, -13.6).lineTo(10.6, -16.6).lineTo(13.5, -15.5).lineTo(11.9, -12.5).lineTo(10.1, -9.4).lineTo(8.4, -6.8).closePath().moveTo(-10.1, -9.5).lineTo(-11.7, -12.5).lineTo(-13.5, -15.4).lineTo(-10.9, -16.4).curveTo(-10, -15.2, -9.1, -13.6).lineTo(-7.4, -10.7).lineTo(-6.3, -8).lineTo(-9.1, -6.8).curveTo(-9.4, -8, -10.1, -9.5).closePath();
        this.shape_2.setTransform(826.3, 803.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-17.3, 1.5).lineTo(-17.3, -1.5).lineTo(17.3, -1.5).lineTo(17.3, 1.5).closePath();
        this.shape_3.setTransform(787.9, 803.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(7.8, 17.2).lineTo(4.6, 17.1).curveTo(4.6, 16.5, 4.4, 15.7).curveTo(4.1, 15, 3.7, 14.3).curveTo(5.6, 14.5, 7.1, 14.5).lineTo(9.4, 14.6).lineTo(10.4, 14.5).curveTo(10.7, 14.4, 10.9, 14).curveTo(11.6, 13.4, 12.1, 11).curveTo(12.5, 8.6, 12.7, 3.9).curveTo(13.1, -0.9, 13.3, -8.5).lineTo(3.5, -8.5).curveTo(2.7, -6.5, 1.8, -4.8).curveTo(1, -3.1, -0.1, -1.7).lineTo(-1.1, -2.6).lineTo(-2.4, -3.4).curveTo(-1.1, -5.1, 0, -7.3).curveTo(1.1, -9.5, 2, -12.1).curveTo(2.9, -14.6, 3.5, -17.3).lineTo(6.2, -16.6).lineTo(5.4, -13.8).lineTo(4.5, -11.1).lineTo(16, -11.1).lineTo(16, -9.6).lineTo(15.5, 1.4).curveTo(15.3, 5.9, 15.1, 8.9).curveTo(14.7, 11.7, 14.3, 13.3).curveTo(14, 15, 13.4, 15.6).curveTo(12.7, 16.4, 12.1, 16.8).curveTo(11.3, 17.1, 10.4, 17.2).lineTo(8.7, 17.3).lineTo(7.8, 17.2).closePath().moveTo(-16, 16.9).lineTo(-16, -11).lineTo(-11.7, -11).lineTo(-10.8, -14.1).curveTo(-10.4, -15.8, -10.2, -17.2).lineTo(-7.1, -16.6).lineTo(-8.1, -13.7).lineTo(-9.1, -11).lineTo(-2.8, -11).lineTo(-2.8, 13.9).lineTo(-13.4, 13.9).lineTo(-13.4, 16.9).closePath().moveTo(-13.4, 11.3).lineTo(-5.4, 11.3).lineTo(-5.4, 2.1).lineTo(-13.4, 2.1).closePath().moveTo(-13.4, -0.4).lineTo(-5.4, -0.4).lineTo(-5.4, -8.4).lineTo(-13.4, -8.4).closePath().moveTo(6, 5).lineTo(3.9, 1.8).lineTo(1.7, -1.2).lineTo(4, -2.5).lineTo(6.2, 0.4).lineTo(8.3, 3.5).curveTo(9.4, 5, 9.9, 6.2).lineTo(7.6, 7.7).curveTo(6.9, 6.5, 6, 5).closePath();
        this.shape_4.setTransform(749.9, 803);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-11.4, 17.6).lineTo(-11.4, 3).lineTo(-13.2, 5).lineTo(-15.1, 6.9).lineTo(-16, 5.7).lineTo(-17.1, 4.7).curveTo(-14.6, 2.5, -12.4, -0.4).curveTo(-10.2, -3.2, -8.7, -6.4).lineTo(-6, -5.5).lineTo(-7.3, -3.2).lineTo(-8.7, -0.8).lineTo(-8.7, 17.6).closePath().moveTo(3.3, 17.5).lineTo(3, 16.2).lineTo(2.4, 14.7).lineTo(5, 14.8).lineTo(7.1, 14.8).lineTo(8.4, 14.7).curveTo(8.9, 14.7, 9.1, 14.6).curveTo(9.3, 14.4, 9.3, 13.9).lineTo(9.3, 0.7).lineTo(-5.8, 0.7).lineTo(-5.8, -1.9).lineTo(9.3, -1.9).lineTo(9.3, -6).lineTo(12.1, -6).lineTo(12.1, -1.9).lineTo(17.3, -1.9).lineTo(17.3, 0.7).lineTo(12.1, 0.7).lineTo(12.1, 13.9).curveTo(12.1, 15.2, 11.7, 16).curveTo(11.3, 16.7, 10.3, 17).curveTo(9.4, 17.3, 7.6, 17.4).lineTo(4.9, 17.5).lineTo(3.3, 17.5).closePath().moveTo(-0.1, 9.4).lineTo(-1.8, 6.6).lineTo(-3.6, 4).lineTo(-1.3, 2.8).lineTo(0.5, 5.3).lineTo(2.2, 7.9).lineTo(3.6, 10.2).lineTo(1.2, 11.7).lineTo(-0.1, 9.4).closePath().moveTo(-16, -6.7).lineTo(-17.3, -7.5).curveTo(-15.5, -9.3, -14, -12).curveTo(-12.6, -14.6, -11.7, -17.6).lineTo(-9, -16.9).lineTo(-9.5, -15.3).lineTo(-10.1, -13.8).lineTo(-0.6, -13.8).lineTo(-0.6, -11.4).lineTo(-6.5, -11.4).lineTo(-5.4, -9).lineTo(-4.4, -7.1).lineTo(-7, -6.2).lineTo(-8, -8.6).lineTo(-9.3, -11.4).lineTo(-11.3, -11.4).curveTo(-12.1, -9.8, -13, -8.4).curveTo(-13.9, -7, -14.9, -5.9).lineTo(-16, -6.7).closePath().moveTo(-1.2, -7).lineTo(-2.4, -7.8).curveTo(-0.6, -9.5, 0.9, -12.1).curveTo(2.4, -14.6, 3.2, -17.6).lineTo(6, -16.9).lineTo(5.4, -15.3).lineTo(4.8, -13.8).lineTo(16.9, -13.8).lineTo(16.9, -11.4).lineTo(9.3, -11.4).lineTo(10.6, -9.5).lineTo(11.6, -7.8).lineTo(9.1, -6.7).curveTo(8.6, -7.7, 7.8, -8.9).lineTo(6.3, -11.4).lineTo(3.6, -11.4).curveTo(2.8, -9.8, 1.9, -8.5).curveTo(0.9, -7.2, -0.1, -6.1).lineTo(-1.2, -7).closePath();
        this.shape_5.setTransform(710.8, 803.4);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-11.7, 17.7).lineTo(-11.7, 0.9).lineTo(12, 0.9).lineTo(12, 17.6).lineTo(9.1, 17.6).lineTo(9.1, 16.2).lineTo(-8.9, 16.2).lineTo(-8.9, 17.7).closePath().moveTo(-8.9, 13.8).lineTo(9.1, 13.8).lineTo(9.1, 9.6).lineTo(-8.9, 9.6).closePath().moveTo(-8.9, 7.3).lineTo(9.1, 7.3).lineTo(9.1, 3.4).lineTo(-8.9, 3.4).closePath().moveTo(-17, -2.4).lineTo(-17, -5).lineTo(-7.4, -5).curveTo(-7.7, -6.2, -8.3, -7.7).curveTo(-8.9, -9.2, -9.6, -10.5).lineTo(-6.9, -11.1).curveTo(-6, -9.7, -5.3, -8.2).curveTo(-4.7, -6.6, -4.4, -5.3).lineTo(-5.6, -5).lineTo(4.3, -5).lineTo(5.3, -7).lineTo(6.3, -9.2).lineTo(7, -11.2).lineTo(10.1, -10.5).lineTo(8.7, -7.6).lineTo(7.3, -5).lineTo(17, -5).lineTo(17, -2.4).closePath().moveTo(-14.8, -11.4).lineTo(-14.8, -13.9).lineTo(-1, -13.9).lineTo(-1.7, -15.5).lineTo(-2.5, -17.2).lineTo(0.3, -17.7).curveTo(0.9, -16.8, 1.4, -15.9).curveTo(1.9, -14.9, 2.2, -13.9).lineTo(15.1, -13.9).lineTo(15.1, -11.4).closePath();
        this.shape_6.setTransform(672.8, 803.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-5.7, 16.4).lineTo(-6.6, 15.3).curveTo(-2.1, 13.8, 1.9, 11.4).curveTo(5.8, 9.1, 8.9, 6.1).curveTo(12, 3.2, 13.9, 0).lineTo(16.8, 1.1).curveTo(15.5, 3.3, 13.7, 5.3).curveTo(11.9, 7.3, 9.8, 9.1).lineTo(12.5, 11.3).lineTo(15.1, 13.4).lineTo(17.1, 15.3).lineTo(14.9, 17.1).lineTo(13, 15.2).lineTo(10.5, 13).lineTo(7.8, 10.8).curveTo(5, 12.9, 1.8, 14.6).curveTo(-1.4, 16.4, -4.9, 17.7).lineTo(-5.7, 16.4).closePath().moveTo(-12.1, 16).lineTo(-13, 15).curveTo(-12.6, 14.7, -12.2, 14.2).curveTo(-11.7, 13.7, -11.4, 13).curveTo(-11.1, 12.2, -11, 11.3).lineTo(-11, -2.9).lineTo(-17.1, -2.9).lineTo(-17.1, -5.6).lineTo(-8.3, -5.6).lineTo(-8.3, 11.4).lineTo(-4.7, 8.9).lineTo(-4.3, 10.2).lineTo(-3.8, 11.3).lineTo(-8.3, 14.6).lineTo(-10.5, 16.2).curveTo(-11.1, 16.7, -11.3, 17.1).lineTo(-12.1, 16).closePath().moveTo(-4.2, 8.1).lineTo(-5.1, 7.1).curveTo(-1.8, 5.7, 1.1, 3.7).curveTo(4, 1.7, 6.3, -0.7).lineTo(1.6, -0.3).lineTo(-1.2, -0.1).lineTo(-2.7, 0.2).lineTo(-3.4, 0.4).lineTo(-3.7, -0.5).lineTo(-4, -1.6).lineTo(-4.3, -2.3).lineTo(-3, -2.8).curveTo(-2.3, -3, -1.7, -3.6).lineTo(-0.4, -5).lineTo(1.3, -7.4).lineTo(3, -9.9).lineTo(-5.1, -9.9).lineTo(-5.1, -12.5).lineTo(5.5, -12.5).lineTo(4.7, -14.7).lineTo(3.6, -17).lineTo(6.3, -17.7).lineTo(7.7, -15).curveTo(8.4, -13.6, 8.7, -12.5).lineTo(17, -12.5).lineTo(17, -9.9).lineTo(6.3, -9.9).lineTo(4.7, -7.5).lineTo(2.9, -5).lineTo(1.3, -2.8).lineTo(8.6, -3.2).curveTo(9.3, -4.1, 9.8, -4.9).lineTo(10.8, -6.7).lineTo(13.6, -5.7).curveTo(11.8, -2.7, 9.2, 0.1).curveTo(6.6, 2.9, 3.4, 5.3).curveTo(0.2, 7.6, -3.4, 9.3).lineTo(-4.2, 8.1).closePath().moveTo(-10.6, -10.9).curveTo(-11.4, -12.1, -12.5, -13.3).lineTo(-14.5, -15.4).lineTo(-12.4, -17.1).lineTo(-10.4, -14.9).lineTo(-8.5, -12.7).lineTo(-7, -10.8).lineTo(-9.2, -8.9).curveTo(-9.7, -9.8, -10.6, -10.9).closePath();
        this.shape_7.setTransform(634.3, 803.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(9.4, 15.6).lineTo(5.2, 13.3).curveTo(3, 12.3, 0.9, 11.5).lineTo(2.8, 9.6).curveTo(4.9, 10.4, 7.1, 11.5).curveTo(9.2, 12.4, 11.3, 13.5).curveTo(13.3, 14.6, 14.6, 15.6).lineTo(12.7, 17.6).curveTo(11.3, 16.6, 9.4, 15.6).closePath().moveTo(-13.5, 16.5).lineTo(-14.5, 15.4).curveTo(-11.2, 14.6, -8.9, 13.5).curveTo(-6.7, 12.5, -5.2, 11.4).curveTo(-3.8, 10.3, -3, 9.1).lineTo(-12.5, 9.1).lineTo(-12.5, 6.8).lineTo(-1.8, 6.8).lineTo(-1.5, 5.2).lineTo(-1.5, 3.6).lineTo(-1.5, 3.6).lineTo(-7.3, 3.6).lineTo(-7.3, 2.2).curveTo(-9, 3.8, -11.2, 5.2).curveTo(-13.3, 6.6, -16, 7.8).lineTo(-16.9, 6.6).curveTo(-17.3, 5.9, -17.9, 5.6).curveTo(-14.4, 4.2, -11.8, 2.4).curveTo(-9.1, 0.4, -7.2, -1.9).lineTo(-17.1, -1.9).lineTo(-17.1, -4.2).lineTo(-5.5, -4.2).lineTo(-4.6, -5.7).lineTo(-3.8, -7.1).lineTo(-12.8, -7.1).lineTo(-12.8, -9.4).lineTo(-2.9, -9.4).lineTo(-2.5, -10.8).lineTo(-2.1, -12.2).lineTo(-14.4, -12.2).lineTo(-14.4, -14.6).lineTo(-1.7, -14.6).lineTo(-1.5, -16.1).lineTo(-1.3, -17.6).lineTo(1.5, -17.4).lineTo(1.4, -15.9).lineTo(1.2, -14.6).lineTo(14.2, -14.6).lineTo(14.2, -12.2).lineTo(0.7, -12.2).lineTo(0.3, -10.8).lineTo(-0.1, -9.4).lineTo(12.7, -9.4).lineTo(12.7, -7.1).lineTo(-0.9, -7.1).lineTo(-1.6, -5.7).lineTo(-2.2, -4.2).lineTo(16.8, -4.2).lineTo(16.8, -1.9).lineTo(6.8, -1.9).curveTo(8.7, 0.6, 11.7, 2.4).curveTo(14.5, 4.3, 17.9, 5.2).lineTo(16.9, 6.3).lineTo(16, 7.6).curveTo(13.6, 6.7, 11.3, 5.3).curveTo(9, 3.9, 7.1, 2.2).lineTo(7.1, 3.6).lineTo(1.2, 3.6).lineTo(1.2, 3.7).lineTo(1.1, 5.2).lineTo(0.9, 6.8).lineTo(12.2, 6.8).lineTo(12.2, 9.1).lineTo(0.1, 9.1).curveTo(-0.6, 10.6, -2.1, 12.2).curveTo(-3.6, 13.7, -6.2, 15).curveTo(-8.8, 16.4, -12.7, 17.6).lineTo(-13.5, 16.5).closePath().moveTo(6.3, 1.4).lineTo(4.9, -0.2).lineTo(3.7, -1.9).lineTo(-3.7, -1.9).lineTo(-5, -0.2).lineTo(-6.4, 1.4).lineTo(6.3, 1.4).lineTo(6.3, 1.4).closePath();
        this.shape_8.setTransform(596.3, 803.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(4.4, 17.5).lineTo(4.4, 10.4).lineTo(-5.9, 10.4).lineTo(-5.9, 7.8).lineTo(4.4, 7.8).lineTo(4.4, 4.7).lineTo(-3.7, 4.7).lineTo(-3.7, -9.4).lineTo(7, -9.4).lineTo(8.6, -12).lineTo(10, -14.8).lineTo(11.2, -17.5).lineTo(14.1, -16.5).lineTo(12.1, -12.9).lineTo(10, -9.4).lineTo(15.5, -9.4).lineTo(15.5, 4.7).lineTo(7.3, 4.7).lineTo(7.3, 7.8).lineTo(17.2, 7.8).lineTo(17.2, 10.4).lineTo(7.3, 10.4).lineTo(7.3, 17.5).closePath().moveTo(7.3, 2.4).lineTo(12.8, 2.4).lineTo(12.8, -1.3).lineTo(7.3, -1.3).closePath().moveTo(-1.1, 2.4).lineTo(4.4, 2.4).lineTo(4.4, -1.3).lineTo(-1.1, -1.3).closePath().moveTo(7.3, -3.5).lineTo(12.8, -3.5).lineTo(12.8, -7.1).lineTo(7.3, -7.1).closePath().moveTo(-1.1, -3.5).lineTo(4.4, -3.5).lineTo(4.4, -7.1).lineTo(-1.1, -7.1).closePath().moveTo(-15.5, 17.2).curveTo(-15.6, 16.6, -15.8, 15.8).curveTo(-16.1, 15.1, -16.5, 14.5).lineTo(-13.8, 14.6).lineTo(-12, 14.7).lineTo(-11.2, 14.6).curveTo(-10.9, 14.5, -10.7, 14.3).curveTo(-10.3, 13.9, -10.1, 12.8).curveTo(-9.8, 11.6, -9.6, 9.4).curveTo(-9.4, 7.2, -9.2, 3.8).lineTo(-17, 3.8).lineTo(-16.8, 0.4).lineTo(-16.7, -3.5).lineTo(-16.6, -7.4).lineTo(-9.2, -7.4).lineTo(-9.2, -13.2).lineTo(-17.2, -13.2).lineTo(-17.2, -15.8).lineTo(-6.5, -15.8).lineTo(-6.5, -4.8).lineTo(-14.1, -4.8).lineTo(-14.2, -1.7).lineTo(-14.3, 1.2).lineTo(-6.5, 1.2).lineTo(-6.5, 1.7).lineTo(-6.5, 2.5).lineTo(-7, 9.8).curveTo(-7.2, 12.6, -7.6, 14.1).curveTo(-7.9, 15.6, -8.4, 16.1).curveTo(-8.9, 16.7, -9.5, 16.9).curveTo(-10.1, 17.2, -10.9, 17.3).lineTo(-12.9, 17.3).lineTo(-15.5, 17.2).closePath().moveTo(0.7, -12.1).lineTo(-0.6, -14.2).lineTo(-2, -16.2).lineTo(0.3, -17.3).curveTo(1.4, -15.9, 2.4, -14.2).curveTo(3.4, -12.6, 4, -11.3).lineTo(1.7, -10.1).lineTo(0.7, -12.1).closePath();
        this.shape_9.setTransform(558.1, 803.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(8.2, 14.7).curveTo(5.2, 13.7, 1.6, 12.8).curveTo(-1.7, 14.4, -5.9, 15.3).curveTo(-10.2, 16.2, -15.6, 16.6).lineTo(-16.1, 15.3).lineTo(-16.8, 14.2).curveTo(-12.4, 13.9, -8.9, 13.3).curveTo(-5.3, 12.7, -2.5, 11.7).lineTo(-7.1, 10.7).lineTo(-11.9, 9.7).lineTo(-10, 7.5).lineTo(-8, 4.8).lineTo(-17, 4.8).lineTo(-17, 2.3).lineTo(-6.3, 2.3).lineTo(-5.3, 0.6).curveTo(-4.7, -0.3, -4.4, -1.1).lineTo(-14.5, -1.1).lineTo(-14.5, -10.9).lineTo(-6.1, -10.9).lineTo(-6.1, -14.2).lineTo(-16.4, -14.2).lineTo(-16.4, -16.7).lineTo(16.3, -16.7).lineTo(16.3, -14.2).lineTo(5.6, -14.2).lineTo(5.6, -10.9).lineTo(14.8, -10.9).lineTo(14.8, -1.1).lineTo(-3, -1.1).lineTo(-1.3, -0.7).lineTo(-2.1, 0.8).lineTo(-3, 2.3).lineTo(17, 2.3).lineTo(17, 4.8).lineTo(9.7, 4.8).curveTo(8.8, 6.7, 7.5, 8.2).curveTo(6.2, 9.8, 4.6, 11).curveTo(7.9, 11.8, 10.9, 12.7).curveTo(13.8, 13.6, 16.1, 14.5).lineTo(13.7, 16.7).curveTo(11.4, 15.7, 8.2, 14.7).closePath().moveTo(-6, 6.6).lineTo(-7.3, 8.2).lineTo(-3, 9.2).lineTo(1.1, 10.1).curveTo(2.9, 9.1, 4.3, 7.8).curveTo(5.6, 6.5, 6.5, 4.8).lineTo(-4.7, 4.8).lineTo(-6, 6.6).closePath().moveTo(5.6, -3.4).lineTo(11.9, -3.4).lineTo(11.9, -8.6).lineTo(5.6, -8.6).closePath().moveTo(-3.3, -3.4).lineTo(2.8, -3.4).lineTo(2.8, -8.6).lineTo(-3.3, -8.6).closePath().moveTo(-11.8, -3.4).lineTo(-6.1, -3.4).lineTo(-6.1, -8.6).lineTo(-11.8, -8.6).closePath().moveTo(-3.3, -10.9).lineTo(2.8, -10.9).lineTo(2.8, -14.2).lineTo(-3.3, -14.2).closePath();
        this.shape_10.setTransform(519.5, 804.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-3.7, 4.5).curveTo(-1.5, 3.6, -0.3, 2.3).curveTo(0.9, 0.9, 1.1, -1.1).lineTo(0.8, -1).lineTo(0.4, -1).curveTo(-0.8, -1, -1.6, -1.8).curveTo(-2.4, -2.4, -2.4, -3.8).curveTo(-2.4, -5.2, -1.6, -5.8).curveTo(-0.7, -6.6, 0.5, -6.5).curveTo(2.1, -6.6, 2.9, -5.4).curveTo(3.7, -4.2, 3.7, -2.1).curveTo(3.7, 1, 1.9, 3.3).curveTo(0.2, 5.5, -2.9, 6.5).closePath();
        this.shape_11.setTransform(470.8, 815.6);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(2.2, 15.8).curveTo(1.9, 15, 1.5, 14.4).lineTo(4.4, 14.4).lineTo(6.8, 14.4).lineTo(8.2, 14.4).curveTo(8.8, 14.4, 9, 14.2).curveTo(9.3, 13.9, 9.3, 13.4).lineTo(9.3, -7).lineTo(-3.1, -7).lineTo(-3.1, -9.8).lineTo(9.3, -9.8).lineTo(9.3, -17.2).lineTo(12.1, -17.2).lineTo(12.1, -9.8).lineTo(16.8, -9.8).lineTo(16.8, -7).lineTo(12.1, -7).lineTo(12.1, 13.4).curveTo(12.1, 14.9, 11.6, 15.6).curveTo(11.2, 16.4, 10.2, 16.7).curveTo(9.2, 17.1, 7.3, 17.1).lineTo(2.6, 17.2).lineTo(2.2, 15.8).closePath().moveTo(-16.7, 13.6).lineTo(-16.7, -14.2).lineTo(-4.8, -14.2).lineTo(-4.8, 10.6).lineTo(-14, 10.6).lineTo(-14, 13.6).closePath().moveTo(-14, 8).lineTo(-7.5, 8).lineTo(-7.5, -0.7).lineTo(-14, -0.7).closePath().moveTo(-14, -3.3).lineTo(-7.5, -3.3).lineTo(-7.5, -11.6).lineTo(-14, -11.6).closePath().moveTo(2.4, 3.9).lineTo(0.3, 0.6).lineTo(-1.8, -2.6).lineTo(0.5, -3.9).lineTo(2.7, -0.7).lineTo(4.9, 2.5).lineTo(6.5, 5.3).lineTo(4, 6.7).lineTo(2.4, 3.9).closePath();
        this.shape_12.setTransform(443.5, 803.3);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(9.4, 15.6).lineTo(5.2, 13.3).curveTo(3, 12.3, 0.9, 11.5).lineTo(2.8, 9.6).curveTo(4.9, 10.4, 7.1, 11.5).curveTo(9.3, 12.4, 11.2, 13.5).curveTo(13.3, 14.6, 14.6, 15.6).lineTo(12.7, 17.6).curveTo(11.3, 16.6, 9.4, 15.6).closePath().moveTo(-13.5, 16.5).lineTo(-14.4, 15.4).curveTo(-11.2, 14.6, -8.9, 13.5).curveTo(-6.7, 12.5, -5.2, 11.4).curveTo(-3.8, 10.3, -3, 9.1).lineTo(-12.5, 9.1).lineTo(-12.5, 6.8).lineTo(-1.8, 6.8).lineTo(-1.5, 5.2).lineTo(-1.5, 3.6).lineTo(-1.5, 3.6).lineTo(-7.2, 3.6).lineTo(-7.2, 2.2).curveTo(-9, 3.8, -11.2, 5.2).curveTo(-13.4, 6.6, -16, 7.8).lineTo(-16.9, 6.6).curveTo(-17.4, 5.9, -17.9, 5.6).curveTo(-14.4, 4.2, -11.7, 2.4).curveTo(-9.1, 0.4, -7.2, -1.9).lineTo(-17.1, -1.9).lineTo(-17.1, -4.2).lineTo(-5.4, -4.2).lineTo(-4.6, -5.7).lineTo(-3.8, -7.1).lineTo(-12.8, -7.1).lineTo(-12.8, -9.4).lineTo(-2.9, -9.4).lineTo(-2.5, -10.8).lineTo(-2.1, -12.2).lineTo(-14.4, -12.2).lineTo(-14.4, -14.6).lineTo(-1.7, -14.6).lineTo(-1.5, -16.1).lineTo(-1.4, -17.6).lineTo(1.5, -17.4).lineTo(1.3, -15.9).lineTo(1.2, -14.6).lineTo(14.2, -14.6).lineTo(14.2, -12.2).lineTo(0.7, -12.2).lineTo(0.3, -10.8).lineTo(-0.1, -9.4).lineTo(12.7, -9.4).lineTo(12.7, -7.1).lineTo(-0.9, -7.1).lineTo(-1.6, -5.7).lineTo(-2.3, -4.2).lineTo(16.8, -4.2).lineTo(16.8, -1.9).lineTo(6.7, -1.9).curveTo(8.8, 0.6, 11.7, 2.4).curveTo(14.5, 4.3, 17.9, 5.2).lineTo(16.9, 6.3).lineTo(16, 7.6).curveTo(13.6, 6.7, 11.3, 5.3).curveTo(9, 3.9, 7.1, 2.2).lineTo(7.1, 3.6).lineTo(1.2, 3.6).lineTo(1.2, 3.7).lineTo(1.1, 5.2).lineTo(0.9, 6.8).lineTo(12.1, 6.8).lineTo(12.1, 9.1).lineTo(0.1, 9.1).curveTo(-0.6, 10.6, -2.1, 12.2).curveTo(-3.6, 13.7, -6.2, 15).curveTo(-8.8, 16.4, -12.7, 17.6).lineTo(-13.5, 16.5).closePath().moveTo(6.3, 1.4).lineTo(4.9, -0.2).lineTo(3.7, -1.9).lineTo(-3.7, -1.9).lineTo(-5, -0.2).lineTo(-6.4, 1.4).lineTo(6.3, 1.4).lineTo(6.3, 1.4).closePath();
        this.shape_13.setTransform(404.5, 803.5);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(12.8, 15.8).lineTo(9.9, 14).lineTo(6.9, 12.3).lineTo(9, 10.7).lineTo(11.9, 12.3).lineTo(14.9, 14.1).lineTo(17.3, 15.7).lineTo(15.1, 17.5).curveTo(14.2, 16.7, 12.8, 15.8).closePath().moveTo(-7.6, 16.4).lineTo(-8.8, 15.4).lineTo(-5.6, 14.2).curveTo(-4, 13.5, -2.6, 12.7).curveTo(-1.2, 11.9, -0.1, 11).lineTo(2.5, 12.1).curveTo(1.3, 13.1, -0.2, 14.1).curveTo(-1.8, 15.1, -3.4, 16).curveTo(-5.1, 16.9, -6.7, 17.5).lineTo(-7.6, 16.4).closePath().moveTo(-16.2, 15).lineTo(-14.4, 11.5).curveTo(-13.3, 9.5, -12.3, 7.3).curveTo(-11.3, 5.1, -10.4, 2.9).lineTo(-8.2, 4.6).lineTo(-9.9, 8.8).lineTo(-11.8, 13).lineTo(-13.7, 16.8).closePath().moveTo(-5.6, 10.4).lineTo(-5.6, -2.6).lineTo(3.3, -2.6).lineTo(3.3, -5.5).lineTo(-4.2, -5.5).lineTo(-4.2, -7.8).lineTo(13.7, -7.8).lineTo(13.7, -5.5).lineTo(6, -5.5).lineTo(6, -2.6).lineTo(15.2, -2.6).lineTo(15.2, 10.4).closePath().moveTo(6, 8.2).lineTo(12.5, 8.2).lineTo(12.5, 5).lineTo(6, 5).closePath().moveTo(-3.1, 8.2).lineTo(3.3, 8.2).lineTo(3.3, 5).lineTo(-3.1, 5).closePath().moveTo(6, 2.8).lineTo(12.5, 2.8).lineTo(12.5, -0.4).lineTo(6, -0.4).closePath().moveTo(-3.1, 2.8).lineTo(3.3, 2.8).lineTo(3.3, -0.4).lineTo(-3.1, -0.4).closePath().moveTo(-13.1, -2.1).lineTo(-15.2, -3.3).lineTo(-17.3, -4.4).lineTo(-15.8, -6.5).lineTo(-13.7, -5.5).lineTo(-11.5, -4.4).lineTo(-9.8, -3.4).lineTo(-11.4, -1.1).lineTo(-13.1, -2.1).closePath().moveTo(14, -7.5).lineTo(14, -11.3).lineTo(-4.3, -11.3).lineTo(-4.3, -7.5).lineTo(-6.9, -7.5).lineTo(-6.9, -13.7).lineTo(3.3, -13.7).lineTo(2.6, -15.3).lineTo(1.8, -16.9).lineTo(4.5, -17.5).curveTo(5.1, -16.6, 5.6, -15.6).lineTo(6.4, -13.7).lineTo(16.7, -13.7).lineTo(16.7, -7.5).closePath().moveTo(-10.8, -12.3).lineTo(-12.9, -13.6).lineTo(-15.1, -14.7).lineTo(-13.4, -16.7).lineTo(-11.3, -15.7).lineTo(-9.2, -14.5).lineTo(-7.5, -13.4).lineTo(-9.2, -11.1).lineTo(-10.8, -12.3).closePath();
        this.shape_14.setTransform(365.6, 803.2);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(-11.2, 17.4).lineTo(-11.2, 2.4).lineTo(-13.3, 4.5).lineTo(-15.7, 6.3).curveTo(-15.9, 5.7, -16.3, 4.9).lineTo(-17.1, 3.8).curveTo(-13.8, 1.3, -11.3, -1.8).curveTo(-8.8, -5.1, -7, -8.8).lineTo(-16.2, -8.8).lineTo(-16.2, -11.5).lineTo(-5.7, -11.5).lineTo(-4.6, -14.5).lineTo(-3.7, -17.5).lineTo(-0.8, -16.8).lineTo(-1.6, -14.1).lineTo(-2.6, -11.5).lineTo(17.1, -11.5).lineTo(17.1, -8.8).lineTo(-3.8, -8.8).curveTo(-4.8, -6.7, -5.9, -4.8).curveTo(-7.1, -2.8, -8.4, -0.9).lineTo(-8.4, 17.4).closePath().moveTo(-5.9, 16.6).lineTo(-5.9, 14).lineTo(4.2, 14).lineTo(4.2, 3.2).lineTo(-4.4, 3.2).lineTo(-4.4, 0.5).lineTo(4.2, 0.5).lineTo(4.2, -6.8).lineTo(7, -6.8).lineTo(7, 0.5).lineTo(15.6, 0.5).lineTo(15.6, 3.2).lineTo(7, 3.2).lineTo(7, 14).lineTo(17.1, 14).lineTo(17.1, 16.6).closePath();
        this.shape_15.setTransform(327.2, 803.4);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(2.6, 16.7).lineTo(-1.1, 16.6).lineTo(-1.4, 15.2).curveTo(-1.7, 14.4, -2.1, 13.8).lineTo(0.6, 14).lineTo(2.9, 14.1).lineTo(4.5, 14.1).curveTo(5.1, 14.2, 5.5, 14.1).curveTo(6, 14, 6.3, 13.8).curveTo(7, 13.2, 7.6, 11.5).curveTo(8.2, 9.8, 8.7, 6.5).lineTo(-9.5, 6.5).lineTo(-9.5, 6.4).lineTo(-11.2, 6.4).lineTo(-9.9, 3.2).lineTo(-8.7, -0.4).lineTo(-16.6, -0.4).lineTo(-16.6, -3).lineTo(16.6, -3).lineTo(16.6, -0.4).lineTo(-5.6, -0.4).lineTo(-6.3, 1.7).lineTo(-7, 3.8).lineTo(12, 3.8).lineTo(12, 4.3).lineTo(11.9, 5.2).curveTo(11.4, 8.3, 10.9, 10.4).curveTo(10.5, 12.5, 9.9, 13.8).curveTo(9.3, 15, 8.6, 15.6).curveTo(8, 16.2, 7.2, 16.4).curveTo(6.4, 16.7, 5.3, 16.7).lineTo(2.6, 16.7).closePath().moveTo(-11.9, -6.5).lineTo(-11.9, -16.7).lineTo(12, -16.7).lineTo(12, -6.5).closePath().moveTo(-9.1, -9).lineTo(9.1, -9).lineTo(9.1, -14.1).lineTo(-9.1, -14.1).closePath();
        this.shape_16.setTransform(289.2, 804.2);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(3.1, 16.8).curveTo(1, 16.7, -0.3, 16.3).curveTo(-1.5, 15.9, -2.1, 15).curveTo(-2.5, 13.9, -2.5, 12.1).lineTo(-2.5, -2.6).lineTo(11.9, -2.6).lineTo(11.9, -12.3).lineTo(-3.3, -12.3).lineTo(-3.3, -15.1).lineTo(14.7, -15.1).lineTo(14.7, 2.1).lineTo(11.9, 2.1).lineTo(11.9, 0.1).lineTo(0.4, 0.1).lineTo(0.4, 12.1).curveTo(0.3, 13.2, 0.9, 13.6).curveTo(1.5, 14, 3.3, 14).lineTo(11.7, 14).curveTo(12.9, 14, 13.4, 13.6).curveTo(14.1, 13.1, 14.3, 11.7).curveTo(14.6, 10.3, 14.7, 7.6).curveTo(15.2, 8, 16, 8.3).lineTo(17.5, 8.8).curveTo(17.3, 11.9, 16.7, 13.6).curveTo(16.2, 15.3, 15, 16.1).curveTo(13.9, 16.7, 11.9, 16.8).closePath().moveTo(-12.3, 15.4).lineTo(-13.1, 14.4).lineTo(-12.4, 13.6).curveTo(-12, 13.1, -11.7, 12.4).curveTo(-11.4, 11.7, -11.3, 10.7).lineTo(-11.3, -3).lineTo(-17.5, -3).lineTo(-17.5, -5.7).lineTo(-8.5, -5.7).lineTo(-8.5, 10.8).lineTo(-4.6, 8).lineTo(-4.1, 9.3).lineTo(-3.7, 10.5).lineTo(-8.4, 13.9).lineTo(-10.7, 15.6).lineTo(-11.6, 16.5).lineTo(-11.6, 16.5).lineTo(-12.3, 15.4).closePath().moveTo(-10.1, -10.8).lineTo(-12.2, -13).lineTo(-14.5, -15.1).lineTo(-12.5, -16.8).lineTo(-10.3, -14.8).lineTo(-8.2, -12.7).lineTo(-6.5, -10.9).lineTo(-8.5, -8.9).lineTo(-10.1, -10.8).closePath();
        this.shape_17.setTransform(251.1, 803.7);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(-11.7, 17.7).lineTo(-11.7, 0.9).lineTo(12, 0.9).lineTo(12, 17.6).lineTo(9.1, 17.6).lineTo(9.1, 16.2).lineTo(-8.9, 16.2).lineTo(-8.9, 17.7).closePath().moveTo(-8.9, 13.8).lineTo(9.1, 13.8).lineTo(9.1, 9.6).lineTo(-8.9, 9.6).closePath().moveTo(-8.9, 7.3).lineTo(9.1, 7.3).lineTo(9.1, 3.4).lineTo(-8.9, 3.4).closePath().moveTo(-17, -2.4).lineTo(-17, -5).lineTo(-7.4, -5).curveTo(-7.7, -6.2, -8.3, -7.7).curveTo(-8.9, -9.2, -9.6, -10.5).lineTo(-6.9, -11.1).curveTo(-6, -9.7, -5.3, -8.2).curveTo(-4.7, -6.6, -4.4, -5.3).lineTo(-5.6, -5).lineTo(4.3, -5).lineTo(5.3, -7).lineTo(6.3, -9.2).lineTo(7, -11.2).lineTo(10.1, -10.5).lineTo(8.7, -7.6).lineTo(7.3, -5).lineTo(17, -5).lineTo(17, -2.4).closePath().moveTo(-14.8, -11.4).lineTo(-14.8, -13.9).lineTo(-1, -13.9).lineTo(-1.7, -15.5).lineTo(-2.5, -17.2).lineTo(0.3, -17.7).curveTo(0.9, -16.8, 1.4, -15.9).curveTo(1.9, -14.9, 2.2, -13.9).lineTo(15.1, -13.9).lineTo(15.1, -11.4).closePath();
        this.shape_18.setTransform(212.5, 803.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(-4.7, 16.5).lineTo(-5.7, 15.4).curveTo(-3.2, 14.2, -1.7, 12.4).curveTo(-0.2, 10.6, 0.5, 8.4).curveTo(1.2, 6.2, 1.4, 3.9).lineTo(-1.3, 6.1).lineTo(-3.9, 8).lineTo(-5.5, 5.5).lineTo(-2.2, 3.5).lineTo(1.6, 1).lineTo(1.7, -0.2).lineTo(1.7, -1.5).lineTo(1.7, -17.6).lineTo(4.3, -17.6).lineTo(4.3, -1.5).curveTo(4.3, 1.1, 4, 3.8).curveTo(3.8, 6.5, 3, 9).curveTo(2.2, 11.6, 0.5, 13.8).curveTo(-1.1, 16, -3.9, 17.6).lineTo(-4.7, 16.5).closePath().moveTo(14.5, 16.9).lineTo(10.9, 16.9).curveTo(9.6, 16.9, 8.9, 16.5).curveTo(8.2, 16.1, 7.9, 15.2).curveTo(7.6, 14.3, 7.6, 12.6).lineTo(7.6, -17.6).lineTo(10.3, -17.6).lineTo(10.3, -4.2).lineTo(10.3, 0.1).lineTo(10.8, -0.4).lineTo(13.3, 1.6).lineTo(15.8, 3.8).lineTo(17.7, 5.7).lineTo(15.9, 7.7).curveTo(14.9, 6.5, 13.4, 5.1).lineTo(10.3, 2.3).lineTo(10.3, 12.6).curveTo(10.2, 13.6, 10.4, 14).curveTo(10.6, 14.3, 11.3, 14.3).lineTo(14.4, 14.3).curveTo(14.7, 14.3, 14.9, 13.9).curveTo(15.1, 13.5, 15.2, 12.6).lineTo(15.4, 9.8).lineTo(16.5, 10.6).lineTo(17.8, 11).curveTo(17.6, 14.2, 16.9, 15.6).curveTo(16.2, 16.9, 14.6, 16.9).lineTo(14.5, 16.9).closePath().moveTo(-17.8, 12.5).lineTo(-15.8, 12).lineTo(-15.8, -1).lineTo(-13.6, -1).lineTo(-13.6, 11.5).lineTo(-11.1, 10.9).lineTo(-11.1, -4).lineTo(-15.8, -4).lineTo(-15.8, -15.6).lineTo(-4.8, -15.6).lineTo(-4.8, -4).lineTo(-8.8, -4).lineTo(-8.8, 0.8).lineTo(-4.7, 0.8).lineTo(-4.7, 3.4).lineTo(-8.8, 3.4).lineTo(-8.8, 10.3).lineTo(-4, 9.1).lineTo(-3.7, 11.5).lineTo(-10.8, 13.4).lineTo(-17.2, 15.1).closePath().moveTo(-13.5, -6.4).lineTo(-7.3, -6.4).lineTo(-7.3, -13.2).lineTo(-13.5, -13.2).closePath().moveTo(10.3, -4.2).lineTo(11.8, -6.8).lineTo(13.3, -9.9).lineTo(14.5, -12.7).lineTo(17.2, -11.5).lineTo(15.6, -8.5).lineTo(13.9, -5.6).lineTo(12.3, -3.1).closePath().moveTo(-1.6, -5.9).lineTo(-2.8, -8.8).curveTo(-3.5, -10.2, -4.3, -11.5).lineTo(-2.1, -12.5).curveTo(-1.2, -11.2, -0.5, -9.8).lineTo(0.7, -6.9).curveTo(1.2, -5.5, 1.5, -4.4).lineTo(-0.9, -3.3).curveTo(-1.1, -4.4, -1.6, -5.9).closePath().moveTo(10.3, -4.2).closePath();
        this.shape_19.setTransform(174.3, 803.5);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.beginFill("#000000").beginStroke().moveTo(-2, 11.5).curveTo(-2.8, 10.7, -2.9, 9.4).curveTo(-2.8, 8.1, -2, 7.3).curveTo(-1.2, 6.5, 0, 6.5).curveTo(1.2, 6.5, 2.1, 7.3).curveTo(2.8, 8.1, 2.9, 9.4).curveTo(2.8, 10.7, 2.1, 11.5).curveTo(1.2, 12.3, 0, 12.3).curveTo(-1.2, 12.3, -2, 11.5).closePath().moveTo(-2, -7.3).curveTo(-2.8, -8, -2.9, -9.3).curveTo(-2.8, -10.7, -2, -11.5).curveTo(-1.2, -12.2, 0, -12.3).curveTo(1.2, -12.2, 2.1, -11.5).curveTo(2.8, -10.7, 2.9, -9.3).curveTo(2.8, -8, 2.1, -7.3).curveTo(1.2, -6.5, 0, -6.5).curveTo(-1.2, -6.5, -2, -7.3).closePath();
        this.shape_20.setTransform(126.3, 805.9);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.beginFill("#000000").beginStroke().moveTo(-16.3, 15.5).lineTo(-14.1, 12).lineTo(-11.5, 7.6).curveTo(-10.2, 5.3, -9.1, 3.2).lineTo(-7, 5).lineTo(-9.2, 9.3).lineTo(-11.6, 13.5).lineTo(-14, 17.4).closePath().moveTo(-7.6, 16.6).lineTo(-7.6, 13.9).lineTo(3.7, 13.9).lineTo(3.7, 4).lineTo(-4.9, 4).lineTo(-4.9, 1.3).lineTo(3.7, 1.3).lineTo(3.7, -7.3).lineTo(-6.4, -7.3).lineTo(-6.4, -10).lineTo(16.6, -10).lineTo(16.6, -7.3).lineTo(6.6, -7.3).lineTo(6.6, 1.3).lineTo(15.3, 1.3).lineTo(15.3, 4).lineTo(6.6, 4).lineTo(6.6, 13.9).lineTo(17.5, 13.9).lineTo(17.5, 16.6).closePath().moveTo(-12.4, -1.4).lineTo(-15, -2.9).lineTo(-17.5, -4.2).lineTo(-16, -6.4).lineTo(-13.4, -5.1).lineTo(-10.8, -3.7).lineTo(-8.8, -2.4).lineTo(-10.5, -0.1).lineTo(-12.4, -1.4).closePath().moveTo(4.1, -12.1).curveTo(3.7, -13.2, 3, -14.3).lineTo(1.8, -16.5).lineTo(4.4, -17.4).lineTo(5.7, -15.3).lineTo(6.8, -13.1).lineTo(7.7, -11.2).lineTo(4.9, -10.1).curveTo(4.7, -10.9, 4.1, -12.1).closePath().moveTo(-10.3, -11.9).lineTo(-12.8, -13.3).lineTo(-15.4, -14.7).lineTo(-13.9, -16.8).lineTo(-11.3, -15.6).lineTo(-8.7, -14.1).lineTo(-6.7, -12.8).lineTo(-8.3, -10.4).lineTo(-10.3, -11.9).closePath();
        this.shape_21.setTransform(97.5, 803.2);

        this.instance_3 = new lib.遮罩();
        this.instance_3.parent = this;
        this.instance_3.setTransform(884.6, 461.9, 1, 1, 0, 0, 0, 960, 540);
        this.instance_3.alpha = 0.5;

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_3}, {t: this.shape_21}, {t: this.shape_20}, {t: this.shape_19}, {t: this.shape_18}, {t: this.shape_17}, {t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}, {t: this.instance_2}, {t: this.instance_1}, {t: this.instance}, {t: this.movieClip_1}]}).wait(1));

        // 弹框-重点-下弹力跳音
        this.instance_4 = new lib._02();
        this.instance_4.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(808.6, 383.9, 1920, 1080);
// library properties:
    lib.properties = {
        id: '0B5F01FFDB030B4FBC7EECCCA1DB3D05',
        width: 1768,
        height: 924,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {src: "images/03 跳音知识点_03含义_atlas_P_.png?1530778625507", id: "03 跳音知识点_03含义_atlas_P_"},
            {src: "images/03 跳音知识点_03含义_atlas_NP_.jpg?1530778625507", id: "03 跳音知识点_03含义_atlas_NP_"}
        ],
        preloads: []
    };


// bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function () {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['0B5F01FFDB030B4FBC7EECCCA1DB3D05'] = {
        getStage: function () {
            return exportRoot.getStage();
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;