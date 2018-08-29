import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

export default () => {
	return (
		<div className={`separator`}>
			<style>
				{`
					.separator {
						width: 100%;
						height: 1px;
						background-color: rgba(0, 0, 0, 0.1);
						margin-top: 10px;
						margin-bottom: 10px;
					}
				`}
			</style>

		</div>
	)
}