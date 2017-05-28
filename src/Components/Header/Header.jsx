import React, { Component } from 'react';
import { observer }  from "mobx-react";

/** Stylesheets **/
import styles from "./Header.css";

@observer
export class Header extends Component {
	constructor() {
		super();
		this.state = {
			adhd: null,
			magnetModal: null
		}
	}

	addMagnet() {
		const self = this;

		self.setState({
			adhd: <div id="adhd" onClick={self.cancel.bind(self)} />,
			magnetModal: <MagnetModal cancel={self.cancel.bind(self)} store={self.props.store} />
		});
	}

	onPrivate() {

	}

	cancel() {
		this.setState({ magnetModal: null, adhd: null });
	}

	render() {
		const { magnetModal, adhd } = this.state;
		const { file } = this.props.store;

		return (
			<div id="Header">
				{adhd}
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

@observer
class MagnetModal extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			magnet: ""
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleMagnetChange = this.handleMagnetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.onCancel = this.onCancel.bind(this);
	}

	onEmploy(name, magnet) {
		this.props.store.addMagnet(name, magnet);
	}

	handleNameChange(event) {
    this.setState({name: event.target.value});
  }

	handleMagnetChange(event) {
    this.setState({magnet: event.target.value});
  }

	handleSubmit(event) {
		event.preventDefault();
    this.props.store.addMagnet(this.state.name, this.state.magnet);
  }

	onCancel() {
		this.props.cancel();
	}

	render() {
		return (
			<div id="MagnetModal">
				<div id="addMagnet">Add Magnet</div>
				<div>
			  	<label className="labels">Name:</label>
				</div>
				<div>
					<input
						className="mag-inputs"
						id="name-input"
						type="text"
						placeholder="name of file"
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
				</div>
				<div>
					<label className="labels">Magnet:</label>
				</div>
				<div>
					<input
						className="mag-inputs"
						id="magnet-input"
						type="text"
						placeholder="e.g. 'magnet:?...'"
						value={this.state.magnet}
						onChange={this.handleMagnetChange}
						/>
				</div>
		  	<div className="button" id="magnet-sumbit" onClick={this.handleSubmit}>
					Submit
				</div>
				<div className="button" id="magnet-cancel" onClick={this.onCancel}>
					Cancel
				</div>
			</div>
		);
	}
}
