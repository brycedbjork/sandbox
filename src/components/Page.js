import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Page extends Component {

	render() {
		return (
			<div className={`page ${this.props.gradient ? "gradient" : ""}`}>
						
				{this.props.children}

				<style>
					{`
						.gradient {
							background: linear-gradient(to top left, #155299, #1362BE);
						}
						.page {
							min-height: 100%;
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: flex-start;
						}
					`}
				</style>

			</div>
		)
	}
}

export default Page