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
    let discount = 0;
 
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
 
// Eksempel på bruk
const result = calculateTotalPrice(60);
console.log(result);