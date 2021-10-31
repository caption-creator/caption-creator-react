import { CircularProgress } from '@material-ui/core'
import React, { Fragment } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  color: #565656;
  border: none;
  min-width: 50px;
  &:focus {
    outline: none;
  }
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
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`

const Caption = styled.p`
  font-size: 12px;
  color: #999999;
  margin: 0px;
`

const AddButton = styled.i`
  color: #FFFFFF;
  cursor: pointer;
`

const DeleteButton = styled.i`
  color: #565656;
  cursor: pointer;
  font-size: 14px;
  height: 14px;
`

const KeywordWrapper = styled.div`
  display: flex;
  border: 1px solid #CCC;
  border-radius: 20px;
  padding: 5px 15px;
  align-items: center;
`

const KeywordBox = ({ 
  keywords = [],
  addKeyword,
  deleteKeyword,
  handleKeyword,
  isLoading,
}) => {

  return (
    <div style={{ marginBottom: 20 }}>
      <FocusLine>
        <TitleWrapper>
          <Title>추출된 키워드</Title>
          <AddButton 
            className="fi fi-rr-add" 
            onClick={addKeyword}
          />
        </TitleWrapper>
        <InputWrapper>
        {isLoading ?
          <CircularProgress style={{width: 24, height: 24}} />
        :
          <Fragment>
            {keywords.map((item, idx) => {
              return (
                <KeywordWrapper key={idx}>
                  <Input value={item} onChange={e => handleKeyword(e, idx)} />
                  <DeleteButton className="fi fi-rr-cross-small" onClick={() => deleteKeyword(idx)} />
                </KeywordWrapper>
              )
            })}
            {keywords.length === 0 &&
              <Caption>검색된 키워드가 없습니다.</Caption>
            }
          </Fragment>
        }
        </InputWrapper>
      </FocusLine>
    </div>
  )
}

export default KeywordBox