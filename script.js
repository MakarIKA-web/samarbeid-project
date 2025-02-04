window.onload = oppstart;

function oppstart(){
    document.querySelector("#fyllBensinKnapp").onclick = fyllBensin;
    document.querySelector("#nullstillKnapp").onclick = nullstill;
}

function fyllBensin(){
    let bensinMengde = document.querySelector("#bensinMengde").value;
    let pris = 21.35;

    if(bensinMengde > 80){
        document.querySelector("#utskrift").innerHTML = "Tanken din rommer ikke så mye";
    }

    else if((bensinMengde > 0) & (bensinMengde < 5)){
        document.querySelector("#utskrift").innerHTML = "Vi selger ikke så små kvanta";
    }

    else if(bensinMengde<=0){ 
        document.querySelector("#utskrift").innerHTML = "Skriv inn et positivt tall større enn 5"
    }

    else if(bensinMengde > 50){
        let betaling = bensinMengde * pris * 0.9;
        let rabatt = bensinMengde * pris *0.1;
        let mva_faktor = 0.23;
        let mva = (betaling/(1+mva_faktor)).toFixed(2);
        document.querySelector("#utskrift").innerHTML = "Du har fyllt " + bensinMengde + " bensinMengde bensin til "+ pris + " kr bensinMengde.<br>Du må betale kr  " + betaling +". Rabatten din er på kr " +rabatt + ".<br> Mva utgjør kr " + mva + " av summen du betaler.";

    }

    else{
        let betaling = bensinMengde * pris;
        let mva_faktor = 0.23;
        let mva = (betaling/(1+mva_faktor)).toFixed(2); 
        document.querySelector("#utskrift").innerHTML = "Du har fyllt " + bensinMengde + " bensinMengde til "+ pris + " kr bensinMengde. <br>Du må betale kr " + betaling + ".<br> Mva utgjør kr " + mva + " av summen du betaler.";
    }
}

function nullstill(){
    document.querySelector("#utskrift").innerHTML ="";
    document.querySelector("#bensinMengde").value ="";
}