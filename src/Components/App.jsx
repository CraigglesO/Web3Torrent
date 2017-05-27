import React, { Component } from 'react';

/** Stylesheets **/
import styles from "./App.css";

/** Store **/
import MagnetStore from './MagnetStore';

/** Components **/
import { Header } from './Header/Header';
import { Video } from './Video/Video';
import { MagnetList } from './MagnetList/MagnetList';

export class App extends Component {
	render() {
		return (
			<div>
				<Header store={MagnetStore} />
				<Video store={MagnetStore} />
				<MagnetList store={MagnetStore} />
			</div>
		);
	}
}




// web3.eth.gasPrice
