import React from 'react';


class Circle extends React.Component{ 
    render(){

    return (
    	<div>
    		<svg width="100" height="100">
          		<circle cx= '50' cy= '50' r='40' stroke="green" stroke-width="4" fill='green' />
        	</svg>
    	</div>
);
}
}

export default Circle