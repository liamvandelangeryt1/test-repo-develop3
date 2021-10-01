import Particle from './classes/Particle.js';
import {loadImage, random} from './functions/lib.js';
import Vector from './classes/Vector.js';


{
    const $canvas = document.querySelector(`.canvas`);
    const ctx = $canvas.getContext(`2d`);

    let smoke;
    const balls = [];
    const mouse = new Vector($canvas.width / 2, $canvas.height / 2);

    const handleMouseMove = event => {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
        ctx.drawImage(smoke,mouse.x,mouse.y);
    };

    const drawBalls = () => {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        balls.forEach(ball => ball.draw());
        requestAnimationFrame(drawBalls);
    }

    const init  = async () => {
        for (let i = 0; i < 1000; i++) {
            balls.push(new Particle($canvas, mouse, random(0, $canvas.width), random(0, $canvas.height), `white`));
        }

        //drawBalls();
        smoke = await loadImage(`./img/smoke.png`);
        ctx.drawImage(smoke,0,0);
        $canvas.addEventListener(`mousemove`, handleMouseMove);
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

    };

    init();
}