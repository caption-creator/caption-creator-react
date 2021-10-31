import React from 'react'
import styled from 'styled-components'

const Input = styled.textarea`
  padding: 20px 10px;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: #565656;
  &:focus {
    outline: none;
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items :center;
  width: 100%;
`

const InputLabel = styled.p`
  margin: 0px;
  min-width: 100px;
  color: #565656;
  font-size: 16px;
  font-weight: 600;
`

const FocusLine = styled.div`
  padding: 1px;
  width: 100%;
  border-radius: 5px;
  background: ${props =>
    props.focus 
      ? "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)" 
      : "#EEEEEE"
  };
`

const InputTextArea = ({ 
  value, 
  onChange, 
  name, 
  label,
  type,
  placeholder 
}) => {
  const [focus, setFocus] = React.useState(false)

  return (
    <div style={{ marginBottom: 20 }}>
      <FocusLine focus={focus}>
        <InputWrapper focus={focus}>
          <Input
            name={name} 
            value={value} 
            type={type}
            onChange={onChange} 
            placeholder={placeholder}
            focus={focus}
            rows={15}
            multiline
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </InputWrapper>
      </FocusLine>
    </div>
  )
}

export default InputTextArea