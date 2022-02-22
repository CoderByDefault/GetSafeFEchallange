import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <div>
      <form onSubmit={() => props.cb('age', age)}>
        <label>Age: </label>
        <input
        required
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
        <br />
        <button type="submit">Next</button>
        </form>
      </div>
    </>
  )
}

export default AgeStep
