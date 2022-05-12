const readline = require("readline-sync");
    console.log("Welcome to the wonderful world of Witchcraft and Wizardry! Grab a cup of tea (or Butterbeer, if you prefer) and lets get started...");
const playerName = readline.question("What be yer name? ");
    console.log("Unfortunately " + playerName + ", it seems that port key you used brought us into the Dark Forest...Let us get a move on it, too many creatures lurk about these woods...")
    

    let bagInv = [];

let enemies = [
    { name: 'A Basalisk', health: 200, item: 'Basalisk Fang', min: 25, max: 75  
    },
    { name: 'A Dementor', health: 100, item: 'Cloak of Invisibility', min: 20, max: 100  
    }, 
    { name: 'An Acromantula', health: 150, item: 'Acromantula venom', min: 20, max: 70  
}]; 
let health = Number(250);


while (enemies.length > 0 && health > 0){
    const playerOptions = readline.question(" Push 'w' to walk, Push 'i' for inventory, Push 'p' for stats: ");
    console.clear()
        if (playerOptions === "w"){
            walk();
        } else if (playerOptions === "i"){
            checkInv();
        } else if (playerOptions === "p"){
            console.log(" You have " + health + "HP" + " and you have " + bagInv + " in your bag.")
        } 
        
}    


    if (enemies.length === 0) { 
        console.log("YOU HAVE DEFEATED ALL THE CREATURES AND ESCAPED THE DARK FOREST!") 
        
    }


function walk(){
    let chance = Math.random();
        console.log("Let's keep going...");
            while (chance < 0.33){
                boss();
                break;
            } 
    }



function boss(){
    let bossFight = Math.floor(Math.random()*enemies.length);
        if(bossFight === 0){
            tryToRun(enemies[bossFight]);
            return;
        } else if (bossFight === 1){
            tryToRun(enemies[bossFight]);
            return;
        } else {
            tryToRun(enemies[bossFight]);
            return;
        }
    }
    
function bossFight(enemy){
    let bossHp = enemy.health;
    let bossName = enemy.name;
    let thisBoss = enemies.indexOf(enemy)
    
    console.log("You have " + health + " HP");
    readline.keyInPause();
    while(bossHp > 0){
        let playerAtk = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min);
        let bossAtk = Math.floor(Math.random() * (enemy.max - enemy.min) + enemy.min);
            console.log(playerName + ' attacks for ' + playerAtk );
            bossHp -= playerAtk;
            console.log(enemy.name + " has " + bossHp + " hp left!");
            readline.keyInPause();
                if(bossHp < 1){
            console.log("You have defeated " + bossName);
            console.log(" You pulled " + enemy.item + " from " + enemy.name + ". Check yer bags!")
            bagInv.push(enemy.item)
                health += 60;
                console.log("You found a Potion off of " + enemy.name + " and gave you 60 HP")
                enemies.splice(thisBoss, 1);
                return;
                }
                console.log(bossName + ' HITS FOR ' + bossAtk);
                health -= bossAtk;
                console.log("Your hp is now " + health);
            if(health < 0 ){
                console.log("You have PERISHED... be sure to say Hello to Nearly Headless Nick :)")
                break;
            
                
            }
            
        }
    }
    
    
function tryToRun(enemy){
let chance = Math.random();
const runFight = readline.question(" A CREATURE HAS APPEARED! Push 'r' to run away, Push 'f' to fight it off: ");
console.log(`OH NO! IT'S ${enemy.name} `);
    if (runFight === "r") {
        if(chance > 0.5){
            console.log('PHEW! GLAD WE GOT AWAY FROM THAT NASTY ONE, BUT WE STILL GOT TO GET OUTTA HERE...')
            return; 
        }else if(chance < 0.5){
            console.log(enemy.name + " STOPPED you and ATTACKED, you must fight it off!");
            health -= Math.ceil(Math.random() * (enemy.max - enemy.min) + enemy.min);
            console.log("Your hp is now " + health);
            readline.keyInPause();
            return bossFight(enemy);
        }
        }else if(runFight === "f"){
            return bossFight(enemy);
        }else {
            console.log("The creature didn't like you trying to walk away!")
            return bossFight(enemy)
            
    }
    
}

function checkInv(){
    console.log(bagInv);
}
