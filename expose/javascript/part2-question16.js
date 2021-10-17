let statistics = {
    redCards: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
};

for (let car in statistics) {
    if (statistics[car] % 2 == 1 || car[0] == 'r') {
        console.log(car);
    }
}