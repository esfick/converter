const FEET_PER_MILE = 5280;
const FEET_PER_METER = 0.3048;
const GRAMS_PER_OUNCE = 28.3495;
const GRAMS_PER_POUND = GRAMS_PER_OUNCE * 16;
const ML_PER_TSP = 4.92892;
const ML_PER_FL_OZ = ML_PER_TSP * 6;
const SECONDS_PER_HOUR = 60 * 60;


export const Type = Object.freeze({
    AREA: {
        units: {
            SQUARE_INCH: {factor: 1/144},
            SQUARE_FOOT: {factor: 1},
            SQUARE_METER: {factor: FEET_PER_METER * FEET_PER_METER},
            SQUARE_MILE: {factor: FEET_PER_MILE * FEET_PER_MILE},
            ACRE: {factor: 43560}
        }
    },
    LENGTH: {
        units: {
            MILLIMETER: {factor: 1/1000},
            CENTIMETER: {factor: 1/100},
            INCH: {factor: FEET_PER_METER/12},
            FOOT: {factor: FEET_PER_METER},
            METER: {factor: 1},
            KILOMETER: {factor: 1000},
            MILE: {factor: FEET_PER_METER * FEET_PER_MILE}
        }
    },
    MASS: {
        units: {
            MILLIGRAM: {factor: 1/1000},
            GRAM: {factor: 1},
            OUNCE: {factor: GRAMS_PER_OUNCE},   
            POUND: {factor: GRAMS_PER_POUND},
            KILOGRAM: {factor: 1000},
            STONE: {factor: GRAMS_PER_POUND * 14},
            TON: {factor: GRAMS_PER_POUND * 2000}
        }
    },
    SPEED: {
        units: {
            FEET_PER_SECOND: {factor: FEET_PER_METER},
            METERS_PER_SECOND: {factor: 1},
            KILOMETERS_PER_HOUR: {factor: 1/3.6},
            MILES_PER_HOUR: {factor: (FEET_PER_MILE * FEET_PER_METER)/SECONDS_PER_HOUR}
        }
    },
    TEMPERATURE: {
        units: {
            CELSIUS: {},
            FAHRENHEIT: {},
            KELVIN: {}
        },
    },
    TIME: {
        units: {
            MILLISECOND: {factor: 1/1000},
            SECOND: {factor: 1},
            MINUTE: {factor: 60},
            HOUR: {factor: SECONDS_PER_HOUR},
            DAY: {factor: SECONDS_PER_HOUR * 24}
        }
    },
    VOLUME: {
        units: {
            MILLILITER: {factor: 1},
            TEASPOON: {factor: ML_PER_TSP},
            TABLESPOON: {factor: ML_PER_TSP * 3},
            OUNCE: {factor: ML_PER_TSP * 6},
            CUP: {factor: 240},
            PINT: {factor: ML_PER_FL_OZ * 16},
            QUART: {factor: ML_PER_FL_OZ * 32},
            LITER: {factor: 1000},
            GALLON: {factor: ML_PER_FL_OZ * 128}
        }
    },
});


