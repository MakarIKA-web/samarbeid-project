window.onload = oppstart;

function oppstart(){
    document.querySelector("#regnUtKnapp").onclick = beregn;
    document.querySelector("#nullstillKnapp").onclick = nullstill;
}

function beregn(){
    let liter = document.querySelector("#liter").value;
    let pris = 21.35;

    if(liter > 80){
        document.querySelector("#utskrift").innerHTML = "Tanken din rommer ikke så mye";
    }

    else if((liter > 0) & (liter < 5)){
        document.querySelector("#utskrift").innerHTML = "Vi selger ikke så små kvanta";
    }

    else if(liter<=0){ 
        document.querySelector("#utskrift").innerHTML = "Skriv inn et positivt tall større enn 5"
    }

    else if(liter > 50){
        let betaling = liter * pris * 0.9;
        let rabatt = liter * pris *0.1;
        let mva_faktor = 0.23;
        let mva = (betaling/(1+mva_faktor)).toFixed(2);
        document.querySelector("#utskrift").innerHTML = "Du har fyllt " + liter + " liter bensin til "+ pris + " kr literen.<br>Du må betale kr  " + betaling +". Rabatten din er på kr " +rabatt + ".<br> Mva utgjør kr " + mva + " av summen du betaler.";

    }

    else{
        let betaling = liter * pris;
        let mva_faktor = 0.23;
        let mva = (betaling/(1+mva_faktor)).toFixed(2); 
        document.querySelector("#utskrift").innerHTML = "Du har fyllt " + liter + " liter bensin til "+ pris + " kr literen. <br>Du må betale kr " + betaling + ".<br> Mva utgjør kr " + mva + " av summen du betaler.";
    }
}

function nullstill(){
    document.querySelector("#utskrift").innerHTML ="";
    document.querySelector("#liter").value ="";
}