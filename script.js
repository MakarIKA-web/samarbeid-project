function calculateTotalPrice(liters) {
    const pricePerLiter = 20; // Pris per liter i kroner
    const vatRate = 0.25; // MVA rate

    if (liters < 0) {
        return 'Vi tar ikke bensin i retur.';
    }

    if (liters <80) {
        return 'tanken er ikke så stor';
    }

    if (liters > 0 && liters < 5) {
        return 'vi selger ikke så små kvanta bensin';
    }

    let totalprice = liters * pricePerLiter;
    let discount = 0;

    if (liters > 50) {
        discount = totalprice * 0.10;