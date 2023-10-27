import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import { HashRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
	return (
			<Router>
				<AnimatedRoutes />
			</Router>
	);
}
  
ReactDOM.render(<App />, document.getElementById("root"));

