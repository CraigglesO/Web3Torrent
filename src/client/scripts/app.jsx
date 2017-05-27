import React from 'react';
import styles from "./App.css";

/** Components **/
import { Header } from './Header/Header';

/* WEB3 */
const Web3      = require('web3');
const web3      = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

/** Assets **/
const ABI_MAGNET         = '../contracts/magnet.json';
const ABI_MAGNET_PRIVATE = '../contracts/magnetPrivate.json';

export class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}




// web3.eth.gasPrice
