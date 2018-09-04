import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class TopBar extends Component {

	render() {
		return (
			<div className={`header`}>
						
				<img src={require("../lib/images/logo.png")} className="logo"/>
	
				<div className='buttonContainer'>
					<img src={require("../lib/images/medium-logo.png")} className="link" onClick={() => window.open("https://medium.com/yale-sandbox")}/>
					<img src={require("../lib/images/github-logo-blue.png")} className="link" onClick={() => window.open("https://github.com/sandbox-co")}/>
				</div>

				<style>
					{`
						.logo {
							height: 40px;
							margin-left: 10px;
							width: auto;
						}
						.link {
							height: 30px;
							cursor: pointer;
							margin-left: 20px;
							width: auto;
						}
						.buttonContainer {
							align-self: flex-end;
							display: flex;
							margin-right: 35px;
							flex-direction: row;
							padding-bottom: 5px;
						}
						.header {
							height: 40px;
							padding: 10px;
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							position: fixed;
							top: 0;
							z-index: 1;
							box-shadow: rgba(63, 63, 63, 0.08) 0 6px 14px 0;
							left: 0;
							background-color: ${colors.white};
						}
					`}
				</style>

			</div>
		)
	}
}

export default TopBar