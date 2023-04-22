const findTwoBeers = (beersJSON, targetJSON) => {
    const lookup = {};
    const beers = JSON.parse(beersJSON);
    const target = parseInt(targetJSON);
    const beersEnumerated = beers.entries(); // Entries se debe llamar luego de parsear al tipo Array (dentro de la func. findTwoBeers)

    for (const [index3, value] of beersEnumerated) {
        const diff = target - value;
        if (diff in lookup) {
            return [lookup[diff], index3];
        }
        lookup[value] = index3;
    };

    return [];
}