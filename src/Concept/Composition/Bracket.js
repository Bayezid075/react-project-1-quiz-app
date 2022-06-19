import React from 'react'

export default class Bracket extends React.Component {
        Bracket = (text) => `[${text}]`
    render(){

      return  this.props.children({Bracket:this.Bracket})
    }


}
