
import { useState } from 'react'


function App() {

	const [ number, setNumber ] = useState( 0 )

	const increment = () => setNumber( number + 1 )

	return (
		<div>
			<Child theNumber={ number }/>
			<button onClick={ increment }>change number</button>
		</div>
	);
}


const Child = ({ theNumber }) => {

	return (
		<div>
			<h1>{ theNumber }</h1>
		</div>
	)
}



export default App;
