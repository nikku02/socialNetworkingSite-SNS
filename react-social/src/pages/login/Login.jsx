import "./login.css"
import {useContext, useRef} from "react"
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core"

function Login() {

    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleClick = (e)=>{
        e.preventDefault()
        loginCall({email: email.current.value, password: password.current.value},dispatch)
    }

    console.log(user)

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
                            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                            <input placeholder="Password" type="password" required ref={password} minLength="6" className="loginInput" />
                            <button className="loginButton" type="submit" disabled={isFetching} >{ isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">{ isFetching ? <CircularProgress color="white" size="20px" /> : "Create Account"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
