export const Type = Object.freeze({
    AREA: {
        units: {
            SQUARE_INCH: {factor: 1/144},
            SQUARE_FOOT: {factor: 1},
            SQUARE_METER: {factor: 0.092903},
            SQUARE_MILE: {factor: 5280*5280},
            ACRE: {factor: 43560}
        }
    },
    LENGTH: {
        units: {
            MILLIMETER: {factor: 1/1000},
            CENTIMETER: {factor: 1/100},
            INCH: {factor: 0.0254},
            FOOT: {factor: 0.3048},
            METER: {factor: 1},
            KILOMETER: {factor: 1000},
            MILE: {factor: 1609.344}
        }
    },
    MASS: {
        units: {
            MILLIGRAM: {factor: 1/1000},
            GRAM: {factor: 1},
            OUNCE: {factor: 28.3495},
            POUND: {factor: 453.592},
            KILOGRAM: {factor: 1000},
            STONE: {factor: 6350.4},
            TON: {factor: 907184}
        }
    },
    SPEED: {
        units: {
            FEET_PER_SECOND: {factor: 3.28084},
            METERS_PER_SECOND: {factor: 1},
            KILOMETERS_PER_HOUR: {factor: 3.6},
            MILES_PER_HOUR: {factor: 2.23694}
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
            HOUR: {factor: 3600},
            DAY: {factor: 86400}
        }
    },
    VOLUME: {
        units: {
            MILLILITER: {factor: 1},
            TEASPOON: {factor: 4.92892},
            TABLESPOON: {factor: 14.78676},
            OUNCE: {factor: 29.57352},
            CUP: {factor: 240},
            PINT: {factor: 473.17632},
            QUART: {factor: 946.35264},
            LITER: {factor: 1000},
            GALLON: {factor: 3785.41}
        }
    },
});


