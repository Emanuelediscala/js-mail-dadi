let richiestamail = prompt("inserisci la tua mail")
let listamailvalide = ["nicola.mutti@libero.it","saverio.sasso@tiscali.it","luca.rossi@gmail.com","manueldiscala@gmail.com"]

for (let c = 0; c < listamailvalide.length; c++) {
    
    if (richiestamail == listamailvalide[c]) {
        alert("la tua mail è stata riconosciuta")
    } 
        alert("Mail  non riconosciuta")
}
