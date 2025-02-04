function calculateTotalPrice(liters) {
    const pricePerLiter = 20; // Pris per liter i kroner
    const vatRate = 0.25; // MVA rate

    if (liters < 0) {
        return 'Vi tar ikke bensin i retur.';
    }

    if (liters > 80) {
        return 'Tanken er ikke så stor.';
    }

    if (liters > 0 && liters < 5) {
        return 'Vi selger ikke så små kvanta bensin.';
    }

    let totalPrice = liters * pricePerLiter;
    let discount = 0;    document.getElementById('fyllBensin').addEventListener('click', function() {
        const liters = parseFloat(document.getElementById('bensinMengde').value);
        if (isNaN(liters) || liters <= 0) {
            document.getElementById('utskrift').textContent = 'Ugyldig mengde bensin';
            return;
        }
        const result = calculateTotalPrice(liters);
        document.getElementById('utskrift').textContent = JSON.stringify(result, null, 2);
    });

    if (liters > 50) {
        discount = totalPrice * 0.10;
        totalPrice -= discount;
    }
    const vat = totalPrice * vatRate;
    totalPrice += vat;

    return {
        liters: liters,
        pricePerLiter: pricePerLiter,
        discount: discount,
        vat: vat,
        totalPrice: totalPrice
    };
}

document.getElementById('fyllBensin').addEventListener('click', function() {
    const liters = parseFloat(document.getElementById('bensinMengde').value);
    const result = calculateTotalPrice(liters);
    document.getElementById('utskrift').textContent = JSON.stringify(result, null, 2);
});

document.getElementById('nullstill').addEventListener('click', function() {
    document.getElementById('bensinMengde').value = '';
    document.getElementById('utskrift').textContent = '';
});