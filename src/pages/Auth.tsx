import { useState, type ChangeEvent } from "react"
import { FaEyeSlash, } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { supabase } from "../supabase-client";
export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const handleShowPassword = () => setShowPassword(!showPassword);

  

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>, p0: boolean) => {
    e.preventDefault();
    if(p0){
      
      const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: username,
          }
        }
    });
     if (error){
          console.log("Error signing up", error.message);
        }
    }
    else{
      //it's just another day and we are just signing in.
    }
  }
  const handleAuthMethod = (e: React.MouseEvent<HTMLFormElement>) => setIsRegistering(!isRegistering)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value);};
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) =>{setUsername(e.target.value);}
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const tempEmail = e.target.value;

    if(tempEmail )
    setEmail(tempEmail);}

  return(
    <div>
      <div>
        <h1>
          Job Tracker
        </h1>
        <p>Keep all the jobs that you have applied for in one place.</p>
      </div>
    <div className="realreal">
      {isRegistering ?(
        <div>
          <h2>
            You are here, welcome.
          </h2>
          <p>
            Enter your details to create an account.
          </p>
          <form className="sign-in-form" onSubmit={(event) => handleSubmit(event, true)}>
            <div className="testtest">
              <label>Name</label>
              <input onChange={handleUsernameChange} value={username} type="text" name="userName" id="userName" />
            </div>


            <div className="testtest">
              <label>Email address</label>
              
              <input type="email" name="userEmail" id="userEmail" value={email} onChange={(event) => handleEmailChange(event)} />
            </div>

            <div className="testtest">
              <label>Password</label>
              <div>
                <input onChange={handlePasswordChange} value={password} type={showPassword ? "password": "text"} name="userPassword" id="userPassword" />
                <button className="eye" onClick={handleShowPassword}>
                  {showPassword? 
                  (<FaEyeSlash  />) : (<IoEyeSharp className="eye"/>)}
                </button>
                
              </div>
              

            </div>

            <div>
              <button className="submitButton" type="submit">
                Register
              </button>
            </div>
            <p>I have an account. <a onClick={handleAuthMethod}>Sign in</a></p>
          </form>
        </div>
      ):(
        <div>
          <div>
            <h2>Welcome back</h2>
            <p>Sign in to your account</p>
          </div>
          <form className="sign-in-form" onSubmit={(event) => handleSubmit(event, true)}>

            
            <div className="testtest">
              <label>Email address</label>
              <input value={email} type="email" name="userEmail" id="userEmail" />
            </div>

            <div className="testtest">
              <label>Password</label>
              <div>
                <input onClick={handlePasswordChange} value={password} type={showPassword ? "password": "text"}  name="userPassword" id="userPassword" />
              {/* <FaEyeSlash /> */}
              {showPassword? (<FaEyeSlash onClick={handleShowPassword} className="faEyeSlah"/>) : (<IoEyeSharp className="ioeyesharp"/>)}
              </div>
              
            </div>

            <div>
              <button className="submitButton" type="submit">

                Sign in
              </button>
              <p>Don't have an account? <a onClick={handleAuthMethod}>Register</a></p>
            </div>

            {/* <p>I have an account</p> */}
          </form>
        </div>
      )}
      </div>
      


    </div>
  )
};
