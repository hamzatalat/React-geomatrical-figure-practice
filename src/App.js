// imports here 
import React from 'react';
import Circle from './circle'


// App class here which is the main page 

class App extends React.Component {

// Constructer of class here with props and function binding 

  constructor(props) {
    super(props);
    this.state = {cx: '' ,cy:'' , r:'' , ty:'' ,statement:''};
    this.handleChange = this.handleChange.bind(this);
    this.activate_draw = this.activate_draw.bind(this);
  }


// Text box event handler so it will be called with every text box change 

handleChange(event) {
  
  // saving the typed statement in a veriable called statement
  
  this.setState({ statement: event.target.value });

  // workflow to determine what kind of figure its going to be 

  const answer_array = this.state.statement.split(" ");
  if(answer_array[1]){
    this.setState({ ty: answer_array[0] });
    answer_array[0]=''
  }
  

  //  Work flow for Circle 
    // Setting X axis of the circle 
  if(answer_array[2] && this.state.ty =='c'){
    this.setState({ cx: answer_array[1] });
    answer_array[1]=''
  }

    // Setting y axis of the circle 
  if(answer_array[3] && this.state.ty =='c' ){
    this.setState({ cy: answer_array[2] });
    answer_array[2]=''
  }

    //Setting up Radius of the circle  
  if(!answer_array[4] && this.state.ty =='c'){
    this.setState({ r: answer_array[3] });
    answer_array[3]=''
  }
  

 }

activate_draw(event)
{
  
}

  render() {
  return (
    <div>
      <form>
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
        />
        <button onClick={this.activate_draw}> Draw</button>
      </form>

       <svg width="100" height="100">
              <circle cx= {this.state.cx} cy= {this.state.cy} r={this.state.r} stroke="green" stroke-width="4" fill={this.state.ty} />
          </svg>
        <div>
          {this.state.statement}


        </div>
    </div>
  );
  }
}

export default App;
