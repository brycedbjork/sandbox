import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Card extends Component {

	render() {

		let onClick = () => {}
		if (this.props.url) {
			onClick = () => window.open(this.props.url)
		}

		return (
			<div className="card" onClick={onClick}>

				<div className="card-row">
					{this.props.image && <img src={this.props.image} className="card-image"/>}
					<div className="card-title">{this.props.title}</div>
				</div>

				<div className="card-description">{this.props.description}</div>

				{this.props.people && <div className="card-people">{this.props.people.join(", ")}</div>}

				<style>
					{`
						.card {
							background-color: ${colors.white};
							padding: 15px;
							border-radius: 5px;
							font-family: ${fonts.primary};
							border-radius: 5px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							border: 1px solid rgba(0, 0, 0, 0.1);
							margin: 10px;
							max-width: 300px;
						}
						.card-row {
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							margin-bottom: 10px;
						}
						.card-image {
							width: auto;
							height: 40px;
							margin-right: 10px;
						}
						.card:hover {
							transform: scale(1.02);
							box-shadow: rgba(63, 63, 63, 0.1) 0 5px 15px 0;
							cursor: default;
						}
						.card-title {
							font-size: 24px;
							font-weight: 500;
							font-family: ${fonts.primary};
							color: ${colors.primaryDark};
						}
						.card-description {
							font-size: 18px;
							font-weight: 500;
							font-family: ${fonts.primary};
							color: ${colors.gray};
						}
						.card-people {
							font-size: 18px;
							font-weight: 500;
							font-family: ${fonts.primary};
							color: ${colors.secondary};
						}
					`}
				</style>

			</div>
		)
	}
}

export default Card