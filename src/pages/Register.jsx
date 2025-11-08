import {  useState } from 'react'
// import auth from '../../firebase/firebase.config';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';
// import google from '/google.png'
import { toast } from 'react-toastify';

const Register = () => {
  // const {createUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const googleProvider = new GoogleAuthProvider();

  // const handleGoogleSignIn = () => {
  //    signInWithGoogle()
  //     .then(result => {
  //        setSuccess(`Login successful! Welcome ${result.user.displayName || result.user.email}`);
  //        toast.success('sign in successfully completed')
  //        navigate('/');
  //     })
  //     .catch(error => {
  //        setError(error.message)
  //     })
  //  }

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const photoUrl = e.target.photo.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   // console.log(name, photoUrl, email, password);

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

  //   createUser(email, password)
  //    .then(result => {
  //    console.log(result.user);





  const handleTogglePasswordShow = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (

    <div className="animate__animated animate__wobble card bg-base-100 m-auto mt-8 mb-16 w-full max-w-sm shrink-0 shadow-xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <form>
          <fieldset className="fieldset">
          <label className='name'>Name</label>
          <input type="text" name='name' autoComplete='off'
              className="input" placeholder="Your Name" required/>
          <label className='photo'>Photo URL</label>
          <input type="text" name='photo' autoComplete='off'
              className="input" placeholder="Your Photo URL" required/>
          <label className="label">Email</label>
          <input type="email" name='email' autoComplete='off'
              className="input" placeholder="Email" required/>
          <label className="label">Password</label>

          <div className='relative'>
            <input type={showPassword ? 'text ': 'password'}
               name='password' autoComplete='off'
               className="input" placeholder="Password" required/>
            <button
              //  onClick={handleTogglePasswordShow}
               className='btn btn-xs top-2 right-6 absolute'>
                { showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
               </button>
          </div>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-info mt-4">Register</button>
          <div className='text-center font-semibold text-md'><p>or</p></div>
          <button type='button'
          //  onClick={handleGoogleSignIn}
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
        <p>Already have an account?<Link className='text-green-600 font-semibold ml-1' to='/login'>Login</Link> </p>
      </div>
    </div>
  )
}

export default Register