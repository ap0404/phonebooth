import React, { Component } from 'react';
import styled from 'styled-components';
import DemoVideo from "./components/DemoVideo";
import DemoAudio from "./components/DemoAudio";

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

const DemoButton = styled.div`
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

	constructor() {
		super();
		this.state = {
			showVideo : false,
			showAudio : false
		}
		this.showVideoPage = this.showVideoPage.bind(this);
		this.showAudioPage = this.showAudioPage.bind(this);
		this.renderSwitch = this.renderSwitch.bind(this);
	}

	showVideoPage = () => {
       this.setState({showVideo : true})
	}

    showAudioPage = () => {
        this.setState({showVideo : false, showAudio : true})
	}

	renderSwitch(showVideo, showAudio) {
		if(showVideo && !showAudio) {
			return <DemoVideo showAudioPage={this.showAudioPage}/>;
		}
		else if(!showVideo && showAudio){
			return <DemoAudio/>
		}
		else if(!showVideo && !showAudio) {
            return (<div>
				<SignInButton>Sign in</SignInButton>
				<DemoButton onClick ={this.showVideoPage} >Demo</DemoButton>
			</div>)
		}

	}
	render() {
		const {showVideo, showAudio} = this.state;
		return (
			<div className="App">
				{this.renderSwitch(showVideo, showAudio)}
			</div>
		);
	}
}

export default App;
