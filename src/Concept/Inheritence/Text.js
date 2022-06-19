import Emoji from "./Emoji"
import React from 'react'

export default class Text extends Emoji  {
    constructor(props){
        super(props)
    }
    render (){
        let modifiedText = this.emoji('I love you js', '💖')
        return super.render(modifiedText)
    }


}
