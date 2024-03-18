import React from 'react'
import "./news.css"

function news() {
  return (
    <div id="news">
      <div className='container'>
        <div id='board' className='row'>
          <Bulletin/>
          <Schedule/>
        </div>
      </div>
    </div>
  )
}

function Bulletin(){
  function Bulltin_item(props){
    return (
    <div className='bulletin-item shadow'>
      <div className='title'>{props.title}</div>
      <div className='content'>{props.content}</div>
    </div>
    )
  }
  return(
    <div id='bulletin' className='col-lg-8 col-md-12'>
      <div id="news_title" className='margin-bottom10'>最新公告</div>
      <Bulltin_item title="創思研習營綜合問答公告，以及競賽規則、簡章更新" content="（2023-05-23）因應創思研習營回饋，競賽規則、簡章有更新，敬請隊伍確認！"/>
      <Bulltin_item title="第一階段資料繳交注意事項" content="（2023-05-03）製作報告書格式、繳交方式與雲端硬碟權限說明"/>
      <Bulltin_item title="仿生盃競賽報名成功隊伍一覽表" content="（2023-05-03）敬請隊伍確認名單與隊伍編號！"/>
      <Bulltin_item title="重要！競賽報名與創思研習營報名名單！" content="（2023-04-12）敬請隊伍多加利用表單確認報名狀況，有疑義請盡速來電！"/>
      <Bulltin_item title="重要！競賽報名與創思研習營報名名單！" content="（2023-04-12）敬請隊伍多加利用表單確認報名狀況，有疑義請盡速來電！"/>
      <Bulltin_item title="重要！競賽報名與創思研習營報名名單！" content="（2023-04-12）敬請隊伍多加利用表單確認報名狀況，有疑義請盡速來電！"/>
      <Bulltin_item title="重要！競賽報名與創思研習營報名名單！" content="（2023-04-12）敬請隊伍多加利用表單確認報名狀況，有疑義請盡速來電！"/>
      <Bulltin_item title="重要！競賽報名與創思研習營報名名單！" content="（2023-04-12）敬請隊伍多加利用表單確認報名狀況，有疑義請盡速來電！"/>
      <Bulltin_item title="重要！競賽報名與創思研習營報名名單！" content="（2023-04-12）敬請隊伍多加利用表單確認報名狀況，有疑義請盡速來電！"/>
    </div>
  );
}

function Schedule(){
  function Schedule_item(props){
    return (
    <div className='schedule-item'>
      <div className='title'>{props.title}</div>
      <div className='content'>{props.content}</div>
    </div>
    )
  }
  return(
    <div id='important-schedule' className='col-lg col-md-12 shadow'>
      <div id="schedule_title" className='margin-bottom10'>重要時程</div>
      <Schedule_item title="─ 競賽報名 ─"
      content="112年03月06日(一) 至 04月25日(二)"/>
      <Schedule_item title="─ 競賽報名 ─"
      content="112年03月06日(一) 至 04月25日(二)"/>
      <Schedule_item title="─ 競賽報名 ─"
      content="112年03月06日(一) 至 04月25日(二)"/>
      <Schedule_item title="─ 競賽報名 ─"
      content="112年03月06日(一) 至 04月25日(二)"/>
      <Schedule_item title="─ 競賽報名 ─"
      content="112年03月06日(一) 至 04月25日(二)"/>
      <Schedule_item title="─ 競賽報名 ─"
      content="112年03月06日(一) 至 04月25日(二)"/>
    </div>
  )
}

export default news