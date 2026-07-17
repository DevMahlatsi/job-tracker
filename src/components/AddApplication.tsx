import { useState } from "react";

export default function AddApplication(){
  interface appDetailsType {
    company: string;
    role: string;
    status: "Applied" | "Interview" | "Offer" | "Rejected" | "Ghosted";
    date: Date;
    note: string;
  }
        
  const [appDetails, setAppDetails] = useState<appDetailsType | null>(null);      

     
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
}

  return(
    <>
      <form className="applicationForm" onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="formDiv">
            <label className="formLabel">Company</label>
            <input className="inputBox" type="text" name="company" id="company" />
          </div>
          <div className="formDiv">
            <label className="formLabel">Role</label>
            <input className="inputBox" type="text" name="role" id="role" />
          </div>
          <div className="formDiv">
            <label className="formLabel">Status</label>
            <input className="inputBox" type="text" name="status" id="status" />
          </div>
          <div className="formDiv">
            <label className="formLabel">Date</label>
            <input className="inputBox" type="date" name="date" id="date" />
          </div>
          <div className="formDiv">
            <label className="formLabel">Notes</label>
            <input className="inputBox" type="text" name="notes" id="notess" />
          </div>
        </div>
        
        <div>
          <button type="submit">
            Add Application
          </button>
        </div>
          
      </form>
    </>
  )
}