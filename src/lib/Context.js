class Context  {
    constructor(value = null){
        this.value = value 

    }


  Provider = ({childern,value}) =>{
     this.value = value
     return childern
    }

  consumer =({childern}) => childern(this.value)


}                                                                                                                       

function CreateContext(value=null) {
    const context = new Context(value)
    return {
        Provider: context.Provider,
        Consumer: context.consumer
    }
}


export default CreateContext  
