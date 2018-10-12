import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { ScaleLoader } from 'react-spinners';

const DemoAudioRouteWrapper = styled.div`
	margin: 20px 0px;
`;

const LoaderWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Embed = styled.embed`
	width: 60%;
	height: 300px;
`;
class DemoVideo extends Component {
	constructor(props) {
		super();
		this.state = {
			loading: true
		};
		this.onLoad = this.onLoad.bind(this);
	}

	onLoad() {
		this.setState({ loading: false });
	}

	componentDidMount() {
		let iframe = ReactDOM.findDOMNode(this.refs.iframe);
		iframe.addEventListener('load', this.onLoad);
	}
	render() {
		const { loading } = this.state;
		return (
			<div>
				<Embed ref="iframe" src="https://www.youtube.com/v/T58NGMrUp0M" />
				{loading ? (
					<LoaderWrapper>
						<ScaleLoader sizeUnit={'px'} size={100} color={'green'} />
					</LoaderWrapper>
				) : (
					<DemoAudioRouteWrapper>
						<div onClick={this.props.showAudioPage}>skip</div>
					</DemoAudioRouteWrapper>
				)}
			</div>
		);
	}
}

export default DemoVideo;
