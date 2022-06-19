import React from "react";

class Button extends React.Component {

    shouldComponentUpdate(nextProps){
        const {change: currentChange, local: currL } = this.props
        const {change: nextChange , local : nextL} = nextProps
        if(currentChange === nextChange && nextL === currL){
            return false;
        }else{
            return true ;
        }
    }

    render(){
        console.log('Button component render');
        const {change,enable} = this.props
        if (!enable) return null ;

        return(
            <div>
            
            <button onClick={change}>
              
              Click me for change region US
            </button>
            {change && ' heloo'}

          </div>




        )

    }






}
export default Button
