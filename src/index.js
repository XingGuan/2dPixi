import "./asset/css/reset.css";
import "./asset/css/main.scss";
import * as PIXI from 'pixi.js';
import $ from "./asset/js/jquery.min.js";
import {
    scaleToWindow
} from "./asset/js/scaleToWindow.js";

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
// import Icon from './asset/img/bg.png';  

let Application = PIXI.Application,
    Sprite = PIXI.Sprite;

let loader = new PIXI.Loader(),
    resources = loader.resources;


// 创建一个PIXI应用
let app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
// app.renderer.resize(window.innerWidth, window.innerHeight);
$('#scene').append(app.view);
scaleToWindow(app.view, '#2C3539');

loader
    .add("./asset/img/figure.png")
    .add("./asset/img/figure1.png")
    .load(setup);

// 在整个过程中，可以发出多个信号。
// 每个加载/错误的文件调用一次
loader.onProgress.add(() => {
    console.info('progress');
}); 
// 每个错误文件调用一次
loader.onError.add(() => {
    console.info('error');
}); 
// 每个加载文件调用一次
loader.onLoad.add(() => {
    console.info('onload');
}); 
// 排队的资源全部加载时调用一次。
loader.onComplete.add(() => {
    console.info('complete');
}); 

function loadProgressHandler() {
    console.info("loading");
}

//这个setup方法将在图片加载完成后执行
function setup() {
    console.info('setup');
    //创建人物这个精灵
    let figure = new Sprite(resources["./asset/img/figure.png"].texture);
    //添加人物到舞台
    app.stage.addChild(figure);
}