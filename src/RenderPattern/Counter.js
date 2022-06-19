import React from 'react'

class Counter extends React.Component{
    state = {
        count: 0 
    }
     incriment =()=>{
         this.setState((state)=>({
          count : state.count + 1,
          
       }))
       
     }
  render(){
      const {renderPatt} = this.props
      const {count} = this.state
      return( 
          renderPatt(count,this.incriment)
      )
  }


}
export default Counter 