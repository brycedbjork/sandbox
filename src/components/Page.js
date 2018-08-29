import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Page extends Component {

	render() {
		console.log(this.props)
		return (
			<div id={`page-${this.props.id}`}>
						
				{this.props.children}

				<style>
					{`
						#page-${this.props.id} {
							min-height: 800px;
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: ${this.props.justifyContent ? this.props.justifyContent : "flex-start"};
							align-items: ${this.props.alignItems ? this.props.alignItems : "flex-start"};
							background-image: ${this.props.background ? `url("${this.props.background}")` : ""};
							background-position: center;
							background-repeat: no-repeat;
							background-size: cover;
							position: relative;
						}
					`}
				</style>

			</div>
		)
	}
}

export default Page