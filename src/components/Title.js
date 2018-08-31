import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Title extends Component {

	render() {
		return (
			<div className={`title`} onClick={this.props.onClick}>

				{this.props.emoji && <span className="title-emoji">{this.props.emoji}</span>}
						
				{this.props.children}

				<style>
					{`
						.title {
							padding: 20px;
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							font-size: 30px;
							margin-bottom: 0px;
							padding-bottom: 10px;
							font-weight: 500;
							font-family: ${fonts.primary};
							color: ${colors.primaryDark};
						}
						.title-emoji {
							font-size: 36px;
							margin-right: 15px;
						}
					`}
				</style>

			</div>
		)
	}
}

export default Title