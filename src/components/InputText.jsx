import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 20px 10px;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.focus ? "#565656" : "#CCCCCC"};
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
  color: ${props => props.focus ? "#565656" : "#CCCCCC"};
  font-size: 16px;
  font-weight: 600;
`

const FocusLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${props =>
    props.focus 
      ? "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)" 
      : "#EEEEEE"
  };
`

const InputText = ({ 
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
      <InputWrapper focus={focus}>
        <InputLabel focus={focus}>{label}</InputLabel>
        <Input
          name={name} 
          value={value} 
          type={type}
          onChange={onChange} 
          placeholder={placeholder}
          focus={focus} 
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </InputWrapper>
      <FocusLine focus={focus} />
    </div>
  )
}

export default InputText