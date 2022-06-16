let names = ['mario', 'luigi']
var s = "";
const nameGenerator = Math.floor(Math.random() * names.length)
class Player {
    constructor(name, totalCoins, status, hasStar,){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = true
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        if(this.hasStar){
            this.hasStar = false
            return
        }
        if(this.status === 'powered up'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'small'
        }else if(this.status === 'small'){
            this.status = 'dead'
            this.gameActive = false
        }
    }
    gotPowerup(){
        this.hasStar = false
        if(this.status === 'dead'){
        }else if(this.status === 'small'){
            this.status = 'big'
        }else if(this.status === 'big'){
            this.status = 'powered up'
        }else if(this.status === 'powered up'){
            this.hasStar = true
            console.log("Congratulations! You got a Star!")
        }
    }
    addCoin(){
        this.totalCoins++
    }
    
    print(){
        console.log(`Name: ${this.name}
Total Coins: ${this.totalCoins}
Status: ${this.status}`)
console.log(s)
    }

}

const randomRange = () => {
    let num = Math.floor(Math.random() * 3)
    if(num === 0){
        players.gotHit()
        players.print()
    }else if(num === 1){
        players.gotPowerup()
        players.print()
    }else if(num === 2){
        players.addCoin()
        players.print()
    }
    if(!players.gameActive){
        clearInterval(play)
    }
}
const players = new Player((nameGenerator, names[nameGenerator]), 0, 'small', false)

const play = setInterval(randomRange, 200)