import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Logo extends Component {

	render() {
		return (
			<div className="logo">
				{this.props.children}
				<div className="line1"/>
				<div className="line2"/>
				<style>
					{`
						.logo {
							font-family: ${fonts.primary};
							font-size: 30px;
							font-weight: 500;
							transition: all 500ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							color: ${colors.white};
							position: relative;
							border-top-left-radius: 3px;
							border-top-right-radius: 3px;
							padding-top: 5px;
							padding-bottom: 5px;
							padding-right: 5px;
							margin-bottom: 10px;
						}
						.line1 {
							position: absolute;
							top: 0;
							left: 0;
							transition: all 500ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							width: 0px;
							height: 2px;
							background-color: rgba(255, 255, 255, 0.7);
						}
						.line2 {
							position: absolute;
							bottom: 0;
							left: 0;
							transition: all 500ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							width: 65px;
							height: 2px;
							background-color: rgba(255, 255, 255, 0.7);
						}
						.logo:hover {
							color: rgba(255, 255, 255, 0.8);
							cursor: default;
						}
						.logo:hover > .line1 {
							width: 65px;
							background-color: rgba(255, 255, 255, 0.95);
						}
						.logo:hover > .line2 {
							width: 130px;
							background-color: rgba(255, 255, 255, 0.95);
						}
					`}
				</style>
			</div>
		)
	}
}

export default Logo