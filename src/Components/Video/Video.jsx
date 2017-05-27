import React, { Component } from 'react';
import { observer }  from "mobx-react";
import styles from "./Video.css";

/** MagnetLink **/
import Magnet from './magnet.json';

@observer
export class Video extends Component {
	constructor() {
		super();
		this.props.store.addMagnetVideo(Magnet);
	}
	render() {
		console.log("this.props", this.props);

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
