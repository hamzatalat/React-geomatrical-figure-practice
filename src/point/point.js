import React from 'react';


class Point extends React.Component{ 
    render()
    {
	    return (
        	<polygon points={this.props.points} stroke="black" stroke-width="4" fill={this.props.fill}/>
		);
	}
}

export default Point