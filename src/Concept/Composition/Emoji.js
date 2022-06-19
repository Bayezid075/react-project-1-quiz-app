import React from 'react'

export default class Emoji extends React.Component {
        emoji = (text, emoji) => `${text} ${emoji}`
    render(){

      return  this.props.children({emoji:this.emoji})
    }


}
