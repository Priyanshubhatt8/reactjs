import React from 'react'
class about extends React.Component{
    constructor(){
        super();
        
        this.state={
         name:'anil',
         age:27
        } 
    }
    /*life cycle method can 
    only be used in class component
    */componentDidMount()
    { 
        console.warn("props",this.props.namebh)
       // console.warn("did mount"); 
    }
    componentDidUpdate()
    {
        console.warn("props in update",this.props.namebh)
        alert("name updated")
    }

    render(){ 
        console.warn("render") 
        return(<div>
            <h1>About us Component</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
        
     <button onClick={()=>{this.setState({name:'priyanshu bhatt'})}}>Update State</button>
     <h2></h2>
        </div>)

    }
} 
export default about;
//*it created first*/constructor()
//{
 
//}
//*it will run first like when you born*/componentDidMount(){


//}
//*when it will die*/componentWillUnmount(){}
//*when youll marry*/componentDidUpdate(){}
