import React from 'react'

function  withCounter(OriginalComponent) {
    class newComponent extends React.Component{
        state = {
            count: 0 
        }
         incriment =()=>{
             this.setState((state)=>({
              count : state.count + 1,
              
           }))
           
         }
         render(){
             const {count} = this.state
             return(
                 <OriginalComponent count={count} incriment={this.incriment} />
             )
         }

    }
    return newComponent
}

export default withCounter