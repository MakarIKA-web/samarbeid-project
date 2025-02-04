window.onload = function() {
    document.querySelector("#fyllBensin").onclick = fyllBensin;
    document.querySelector("#nullstill").onclick = function() {
        document.querySelector("#bensinMengde").value = "";
        document.querySelector("#utskrift").innerHTML = "";
    };
};

function fyllBensin() {
    let bensinMengde = parseFloat(document.querySelector("#bensinMengde").value);
    let pris = 20;
    let utskrift = "";

    if (bensinMengde > 80) {
        utskrift = "Tanken din rommer ikke så mye";
    } else if (bensinMengde > 0 && bensinMengde < 5) {
        utskrift = "Vi selger ikke så små kvanta";
    } else if (bensinMengde <= 0) {
        utskrift = "Ugyldig mengde";
    }

    else if(bensinMengde > 50){
        let betaling = bensinMengde * pris;
        let rabatt = bensinMengde * pris - (pris * 0.1);
        document.querySelector("#utskrift").innerHTML = "Du må betale kr  " + betaling +". Rabatten din er på kr " + rabatt + ".";
    }
     else {
        let totalPris = bensinMengde * pris;
        document.querySelector("#utskrift").innerHTML = "Du må betale " + totalPris + " kr for " + bensinMengde + "liter bensin.";
    }
}

    
