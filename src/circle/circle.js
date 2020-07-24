import React from 'react';


class Circle extends React.Component{ 
    render(){

    return (
    	<svg viewbox="10 10 200 200" >
    	<div>
          	<circle cx= {this.props.cx} cy= {this.props.cy} r={this.props.r} stroke="green" stroke-width="4" fill='green' />
    	</div>
    	</svg>
);
}
}

export default Circle