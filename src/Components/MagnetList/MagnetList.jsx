import React, { Component } from 'react';
import { observer }  from "mobx-react";

/** Stylesheets **/
import styles from "./MagnetList.css";

import blockies from 'blockies';

@observer
export class MagnetList extends Component {
	render() {
		const { magnetList } = this.props.store;
		console.log("magnetList", magnetList);

		return (
			<div id="MagnetList">
				{
					magnetList.map((magnet, index) => {
						return (
							<div key={index} className="magnet-item">
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
									<span className="magnet-video"></span>
									<span className="magnet-magnet">
										<a href={magnet.magnet}>
											SVG HERE
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

  const day        = date.getDate();
  const monthIndex = date.getMonth();
  const year       = date.getFullYear();

  return day + '-' + monthNames[monthIndex] + '-' + year;
}

function createIdentity (address) {
	return blockies({
    	seed: (address || '').toLowerCase(),
    	size: 8,
    	scale: 3
    }).toDataURL();
}
