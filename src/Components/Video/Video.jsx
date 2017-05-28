import React, { Component } from 'react';
import { observer }  from "mobx-react";

/** Stylesheets **/
import styles from "./Video.css";

/** MagnetLink **/
import Magnet from './magnet.json';

@observer
export class Video extends Component {
	componentWillMount() {
		this.props.store.createMagnetVideo(Magnet);
	}

	render() {
		const { file } = this.props.store;

		return (
			<div id="Video">
				<div id="peers">

				</div>
				<div id="up-down">
				</div>
				<div ref="vid" id="vid">
					<div id="progressbar" />
					{file}
				</div>
			</div>
		);
	}
}
