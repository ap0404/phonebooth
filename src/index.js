import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';

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
	<BgCover><App /></BgCover>
,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
