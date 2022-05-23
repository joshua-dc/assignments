


class Player {
    constructor(name, totalCoins, status, hasStar, gameOn){
        this.name = name;                   //String
        this.totalCoins = totalCoins;       //Number
        this.status = status;               //String - Powered Up Big Small Dead
        this.hasStar = hasStar;
        this.gameOn = gameOn;             //Boolean - Is star active?
    }

    setName(namePicked) {
        if (namePicked === 'Mario') {
            this.name = "Mario"
        } else if (namePicked === 'Luigi') {
            this.name = "Luigi"
        } else {
            this.name === 'Please pick a name .'
        }
    }
    
    gotHit = () => {
        console.log('inside gotit function')
        if(this.status === 'Powered Up'){
            this.status = 'Big';
        } else if(this.status === 'Big'){
            this.status = 'Small';
        } else if(this.status === 'Small'){
            this.status = 'Dead';
        }
    }               
    gotPowerup = () => {
        console.log('inside gotpowerup function')
        if(this.status === 'Small'){
            this.status = 'Big';
        } else if(this.status === 'Big'){
            this.status = 'Powered Up';
        } else if(this.status === 'Powered Up'){
            this.hasStar = true;
        }
    }       
    addCoin = () => {
        console.log('inside addcoin function')
        this.totalCoins++;
    }           
    print = () => {
        console.log(name, totalCoins, status, hasStar)
    }

}
playerOne = new Player('Mario', 0, 'Big', false, true)
gate = setInterval(() => {
    const randomRange = Math.floor(Math.random() * 3);
        if(randomRange === 0){
        playerOne.gotHit();
    } else if (randomRange === 1){
        playerOne.gotPowerup();
    } else if (randomRange === 2){
        playerOne.addCoin();
    } 
        if (playerOne.gameOn === false || playerOne.status === 'Dead') {
    clearInterval(gate);
    }
}, 1000)