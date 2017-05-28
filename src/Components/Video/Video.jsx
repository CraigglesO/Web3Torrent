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

	// componentWillReceiveProps(nextProps) {
	// 	console.log("next", nextProps);
	// 	if (nextProps.store.file)
	// 		this.ref.vid.append(nextProps.store.file);
	// }

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
					<video width="500" height="250" controls>
						<source src="movie.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
