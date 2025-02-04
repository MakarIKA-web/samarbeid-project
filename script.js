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
     else {
        let totalPris = bensinMengde * pris;
        utskrift = `Du må betale ${totalPris.toFixed(2)} kr for ${bensinMengde} liter bensin.`;
    }
    if (liters > 50) {
        discount = totalPrice * 0.10;
        totalPrice -= discount;
}
}

    document.querySelector("#utskrift").innerHTML = utskrift;
}