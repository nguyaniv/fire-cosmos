import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/FirebaseContext';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../cmps/Logo'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [notification, setNotification] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setNotification('connected')
            history.push("/store")
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }


    return (
        <div className="sign-up container">
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Logo />
                    </div>
                    <div className="text-inputs">
                        {error && <h3>{error}</h3>}
                        <input type="email" placeholder="enter your email" required ref={emailRef} />
                        <input type="password" placeholder="password" required ref={passwordRef} />
                    </div>
                    <button disabled={loading}>Submit</button>

                    <div className="redirect">not a member yet ? <Link to="/signup"> Sign up</Link></div>
                </form>

            </div>
        </div>
    )
}
