import React, { Fragment } from "react";


const FeedWriteContainer = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Fragment>
      <div style={{marginTop: 20, minHeight: 50, backgroundColor:'#F2F2F2', borderRadius: 10, padding: 10, fontSize: 14}}>
        이 곳은 추출된 키워드 또는 문자열이 출력됩니다.
      </div>
      <div style={{marginTop: 20, minHeight: 300, backgroundColor:'#F2F2F2', borderRadius: 10, padding: 10, fontSize: 14}}>
        이 곳은 피드를 작성하는 영역입니다.
      </div>
      <div style={{display:'flex', gap: 10}}>
        <div onClick={() => setOpen(true)} style={{marginTop: 20, backgroundColor:'#F2F2F2', borderRadius: 10, padding: 10, fontSize: 14, width:'100%'}}>
          AI 피드 추천
        </div>
        <div style={{marginTop: 20, backgroundColor:'#F2F2F2', borderRadius: 10, padding: 10, fontSize: 14, width:'100%'}}>
          인스타그램 업로드
        </div>
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