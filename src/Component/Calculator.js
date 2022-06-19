import React from 'react'
import TempInput from './TempInput'
import {ToConvert,toCelsius,toFahrenheit} from '../lib/Convater'
import BoilingVerdict from './BoilingVerdict'


export default class extends React.Component {
 state = {temp : '',scale: 'c'}

 handleChange = (e,scale) =>{
         this.setState({
             temp: e.target.value,
             scale: scale 
         }) 
    }

    render(){
       const {temp,scale} = this.state
       const celsius = scale === 'f' ? ToConvert(temp,toCelsius) :  temp
       const fahrenheit = scale === 'c'? ToConvert(temp,toFahrenheit) : temp 

        return(
           <> 
             
               <TempInput scale="c" temp={celsius} onTempChange={this.handleChange} />
               <TempInput scale="f" temp={fahrenheit} onTempChange={this.handleChange} />
               <BoilingVerdict celsius={parseFloat(celsius)}/>
                    </>
        )
    }

}