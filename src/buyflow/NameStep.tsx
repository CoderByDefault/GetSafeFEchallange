import React, { useState } from "react";


interface NameStepProps {
    cb: (field: string, value: string) => void
  }

const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={() => props.cb("name", name)}>
        <label>Full Name: </label>
        <input type="text" onChange={handleChange} required value={name}></input>
        <br />
        <button type="submit">Next</button>
        </form>
        
      </div>
      
    </>
  );
};

export default NameStep;