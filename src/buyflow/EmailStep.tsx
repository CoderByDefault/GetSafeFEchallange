import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
      <form onSubmit={() => props.cb('email', email)}>
        <label>Email: </label>
        <input
        required
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
        <br />
        <button type="submit">Next</button>
        </form>
        
      </div>
    </>
  )
}

export default EmailStep
