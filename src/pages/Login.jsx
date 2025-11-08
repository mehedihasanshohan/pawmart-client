// import { GoogleAuthProvider} from 'firebase/auth';
import {  use, useState } from 'react'
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router';
// import auth from '../../firebase/firebase.config';
// import google from '/google.png'
// import { AuthContext } from '../../context/AuthContext.';
import { toast } from 'react-toastify';

const Login = () => {
  // const {logInUser, signInWithGoogle} = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // const googleprovider = new GoogleAuthProvider()

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //    .then(result => {
  //       setSuccess(`Login successful! Welcome ${result.user.displayName || result.user.email}`);
  //       navigate(location.state || '/');
  //    })
  //    .catch(error => {
  //       setError(error.message)
  //    })
  // }

  // const handleLogin = e => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);

  //   setError("");
  //   setSuccess("");

  //   if (password.length < 6) {
  //     setError("Password must be at least 6 characters long.");
  //     return;
  //   }
  //   if (!/[A-Z]/.test(password)) {
  //     setError("Password must contain at least one uppercase letter.");
  //     return;
  //   }
  //   if (!/[a-z]/.test(password)) {
  //     setError("Password must contain at least one lowercase letter.");
  //     return;
  //   }

    // signInWithEmailAndPassword(auth, email, password)
  //   logInUser(email, password)
  //     .then(result => {
  //       console.log(result.user);
  //       setSuccess('login successfully')
  //       navigate(location.state || '/')
  //       toast.success('log in successfully completed')
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       setError(error.message)
  //     })
  // }

  // const handleTogglePasswordShow = e => {
  //   e.preventDefault();
  //   setShowPassword(!showPassword);
  // }



  return (
    <div className="animate__animated animate__bounceIn card bg-base-100 m-auto mt-16 mb-16 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <form>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name='email'
            autoComplete='off'
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Password</label>

          <div className='relative'>
            <input type={showPassword ? 'text': 'password'}
               name='password' autoComplete='off'
               className="input" placeholder="Password" />
            <button
               type='button'
              //  onClick={handleTogglePasswordShow}
               className='btn btn-xs top-2 right-6 absolute'>
                {/* { showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>} */}
               </button>
          </div>

          <div>
            <Link
                to='/forget-password'
                state={{ email: email }}
            >
             Forgot password?
            </Link>
          </div>
          <button className="btn btn-info mt-4">Login</button>
          <div className='text-center font-semibold text-md'><p>or</p></div>
          <button type='button'
          // onClick={handleGoogleSignIn}
          className="btn btn-accent">
            {/* <img src={google} className='h-4 w-4' alt="" /> Google */}
          </button>
        </fieldset>
        {
          success && (
          <p className='text-green-600'>{success}</p>
        )}
        {
          error && <p className='text-red-500'>{error}</p>
        }
        </form>
        <p>New to our website?<Link className='text-green-600 font-semibold ml-1' to='/register'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login