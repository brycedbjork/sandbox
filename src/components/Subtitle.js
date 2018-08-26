import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Subtitle extends Component {

	render() {
		return (
			<div className="subtitle">
				{this.props.children}
				<style>
					{`
						.subtitle {
							font-family: ${fonts.primary};
							font-size: 20px;
							font-weight: 500;
							color: ${colors.white};
							margin-bottom: 10px;
							width: 100%;
							position: relative;
						}
					`}
				</style>
			</div>
		)
	}
}

export default Subtitle