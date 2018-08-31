import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class FAQs extends Component {

	render() {

		const Question = (children) => <h3 className="faqs-question">{children}</h3>

		return (
			<div className="faqs">
				<h3 className="faqs-question">Do I need to be a computer science major to participate?</h3>
				NO! We believe we can maximize creativity and cool solutions by comprising of a diverse mix of perspectives, experiences, and backgrounds. We're united by a mutual interest in learning about tech solutions. If you've never programmed before, we recommend you take CS50 this fall to get your feet wet with some coding. 
				<br/><br/>
				<h3 className="faqs-question">What is the time commitment?</h3>
				You get as much as you put into this club, and we think you'll get the most out of the club with a 5-10 hours / week commitment. At minimum, you should expect to spend 3 hours / week.

				<style>
					{`
						.faqs {
							background: linear-gradient(to bottom, ${colors.primary}, ${colors.primaryDark});
							font-family: ${fonts.primary};
							color: ${colors.white};
							font-weight: 400;
							font-size: 18px;
							display: flex;
							flex-direction: column;
							justify-content: flex-start;
							align-items: flex-start;
							padding: 40px;
						}
						.faqs-question {
							font-family: ${fonts.primary};
							color: ${colors.white};
							font-weight: 500;
							font-size: 24px;
						}
					`}
				</style>
			</div>
		)
	}
}

export default FAQs