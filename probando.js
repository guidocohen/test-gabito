const findTwoBeers = (beersJSON, targetJSON) => {
    const lookup = {};
    const arr = [];
    const beers = JSON.parse(beersJSON);
    const target = parseInt(targetJSON);
    const beersEnumerated = beers.entries(); // Entries se debe llamar luego de parsear al tipo Array (dentro de la func. findTwoBeers)

    for (const [i, value] of beersEnumerated) {
        const diff = target - value;
        if (diff in lookup) {
            return [lookup[diff], i];
        }
        lookup[value] = i;
    };

    return [];
}