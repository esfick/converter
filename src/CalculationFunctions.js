import {Type, Unit} from './Types';

export const calculate = (type, unitFrom, unitTo, value) => {
    //console.log(unitFrom + ' ' + unitTo);
    if(Type[type] && Unit[unitFrom] && Unit[unitTo] && value && !isNaN(value)){
        if(unitFrom === unitTo){
            return value;
        }
        
        if(Type[type] == Type.TIME){
            return value * (Unit[unitFrom].factor / Unit[unitTo].factor);
        }

        if(Unit[unitFrom] === Unit.CELSIUS && Unit[unitTo] === Unit.FAHRENHEIT){
            return (value * (9/5)) + 32;
        }
        if(Unit[unitFrom] === Unit.CELSIUS && Unit[unitTo] === Unit.KELVIN){
            return value + 273.15;
        }
        if(Unit[unitFrom] === Unit.FAHRENHEIT && Unit[unitTo] === Unit.CELSIUS){
            return (value - 32) * (5/9);
        }
        if(Unit[unitFrom] === Unit.FAHRENHEIT && Unit[unitTo] === Unit.KELVIN){
            return ((value - 32) * (5/9)) + 273.15;
        }
        if(Unit[unitFrom] === Unit.KELVIN && Unit[unitTo] === Unit.CELSIUS){
            return value - 273.15;
        }
        if(Unit[unitFrom] === Unit.KELVIN && Unit[unitTo] === Unit.FAHRENHEIT){
            return (value - 273.15) * (9/5) + 32;
        }

       /* if(Unit[unitFrom] === Unit.HOURS && Unit[unitTo] === Unit.SECONDS){
            return value * 3600;
        }
        if(Unit[unitFrom] === Unit.HOURS && Unit[unitTo] === Unit.MINUTES){
            return value * 60;
        }
        if(Unit[unitFrom] === Unit.MINUTES && Unit[unitTo] === Unit.HOURS){
            return value / 60;
        }
        if(Unit[unitFrom] === Unit.MINUTES && Unit[unitTo] === Unit.SECONDS){
            return value * 60;
        }
        if(Unit[unitFrom] === Unit.SECONDS && Unit[unitTo] === Unit.HOURS){
            return value / 3600;
        }
        if(Unit[unitFrom] === Unit.SECONDS && Unit[unitTo] === Unit.MINUTES){
            return value / 60;
        }*/


        return 20;
    }
    return 0;
}