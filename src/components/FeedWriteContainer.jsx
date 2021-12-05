import React, { Fragment } from "react";
import InputTextArea from "./InputTextArea";
import styled from 'styled-components'
import KeywordBox from "./KeywordBox";
import { postOCR, postGPT } from "../services/ai";
import S3 from 'react-aws-s3';
import { UploadContext } from "../providers/Upload";
import { apiInstance, tempConfig } from "../services";
import { CircularProgress } from "@material-ui/core";
import Resizer from "react-image-file-resizer";

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
  border-radius: 10px;
  cursor: pointer;
  display: block;
  width: calc(100% - 0px); 
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

const FeedSelectContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`

const GenerateText = styled.p`
  margin: 0px;
  font-size: 14px;
  flex-grow: 1;
  font-weight: 600;
  color: #333;
`

const GenerateWrapper = styled.div`
  display: flex;
  border: 1px solid #EEEEEE;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  margin-bottom: 10px;
`

const SelectButton = styled.button`
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  color: #FFF;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`

const FeedWriteContainer = () => {
  const { selectedFiles } = React.useContext(UploadContext)
  const [open, setOpen] = React.useState(false)
  const [img, setImg] = React.useState(null)
  const [imgUrl, setImgUrl] = React.useState(null)
  const [generates, setGenerates] = React.useState([])

  const [state, setState] = React.useState({
    loadOCR : false,
    loadGPT : false,
  })

  const [data, setData] = React.useState({
    keywords: [],
    feed : "",
  })


  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file",
        800,
        800
      );
    });

  const uploadImgTemp = async file => {
    try{
      const resizedImg = await resizeFile(file)
      console.log(resizedImg)
      const ReactS3Client = new S3(tempConfig)
      const resS3 = await ReactS3Client.uploadFile(resizedImg, `${Date.now()}`)
      console.log(resS3)
      setImg(resizedImg)
      const resOCR = await postOCR(resS3.location)
      setImgUrl(resS3.location)
      if(resOCR && resOCR.status === 201){
        setData({
          ...data,
          keywords : resOCR.data
        })
      }
    }catch(e){
      console.log(e)
    }
  }


  const generateGPT = async() => {
    setState({
      ...state,
      loadGPT : true
    })
    const id = window.localStorage.getItem("auth_id");
    const pw = window.localStorage.getItem("auth_pw");
    const res = await postGPT(data.keywords, id, pw, 1);
    let g = []
    if(res.status === 201){
      g.push(res.data)
    }

    const res2 = await postGPT(data.keywords, id, pw, 2);
    if(res2.status === 201){
      g.push(res2.data)
    }
    setGenerates(g)
    setOpen(true)
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

  const setFeed = text => {
    setOpen(false)
    setData({
      ...data,
      feed : text
    })
  }

  const handleUpload = async() => {
    const id = window.localStorage.getItem("auth_id");
    const pw = window.localStorage.getItem("auth_pw");

    const res = await apiInstance.post("/feed", {
      id : id,
      pwd: pw,
      imageLink : imgUrl,
      caption: data.feed,
    })

    console.log(res)
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
        {data.feed.length === 0 && !open &&
          <GenerateButton onClick={generateGPT}>
            {state.loadGPT ? 
              <CircularProgress style={{color: "#FFF"}} />
            :
              "AI 피드 생성하기"
            }
          </GenerateButton>
        }
        {open &&
          <FeedSelectContainer>
            <div style={{padding: 10}}>
              {generates.map((item, idx) => {
                return (
                  <GenerateWrapper key={idx}>
                    <GenerateText>
                      {item}
                    </GenerateText>
                    <SelectButton onClick={() => setFeed(item)}>이 피드 선택</SelectButton>
                  </GenerateWrapper>
                )
              })}
            </div>
          </FeedSelectContainer>
          
        }
      </FeedWrapper>
      <div style={{display:'flex', gap: 10}}>
        <UploadButton disabled={data.feed.length === 0 ? true : false} onClick={handleUpload}>
          피드 업로드
        </UploadButton>
      </div>
    </Fragment>
  )
}

export default FeedWriteContainer;