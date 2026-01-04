import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle password visibility
  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      setSuccess(
        `Login successful! Welcome ${
          result.user.displayName || result.user.email
        }`
      );
      toast.success(`Welcome ${result.user.displayName || result.user.email}`);
      navigate(location.state?.from || "/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const password = e.target.password.value;
    const emailInput = e.target.email.value.trim();

    // Optional: simple password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const result = await logInUser(emailInput, password);
      setSuccess("Login successful!");
      toast.success("Login successfully completed");
      navigate(location.state?.from || "/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail("demo@user.com");
    document.querySelector('input[name="password"]').value = "1234aA";
  };

  return (
    <div className="animate__animated animate__bounceIn card bg-base-100 m-auto mt-16 mb-16 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="off"
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

            <div className="mt-2">
              <Link to="/forget-password" state={{ email }}>
                Forgot password?
              </Link>
            </div>

            <button className="btn mt-4 w-full" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>

            <div className="text-center font-semibold text-md mt-2">
              <p>or</p>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn w-full mt-2"
              disabled={loading}
            >
              {/* You can add Google icon here */}
              Sign in with Google
            </button>
          </fieldset>

          {success && <p className="text-green-600 mt-2">{success}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <p className="mt-4">
          New to our website?
          <Link className="text-green-600 font-semibold ml-1" to="/register">
            Register
          </Link>
        </p>

        <div>
          <button
            type="button"
            onClick={handleDemoLogin}
            className="btn btn-outline w-full mt-2"
          >
            Demo User Login (Auto-fill)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
