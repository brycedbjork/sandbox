import React, {Component} from "react"
import Page from "./Page"
import Logo from "./Logo"
import Subtitle from "./Subtitle"
import {fonts, colors} from "../lib/styles"

class Home extends Component {

	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<Logo>sandbox</Logo>
					<Subtitle>accelerating student-created, technical products at Yale</Subtitle>
				</div>

				<div className="welcome-message">
					<Subtitle>Hey there!</Subtitle>
					<br/>
					We’re team Sandbox, a new club at Yale that ideates and implements student-created, 
					student-run, technical solutions to real-world problems. By the end of the Spring 
					2019 semester, we aim to have Sandbox built and launched five beta-stage web or 
					native applications, each addressing a well-defined issue. 
					<br/><br/>
					Our club consists of two stages–one per semester. In the first (Fall 2018), we'll 
					have weekly workshops about how to envision, build, and pitch a product, as well as 
					speakers and pitch-offs. In the second (Spring 2019), the club will evolve into a 
					directed reading Yale College course. Our club will split into teams, each of which 
					will build a product using agile workflow and the high-velocity development frameworks 
					explored in the first semester: designing with Sketch, building out the front-end in 
					React, the backend in Firebase, and collaborating with team members using Git. Defined 
					by a curriculum the founders piloted last year, this for-credit independent study allows 
					Sandbox members to incorporate their projects into their university studies–allowing 
					our products to be more than just side-projects.  
					<br/><br/>
					Our website is more than just a landing page for the Sandbox team–it’s a living project 
					of the entire club, constantly growing as members learn more web-dev tricks, hack 
					together new components and push them to the page. Our website is like a home field: 
					it’s where we work together to practice, hone our coding skills, and show what we can do. 
					So welcome to the team, and take a look around! 

				</div>

				<div className="application" onClick={() => {
					window.open("https://docs.google.com/forms/d/e/1FAIpQLSfVrMRGVdClNqbr5Wz-zCvTMeUY8DbWwcUX1W_6lQ4uFK3zgg/viewform?usp=sf_link")
				}}>
					<Subtitle>Apply here to the Sandbox!</Subtitle>
					Applications are due by September 5th. We're excited to meet you!
				</div>

				<div className="faqs">
					<Subtitle>What does it mean to be a member of the club?</Subtitle>
					<br/>
					This year, we're consisting of five teams, each driven by a leader with a vision. Our club consists of two stages–one per semester. In the first (Fall 2018), we'll have weekly meetings with speakers, pitch-offs, and workshops about how to envision, develop, and pitch your product. In the second (Spring 2019), the club will evolve into a directed reading course (which means you get credit to build your product!), where teams will build and launch a product by the end of the semester. 
					<br/><br/>
					<Subtitle>What is a directed reading?</Subtitle>
					A directed reading is a Yale College course option defined by the University as follows: 
					"Some students find that they have specific (often interdisciplinary) interests that can’t be satisfied by Yale College courses, and that there would be a significant benefit from regular professorial guidance as they explore these interests. In certain cases, it may be appropriate to seek out a Directed Reading course to complement their more formal courses. (Some students try to do these with a few other students, to make the experience more interactive.)"
					<br/><br/>
					<Subtitle>How are teams organized?</Subtitle>
					Teams will be formed by you in the middle of the first semester. Team captains will also be elected at this time. 
					<br/><br/>
					<Subtitle>Do I need to be a computer science major to participate?</Subtitle>
					NO! We believe we can maximize creativity and cool solutions by comprising of a diverse mix of perspectives, experiences, and backgrounds. We're united by a mutual interest in learning about tech solutions. If you've never programmed before, we recommend you take CS50 this fall to get your feet wet with some coding. 
					<br/><br/>
					<Subtitle>What is the time commitment?</Subtitle>
					Fall 2018: 1.5 hour weekly meeting, optional hack night/team events (+1.5 hr) 
					Spring 2018: Commit to enrolling in directed reading course for College credit (min 5hr/week) 

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
						.header {
							padding: 40px;
						}
						.faqs {
							margin: 40px;
							padding: 20px;
							border-radius: 10px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							background-color: rgba(255, 255, 255, 0.05);
							border: 2px solid transparent;
							line-height: 24px;
							font-size: 18px;
							color: ${colors.white};
							font-family: ${fonts.primary};
						}
						.welcome-message {
							margin: 40px;
							padding: 20px;
							border-radius: 10px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							background-color: rgba(255, 255, 255, 0.05);
							border: 2px solid transparent;
							line-height: 24px;
							font-size: 18px;
							color: ${colors.white};
							font-family: ${fonts.primary};
						}
						.welcome-message:hover {
							
						}
						.application {
							margin: 40px;
							padding: 20px;
							border-radius: 10px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							background-color: rgba(255, 255, 255, 0.15);
							border: 2px solid transparent;
							line-height: 24px;
							font-size: 18px;
							color: ${colors.white};
							font-family: ${fonts.primary};
						}
						.application:hover {
							box-shadow: rgba(63, 63, 63, 0.08) 0 6px 14px 0;
							background-color: rgba(255, 255, 255, 0.2);
							transform: scale(1.02);
							cursor: default;
						}
						.wrapper {
							width: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: flex-start;
							min-height: 100%;
							background: linear-gradient(to top left, #155299, #1362BE);
						}
						.bottom-message {
							position: absolute;
							bottom: 10px;
							width: 100%;
							text-align: center;
							color: rgba(255, 255, 255, 0.5);
							font-size: 16px;
							font-weight: 400;
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