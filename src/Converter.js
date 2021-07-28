import React, { Component } from 'react';
import './Converter.css';
import {Type} from './Types'; 
import {calculate, formatResult} from './CalculationFunctions';
import SwapHorizSharpIcon from '@material-ui/icons/SwapHorizSharp';

export default class Converter extends Component {

    constructor(props){
        super(props);
        const key = (Object.keys(Type).sort())[0];
        const type = Type[key];
        this.state = {
            type: key, 
            unit1Index: 0,
            unit2Index: 1,
            result: 0
        };
        this.calculateResult = this.calculateResult.bind(this);
        this.formatName = this.formatName.bind(this)
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onUnitChange = this.onUnitChange.bind(this);
        this.reverseUnits = this.reverseUnits.bind(this);
        this.unitKeys = this.unitKeys.bind(this);
    }



    render(){
        let typeOptions = Object.keys(Type).sort().map((key, i) => {
            return <option value={key} key={key}>{this.formatName(key)}</option>
        });
        let unitOptions = this.unitKeys().map((key, i) => {
            return <option value={key} key={key}>{this.formatName(key)}</option>
        });
        return(
            <div className="main-container">
                <div className="converter-container">
                    <div className="converter-type">
                        <select className="converter-select type-select" onChange = {this.onTypeChange}>
                            {typeOptions}
                        </select>
                    </div>
                    <div className="converter-units">
                        <div className="converter-input-container">
                            <input id="number-input" className="converter-input" type="number" onChange = {this.calculateResult} defaultValue="0"/>
                            <select id="select-unit-1" className="converter-select unit-select" onChange = {this.onUnitChange} value={this.unitKeys()[this.state.unit1Index]}>
                                {unitOptions}
                            </select>
                        </div>
                        <div className="center-container">
                            <div className="equals-symbol">=</div>
                            <button className="swap-button" onClick={this.reverseUnits} title="Swap units"><SwapHorizSharpIcon></SwapHorizSharpIcon></button>
                        </div>
                        <div className="converter-input-container">
                            <input className="converter-input" type="number" value={this.state.result} disabled/>
                            <select id="select-unit-2" className="converter-select unit-select" onChange = {this.onUnitChange} value={this.unitKeys()[this.state.unit2Index]}>
                                {unitOptions}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    calculateResult = () => {
        const unitFrom = document.getElementById('select-unit-1').value;
        const unitTo = document.getElementById('select-unit-2').value;
        const value = document.getElementById('number-input').value;
        const result = calculate(this.state.type, unitFrom, unitTo, value);
        this.setState({
           result: formatResult(result) 
        });
    }

    formatName = (name) => {
        name = name.replace(/_/g, ' ');
        return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
    }

    onTypeChange = (e) => {
        const key = e.target.value;
        const type = Type[key];
        this.setState({
            type: key,
            unit1Index: 0,
            unit2Index: 1
        }, this.calculateResult); 
    }

    onUnitChange = (e) => {
        let index1 = document.getElementById('select-unit-1').selectedIndex;
        let index2 = document.getElementById('select-unit-2').selectedIndex;
        if(index1 == index2){
            let temp = 0;
            if(index1 !== this.state.unit1Index){
                temp = this.state.unit1Index;
                index1 = index2;
                index2 = temp;
            }
            else {
                temp = this.state.unit2Index;
                index2 = index1;
                index1 = temp;
            }
            
        }
        this.setState({
            unit1Index: index1,
            unit2Index: index2
        }, this.calculateResult); 
    }
    
    reverseUnits = () => {
        let index1 = document.getElementById('select-unit-1').selectedIndex;
        let index2 = document.getElementById('select-unit-2').selectedIndex;
        let temp = index1;
        index1 = index2;
        index2 = temp;
        this.setState({
            unit1Index: index1,
            unit2Index: index2
        }, this.calculateResult); 
    }

    unitKeys = () => {
        return Object.keys(Type[this.state.type].units);
    }


}
