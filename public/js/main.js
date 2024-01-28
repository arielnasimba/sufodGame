import * as ATT from "./all_attacks.js"
import * as XEL from "./heroes_attacks/xelor_attacks.js"

// let width = window.innerWidth,
//     height = window.innerHeight,
//     ratio = window.devicePixelRatio;


// function attack_1() {

//     let x = width / 2;
//     let r = 40,
//         step = 0;
    
//     let canvas_iop = document.querySelector("canvas#iop"),
//         context = canvas_iop.getContext("2d");
    
//     canvas_iop.width = width * ratio;
//     canvas_iop.height = height * ratio;
//     canvas_iop.style.width = width + "px";
//     canvas_iop.style.height = height + "px";
//     context.scale(ratio, ratio);
//     context.imageSmoothingEnable = false;
    
//     let sprites = new Image();
//     // sprites.onload = animate;
//     sprites.src = `./public/assets/characters/iop/attacks_/iop_sheet_sprite.png`;
    
//     function animate() {
//         draw();
//         update();
//         requestAnimationFrame(animate);
//     }
    
//     function draw() {
//         context.clearRect(0 ,0 ,width, height);
//         drawShell(x, height, Math.floor(step));
//     }
//     function drawShell(x,y, step) {
//         context.drawImage(sprites, 297*step, 0, 297, 619, x -840, y - 650 ,  297,619 );
//     }
//     function update() {
//         step+=0.070;
//         if (step >= 7) {
//             step -= 6;
//         }
//     }

//     animate();
// }



/********* iop area end ***********/
let body =  document.body;
 / -------------- test ---------- /

console.log(body.querySelector("button#entry_game_btn"));
body.querySelector("button#entry_game_btn").addEventListener("click", () => {

dislay_choice()
});


body.querySelector("a#play_game_btn").addEventListener("click", () => {

  start_game();
});


play_game_btn
// / --------Start game button -------- / 


function dislay_choice() {
    // Display the loading div
    document.getElementById("loadingDiv").style.display = "block";
  
    // Execute the function with a delay
    setTimeout(function() {
      // Hide the loading div
      document.getElementById("loadingDiv").style.display = "none";
  
      // Your code here
      document.querySelector(".entry_game").style.display = "none";


      document.querySelector(".character_choice").style.display = "flex";

    //   document.querySelector("canvas#iop").style.zIndex = '100';
    //   document.querySelector("canvas#iop").style.zIndex = '100';
    //   ATT.Attack_1();

    //   attack_ultimate_iop(document.querySelector("canvas#iop"));
      // ...
    }, 200); // Delay of 5000 milliseconds (5 seconds)



  }

  function start_game() {

        setTimeout(function() {

            document.querySelector(".character_choice").style.display = "none";

            document.querySelector(".area_game").style.display = "flex";
      
          }, 400); // Delay of 5000 milliseconds (5 seconds)
      
  }
  function display_character(name_hero) {
    
    let character = document.querySelector( `canvas#${name_hero}`);

  }

  //test xelor attack to left side start 

  // ATT.Attack_xelor_1(document.querySelector("canvas#xelor_attack_rayon_obscur"));
  // ATT.Attack_xelor_2(document.querySelector("canvas#xelor_attack_vol_de_temps"));
  // ATT.Attack_xelor_3(document.querySelector("canvas#xelor_attack_paradox"));
  // ATT.Attack_xelor_4(document.querySelector("canvas#xelor_attack_aiguille"));

  //test xelor attack to left side end 

  //test xelor attack to right side start 

  // XEL.Attack_xelor_1_to_right(document.querySelector("canvas#xelor_attack_rayon_obscur"));
  // XEL.Attack_xelor_2_to_right(document.querySelector("canvas#xelor_attack_vol_de_temps"));
  XEL.Attack_xelor_3_to_right(document.querySelector("canvas#xelor_attack_paradox_right"));
  console.log(body.querySelector("canvas#xelor_attack_paradox_right"));
  // XEL.Attack_xelor_4_to_right(document.querySelector("canvas#xelor_attack_aiguille"));

  //test xelor attack to right side end 


    /**********  test buttons spells start **********/  

    // iop side 
    console.log(body.querySelector(".spells"));
    body.querySelector(".spells").addEventListener("click", (e) =>{
      console.log((e.target).dataset);

      //epee celeste attack
      if ((e.target).dataset.spell == 1) {

        document.querySelector("canvas#iop_attack_epee_celeste").style.display = "flex";

        document.querySelector("canvas#iop_attack_deus").style.display = "none";
        document.querySelector("canvas#iop_attack_cut").style.display = "none";
        document.querySelector("canvas#iop_attack_intimidation").style.display = "none";

        ATT.Attack_3(document.querySelector("canvas#iop_attack_epee_celeste"));
        
        console.log("epee celeste attack");
      }
      //cut  attack
      else if ((e.target).dataset.spell == 2) {
        document.querySelector("canvas#iop_attack_cut").style.display = "flex";

        document.querySelector("canvas#iop_attack_epee_celeste").style.display = "none";
        document.querySelector("canvas#iop_attack_deus").style.display = "none";
        document.querySelector("canvas#iop_attack_intimidation").style.display = "none";


        ATT.Attack_2(document.querySelector("canvas#iop_attack_cut"));
        
        console.log("cut attack");
      }
      //deus punition attack
      else if ((e.target).dataset.spell == 5) {
        document.querySelector("canvas#iop_attack_deus").style.display = "flex";

        document.querySelector("canvas#iop_attack_epee_celeste").style.display = "none";
        document.querySelector("canvas#iop_attack_cut").style.display = "none";
        document.querySelector("canvas#iop_attack_intimidation").style.display = "none";


        
        ATT.Attack_1(document.querySelector("canvas#iop_attack_deus"));
        console.log("deus punition");
      }
      // intimidation attack
      else if ((e.target).dataset.spell == 4) {
        document.querySelector("canvas#iop_attack_intimidation").style.display = "flex";

        document.querySelector("canvas#iop_attack_deus").style.display = "none";
        document.querySelector("canvas#iop_attack_epee_celeste").style.display = "none";
        document.querySelector("canvas#iop_attack_cut").style.display = "none";


        ATT.Attack_4(document.querySelector("canvas#iop_attack_intimidation"));
        console.log("intimidation");
      }
      
    })


    // iop side end 
    

    
    /**********  test buttons   spells end **********/

  /********** change bck **********/

  console.log(body.querySelector(".character_choice > img"));
  console.log(body.querySelector(".triangle_right"));
  body.querySelector(".triangle_right").addEventListener( "click", () =>{

    // slide to left background xelor

    if (body.querySelector(".character_choice > img").dataset.indexNumber == 1) {

      // background xelor part 

      
      body.querySelector(".character_choice > img").style.marginLeft = `-100%`;
      body.querySelector(".character_choice > img").style.transition = `0.9s`;

      // position xelor part 
      body.querySelector(".chara_area > img").style.marginLeft = `-100%`;
      body.querySelector(".chara_area > img").style.transition = `0.9s`;

      // background iop part  

      body.querySelector(".character_choice > img").nextElementSibling.style.width = `100%`;
      body.querySelector(".character_choice > img").nextElementSibling.style.height = `100%`;
      body.querySelector(".character_choice > img").nextElementSibling.style.backgroundSize = `cover`;
      body.querySelector(".character_choice > img").nextElementSibling.style.backgroundRepeat = `no-repeat`;
      body.querySelector(".character_choice > img").nextElementSibling.style.transition = `0.9s`;

      // position iop part 



      body.querySelector(".chara_area > img").nextElementSibling.style.width = `100%`;
      body.querySelector(".chara_area > img").nextElementSibling.style.height = `100%`;
      body.querySelector(".chara_area > img").nextElementSibling.imageSmoothingEnable = false;;
      body.querySelector(".chara_area > img").nextElementSibling.style.backgroundSize = `cover`;
      body.querySelector(".chara_area > img").nextElementSibling.style.backgroundRepeat = `no-repeat`;

      body.querySelector(".chara_area > img").nextElementSibling.style.transition = `0.9s`;

    }

  })

  //****test caroussel  */

  