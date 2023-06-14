
import { useState } from 'react'


function App() {

	const [ number, setNumber ] = useState( 0 )


	/* passing this function down to the child component allows us to have 
	   whatever argument is given in scope here */
	const increment = (eventObject) => {
		/* our event object came from the child! */
		console.log( eventObject )
		setNumber( number + 1 )
	}

	return (
		<div>
			<h1>{ number }</h1>
			<Child incrementFunction={ increment } />
		</div>
	);
}






/* incrementFunction */

const Child = ( props ) => {

	return (
		<div>
			{/*          event object                                       
			                   |                      passing the event object
			                   |                    "up the beanstalk" to it is
							   |					in scope where the funciton
						       |						is defined
			                   |                             |          
							   V							 V		    */}
			<button onClick={ (e) => props.incrementFunction(e) }>
				change number
			</button>
		</div>
	)
}








export default App;
