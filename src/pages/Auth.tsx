import { useState } from "react"

export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
//   if (isRegistering) 
//   return(

//     <>



//     </>
//   )
//   else
  

//   return(
// <>
// </>
    

    

//   )
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
        </div>
      ):(
        <div>
          <div>
            <h2>Welcome back</h2>
            <p>Sign in to your account</p>
          </div>
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <div className="testtest">
              <label>Email address</label>
              <input type="email" name="userEmail" id="userPassword" />
            </div>
            <div className="testtest">
              <label>Password</label>
              <input type="password" name="userPassword" id="userPassword" />
            </div>

            <div>
              <button type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      )}
      </div>
      


    </div>
  )
};
