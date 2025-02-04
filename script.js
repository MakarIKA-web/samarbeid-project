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

    else if(liter > 50){
        let betaling = liter * pris * 0.9;
        let rabatt = liter * pris *0.1;
        let mva_faktor = 0.23;
        let mva = (betaling/(1+mva_faktor)).toFixed(2);
        document.querySelector("#utskrift").innerHTML = "Du har fyllt " + liter + " liter bensin til "+ pris + " kr literen.<br>Du må betale kr  " + betaling +". Rabatten din er på kr " +rabatt + ".<br> Mva utgjør kr " + mva + " av summen du betaler.";

    }


     else {
        let totalPris = bensinMengde * pris;
        utskrift = `Du må betale ${totalPris} kr for ${bensinMengde} liter bensin.`;
    }
}

    document.querySelector("#utskrift").innerHTML = utskrift;
