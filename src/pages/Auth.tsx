import { useState } from "react"
import { FaEyeSlash, } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>, p0: boolean) => {
    e.preventDefault();
    if(p0){
      // we are creating an account for them
    }
    else{
      //it's just another day and we are just signing in.
    }
  }
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
          <h3>
            You are here, welcome.
          </h3>
          <p>
            Enter your details to create an account.
          </p>
          <form className="sign-in-form" onSubmit={(event) => handleSubmit(event, true)}>
            <div className="testtest">
              <label>Name</label>
              <input type="text" name="userName" id="userName" />
            </div>


            <div className="testtest">
              <label>Email address</label>
              <input type="email" name="userEmail" id="userEmail" />
            </div>

            <div className="testtest">
              <label>Password</label>
              <div>
                <input type={showPassword ? "password": "text"} name="userPassword" id="userPassword" />
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
            {/* <p>I have an account. <a onClick={handleAuthMethod}>Sign in</a></p> */}
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
              <input type="email" name="userEmail" id="userEmail" />
            </div>

            <div className="testtest">
              <label>Password</label>
              <div>
                <input type={showPassword ? "password": "text"}  name="userPassword" id="userPassword" />
              {/* <FaEyeSlash /> */}
              {showPassword? (<FaEyeSlash onClick={handleShowPassword} className="faEyeSlah"/>) : (<IoEyeSharp className="ioeyesharp"/>)}
              </div>
              
            </div>

            <div>
              <button className="submitButton" type="submit">

                Sign in
              </button>
            </div>

            {/* <p>I have an account</p> */}
          </form>
        </div>
      )}
      </div>
      


    </div>
  )
};
