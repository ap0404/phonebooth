import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignInButton = styled.div`
	background: green;
	color: #fff;
	width: 30%;
	position: relative;
	top: 200px;
	border-radius: 10px;
	margin: auto;
	padding: 10px 10px;
	text-align: center;
`;

const DemoButton = styled(Link)`
	background: green;
	color: #fff;
	width: 30%;
	position: relative;
	display: inline-block;
	top: 300px;
	border-radius: 10px;
	margin: auto;
	padding: 10px 10px;
	text-align: center;
	text-decoration: none;
`;
class App extends Component {
	render() {
		return (
			<div className="App">
				<SignInButton>Sign in</SignInButton>
				<DemoButton to="/demovideo">Demo</DemoButton>
			</div>
		);
	}
}

export default App;
