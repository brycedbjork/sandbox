import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Button extends Component {

	render() {
		return (
			<div className={`button`} onClick={this.props.onClick}>
						
				{this.props.children}

				{this.props.emoji && <span className="button-emoji">{this.props.emoji}</span>}

				<style>
					{`
						.button {
							padding: 5px;
							width: 240px;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
							background-color: ${colors.white};
							font-size: 28px;
							font-weight: 500;
							font-family: ${fonts.primary};
							border-radius: 5px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
						}
						.button:hover {
							transform: scale(1.03);
							box-shadow: rgba(63, 63, 63, 0.2) 0 6px 14px 0;
							cursor: pointer;
						}
						.button-emoji {
							font-size: 36px;
							margin-left: 10px;
						}
					`}
				</style>

			</div>
		)
	}
}

export default Button