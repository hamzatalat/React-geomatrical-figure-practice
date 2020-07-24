// imports here 
import React from 'react';
import Circle from './circle'
import Rectangle from './rectangle'
import Point from './point'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


// App class here which is the main page 

class App extends React.Component {

// Constructer of class here with props and function binding 

  constructor(props) {
    super(props);
    this.state = {type:'' ,statement:'' , 
                  cx: '' ,cy:'' , cr:'',
                  rect_x_axis: '' ,rect_y_axis:'' ,rect_height:'' , rect_width:'',
                  point_var:'' 
                  ,color : ['white','red','black','green','orange','yellow','pink','golden','brown','blue',]
    };
    this.handleChange = this.handleChange.bind(this);
  }


// Text box event handler so it will be called with every text box change 

handleChange(event) {
  
  // saving the typed statement in a veriable called statement
  
  this.setState({ statement: event.target.value });

  // workflow to determine what kind of figure its going to be 
  const next_line_chk = this.state.statement.split("\n");

  for (var i=0; i < next_line_chk.length; i++) 
  {
    const answer_array = next_line_chk[i].split(" ");
    
    if(answer_array[1]){
      this.setState({ type: answer_array[0] });
      answer_array[0]=''
    }
    

    //  Work flow for Circle 
      // Setting X axis of the circle 
    if(answer_array[2] ){
      if(this.state.type ==='c')
       {
        this.setState({ cx: answer_array[1] });
        answer_array[1]=''
       }

       if(this.state.type ==='r')
       {
        this.setState({ rect_x_axis: answer_array[1] });
        answer_array[1]=''
       }

    }

      // Setting y axis of the circle 
    if(answer_array[3] ){
      if(this.state.type ==='c')
       {
        this.setState({ cy: answer_array[2] });
        answer_array[2]=''
       }
       if(this.state.type ==='r')
       {
        this.setState({ rect_y_axis: answer_array[2] });
        answer_array[2]=''
       }
    }

      //Setting up Radius of the circle  
    if(answer_array[3]){
      if(this.state.type ==='c')
       {
        this.setState({ cr: answer_array[3] });
        answer_array[3]=''
       }
       if(this.state.type ==='r')
       {
        this.setState({ rect_height: answer_array[3] });
        answer_array[3]=''
       }
    }


    if(answer_array[4]){

       if(this.state.type ==='r')
       {
        this.setState({ rect_width: answer_array[4] });
        answer_array[4]=''
       }
    }
    if(this.state.type ==='p')
    {
          this.setState({ point_var:next_line_chk[i] });
      
    }

  }


 }



  render() {
    return (
      <div class="col-sm-12 mt-5 text-center">
        <form>
          <textarea
            rows="5"
            class="inp-box"
            value={this.state.textAreaValue}
            onChange={this.handleChange}
          />
          {/* <button onClick={this.activate_draw}> Draw</button> */}
        </form>

        <svg width="250" height="250" class="mt-3" id="svg-elem">
          

          
          <Circle cx= {this.state.cx} cy= {this.state.cy} r={this.state.cr} fill={this.state.color[Math.floor(Math.random() * 10) + 1]} />
          <Rectangle x={this.state.rect_x_axis} y={this.state.rect_x_axis}  width={this.state.rect_width} height={this.state.rect_height} fill={this.state.color[Math.floor(Math.random() * 10) + 1]}/>
          <Point points={this.state.point_var.substr(2)} fill={this.state.color[Math.floor(Math.random() * 10) + 1]}/> 
        </svg>

      </div>
    );
  }
}

export default App;
