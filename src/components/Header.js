import './Header.css'
import logo from '../assets/engi.svg';
import heart from '../assets/page-1.svg';

const Header = ({ headerProps }) => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={headerProps.logo} alt="" />
      </div>
      <div className="title">
        <div>
          <h2>{headerProps.faculty}</h2>
          <h3>{headerProps.branch}</h3>
        </div>
        <p>{headerProps.university}</p>
      </div>
      <div className="heart">
        <img src={heart} alt="" />
      </div>
    </div>
  )
}

export default Header
