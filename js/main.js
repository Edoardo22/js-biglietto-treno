const kmDaPercorrere = prompt("quanti km devi fare?");
const etaUtente = prompt("quanti hanni hai?");
const prezzoKm = 0.21;
let prezzoViaggio = kmDaPercorrere * prezzoKm;

const lietaUtente = document.getElementById("eta");
lietaUtente.innerHTML = (`eta:${etaUtente}`);

const likmDaPercorrere = document.getElementById("km");
likmDaPercorrere.innerHTML = (`km:${kmDaPercorrere}`);

let prezzoFinale = document.getElementById("prezzoFinale");

if (etaUtente < 18) {

    scontoMinori = (prezzoViaggio * (20 / 100))
    prezzoFinale.innerHTML = (Math.round((prezzoViaggio - scontoMinori) * 100) / 100).toFixed(2);

} else if (etaUtente > 65) {

    scontoAnziani = (prezzoViaggio * (40 / 100))
    prezzoFinale.innerHTML = (Math.round((prezzoViaggio - scontoAnziani) * 100) / 100).toFixed(2);
}

else {
    prezzoFinale.innerHTML = (Math.round(prezzoViaggio * 100) / 100).toFixed(2);
}
