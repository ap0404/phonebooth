import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DemoVideo from './components/DemoVideo';
import styled from 'styled-components';
import DemoAudio from './components/DemoAudio';

export const BgCover = styled.div`
	background-image: url(images/backgroun.jpg);
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	position: relative;
	height: 900px;
	position: relative;
	float: left;
	width: 100%;
	text-align: center;
`;

ReactDOM.render(
	<Router>
		<BgCover>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/demovideo" component={DemoVideo} />
				<Route path="/demoaudio" component={DemoAudio} />
			</Switch>
		</BgCover>
	</Router>,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
