window.onload = oppstart;

function oppstart(){
    document.querySelector("#fyllBensin").onclick = fyllBensin;
    document.querySelector("#nullstill").onclick = nullstill;
}

function fyllBensin(){
    let bensinMengde = document.querySelector("#bensinMengde").value;
    let pris = 21.35;

    if(bensinMengde > 80){
        document.querySelector("#utskrift").innerHTML = "Tanken din rommer ikke så mye";
    } else if(bensinMengde > 0 && bensinMengde < 5){
        document.querySelector("#utskrift").innerHTML = "Vi selger ikke så små kvanta";
    } else if(bensinMengde <= 0){ 
        document.querySelector("#utskrift").innerHTML = "Ugyldig mengde";
    } else {
        let totalPris = bensinMengde * pris;
        document.querySelector("#utskrift").innerHTML = `Du må betale ${totalPris.toFixed(2)} kr for ${bensinMengde} liter bensin.`;
    }
}

function nullstill(){
    document.querySelector("#bensinMengde").value = "";
    document.querySelector("#utskrift").innerHTML = "";
}