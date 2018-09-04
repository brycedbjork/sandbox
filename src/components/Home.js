import React, {Component} from "react"
import Page from "./Page"
import TopBar from "./TopBar"
import MoreIcon from "./MoreIcon"
import Title from "./Title"
import Separator from "./Separator"
import Button from "./Button"
import FAQs from "./FAQs"
import Card from "./Card"
import Subtitle from "./Subtitle"
import {fonts, colors} from "../lib/styles"
import Glassy from "../lib/images/glassy.png"

class Home extends Component {

	render() {
		return (
			<div className="wrapper">
				<TopBar/>

				<Page id="welcome" background={Glassy} justifyContent="center" alignItems="center">
					<div className="centered-content">
						<h1 className="negative-title">
							incubating technical entrepreneurs<br/>
							and ventures at Yale
						</h1>
						<Button emoji="🤟" onClick={() => {
							window.open("https://docs.google.com/forms/d/e/1FAIpQLSfVrMRGVdClNqbr5Wz-zCvTMeUY8DbWwcUX1W_6lQ4uFK3zgg/viewform?usp=sf_link")
						}}>apply</Button>
					</div>
					<MoreIcon/>
				</Page>

				<Page id="we-are">
					<Title emoji="📖">we{"'"}re learning</Title>

					<div className="card-container">

						<Card
							image={require("../lib/images/slack-logo.png")}
							title="Slack"
							description="Team messaging that makes communication (and logging) a breeze"
							url="https://slack.com"/>

						<Card
							image={require("../lib/images/github-logo.png")}
							title="Github"
							description="Powerful version control and collaboration tool"
							url="https://github.com"/>

						<Card
							image={require("../lib/images/sketch-logo.png")}
							title="Sketch"
							description="Digital design toolkit perfect for mocking up interfaces, logos, graphics, user flows, and many more!"
							url="https://www.sketchapp.com"/>

						<Card
							image={require("../lib/images/react-logo.png")}
							title="React"
							description="Front-end framework for designing interactive web applications"
							url="https://reactjs.org/"/>

						<Card
							image={require("../lib/images/react-logo.png")}
							title="React Native"
							description="React but for native mobile applications. Javascript that compiles into Objective-C"
							url="https://facebook.github.io/react-native/"/>

						<Card
							image={require("../lib/images/redux-logo.png")}
							title="Redux"
							description="State management package for simple and complex applications"
							url="https://redux.js.org/"/>

						<Card
							image={require("../lib/images/firebase-logo.png")}
							title="Firebase"
							description="A complete back-end platform backed by Google Cloud and optimized for high-velocity development"
							url="https://firebase.google.com/"/>

						<Card
							image={require("../lib/images/stripe-logo.png")}
							title="Stripe"
							description="Payment processing in an easy-to-use SDK and API"
							url="https://stripe.com/"/>

						<Card
							image={require("../lib/images/sentry-logo.png")}
							title="Sentry"
							description="Error logging platform that monitors and reports application functionality"
							url="https://sentry.io/"/>

						<Card
							image={require("../lib/images/circleci-logo.png")}
							title="CircleCI"
							description="Continuous deployment and integration: automatically run tests and deploy your application after receiving a trigger (eg. merge onto the master branch)"
							url="https://sentry.io/"/>

					</div>

					<Separator/>

					<Title emoji="🛠">we{"'"}re building</Title>

					<div className="card-container">

						<Card
							image={require("../lib/images/sandbox-logo.png")}
							title="Sandbox"
							people={["@bryce", "@lea", "@alexi"]}
							description="Building sandbox within sandbox... Meta, right?"
							url="https://github.com/sandbox-co"/>

						<Card
							image={require("../lib/images/has-logo.png")}
							title="Hire a Student"
							people={["@bryce"]}
							description="Connecting students with community members for local task completion"
							url="https://hireastudent.org"/>

						<Card
							image={require("../lib/images/splash-logo.png")}
							title="Splash"
							people={["@bryce", "@lukas"]}
							description="Building blockchain financial services for emerging markets and privacy-centric consumers"
							url="https://splashwallet.io"/>

						<Card
							image={require("../lib/images/wecrawl-logo.png")}
							title="WeCrawl"
							people={["@bryce"]}
							description="Find, create, and share (bar)crawls through your city"
							url="https://wecrawl.co"/>

						<Card
							image={require("../lib/images/sesh-logo.png")}
							title="sesh"
							people={["@alexi"]}
							description="Create events, meet up with friends, and sesh"/>

						<Card
							title="NextStep"
							people={["@lea"]}
							description="Connecting students and experienced adults for mentorship and job shadowing"/>

						<Card
							title="Your big idea! 🚀"
							people={["@you"]}
							description="Learn these frameworks and work with sandbox to develop something awesome"/>

					</div>
				</Page>

				<FAQs/>

				<div className="footer">
					<Button emoji="✌️" onClick={() => {
						window.open("https://docs.google.com/forms/d/e/1FAIpQLSfVrMRGVdClNqbr5Wz-zCvTMeUY8DbWwcUX1W_6lQ4uFK3zgg/viewform?usp=sf_link")
					}}>apply</Button>
					<div className="made">made with 🏖 at Yale</div>
					{/*<div className="footer-links-left">
											<a className="legal" href="/terms">Terms of Service</a>
												<a className="legal" href="/privacy">Privacy Policy</a>
											
										</div> <div className="footer-links-right">
											</div>*/}
				</div>

				<style>
					{`
						.card-container {
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							justify-content: flex-start;
							align-items: flex-start;
							margin-left: 10px;
							margin-right: 10px;
							margin-bottom: 20px;
						}
						.negative-title {
							font-family: ${fonts.primary};
							text-align: center;
							color: ${colors.white};
							font-weight: 500;
							font-size: 36px;
						}
						.wrapper {
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: flex-start;
							min-height: 100%;
							overflow: auto;
						}
						.centered-content {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						}
						.footer {
							width: 100%;
							padding-bottom: 40px;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							height: 100px;
							align-items: center;
							background-color: ${colors.primaryDark};
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