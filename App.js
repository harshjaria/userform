import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tittle : 'Simple User Input Form',
      act: 0,
      index :'',
      datas :[]
    }
  }
  
componentDidMount(){
  this.refs.name.focus();
}


  fsubmit = (e)=>{
    e.preventDefault();
    console.log('try');

    let datas=this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
if(name==="" | address==="")  //basic validation
{
  alert("All values must be filled out");
  return false;
}
else if (this.state.act === 0){  //new

  let data ={
    name,address
  }
  datas.push(data);
}
else{   //edit
let index = this.state.index;
datas[index].name=name;
datas[index].address=address;

}

    
    this.setState({
        datas : datas,
        act : 0
      });

    this.refs.myform.reset();
      this.refs.name.focus;
  }

  fremove = (i)=>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({datas : datas});
  }

  fedit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.setState({
      act : 1,
      index : i
    })

    this.refs.name.focus();
  }
  render () 
  {
    let datas = this.state.datas;
    return (
      <div className="App">
       <h2>{this.state.tittle}</h2>

      <form ref="myform" className='myform' >
        <input type="text" ref="name" className='formfield' placeholder="your Name" />
        <textarea  type="text" ref="address" className='formfield' placeholder="your Address" />
        <button onClick={this.fsubmit} className='formfield'>ADD</button>
      </form>

      <table className='table-hover'>
      <thead>
      <tr>
      <th>SNO</th>
    <th>Name</th>
    <th>Address</th> 
    <th>Actions</th>
  </tr>
  </thead>
        {datas.map((data,i)=>
        
      <tr> 
        <th>{i+1} </th>
        <th >{data.name}</th>
        <th className="viewf">{data.address}</th>  
      <button onClick={()=>this.fremove(i)} > Remove </button>
      <button onClick={()=>this.fedit(i)} > Edit </button>
      </tr>
      )}
  </table>
</div>
    );
    
  }
}

export default App;
