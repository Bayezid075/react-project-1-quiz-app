import React from 'react'

const scaleName={
 c : 'celsius',
 f : 'fahrenhite'

}

export default function TempInput ({temp,scale,onTempChange}) {



  
        return(
           <> <fieldset>
                <legend> Enter Your Temperature in {scaleName[scale]} </legend>
                <input type="text" value={temp} onChange={(e)=> onTempChange(e,scale)} />
            </fieldset>
 
                    </> 
        )
    

}