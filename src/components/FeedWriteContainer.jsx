import React, { Fragment } from "react";
import InputTextArea from "./InputTextArea";
import styled from 'styled-components'
import KeywordBox from "./KeywordBox";

const FeedWrapper = styled.div`
  position: relative;
`

const UploadButton = styled.button`
  border: none;
  background: ${props => props.disabled ? "#CCCCCC" : "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"};
  font-size: 20px;
  font-weight: 900;
  color: #FFFFFF;
  padding: 8px 30px;
  border-radius: 20px;
  cursor: pointer;
  display: block;
  width: calc(100% - 60px); 
`


const OpenAIButton = styled(UploadButton)`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const GenerateButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  font-size: 20px;
  font-weight: 900;
  color: #FFFFFF;
  padding: 8px 30px;
  border-radius: 20px;
  cursor: pointer;
`

const FeedWriteContainer = () => {
  const [open, setOpen] = React.useState(false)

  const [data, setData] = React.useState({
    keywords: [],
    feed : "",
  })

  const handleData = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  return (
    <Fragment>
      <KeywordBox keywords={["맛집", "맛집스타그램", "GPT3"]} />
      <FeedWrapper>
        <InputTextArea name="feed" onChange={handleData} />
        {data.feed.length === 0 &&
          <GenerateButton>
            AI 피드 생성하기
          </GenerateButton>
        }
      </FeedWrapper>
      <div style={{display:'flex', gap: 10}}>
        <OpenAIButton onClick={() => setOpen(true)}>
          AI 피드 생성하기
        </OpenAIButton>
        <UploadButton disabled={data.feed.length === 0 ? true : false} onClick={() => setOpen(true)}>
          피드 업로드
        </UploadButton>
      </div>
      <div onClick={() => setOpen(false)} style={{display: open ? 'block' : 'none', position: 'absolute', top: 40, left: 40, width:'calc(100% - 80px)', height: 'calc(100% - 80px)', backgroundColor: 'rgba(255, 255, 255, 0.92)', border: '1px solid #CCC'}}>
        <div style={{padding: 20}}>
          이 곳은 AI 피드 자동 추천 영역입니다.
        </div>
      </div>
    </Fragment>
  )
}

export default FeedWriteContainer;