import React from 'react'

class ClickCounter extends React.Component{
  


    render(){
        const {count,incriment} = this.props 
        return(
                <div>
                    <button onClick={incriment}> Clicked {count}  Times </button>
                </div>
        )
     


    }

}

export default ClickCounter 


