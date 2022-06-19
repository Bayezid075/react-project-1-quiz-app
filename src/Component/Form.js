import React from 'react'

class Form extends React.Component {

        state = {
            title:'javascript',
            text: 'is very Awesome',
            libery: 'React'
        }

        handleChange =(e)=>{
         
            if(e.target.type === 'text'){
                
                this.setState({
                    title: e.target.value,
                    
                })
            }else if(e.target.type==='textarea'){
                this.setState({
                    
                    text: e.target.value
                })
            }else if (e.target.type === 'select-one'){
                this.setState({
                    
                    libery: e.target.value
                })

            }
            
            else{
                console.log('nothing here!!');
            }
        }


        submitHandeler = (e) => {
            const {title, text, libery} = this.state
            e.preventDefault()
            console.log(title,libery,text);

        }


    render(){
        const {title, text, libery} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandeler}>
                    <input type="text" placeholder="type here" value={title} onChange={this.handleChange}/>
                        <br />
                        <br />
                   <textarea name="textArea" value={text} onChange={this.handleChange} ></textarea>
                        <br />
                        <br />
                <select value={libery} onChange={this.handleChange} >

                    <option value="React">React</option>
                    <option value="Angular">Angular</option>

                </select>
                                <br />
                                <br />
                            <input type="submit" value="submit" />
                </form>
            </div>

        )

    }

}
export default Form 
