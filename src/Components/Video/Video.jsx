import React, { Component } from 'react';
import { observer }  from "mobx-react";

/** Stylesheets **/
import styles from "./Video.css";

/** MagnetLink **/
import Magnet from './magnet.json';

@observer
export class Video extends Component {
	constructor() {
			super();
			this.state = {
				vid: null
			};
	}

	componentWillMount() {
		this.props.store.createMagnetVideo(Magnet);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.store.file !== this.state.vid) {
			this.state.vid = nextProps.store.file;
			this.refs.vid.appendChild(this.state.vid);
		}
	}

	render() {
		const { file, publicPrivate, progress } = this.props.store;

		return (
			<div id="Video">
				<div id="public-private">
					{(publicPrivate) ? "Public Channel" : "Private Channel"}
				</div>
				<div id="peers">

				</div>
				<div id="up-down">
				</div>
				<div ref="vid" id="vid">
					<div id="progressbar" style={{width: `${progress}%`}} />
				</div>
			</div>
		);
	}
}
