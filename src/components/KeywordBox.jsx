import React from 'react'
import styled from 'styled-components'

const Input = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  color: #565656;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #FFF;
  padding: 20px;
  border-radius: 0px 0px 5px 5px;
  gap: 15px;
`

const FocusLine = styled.div`
  padding: 1px;
  width: 100%;
  border-radius: 5px;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
`

const Title = styled.p`
  margin: 0px;
  font-weight: 700;
  color: #FFFFFF;
  font-size: 16px;
  margin: 10px 20px;
`

const KeywordBox = ({ 
  keywords = [],
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <FocusLine>
        <Title>추출된 키워드</Title>
        <InputWrapper>
          {keywords.map((item, idx) => {
            return (
              <div key={idx}>
                <Input>{item}</Input>
              </div>
            )
          })}
        </InputWrapper>
      </FocusLine>
    </div>
  )
}

export default KeywordBox