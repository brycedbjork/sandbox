import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class MoreIcon extends Component {

	render() {
		return (
			<div className={`more`} onClick={this.props.onClick}>
						
				<img src={require("../lib/images/more.png")} className="more-img"/>

				<style>
					{`
						.more {
							position: absolute;
							bottom: 20px;
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;
						}
						.more-img {
							width: 30px;
							height: auto;
						}
					`}
				</style>

			</div>
		)
	}
}

export default MoreIcon