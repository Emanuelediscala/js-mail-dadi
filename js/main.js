let richiestamail = prompt("inserisci la tua mail")
let listamailvalide = ["nicola.mutti@libero.it", "saverio.sasso@tiscali.it", "luca.rossi@gmail.com", "manueldiscala@gmail.com"]

let mailvalida = false

for (let c = 0; c < listamailvalide.length; c++) {

    if (richiestamail == listamailvalide[c]) {
        mailvalida = true
    }
}
if (mailvalida == true) {
    alert("la tua mail è stata riconosciuta")
}
else
    alert("la tua mail non è stata riconosciuta")


