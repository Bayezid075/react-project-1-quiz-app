import withCounter from "../HOC/withCounter"

const  ClickCounter = (props)=> {
    const {count,incriment} = props 
    return(
            <div>
                <button onClick={incriment}> Clicked {count}  Times </button>
            </div>
    )
}
export default withCounter(ClickCounter)