import React from 'react'
import ClockList from './Component/ClockList';
import Form from './Component/Form'
import Calculator from './Component/Calculator';
import Text from './Concept/Composition/Text'
import Emoji from './Concept/Composition/Emoji'
import Bracket from './Concept/Composition/Bracket';
import ClickCounter from './Component/ClickCounter'; 
import HoverCounter from './Component/HoverCounter';
import User from './RenderPattern/User'
import Content from './Context_Api/Content';
import Holder from './Context_Api/Holder'

function App() {

  const quantities = [1,2]
  return(
    //  <div> 
    //       {/* <Emoji>
    //         {({emoji})=>(
    //           <Bracket>
    //           {({Bracket})=>(
    //             <Text emoji={emoji} Bracket={Bracket}/>
    //           )}    

    //           </Bracket>
    //         )}
    //         </Emoji>  */}
       
          
    //  </div>
    <>
    <Holder/>
  
    </>
  )


}



export default App ;