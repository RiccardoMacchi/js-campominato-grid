// Recupero bottone generazione gioco
const gameStart = document.getElementById("click_me");
 // Recupero container in pagina
 const container = document.getElementById("container")

gameStart.addEventListener("click",
    ()=>{
        // Creazione ciclo per genrare 100 blocchi
        for (i=1; i < 101; i++){
            // Generazione square in pagina
            let divSquare = newElCl("div","square")
            divSquare.innerHTML = `<span>${i}</span>`
            container.append(divSquare)

            // Cambio classe al click
            divSquare.addEventListener("click",
                ()=> {
                    divSquare.classList.toggle("azzur")
                }
            )
        }
    }
)






