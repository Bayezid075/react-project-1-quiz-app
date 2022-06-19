import React from 'react'

export default class Emoji extends React.Component {
        emoji = (text, emoji) => `${text} ${emoji}`
    render(overWrite){

       let  text = 'i am text componenet';
        
        if(overWrite)  text = overWrite

        return <div>{text} </div>
    }


}
