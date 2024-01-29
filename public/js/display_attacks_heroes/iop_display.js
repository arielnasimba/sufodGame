import * as IOP_ATTACK from "../heroes_attacks/iop_attacks.js"




/**   epee celeste attack display 
 * 
 * @param {*} canvasX 
 */
export function epee_celeste(canvasX) {


    
    document.querySelector("#iop_p1").style.display = `none`;
    
    document.querySelector(".iop_sheet").style.display = `flex`;
    
    document.querySelector("canvas#iop_attack_epee_celeste").style.display = "flex";
    
    document.querySelector("canvas#iop_attack_deus").style.display = "none";
    document.querySelector("canvas#iop_attack_cut").style.display = "none";
    document.querySelector("canvas#iop_attack_intimidation").style.display = "none";

    document.querySelector("canvas#iop_attack_epee_celeste").style.zIndex = 0;
    document.querySelector(".list_btn_gamer1_area").style.zIndex = 1;


    
    IOP_ATTACK.Attack_3(canvasX);
    
    console.log("epee celeste attack");

    
}

/**   cut attack display 
 * 
 * @param {*} canvasX 
 */
export function cut(canvasX) {

    document.querySelector("#iop_p1").style.display = `none`;

    document.querySelector(".iop_sheet").style.display = `flex`;
    
    document.querySelector("canvas#iop_attack_cut").style.display = "flex";

    document.querySelector("canvas#iop_attack_epee_celeste").style.display = "none";
    document.querySelector("canvas#iop_attack_deus").style.display = "none";
    document.querySelector("canvas#iop_attack_intimidation").style.display = "none";

    document.querySelector("canvas#iop_attack_cut").style.zIndex = 0;
    document.querySelector(".list_btn_gamer1_area").style.zIndex = 1;


    IOP_ATTACK.Attack_2(canvasX);
    
    console.log("cut attack");

    
}

/**   deus attack display 
 * 
 * @param {*} canvasX 
 */
export function deus(canvasX) {
    
    document.querySelector("#iop_p1").style.display = `none`;

    document.querySelector(".iop_sheet").style.display = `flex`;

    document.querySelector("canvas#iop_attack_deus").style.display = "flex";

    document.querySelector("canvas#iop_attack_epee_celeste").style.display = "none";
    document.querySelector("canvas#iop_attack_cut").style.display = "none";
    document.querySelector("canvas#iop_attack_intimidation").style.display = "none";

    
    document.querySelector("canvas#iop_attack_deus").style.zIndex = 0;
    document.querySelector(".list_btn_gamer1_area").style.zIndex = 1;

    
    IOP_ATTACK.Attack_1(canvasX);
    console.log("deus punition");
    
}

/**   intimidation attack display 
 * 
 * @param {*} canvasX 
 */
export function intimidation(canvasX) {

    document.querySelector("#iop_p1").style.display = `none`;

    document.querySelector(".iop_sheet").style.display = `flex`;


    document.querySelector("canvas#iop_attack_intimidation").style.display = "flex";

    document.querySelector("canvas#iop_attack_deus").style.display = "none";
    document.querySelector("canvas#iop_attack_epee_celeste").style.display = "none";
    document.querySelector("canvas#iop_attack_cut").style.display = "none";

    
    document.querySelector("canvas#iop_attack_intimidation").style.zIndex = 0;
    document.querySelector(".list_btn_gamer1_area").style.zIndex = 1;

    IOP_ATTACK.Attack_4(canvasX);
    console.log("intimidation");
    
}
