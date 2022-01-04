import "./asset/css/reset.css";
import "./asset/css/main.scss";
import $ from "./asset/js/jquery.min.js";
import * from "./asset/js/scaleToWindow.js";

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
// import Icon from './asset/img/bg.png';

//Created a Pixi Application
let app = new PIXI.Application({
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
console.info('xxxxxxx');