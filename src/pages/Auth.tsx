import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { supabase } from "../supabase-client";

export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const toggleAuthMode = () => {
    setIsRegistering((prev) => !prev);
    setEmail("");
    setPassword("");
    setUsername("");
    setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      if (isRegistering) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: username,
            },
          },
        });
        if (error) setErrorMessage(error.message);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) setErrorMessage(error.message);
      }
    } catch (err: any) {
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Job Tracker</h1>
        <p>Keep all the jobs that you have applied for in one place.</p>
      </div>

      <div className="auth-card">
        <div className="auth-card-header">
          <h2>{isRegistering ? "Welcome aboard" : "Welcome back"}</h2>
          <p>
            {isRegistering
              ? "Enter your details below to create an account."
              : "Sign in to access your applications."}
          </p>
        </div>

        {errorMessage && <div className="auth-error">{errorMessage}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegistering && (
            <div className="form-group">
              <label htmlFor="userName">Name</label>
              <input
                id="userName"
                name="userName"
                type="text"
                placeholder="John Doe"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <div className="password-input-wrapper">
              <input
                id="userPassword"
                name="userPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={handleShowPassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </div>
          </div>

          <button className="submitButton" type="submit" disabled={loading}>
            {loading
              ? "Processing..."
              : isRegistering
              ? "Create Account"
              : "Sign In"}
          </button>
        </form>

        <div className="auth-toggle">
          {isRegistering ? (
            <p>
              Already have an account?{" "}
              <button type="button" className="link-button" onClick={toggleAuthMode}>
                Sign in
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button type="button" className="link-button" onClick={toggleAuthMode}>
                Register
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}