// Recupero bottone generazione gioco
const gameStart = document.getElementById("click_me");
// Recupero container in pagina
const container = document.getElementById("container")




gameStart.addEventListener("click",
    () => {
        // Per far si che il bottone mi cancelli quello che ha appena generato e in caso di duble click lo rigeneri
        container.innerHTML = "";
        // Selezione difficoltà
        const difficult = document.getElementById("select_level").value
        console.log(difficult)
        let numBlock;
        if (difficult === "cento") {
            numBlock = 101
        } else if (difficult === "ottantuno") {
            numBlock = 82
        } else if (difficult === "quarantanove") {
            numBlock = 50
        }

        // Creazione ciclo per generare blocchi in basse alla difficoltà
        for (let i = 1; i < numBlock; i++) {
            // Generazione square in pagina
            let divSquare = newElCl("div", "square")
            divSquare.innerHTML = `<span>${i}</span>`
            // Aggiunta classe personalizzata per livelli
            if (numBlock === 101) {
                divSquare.classList.add("cento")
            } else if (numBlock === 82) {
                divSquare.classList.add("ottantuno")
            } else {
                divSquare.classList.add("quarantanove")
            }
            container.append(divSquare)

            // Cambio classe al click
            divSquare.addEventListener("click",
                () => {
                    divSquare.classList.toggle("azzur")
                    console.log(i)
                }
            )
        }
    }
)






