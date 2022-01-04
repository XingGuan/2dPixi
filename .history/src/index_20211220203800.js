import "./asset/css/reset.css";
import "./asset/css/main.scss";
import "./asset/js/pixi.min";
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
import Icon from './asset/img/bg.png';

function component() {
  const element = document.createElement('span');
  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}
console.log('sssssssss');
document.body.appendChild(component());