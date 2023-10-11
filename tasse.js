


function getPriceOil(){
    return document.getElementById("oil").value
}

function getLordeConsegna(){
    return document.getElementById("consegnaP").value
}

function getKmByOrder(){
    return document.getElementById("km").value
}

function getLordeM() {
    return document.getElementById("lordeM").value
}

function getCarburante() {
    return document.getElementById("carburante").value
}

function getAltreSpesse() {
    return document.getElementById("altreSpesse").value
}


function CalcolaTasse() {
    var lordeM = getLordeM()
    var carburante = getCarburante()
    var altreSpesse = getAltreSpesse()

    var ivaP = 5
    var inpsP = 26.23;
    var tasassione = 67;
    var error = "controlla i dati inseriti"

    if (lordeM >= 1, carburante >= "", altreSpesse >= "") {
        var tasassioneP = parseFloat(lordeM) * parseFloat(tasassione) / 100
        var iva = parseFloat(tasassioneP * ivaP) / 100
        var inps = parseFloat(tasassioneP) * parseFloat(inpsP) / 100
        var totaleSpesse = parseFloat(carburante) + parseFloat(altreSpesse)
        var totale1 = (lordeM - totaleSpesse)
        var totaleGasto = (iva + inps)
        var totale = (totale1 - totaleGasto).toFixed(2)


        // document.getElementById("nam").innerText = nombre + " " + cognome
        document.getElementById("calcola").innerText = "Totale netto dopo spese e tasse:   €"+totale
    }
    else {
        document.getElementById("calcola").innerText = error
    }

}

function NettoConsegna(){
    var priceCarburante = getPriceOil()
    var priceConsegna = getLordeConsegna()
    var kmConsegna = getKmByOrder()
    var iva2 = 5
    var inps2 = 26.23

    if (priceCarburante >= 0, priceConsegna <= 0, kmConsegna >=0 ){
        var carburanteNetto = parseFloat(priceCarburante / 35) * kmConsegna;
        var consegnaFinal = parseFloat(priceConsegna * 67) / 100
        var I = parseFloat(consegnaFinal * iva2) / 100
        var IN = parseFloat(consegnaFinal * inps2) / 100
        var a = I + IN
        var b = parseFloat(a + carburanteNetto)  
        var c = parseFloat(priceConsegna - b)
        let final1 = c.toFixed(2)
        let final = parseFloat(final1)
        
        document.getElementById("nettoC").innerText = "Totale ricevuto netto per questa consegna:" + " €" + final
        document.getElementById("benzi").innerText = "Totale spesso in benzina per questa corsa:"  + " €" + carburanteNetto.toFixed(2)
        document.getElementById("tas").innerText ="Totale tasse  per questa corsa:"  +  " €" + a.toFixed(2)
        
    }

}
