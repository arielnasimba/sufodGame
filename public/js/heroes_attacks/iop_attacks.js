
let width = window.innerWidth,
    height = window.innerHeight,
    ratio = window.devicePixelRatio;



//************  iop movements start **************/


// /****** iop standing start *****/

export function iop_await_(image_pos){

}


// /****** iop standing end *****/


// ****** iop attacks start ***** //

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
        context.drawImage(sprites, 297*step, 0, 297, 619, x -240, y - 880 ,  297,619 );
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
        context.drawImage(sprites, 490*step, 0, 490, 340, x -240, y - 660 ,  490,340 );
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
        context.drawImage(sprites, 275*step, 0, 275, 350, x -200, y - 720 ,  275,350 );
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
        context.drawImage(sprites, 250*step, 0, 250, 176, x -260, y - 460 ,  250,176 );
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



