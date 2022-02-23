
document.getElementById("enter-button").addEventListener('click', function(){

    /*prendo il valore dell'id user-name*/
    let nominativo = document.getElementById('user-name').value;

    document.getElementById('traveller-name').innerHTML = nominativo;

    let km = document.getElementById("user-km");
    let kilometri = parseInt(km.value);

    let ticket = (kilometri * 0.27);

    let age = document.getElementById("età").value;


    if (age == "Minorenne") {
        ticket - (ticket - (ticket * 0.17)).toFixed(2);
    } else if (age == "Over65") {
        ticket - (ticket -(ticket * 0.33)).toFixed(2);
    } else {
        ticket = ticket.toFixed(2);
    }

    document.getElementById('ticket-price').innerHTML = ticket + "€";

    if ((age == "Minorenne") || (age == "Over65")) {
        document.getElementById("ticket-type").innerHTML = "Biglietto scontato"
    } else {
        document.getElementById("ticket-type").innerHTML = "Biglietto regolare"
    }

    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 15) +1;

    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 100000);
});