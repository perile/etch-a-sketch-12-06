//htmlDOM
let mainContainer = document.querySelector(".mainContainer")
let button = document.querySelector("button")

//create divs to display in index.html
function createDivs(grids = 21){
    for(let i = 0; i < grids; i++){
        for(let y = 0; y < grids; y++){
            let singleDiv = document.createElement("div")
            mainContainer.appendChild(singleDiv)
        }
    }
}

createDivs()

//more htmlDOM
let allSingleDivs = document.querySelectorAll(".mainContainer > div")
console.log(allSingleDivs)

//use a function for adding the event listener to all the divs inside the container
//so that the single divs will have an effect when the users
//mouse pointer passes onto them
function divsEvent(){
    let randRed = 0
    let randGreen = 0
    let randBlue = 0

    allSingleDivs.forEach((elem) =>{
        elem.addEventListener("mouseenter", () =>{
            randRed = Math.floor(Math.random() * 256)
            randGreen = Math.floor(Math.random() * 256)
            randBlue = Math.floor(Math.random() * 256)
            
            let rgb = `rgb(${randRed}, ${randGreen}, ${randBlue})`
            elem.style.backgroundColor = rgb

        })
        /*elem.addEventListener("mouseleave", () => {
            elem.style.backgroundColor = "white"
        })*/
    })
}

divsEvent()

button.addEventListener("click", () => {
    allSingleDivs.forEach((elem) => {
        elem.remove()
    })

    //quantity of squares the user wants
    let quantity = 0

    while(quantity > 100 || quantity <= 1){
        let ask = prompt("How many squares per side?", 2)
        quantity = ask
    }

    //create divs again
    createDivs(quantity)

    //give the divs to the allSingleDivs, that are present in the main container
    allSingleDivs = document.querySelectorAll(".mainContainer > div")
    
    //Find the width of the mainContainer
    let mainContainerWidth = mainContainer.offsetWidth
    //calculate the padding that should be given to each little square
    let singleDivPadding = String((mainContainerWidth / ((quantity * 2)) - 1) + "px")

    //update the padding 
    allSingleDivs.forEach((elem) => {
        elem.style.padding = singleDivPadding
    })

    //add the event listener to the divs
    divsEvent()

    //console.log(allSingleDivs)
})