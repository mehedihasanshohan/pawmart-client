import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle(GoogleAuthProvider)
      .then(result => {
        toast.success(`Welcome ${result.user.displayName || result.user.email}`);
        navigate('/');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess("");

    if (password.length < 6) return setError("Password must be at least 6 characters long.");
    if (!/[A-Z]/.test(password)) return setError("Password must contain at least one uppercase letter.");
    if (!/[a-z]/.test(password)) return setError("Password must contain at least one lowercase letter.");

    createUser(email, password)
      .then(result => {
        console.log(result);
      })

      
      .catch(error => toast.error(error.message));
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

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
                onClick={handleTogglePasswordShow}
                className="btn btn-xs top-2 right-6 absolute"
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </button>
            </div>
            <button className="btn btn-info mt-4 w-full">Register</button>
            <div className="text-center font-semibold text-md mt-2"><p>or</p></div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-accent w-full"
            >
              Sign in with Google
            </button>
          </fieldset>
        </form>

        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="mt-4 text-center">
          Already have an account?
          <Link className="text-green-600 font-semibold ml-1" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
