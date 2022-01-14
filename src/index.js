import "./asset/css/reset.css";
import "./asset/css/main.scss";
import * as PIXI from 'pixi.js';
import $ from "jquery";
import Tween from '@tweenjs/tween.js'
import {
    scaleToWindow
} from "./asset/js/scaleToWindow.js";
import {
    Container,
    State
} from "pixi.js";

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
// import Icon from './asset/img/bg.png';  

let Application = PIXI.Application,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    container = PIXI.Container;

let loader = new PIXI.Loader(),
    resources = loader.resources;

// 创建一个PIXI应用
let app = new Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
// // app.renderer.resize(window.innerWidth, window.innerHeight);
$('#scene').append(app.view);
// const container = new PIXI.Container();
// app.stage.addChild(container);
scaleToWindow(app.view, '#2C3539');

// loader
//     .add("./asset/img/figure.png")
//     .add("./asset/img/tileset.png")
//     .add("./asset/img/main.json")
//     .load(setup);
PIXI.Loader.shared.add("./asset/img/start_main.json").load(setup);

// 在整个过程中，可以发出多个信号。
// 每个加载/错误的文件调用一次
loader.onProgress.add((e) => {
    console.info('progress', e.progress);
    // ! function (e) {
    //     var n = parseInt(e % 10),
    //         t = Math.floor(e / 10);
    //     $(".loading_num .num").eq(1).removeClass().addClass("num").addClass("n" + t), $(".loading_num .num").eq(2).removeClass().addClass("num").addClass("n" + n), 100 === e && ($(".loading_num .num").eq(0).css({
    //         display: "inline-block"
    //     }), $(".loading_num .num").eq(1).removeClass().addClass("num").addClass("n0"), $(".loading_num .num").eq(2).removeClass().addClass("num").addClass("n0"))
    // }(parseInt(e.progress))

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
let avatar_1, avatar_2, avatar_3, id, state, animatedSprite;

function setup() {
    console.info('setup');
    let figures = new container();
    let sheet = PIXI.Loader.shared.resources["./asset/img/start_main.json"].spritesheet;
    animatedSprite = new PIXI.AnimatedSprite(sheet.animations["loading_ball"]);
    figures.addChild(animatedSprite);
    app.stage.addChild(figures);
    // animatedSprite.width = 113;
    // animatedSprite.height = 273;
    animatedSprite.scale.set(0.4, 0.4);
    animatedSprite.accessibleChildren = false;
    animatedSprite.loop = false;
    animatedSprite.animationSpeed = 0.1;
    animatedSprite.play();


    // //创建人物这个精灵
    // let figure = new Sprite(resources["./asset/img/figure.png"].texture);
    // //定位精灵
    // figure.position.set(50, 50);
    // //设置大小
    // figure.width = 120;
    // figure.height = 80;
    // //改变精灵锚点
    // figure.anchor.set(0.5, 0.5);

    // //添加人物到舞台
    // app.stage.addChild(figure);

    //从纹理创建`tileset`精灵
    // let texture = TextureCache["./asset/img/tileset.png"];
    // let rectangle = new Rectangle(96, 64, 32, 32);
    // //告诉纹理使用那个矩形截面 
    // texture.frame = rectangle;
    // //从纹理创建精灵   
    // let rocket = new Sprite(texture);
    // rocket.x = 32;
    // rocket.y = 32;
    // app.stage.addChild(rocket);
    // app.renderer.render(app.stage);

    // let figures = new container();


    // //3种方法可以从纹理图集框架制作精灵    

    // // let avatar_1, avatar_2, avatar_3, id;
    // // 1.直接访问纹理缓存
    // let avatar_1Texture = TextureCache['avatar_1.png'];
    // avatar_1 = new Sprite(avatar_1Texture);
    // avatar_1.width = 120;
    // avatar_1.height = 80;


    // //2.通过加载程序的资源访问纹理
    // avatar_2 = new Sprite(resources["./asset/img/main.json"].textures["avatar_2.png"]);
    // avatar_2.width = 120;
    // avatar_2.height = 80;

    // //使用资源管理器垂直居中
    // console.info('xxxxxxx', app.screen.height);
    // avatar_2.x = 0;
    // avatar_2.y = app.screen.height / 2 - avatar_2.height / 2;

    // //3.为所有纹理图集创建一个名为"id"的可选别名
    // //帧 id 纹理
    // id = resources["./asset/img/main.json"].textures;

    // // 使用别名制作
    // avatar_3 = new Sprite(id["avatar_3.png"]);
    // avatar_3.width = 120;
    // avatar_3.height = 80;
    // avatar_3.vx = 0;
    // avatar_3.vy = 0;
    // //Position the avatar_3 next to the right edge of the canvas  
    // avatar_3.x = app.screen.width - avatar_3.width;
    // avatar_3.y = app.screen.height / 2 - avatar_3.height / 2;


    // figures.addChild(avatar_1);
    // figures.addChild(avatar_2);
    // figures.addChild(avatar_3);
    // app.stage.addChild(figures);

    // 游戏循环(game loop)
    state = play;
    app.ticker.add(delta => gameLoop(delta));
    // gameLoop();
    new Tween.Tween({
        x: 0,
        y: 40
    }).to({
        x: 150,
        y: 130
    }, 2 * 1000).onUpdate(() => {
        animatedSprite.x += 1;
        animatedSprite.y += 1;
    }).onComplete(() => {
        console.info('2222')
        animatedSprite.visible = false;
        animatedSprite.x = 0;
        animatedSprite.y = 0;
    }).start();

}

function gameLoop(delta) {
    // requestAnimationFrame(gameLoop);
    // avatar_3.x += 1;
    state(delta)

}

function play() {
    Tween.update();
    // animatedSprite.vx = 1
    // animatedSprite.x += animatedSprite.vx;
}