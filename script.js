function calculateTotalPrice(liters, pricePerLiter = 15, vatRate = 0.25) {
    if (liters <= 0) {
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