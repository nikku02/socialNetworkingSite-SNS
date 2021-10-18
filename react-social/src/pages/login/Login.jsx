import "./login.css"

function Login() {

    const handleClick = ()=>{
        
    }

    return (
        <div>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Lamasocial</h3>
                        <span className="loginDesc">Connect with friends and world around you with Lamasocial.</span>
                    </div>
                    <div className="loginRight" onSubmit={handleClick}>
                        <form className="loginBox">
                            <input placeholder="Email" type="email" className="loginInput" />
                            <input placeholder="Password" type="password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
