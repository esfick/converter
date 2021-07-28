import {Type} from './Types';

export const calculate = (type, unitFrom, unitTo, value) => {
    if(!value || isNaN(value)){
        return '';
    }
    if(Type[type]){
        let result = 0;
        if(unitFrom === unitTo){
            return value;
        }
        if(Type[type] == Type.TEMPERATURE){
            result = calculateTemperature(unitFrom, unitTo, value);
        }
        else {
            result = value * (Type[type].units[unitFrom].factor / Type[type].units[unitTo].factor);
        }
        return result; //.toFixed(2);
    }
    return 0;
}

const calculateTemperature = (unitFrom, unitTo, value) => {
    const celsius = Object.keys(Type.TEMPERATURE.units)[0];
    const fahrenheit = Object.keys(Type.TEMPERATURE.units)[1];
    const kelvin = Object.keys(Type.TEMPERATURE.units)[2];
    const kelvinOffset = 273.15;

    let result = value;

    // If temperature is not in C, convert to C
    if(unitFrom === kelvin){
        result -= kelvinOffset;
    }
    else if(unitFrom == fahrenheit){
        result = (result - 32) * (5/9);
    }

    //At this point, temperature is in C
    // Convert to K or F if needed
    if(unitTo === kelvin){
        result += kelvinOffset;
    }
    else if(unitTo == fahrenheit){
        result = result * (9/5) + 32;
    }
    
    return result;
}

