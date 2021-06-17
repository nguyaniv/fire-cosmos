import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/FirebaseContext';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../cmps/Logo'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [notification, setNotification] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        } try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            setNotification('User creacted successfuly')
            history.push("/store")
        } catch {
            setError('Failed to create an account')
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
                        <input type="password" placeholder="password confirmed" required ref={passwordConfirmRef} />
                    </div>
                    <button disabled={loading}>Submit</button>
                    <div className="redirect">Aleady a member ? <Link to="/login">Login</Link></div>
                </form>
            </div>
        </div>
    )
}
