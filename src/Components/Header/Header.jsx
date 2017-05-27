import React from 'react';
import { observer }  from "mobx-react";

/** Stylesheets **/
import styles from "./Header.css";

@observer
export class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			magnetModal: null
		}
	}

	addMagnet() {
		this.setState({ magnetModal: <MagnetModal store={this.props.store} /> });
	}

	onPrivate() {

	}

	render() {
		const { magnetModal } = this.state;

		return (
			<div id="Header">
				<div id="magnet-modal-container">
					{magnetModal}
				</div>
        <div id="web3">Web3Torrent</div>
				<div id="header-buttons">
					<span className="links" id="add-magnet" onClick={this.addMagnet.bind(this)}>
						Add Magnet
					</span>
					<span className="links" id="private" onClick={this.onPrivate.bind(this)}>
						Private
					</span>
					<a target="_blank" href="https://github.com/CraigglesO/Web3Torrent">
						<span className="button" id="github">Github</span>
					</a>
				</div>
			</div>
		);
	}
}

class MagnetModal extends Component {
	onEmploy() {

	}

	render() {
		return (
			<div id="MagnetModal">
			</div>
		)
	}
}
