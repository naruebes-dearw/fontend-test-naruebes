import './Content.css'
import operators from '../assets/operators.svg'
import start from '../assets/star.svg'

const Content = ({ contentProps }) => {
  return (
    <div className='content'>
      <div className="content1">
        <p>รอบที่เปิด</p>
        <div className="round-num">
          <div className="bg-green">
            <p>1</p>
          </div>
          <div className="bg-green">
            <p>2</p>
          </div>
          <div className="bg-grey">
            <p>3</p>
          </div>
          <div className="bg-green">
            <p>4</p>
          </div>
          <div className="bg-grey">
            <p>5</p>
          </div>
        </div>
      </div>
      <div className="content2">
        <p>รอบที่ 4 : {contentProps.scoreType}</p>
        <div className="fix-score">
          <p>แก้ไขคะแนน</p>
          <div className="operators">
            <img src={operators} alt="" />
          </div>
        </div>
      </div>
      <div className="content3">
        <div className="star">
          <img src={start} alt="" />
        </div>
        <div className="score">
          <p>คะแนนของคุณคือ</p>
          <p>23,453</p>
        </div>
      </div>
      <div className="content4">
        <div className="all-score">
          <p>{contentProps.minScore === 'Null' ? 'Null' : Math.round(contentProps.minScore)}</p>
          <p>คะแนนต่ำสุด 60</p>
        </div>
        <div className="vertical-line"></div>
        <div className="all-score">
          <p>{contentProps.avgScore === 'Null' ? 'Null' : Math.round(contentProps.avgScore)}</p>
          <p>คะแนนเฉลี่ย 60</p>
        </div>
        <div className="vertical-line"></div>
        <div className="all-score">
          <p>{contentProps.maxScore === 'Null' ? 'Null' : Math.round(contentProps.maxScore)}</p>
          <p>คะแนนสูงสุด 60</p>
        </div>
      </div>
    </div>
  )
}

export default Content
