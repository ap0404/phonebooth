import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

const BgCover = styled.div`
	background-image: url(images/background1.jpg);
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

const SignInButton = styled.div`
	background: purple;
	color: #fff;
	width: 30%;
	position: relative;
	top: 200px;
	border-radius: 10px;
	margin: auto;
	padding: 10px 10px;
	text-align: center;
`;

const DemoButton = styled.div`
	background: purple;
	color: #fff;
	width: 30%;
	position: relative;
	top: 300px;
	border-radius: 10px;
	margin: auto;
	padding: 10px 10px;
	text-align: center;
`;
class App extends Component {
	render() {
		return (
			<div className="App">
				<BgCover>
					<SignInButton>Sign in</SignInButton>
					<DemoButton>Demo</DemoButton>
				</BgCover>
			</div>
		);
	}
}

export default App;
