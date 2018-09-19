import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"
import { bounceInUp } from 'react-animations'
import styled, {keyframes} from "styled-components"

class MoreIcon extends Component {

	render() {

		const BouncyDiv = styled.div`
			animation: 2s ${keyframes`${bounceInUp}`};
			position: absolute;
			bottom: 20px;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		`

		return (
			<BouncyDiv onClick={this.props.onClick}>
						
				<img src={require("../lib/images/more.png")} className="more-img"/>

				<style>
					{`
						.more-img {
							width: 30px;
							height: auto;
						}
					`}
				</style>

			</BouncyDiv>
		)
	}
}

export default MoreIcon