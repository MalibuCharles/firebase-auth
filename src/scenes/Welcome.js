import { useNavigate } from "react-router-dom"
import {getAuth, signOut} from 'firebase/auth'

export default function Welcome({user}) {
    console.log(user) // email, display name, photoURL

const auth = getAuth
    const navigate=useNavigate()

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
        localStorage.clear()
        navigate('/login')
    })
        .catch(err => {
            console.error(err)
        })
    }
    return (
    <>
    <h1>Welcome</h1>
    <h2>{user.displayName || user.email}</h2>
    {user.photoURL && <img src={user.photoURL} alt="Profile picture of logged in user" />}
    <button onClick={handleLogout}>Logout</button>
    </>
    )
}