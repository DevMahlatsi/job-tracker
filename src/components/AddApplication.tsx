export default function AddApplication(){
  const forForm = [
        {key: "company", label: "Company", type: "text"},
        {key: "role", label: "Role", type: "text"},
        {key: "status", label: "Status", type: "radio"},
        {key: "date", label: "Date", type: "calendar"},
        {key: "notes", label: "Notes", type: "text"},
        
        
      ] as const;
  return(
    <>
      <form>
        {forForm.map(item => (
          <div key={item.key}>
            <label htmlFor={item.key}>{item.label}</label>
            {if (1 === 1) {
              
            }}
            <input type={item.type} name={item.key} id={item.key} />
          </div>
        ))}
        
      </form>
    </>
  )
}