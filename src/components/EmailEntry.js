import React, {Component} from "react"
import {fonts, colors} from "../lib/styles"

class EmailEntry extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			success: false,
			failure: false,
			email: "",
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit() {

		if (this.state.email.length == 0 || this.state.email.indexOf("@") < 0) {
			this.setState({
				loading: false,
				invalid: true,
			})

			setTimeout(() => {
				this.setState({
					loading: false,
					success: false,
					failure: false,
					invalid: false,
				})
			}, 2000)

			return
		}

		this.setState({loading: true})

		// push email to mailchimp

		// on success...
		const onSuccess = () => {
			this.setState({
				loading: false,
				success: true,
				failure: false,
			})

			setTimeout(() => {
				this.setState({
					loading: false,
					success: false,
					failure: false,
					email: "",
				})
			}, 2000)
		}
		

		// on error...
		const onError = () => {
			this.setState({
				loading: false,
				success: false,
				failure: true,
			})

			setTimeout(() => {
				this.setState({
					loading: false,
					success: false,
					failure: false,
					email: "",
				})
			}, 2000)
		}

		// for testing purposes
		onSuccess()

	}

	render() {

		const disabled = this.state.loading || this.state.email.length == 0

		return (
			<div className="email-entry-wrapper">

				<input
					className="email-entry-input"
					type="text"
					value={this.state.email}
					placeholder="Your email"
					onChange={e => {
						this.setState({email: e.target.value})
					}}/>

				<div className={disabled ? "email-entry-button disabled" : "email-entry-button"} onClick={this.handleSubmit}>
					{this.state.loading && "loading..."}
					{this.state.success && "You're all set!"}
					{this.state.failure && "Ugh! Something went wrong"}
					{this.state.invalid && "Invalid email"}
					{!(this.state.success || this.state.loading || this.state.failure || this.state.invalid) && 
						"Subscribe"}
				</div>


				<style>
					{`
						.email-entry-wrapper {
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							justify-content: flex-start;
							align-items: center;
							margin-top: 10px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
						}
						.email-entry-input {
							min-width: 220px;
							border: none;
							outline: none;
							padding-top: 10px;
							padding-bottom: 10px;
							padding-right: 10px;
							padding-left: 15px;
							font-size: 20px;
							font-family: ${fonts.primary};
							font-weight: 500;
							border-top-left-radius: 5px;
							border-bottom-left-radius: 5px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							z-index: 1;
						}
						::placeholder {
							font-weight: 500;
							color: rgba(0,0,0,0.5)
						}
						.email-entry-input:hover, .email-entry-input:focus {
							box-shadow: rgba(63, 63, 63, 0.2) 0 6px 14px 0;
							transform: scale(1.03);
							border-top-right-radius: 5px;
							border-bottom-right-radius: 5px;
						}
						.email-entry-button {
							background-color: ${colors.primaryButton};
							font-size: 20px;
							font-family: ${fonts.primary};
							box-shadow: rgba(63, 63, 63, 0.2) 0 6px 14px 0;
							font-weight: 500;
							padding-top: 10px;
							padding-bottom: 10px;
							padding-right: 20px;
							padding-left: 20px;
							transition: all 150ms cubic-bezier(0.21, 0.94, 0.64, 0.99);
							color: ${colors.white};
							border-top-right-radius: 5px;
							border-bottom-right-radius: 5px;
							z-index: 2;
						}
						.email-entry-button:hover {
							transform: scale(1.03);
							cursor: default;
							background-color: ${colors.primaryButtonHover};
							border-top-left-radius: 5px;
							border-bottom-left-radius: 5px;
						}
						.disabled {
							background-color: ${colors.primaryButtonDisabled}
						}
					`}
				</style>
			</div>
		)
	}
}

export default EmailEntry