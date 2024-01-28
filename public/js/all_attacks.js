
let width = window.innerWidth,
    height = window.innerHeight,
    ratio = window.devicePixelRatio;



//************  iop movements start **************/


// /****** iop standing start *****/
export function iop_await_(image_pos){

}

export function iop_await(canvasX){

    let x = width / 2;
    let r = 40,
        step = 0;
    
    // let canvas_iop = document.querySelector("canvas#iop"),
        let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/iop/await_pos/iop_await_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        context.drawImage(sprites, 74*step, 0, 74, 121, x -840, y - 250 , 74 ,121 );
    }
    function update() {
        step+=0.0010;
        if (step  >= 4) {
            step -= 4;
        }
    }

    animate();

}

// /****** iop standing end *****/


// /****** iop attacks start *****/

/****** attack one deus punition*****/
export function Attack_1(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
    // let canvas_iop = document.querySelector("canvas#iop"),
        let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/iop/attacks_/iop_sheet_sprite.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        context.drawImage(sprites, 297*step, 0, 297, 619, x -840, y - 650 ,  297,619 );
    }
    function update() {
        step+=0.070;
        if (step >= 7) {
            step -= 6;
        }
    }

    animate();
}

/****** attack two cut *****/
export function Attack_2(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
    // let canvas_iop = document.querySelector("canvas#iop"),
        let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/iop/attacks_/iop_cut_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        context.drawImage(sprites, 490*step, 0, 490, 340, x -800, y - 420 ,  490,340 );
    }
    function update() {
        step+=0.070;
        if (step >= 7) {
            step -= 6;
        }
    }

    animate();
}
/****** attack three epee celeste *****/
export function Attack_3(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
    // let canvas_iop = document.querySelector("canvas#iop"),
        let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/iop/attacks_/iop_epee_celeste_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        context.drawImage(sprites, 275*step, 0, 275, 350, x -800, y - 420 ,  275,350 );
    }
    function update() {
        step+=0.070;
        if (step >= 8) {
            step -= 7;
        }
    }

    animate();
}

/****** attack fourth intimidation *****/
export function Attack_4(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
    // let canvas_iop = document.querySelector("canvas#iop"),
        let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/iop/attacks_/iop_intimidation_attack_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        context.drawImage(sprites, 250*step, 0, 250, 176, x -800, y - 240 ,  250,176 );
    }
    function update() {
        step+=0.070;
        if (step >= 8) {
            step -= 7;
        }
    }

    animate();
}

// /****** iop attacks end *****/

//************  iop movements end **************/



//************  xelor movements start **************/

export function Attack_xelor_1(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
   
    let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/xelor/attacks_/to_left/rayon_obscur_attack_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        // let s = r / 12;
        context.drawImage(sprites, 328 * (6 - Math.floor(step)), 0, 328, 286, x - 1050, y - 950, 328, 286);
        // context.drawImage(sprites, 328*step, 0, 328, 286, x -200, y - 1000 ,  328,286 );
    }
    function update() {
        step+=0.070;
        if (step >= 7) {
            step -= 6;
        }
    }
    
    animate();

    
}

// vol de temps attack 
export function Attack_xelor_2(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
   
    let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/xelor/attacks_/vol_de_temps_attack_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        // let s = r / 12;
        context.drawImage(sprites, 497 * (5 - Math.floor(step)), 0, 497, 502, x - 550, y - 1150, 497, 502);
        // context.drawImage(sprites, 328*step, 0, 328, 286, x -200, y - 1000 ,  328,286 );
    }
    function update() {
        step+=0.070;
        if (step >= 6) {
            step -= 5;
        }
    }
    
    animate();

    
}
// paradox attack
export function Attack_xelor_3(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
   
    let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/xelor/attacks_/to_left/paradox_temporel_attack_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        // let s = r / 12;
        context.drawImage(sprites, 575 * (5 - Math.floor(step)), 0, 575, 500, x - 720, y - 950, 575, 500);
        // context.drawImage(sprites, 328*step, 0, 328, 286, x -200, y - 1000 ,  328,286 );
    }
    function update() {
        step+=0.070;
        if (step >= 6) {
            step -= 5;
        }
    }
    
    animate();

    
}
// aiguille attack
export function Attack_xelor_4(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
   
    let context = canvasX.getContext("2d");
    
    canvasX.width = width * ratio;
    canvasX.height = height * ratio;
    canvasX.style.width = width + "px";
    canvasX.style.height = height + "px";
    context.scale(ratio, ratio);
    context.imageSmoothingEnable = false;
    
    let sprites = new Image();
    // sprites.onload = animate;
    sprites.src = `./public/assets/characters/xelor/attacks_/to_left/aiguille_attack_sheet.png`;
    
    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }
    
    function draw() {
        context.clearRect(0 ,0 ,width, height);
        drawShell(x, height, Math.floor(step));
    }
    function drawShell(x,y, step) {
        // let s = r / 12;
        context.drawImage(sprites, 500 * (6 - Math.floor(step)), 0, 500, 500, x - 550, y - 1050, 500, 500);
        // context.drawImage(sprites, 328*step, 0, 328, 286, x -200, y - 1000 ,  328,286 );
    }
    function update() {
        step+=0.070;
        if (step >= 7) {
            step -= 6;
        }
    }
    
    animate();

    
}


//************  xelor movements end **************/


