import React, { Fragment } from "react";
import InputTextArea from "./InputTextArea";
import styled from 'styled-components'
import KeywordBox from "./KeywordBox";
import { postOCR, postGPT } from "../services/ai";
import S3 from 'react-aws-s3';
import { UploadContext } from "../providers/Upload";
import { tempConfig } from "../services";
import { CircularProgress } from "@material-ui/core";

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
  const { selectedFiles } = React.useContext(UploadContext)
  const [open, setOpen] = React.useState(false)

  const [state, setState] = React.useState({
    loadOCR : false,
    loadGPT : false,
  })

  const [data, setData] = React.useState({
    keywords: [],
    feed : "",
  })

  const uploadImgTemp = async file => {
    const ReactS3Client = new S3(tempConfig)
    const resS3 = await ReactS3Client.uploadFile(file, `${Date.now()}`)
    const resOCR = await postOCR(resS3.location)
    if(resOCR && resOCR.status === 201){
      setData({
        ...data,
        keywords : resOCR.data
      })
    }
  }

  const generateGPT = async() => {
    setState({
      ...state,
      loadGPT : true
    })
    const id = window.localStorage.getItem("auth_id");
    const pw = window.localStorage.getItem("auth_pw");
    const res = await postGPT(data.keywords, id, pw);
    if(res.status === 201){
      setData({
        ...data, 
        feed: res.data
      })
    }
    setState({
      ...state,
      loadGPT : false
    })
  }

  React.useEffect(() => {
    (async () => {
      setState({
        ...state,
        loadOCR : true
      })
      if(selectedFiles.length > 0){
        for(const file of selectedFiles){
          await uploadImgTemp(file)
        }
      }
      setState({
        ...state,
        loadOCR : false
      })
    })()
    
  }, [selectedFiles])

  const handleData = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const handleKeyword = (event, idx) => {
    const copy = data.keywords
    copy[idx] = event.target.value
    setData({
      ...data,
      keywords : copy
    })
  }

  const addKeyword = () => {
    setData({
      ...data,
      keywords : [
        ...data.keywords,
        "키워드"
      ]
    })
  }

  const deleteKeyword = (idx) => {
    setData({
      ...data,
      keywords : [
        ...data.keywords.slice(0, idx),
        ...data.keywords.slice(idx + 1),
      ]
    })
  }

  return (
    <Fragment>
      <KeywordBox 
        keywords={data.keywords} 
        isLoading={state.loadOCR}
        handleKeyword={handleKeyword}
        addKeyword={addKeyword} 
        deleteKeyword={deleteKeyword}
      />
      <FeedWrapper>
        <InputTextArea name="feed" onChange={handleData} value={data.feed} />
        {data.feed.length === 0 &&
          <GenerateButton onClick={generateGPT}>
            {state.loadGPT ? 
              <CircularProgress style={{color: "#FFF"}} />
            :
              "AI 피드 생성하기"
            }
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