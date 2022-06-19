import React from 'react'

class HoverCounter extends React.Component{

     
    render(){
        
            const {count,incriment} = this.props 
            return(
                    <div>
                        <h1 onMouseOver={incriment}> Hovered {count}  Times </h1>
                    </div>
            )
        }
        

}
export default HoverCounter


