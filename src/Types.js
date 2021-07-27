export const Type = Object.freeze({
    TEMPERATURE: {name: 'Temperature'},
    TIME: {name: 'Time'}
});

export const Unit = Object.freeze({
    
    CELSIUS: {name: 'Celsius'},
    FAHRENHEIT: {name: 'Fahrenheit'},
    KELVIN: {name: 'Kelvin'},

    HOURS: {name: 'Hours', factor: 3600},
    MILLISECONDS: {name: 'Milliseconds', factor: 1/1000},
    MINUTES: {name: 'Minutes', factor: 60},
    SECONDS: {name: 'Seconds', factor: 1}
});

export const UnitMap = {
    CELSIUS: Type.TEMPERATURE,
    FAHRENHEIT: Type.TEMPERATURE,
    HOURS: Type.TIME,
    KELVIN: Type.TEMPERATURE,
    MILLISECONDS: Type.TIME,
    MINUTES: Type.TIME,
    SECONDS: Type.TIME
}

export const unitsForAType = (type) => {
    let units = [];
    Object.keys(Unit).sort().forEach((key, i) => {
        if(UnitMap[key] === type){
            units.push(key);
        }
    });
    return units;
}

