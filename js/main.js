// Recupero bottone generazione gioco
const gameStart = document.getElementById("click_me");
// Recupero container in pagina
const container = document.getElementById("container")




gameStart.addEventListener("click",
    ()=>{
        // Per far si che il bottone mi cancelli quello che ha appena generato e in caso di duble click lo rigeneri
        container.innerHTML = "";
        // Selezione difficoltà
        const difficult = document.getElementById("select_level").value
        console.log(difficult)
        // Creazione ciclo per genrare 100 blocchi
        for (let i = 1; i < 101; i++){
            // Generazione square in pagina
            let divSquare = newElCl("div","square")
            divSquare.innerHTML = `<span>${i}</span>`
            divSquare.classList.add(difficult)
            container.append(divSquare)

            // Cambio classe al click
            divSquare.addEventListener("click",
                ()=> {
                    divSquare.classList.toggle("azzur")
                    console.log(i)
                }
            )
        }
    }
)






