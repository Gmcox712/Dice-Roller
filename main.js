const Rolldie = document.querySelector("#Rolldie")
const ShowallRolls = document.querySelector("#ShowallRolls")
const rollDie = document.querySelector("#rollDie")
const sumofRolls = document.querySelector("#sumofRolls")
const ListofRolls = document.querySelector("#ListofRolls")
let dieRolls = []
let rollTotal = 0




Rolldie.addEventListener ("click", function(){
    let inputValue = rollDie.value
    for (let index = 0; index < inputValue; index++) {
        let randomRoll = Math.floor( Math.random() * 6) + 1
        dieRolls.push(randomRoll)
        rollTotal += randomRoll
    }
    sumofRolls.innerHTML = rollTotal
})

ShowallRolls.addEventListener ("click", function(){
    for (let index = 0; index < dieRolls.length; index++) {
        let list = document.createElement("li")
        list.innerHTML = dieRolls[index]
        ListofRolls.appendChild(list)
    }
})
