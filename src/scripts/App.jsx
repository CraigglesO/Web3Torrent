import React, { Component } from 'react';
import styles from "./App.css";

/** Components **/
import { Header } from './Header/Header';
import { Video } from './Video/Video';
import { MagnetList } from './MagnetList/MagnetList';

export class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Video />
				<MagnetList />
			</div>
		);
	}
}




// web3.eth.gasPrice
