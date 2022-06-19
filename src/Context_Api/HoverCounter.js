import React from 'react'

class HoverCounter extends React.Component{

     
    render(){
        
            const {count,incriment,theme} = this.props 
            const style= theme === 'dark' ? {background: 'black', color: 'white'} :null 
            return(
                    <div>
                        <h1 onMouseOver={incriment} style={style}> Hovered {count}  Times </h1>
                    </div>
            )
        }
        

}
export default HoverCounter


