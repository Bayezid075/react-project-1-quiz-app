import withCounter from "../HOC/withCounter"

const  HoverCounter = (props)=> {
    const {count,incriment} = props 
    return(
            <div>
                <h1 onMouseOver={incriment}> Clicked {count}  Times </h1>
            </div>
    )
}
export default withCounter(HoverCounter)