import React, { Component } from 'react';
import { observer }  from "mobx-react";

/** Stylesheets **/
import styles from "./MagnetList.css";

import blockies from 'blockies';

@observer
export class MagnetList extends Component {
	videoClick(magnet) {
		this.props.store.createMagnetVideo(magnet);
	}

	render() {
		const { magnetList } = this.props.store;

		return (
			<div id="MagnetList">
				{
					magnetList.map((magnet, index) => {
						return (
							<div key={index} className={(index % 2 === 0) ? "magnet-item" : "magnet-item-dark"}>
								<div className="magnet-left">
									<div className="magnet-name">{magnet.name}</div>
									<div className="magnet-details">
										<span className="magnet-author">
											<img src={createIdentity(magnet.author)} alt="author" />
										</span>
										<span className="magnet-time">{formatDate(new Date(magnet.timestamp * 1000))}</span>
									</div>
								</div>
								<div className="magnet-right">
									<span className="magnet-video" onClick={this.videoClick.bind(this, magnet.magnet)}>
										<svg viewBox="0 0 400.2 400">
												<path className="st0" d="M384.2,122.1c-21.1-49.2-56.9-85-106.1-106.1C253.3,5.3,227.6,0,200.4,0c-27.1,0-53.1,5.4-77.9,16
													C72.9,37.1,36.9,72.8,15.8,122.1C5.2,146.8,0,172.6,0,199.8c0,27.1,5.2,53.2,15.8,77.9c21.1,49.3,57.2,85.2,106.8,106.4
													c24.8,10.5,50.8,16,77.9,16c27.1,0,52.9-5.4,77.7-16c49.2-21.1,85-57.2,106.1-106.4c10.6-24.8,16-50.8,16-77.9
													C400.2,172.6,394.9,146.9,384.2,122.1z M361.9,268.3c-9.3,21.6-21.7,40.5-37.4,56.3c-15.5,15.5-34.4,28-56,37.4
													c-21.7,9.4-44.2,14-68.1,14c-31.7,0-61.3-7.8-88.4-23.6c-26.9-15.7-48.4-37.2-64.1-64.1c-15.8-27.1-23.6-56.7-23.6-88.4
													s7.9-61,23.6-88C63.7,84.9,85.1,63.4,112,47.7c27.1-15.8,56.7-23.6,88.4-23.6s61,7.9,88,23.6c26.9,15.8,48.3,37.2,63.9,64.1
													c15.7,27,23.6,56.2,23.6,88C375.9,223.6,371.2,246.6,361.9,268.3z"/>
												<polygon className="st1" points="297,198.2 146,282.5 146,114 297,198.2 		"/>
												<path className="st0" d="M298.9,181.4c-5.1-2.9-27.2-15.9-66.3-38.5l-65.9-38.1c-7.5-4.4-14.8-4-21.9,0c-6.7,3.7-11.4,11.2-11.4,18.8
													v89.5v63.2c0,8.3,3.7,14.7,10.9,18.8c4.2,2.4,8.7,3.1,13.8,2.8c2.4-0.1,5.2-1,8.1-2.8c4.1-2.5,26.5-15,67-38.5l65.6-38.1
													c3.3-1.9,5.6-4.4,7.7-7.7c1.9-2.9,3.1-6.6,3.1-11.2c0-5.3-1.6-9.5-4.4-12.9C303.2,184.3,301,182.6,298.9,181.4z M274.4,204.8
													l-10.5,6.1c-45.3,26.4-80.7,46.6-105.7,61.5v-85.1V128l46.6,26.9c26.1,15.1,44.6,25.6,55.6,31.9l13.1,7.7l9.2,5.3L274.4,204.8z"/>
										</svg>
									</span>
									<span className="magnet-magnet">
										<a href={magnet.magnet}>
											<svg className="magnet-svg" viewBox="0 0 315.79 400">
												<path className="cls-1" d="M289.28,356.38H235.15a26.53,26.53,0,0,1-26.5-26.5v-171c0-28.08-22.41-51.27-50-51.69a50.82,50.82,0,0,0-51.54,50.75v52.63a11.28,11.28,0,0,1-22.56,0V157.89A73.38,73.38,0,0,1,159,84.59c39.8.61,72.17,33.91,72.17,74.24v171a4,4,0,0,0,3.95,3.95h54.14a4,4,0,0,0,3.95-3.95V284.21a11.28,11.28,0,1,1,22.56,0v45.67A26.54,26.54,0,0,1,289.28,356.38Zm-208.64,0H26.5A26.53,26.53,0,0,1,0,329.88v-172C0,70.83,70.83,0,157.89,0S315.78,70.83,315.78,157.89v52.25a11.28,11.28,0,0,1-22.56,0V157.89c0-74.62-60.71-135.34-135.34-135.34S22.56,83.27,22.56,157.89v172a4,4,0,0,0,3.95,3.95H80.64a4,4,0,0,0,3.95-3.95V273.69a11.28,11.28,0,1,1,22.56,0v56.19A26.54,26.54,0,0,1,80.64,356.38Z"/>
												<path className="cls-2" d="M304.51,263.9v66a15.22,15.22,0,0,1-15.22,15.23H235.15a15.22,15.22,0,0,1-15.22-15.23v-66Z"/>
												<path className="cls-1" d="M289.28,356.38H235.15a26.53,26.53,0,0,1-26.5-26.5v-66a11.28,11.28,0,0,1,11.28-11.28h84.59a11.28,11.28,0,0,1,11.28,11.28v66A26.53,26.53,0,0,1,289.28,356.38Zm-58.08-81.2v54.7a4,4,0,0,0,3.95,3.95h54.14a4,4,0,0,0,3.95-3.95v-54.7Z"/>
												<path className="cls-2" d="M95.86,263.9v66a15.22,15.22,0,0,1-15.22,15.23H26.5a15.22,15.22,0,0,1-15.22-15.23v-66Z"/>
												<path className="cls-1" d="M80.64,356.38H26.5A26.53,26.53,0,0,1,0,329.88v-66a11.28,11.28,0,0,1,11.28-11.28H95.86a11.28,11.28,0,0,1,11.28,11.28v66A26.53,26.53,0,0,1,80.64,356.38Zm-58.08-81.2v54.7a4,4,0,0,0,3.95,3.95H80.64a4,4,0,0,0,3.95-3.95v-54.7Z"/>
												<path className="cls-1" d="M164.1,400a11.29,11.29,0,0,1-10.79-14.57l10.06-33-24.84,5.94a11.28,11.28,0,0,1-12.75-15.94l22.55-45.86a11.28,11.28,0,1,1,20.24,10l-12,24.33,20.65-4.94a11.28,11.28,0,0,1,13.41,14.25L174.88,392A11.28,11.28,0,0,1,164.1,400Z"/>
											</svg>
										</a>
									</span>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}
}

function formatDate(date) {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
	const dayNames = [
		"st", "nd", "rd", "th", "th", "th", "th", "th", "th",
		"th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
		"th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th",
		"th", "st"
	]

  const day        = date.getDate();
  const monthIndex = date.getMonth();
  const year       = date.getFullYear();

  return day + dayNames[day]  + ', ' + monthNames[monthIndex] + ' ' + year;
}

function createIdentity (address) {
	return blockies({
    	seed: (address || '').toLowerCase(),
    	size: 8,
    	scale: 3
    }).toDataURL();
}
