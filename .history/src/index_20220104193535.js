import "./asset/css/reset.css";
import "./asset/css/main.scss";
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
// import Icon from './asset/img/bg.png';

//Created a Pixi Application
let app = new PIXI.Application({
    width: 256,
    height: 256
});
