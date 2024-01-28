
let width = window.innerWidth,
    height = window.innerHeight,
    ratio = window.devicePixelRatio;

//************  xelor movements **************/



//******  left side start *********/

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

//******  left side end *********/


//******  right side start *********/

export function Attack_xelor_1_to_right(canvasX) {

    let x = width / 2;
    let r = 40;
    let step = 0;
    
   
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
export function Attack_xelor_2_to_right(canvasX) {

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
export function Attack_xelor_3_to_right(canvasX) {

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
    sprites.src = `./public/assets/characters/xelor/attacks_/to_right/paradox_temporel_attack_right_sheet.png`;
    
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
        context.drawImage(sprites, 575 * step , 0, 575, 500, x - 8040, y - 250, 575, 500);
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
export function Attack_xelor_4_to_right(canvasX) {

    let x = width / 2;
    let r = 40,
        step = 0;
    
   
    let context = canvasX.getContext("2d");
    // let context = canvasX.getContext("2d");
    
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

//******  right side end *********/


//************  xelor movements end  **************/


