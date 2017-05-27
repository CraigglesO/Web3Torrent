import React, { Component } from 'react';
import { observer }  from "mobx-react";
import styles from "./Video.css";

/** Store **/
import MagnetStore from '../MagnetStore';

/** MagnetLink **/
import Magnet from './magnet.json';

@observer
export class Video extends Component {
	constructor() {
		super();
		console.log("magnetStore", MagnetStore);
		this.vid = MagnetStore.addMagnetVideo(Magnet);
		console.log("vid", this.vid);
	}
	render() {

		return (
			<div id="Video">
				<div id="peers">

				</div>
				<div id="up-down">
				</div>
				<div ref="vid" id="vid">
				</div>
			</div>
		);
	}
}


// web3.eth.gasPrice
