import React from 'react';


class Circle extends React.Component{ 
    render()
    {
	    return (
        	<circle cx= {this.props.cx} cy= {this.props.cy} r={this.props.r} stroke="black" stroke-width="4" fill={this.props.fill} />
		);
	}
}

export default Circle