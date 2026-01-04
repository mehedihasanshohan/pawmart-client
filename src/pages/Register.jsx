import { useContext, useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'
import { updateProfile } from 'firebase/auth'

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Toggle password visibility
  const handleTogglePasswordShow = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const result = await signInWithGoogle()
      const userName = result?.user?.displayName || result?.user?.email
      setSuccess(`Login successful! Welcome ${userName}`)
      toast.success(`Welcome ${userName}`)
      navigate('/') // navigate after login
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Email/Password Registration
  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Password validation
    if (password.length < 6) return setError('Password must be at least 6 characters long.')
    if (!/[A-Z]/.test(password)) return setError('Password must contain at least one uppercase letter.')
    if (!/[a-z]/.test(password)) return setError('Password must contain at least one lowercase letter.')
    if (!/\d/.test(password)) return setError('Password must contain at least one number.')

    try {
      const result = await createUser(email, password);
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL
      });

      setSuccess('Registration successful!')
      toast.success(`Welcome ${result.user.displayName}`)
      form.reset();

      // setLoading(false)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card bg-base-100 m-auto mt-8 mb-16 w-full max-w-sm shadow-xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-4">Register now!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label>Name</label>
            <input type="text" name="name" className="input" placeholder="Your Name" required />
            <label>Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Your Photo URL" required />
            <label>Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={handleTogglePasswordShow}
                aria-label="Toggle Password Visibility"
                className="btn btn-xs top-2 right-6 absolute"
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </button>
            </div>

            <button className="btn btn-info mt-4 w-full" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>

            <div className="text-center font-semibold text-md mt-2"><p>or</p></div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-accent w-full mt-2"
              disabled={loading}
            >
              Sign in with Google
            </button>
          </fieldset>
        </form>

        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="mt-4 text-center">
          Already have an account?
          <Link className="text-green-600 font-semibold ml-1" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
