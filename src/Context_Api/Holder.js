import Section from "./Section";
import React from 'react'
import ThemeContext from "../lib/ThemeContext";
class Holder extends React.Component {
    state ={
        theme: 'dark'
    }
    render(){
        const {theme} = this.state
        return(
            <>   
            <ThemeContext.Provider value={{theme:theme}}>  <Section/>
                                                        </ThemeContext.Provider>
              </>

        )
    }
}

export default Holder 



