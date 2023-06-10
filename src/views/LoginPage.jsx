import React, { Component } from 'react'

export default class LoginPage extends Component {
    state = {
        loggedInUser: null,
        isLogin: true
    }

    handleSignUp = () => {
        this.setState({ isLogin: false })
    }
    handleLogin = () => {
        this.setState({ isLogin: true })
    }

    render() {
        const { isLogin, loggedInUser } = this.state
        return (
            <section
                className={`contact-edit-container login-container ${
                    !isLogin ? 'signup' : ''
                }`}
            >
                <form className="login-form">
                    <h1>{isLogin ? 'Login' : 'Sign up'} to MisterBitcoin!</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="Your username here..."
                    ></input>
                    <input
                        type="text"
                        name="password"
                        placeholder="Your password here..."
                    ></input>
                    {!isLogin && (
                        <input
                            type="text"
                            name="password"
                            placeholder="Repeat password..."
                        ></input>
                    )}
                    <button type="submit">Submit</button>
                    <p>
                        {isLogin
                            ? 'Dont have a user yet? '
                            : 'Already have a user? '}
                        {isLogin && (
                            <span
                                className="signup-link"
                                onClick={this.handleSignUp}
                            >
                                sign up now!
                            </span>
                        )}
                        {!isLogin && (
                            <span
                                className="signup-link"
                                onClick={this.handleLogin}
                            >
                                login now!
                            </span>
                        )}
                    </p>
                </form>
                {!isLogin && (
                    <div className="password-info-container">
                        <p>
                            <span>Password must contain</span>
                            <span>1. 8-16 characters </span>
                            <span>2. At least one capital letter</span>
                            <span>3. One sign letter (!,@,#,$,% etc...)</span>
                        </p>
                    </div>
                )}
            </section>
        )
    }
}
