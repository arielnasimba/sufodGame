
//TODO : create 2 heroes

export class Hero {

    /**     Create a hero Boss
     * 
     * @param {*} name          : name of hero
     * @param {*} attack_power  : point of attack hero
     * @param {*} healt_point   : health point of hero
     */
    constructor ( name, attack_power, health_point, list_attacks){
        this.name = name;
        this.attack_power = attack_power;
        this.health_point = health_point;
        this.list_attacks = list_attacks;

        // this.attack_to = function(character) {

        //     if (current_hp <= 0) {
        //         console.log(`${this.name} can not attack because health is : ${this.current_hp} hp `);
        //     } else if (current_hp > 0) {
                
        //         console.log(`--------------------- ${this.name} ---------------------`);
        //         console.log(`${this.name} has ${this.attack_power} of power attack and will attack !\n Be carefull with your ${character.name} (${character.id_name}) he only has ${character.health_point} hp `);
    
        //         character.health_point -= this.attack_power;
    
        //         if (character.health_point <= 0) {
        //             console.log(`Your ${character.name} (${character.id_name}) is dead now :'{`);
                    
        //         }else if (character.health_point > 0) {
        //             console.log(`Your ${character.name} (${character.id_name}) has now ${character.health_point} hp remains :/`);
        //             console.log(`---------------------------------------------------`);
                    
        //         }
        //     }


        // }
        
    }

}

//! DONE
/********************************************************************/

/* Création des Héros
 

Créez 3 héros : un guerrier, un mage, et un archer.
Chaque héros a un nom, une posture de combat,  des points d'attaque ainsi que des points de vie 
les points d'attaques représente le nombre de dégâts  qu'il infligera aux point de vie du boss à chaque attaque. 
les points de vie représente la santé du héro. si elle tombe à 0, le héro est mort.
la posture de combat peut valoir soit “attaque” , soit “défense” 
un héro qui attaque alors que sa posture de combat est en “attaque” infligera 20% plus de dégât au boss.
un héro qui se fait attaquer par le boss alors que sa posture de combat est en “défense” subira que la moitié des dégâts 
 */ 

// export class Hero extends Boss{
//     constructor (id_name, name,attack_position ,attack_power, speciality ,health_point){

//         super(name, attack_power, health_point);
//         this.id_name = id_name;
//         this.attack_position = attack_position;
//         this.speciality = speciality;

//         this.attack = function(current_boss) {

//             console.log(`${this.name} has ${this.attack_power} of attack power and will attack ${current_boss.name} :-}!`);
//             current_boss.current_hp -= this.attack_power;

//             if (current_boss.current_hp <= 0) {
//                 console.log(`${current_boss.name} is dead :}  ahaha`);

//             } else{

//                 console.log(`${current_boss.name} has now ${current_boss.current_hp} hp remains :} mouahaha mouahaha`);
//             }
//         }

//         this.is_defense_mode = function() {
//             console.log(`${this.name} the ${this.id_name} is on mode ${this.attack_position} :@`);
            
//         }
//     }
// }


