

export default  function Emoji  ({emoji,Bracket}) {
    let text = 'i am js '
        if(emoji){
            text = emoji(text,'💖') 
        }
        if(Bracket){
            text = Bracket(text)
        }
    return <div> {text} </div>
}
