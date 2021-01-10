import React from 'react';

import SideNavigator from "../SideNavigator";
import Main from "../Main";
import './style/app.css';

const App = (props) => {
	return (
		<>
		<h1>Practice </h1>
		<div id="wrapper">
			<SideNavigator />
			<Main />
		</div>
		</>
	)
}
export default App;
