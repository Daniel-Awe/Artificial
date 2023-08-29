(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(12,1,1).p("AHrAAQAADMiQCPQiPCQjMAAQjLAAiQiQQiPiPAAjMQAAjLCPiQQCQiPDLAAQDMAACPCPQCQCQAADLg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(12,1,1).p("ADCAKIiMisAjBAKIGDAAIiACZ");
	this.shape_1.setTransform(-0.175,-1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37A1C7").s().p("AlaFbQiQiQAAjLQAAjKCQiQQCQiQDKAAQDLAACQCQQCQCQAADKQAADLiQCQQiQCQjLAAQjKAAiQiQgABBCYIB/iYImCAAIGCAAgADAAAIiMitg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1C00E1").ss(12,1,1).p("AKRAAQAAEQjBDAQjADBkQAAQkPAAjBjBQjAjAAAkQQAAkPDAjBQDBjAEPAAQEQAADADAQDBDBAAEPg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(12,1,1).p("AEDAOIi7jnAEDAOIiqDMAkCAOIIFAA");
	this.shape_4.setTransform(-0.25,-1.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37A1C7").s().p("AnPHQQjAjAAAkQQAAkPDAjAQDAjAEPAAQEQAADADAQDADAAAEPQAAEQjADAQjADAkQAAQkPAAjAjAgABWDLICqjLIi7jnIC7DnIoFAAIIFAAgAEAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-71.6,143.3,143.3);


// stage content:
(lib.AnFirst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,14];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.stop();
		this.button1.addEventListener('click', button1Fun);
		
		function button1Fun(e){
			_this.gotoAndPlay(2);
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// tree
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(12,1,1).p("Am2MZIOPAGAm2MZIAASrIOFAAIAKylILSAAQGj3V6B0NQ4fTUGyYIg");
	this.shape.setTransform(1047.7791,418.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#37A1C7").s().p("AHZVxIuPgGIrqAAQmy4HYfzVQaBUNmjXVg");
	this.shape_1.setTransform(1047.7791,359.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// cycle2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1C00E1").ss(23,1,1).p("EiV9hUSMEr7AAAMAAAColMkr7AAAg");
	this.shape_2.setTransform(959.85,539.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1C00E1").ss(12,1,1).p("AKXc9QgVIKl4F4QmMGNoyAAQoyAAmOmNQmNmOAAoyQAAoyGNmNQGOmOIyAAQIyAAGMGOQGOGNAAIyQAAAfgBAfUArZAzWAxegl+AFBcMIFWAxEhUkAzmQAAFRjuDuQjuDulRAAQlRAAjujuQjujuAAlRQAAlRDujuQDujuFRAAQFRAADuDuQDuDuAAFRgEhsEANSMBmBgbHEALJghUUCEVhQNgs1B/k");
	this.shape_3.setTransform(811.5233,435.8843);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E98A40").s().p("Eg4cAZCQjujuAAlRQAAlRDujuQDujuFRAAQFRAADuDuQDuDuAAFRQAAFRjuDuQjuDulRAAQlRAAjujugAX/HcQmOmNAAoxQAAoyGOmOQGNmNIyAAQIyAAGOGNQGNGOAAIyIgBA9IlVgxIFVAxQgVIKl3F3QmOGOoyAAQoyAAmNmOg");
	this.shape_4.setTransform(492.775,663.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(15));

	// text
	this.textOne = new cjs.Text("如果这是第一个AN文件，如何用vue去连接它", "50px 'honglei sim'", "#E98A40");
	this.textOne.name = "textOne";
	this.textOne.lineHeight = 62;
	this.textOne.lineWidth = 1112;
	this.textOne.parent = this;
	this.textOne.setTransform(389.8,788.45);

	this.timeline.addTween(cjs.Tween.get(this.textOne).wait(15));

	// button
	this.button1 = new lib.button1();
	this.button1.name = "button1";
	this.button1.setTransform(316.3,578.7);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(15));

	// rectangle
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC416C").s().p("EgoTASWMAAAgkrMBQnAAAMAAAAkrg");
	this.shape_5.setTransform(469.15,242.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC416C").s().p("EgoTASnQHY0+nYvtUAojgBmAoEABmQjYSVDYSWQ1TAR0JAAQ0JAAzCgRg");
	this.shape_6.setTransform(532.65,238.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC416C").s().p("EgoTAS5QOw3ouwtDUAozgDPAn0ADPQmxSVGxSWQ2cAh0JAAQ0KAAx4ghg");
	this.shape_7.setTransform(596.2,234.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC416C").s().p("EgoTATKQWI6R2IqZUApEgE2AnjAE2QqISUKISWQ3kAz0JAAQ0KAAwwgzg");
	this.shape_8.setTransform(659.7,230.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC416C").s().p("EgoTATcQdg879gnwUApUgGeAnTAGeQthSVNhSWQ4tBD0JAAQ0KAAvnhDg");
	this.shape_9.setTransform(723.25,226.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC416C").s().p("EgoTATtUAk4gflgk4gFGUAplgIEAnCAIEQw5SVQ5SWQ51BU0JAAQ0KAAufhUg");
	this.shape_10.setTransform(786.75,222.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC416C").s().p("EgoTAT/UAsPgiPgsPgCcUAp1gJtAmyAJtQ0SSVUSSWQ6+Bk0JAAQ0KAAtWhkg");
	this.shape_11.setTransform(850.3,218.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC416C").s().p("EgoTAUQUAzngk4gznAAOUAqFgLVAmiALVQ3pSVXpSVQ8HB20JAAQ0KAAsNh2g");
	this.shape_12.setTransform(913.8,214.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC416C").s().p("EgoTAUiUA6/gnig6/AC3UAqWgM8AmRAM8Q7CSVbCSWQ9PCG0JAAQ0KAArFiGg");
	this.shape_13.setTransform(977.35,210.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC416C").s().p("EgoTAUzUBCXgqLhCXAFgUAqmgOjAmBAOjQ+ZSWeZSVQ+YCX0JAAQ0KAAp8iXg");
	this.shape_14.setTransform(1040.85,206.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC416C").s().p("EgoTAVFUBJvgs1hJvAIKUAq2gQLAlxAQLUghyASVAhyASWQ/hCn0JAAQ0KAAozing");
	this.shape_15.setTransform(1104.4,202.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC416C").s().p("EgoTAVWUBRHgvehRHAK0UArHgRzAlgARzUglKASVAlKASVUggpAC4gUJAAAQ0KAAnri4g");
	this.shape_16.setTransform(1167.9,198.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC416C").s().p("EgoTAVoUBYfgyIhYfANdUArXgTaAlQATaUgoiASVAoiASWUghyADJgUJAAAQ0KAAmijJg");
	this.shape_17.setTransform(1231.45,194.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC416C").s().p("EgoTAV5UBf3g0xhf3AQGUArogVBAk/AVBUgr5ASWAr5ASVUgi7ADagUJAAAQ0KAAlZjag");
	this.shape_18.setTransform(1294.95,190.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// cycle
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37A1C7").s().p("AybScQnpnoAAq0QAAqzHpnpQHonoKzAAQKzAAHpHoQHpHpAAKzQAAK0npHoQnpHpqzAAQqzAAnonpg");
	this.shape_19.setTransform(1590.25,386.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(15));

	// background
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("EB0dARAQAAK0nqHoQnoHpq0AAQqzAAnpnpQnonoAAq0QAAqzHonpQHpnoKzAAQK0AAHoHoQHqHpAAKzgEh0cgrEMBQoAAAMAAAAksMhQoAAAg");
	this.shape_20.setTransform(1002,388.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(948.6,528.6,982.6,561.9999999999999);
// library properties:
lib.properties = {
	id: 'A9D0CD91F9445C42AABFA47ECFBB5AB9',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['A9D0CD91F9445C42AABFA47ECFBB5AB9'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;