import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class Home extends Component {

	render() {
		return (
			<div className="wrapper">
				<div className="page gradient">

					<div className="content">
							
						<div className="title">
							sandbox
						</div>
						<div className="subtitle">
							hack, launch, and scale
						</div>

					</div>

				</div>

				<div className="page">
							
					<div className="content">
							
						<div className="title primary">
							hack together web and mobile applications
						</div>
						<div className="subtitle primary">
							using high-velocity dev tools
						</div>

					</div>

				</div>

				<div className="page gradient">
							
					<div className="content">
							
						<div className="title">
							launch your application
						</div>
						<div className="subtitle">
							find and cultivate a user base
						</div>

					</div>

				</div>

				<div className="page">
							
					<div className="content">
							
						<div className="title primary">
							scale!
						</div>
						<div className="subtitle primary">
							web and mobile apps scale for free (pretty much)
						</div>

					</div>

				</div>

				<div className="footer">
					<div className="footer-links-left">
						{/*<a className="legal" href="/terms">Terms of Service</a>
							<a className="legal" href="/privacy">Privacy Policy</a>
						*/}
					</div>
					<div className="footer-links-right">
						<div className="made">made with &#9829; at Yale</div>
						<a className="support" href="mailto:bryce.bjork@yale.edu,lea.sparkman@yale.edu">get in touch</a>
					</div>
				</div>

				<style>
					{`
						.appstore {
							margin-top: 15px;
							width: 180px;
							height: auto;
						}
						.wrapper {
							height: 100%;
							width: 100%;
						}
						.gradient {
							background: linear-gradient(to top left, #155299, #1362BE);
						}
						.page {
							min-height: 100%;
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;
						}
						.header {
							height: 100px;
							width: 100%;
						}
						.content {
							padding: 40px;
						}
						.logo {
							width: 45px;
							height: auto;
							margin-bottom: 10px;
						}
						.title {
							font-family: ${fonts.primary};
							font-size: 30px;
							font-weight: 500;
							color: ${colors.white};
							margin-bottom: 10px;
						}
						.subtitle {
							font-family: ${fonts.primary};
							font-size: 24px;
							font-weight: 400;
							color: rgba(255, 255, 255, 0.9);
							margin-bottom: 10px;
						}
						.primary {
							color: #155299;
						}
						.preview-wrapper {
							width: 272px;
							height: 500px;
							position: relative;
							border-radius: 40px;
							overflow: visible;
							background-color: #FFFFFF;
						}
						.app-preview {
							width: 280px;
							height: auto;
						}
						.gif-preview {
							position: absolute;
							top: 14px;
							left: 12px;
							width: 250px;
							height: auto;
							border-radius: 30px;
						}
						.iphone-x-frame {
							position: absolute;
							top: 0px;
							left: 0px;
							width: 272px;
							height: auto;
						}
						.footer {
							width: 100%;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							background-color: #155299;
						}
						.footer-links-left {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-start;
							padding: 40px;
						}
						.footer-links-right {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: flex-end;
							padding: 40px;
						}
						.made {
							color: rgba(255, 255, 255, 0.6);
							font-family: ${fonts.primary};
							font-size: 18px;
							font-weight: 500;
						}
						.legal {
							color: rgba(255, 255, 255, 0.6);
							font-family: ${fonts.primary};
							font-size: 18px;
							font-weight: 500;
							margin-top: 10px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							text-decoration: none;
						}
						.legal:hover {
							transform: scale(1.03);
							color: rgba(255, 255, 255, 0.9);
						}
						.support {
							color: rgba(255, 255, 255, 0.7);
							font-family: ${fonts.primary};
							font-size: 18px;
							font-weight: 500;
							margin-top: 10px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							text-decoration: none;
						}
						.support:hover {
							transform: scale(1.03);
							color: rgba(255, 255, 255, 0.9);
						}
					`}
				</style>
			</div>
		)
	}
}

export default Home