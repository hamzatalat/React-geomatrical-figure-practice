import React from 'react';


class Rectangle extends React.Component{ 
    render()
    {
	    return(
	    	
        	<rect x={this.props.x} y={this.props.y}  width={this.props.width} height={this.props.height} stroke="black" stroke-width="4" fill={this.props.fill}/>
		);
	}
}

export default Rectangle