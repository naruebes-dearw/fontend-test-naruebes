import './Container.css'
import Header from './Header';
import Content from './Content';

const Container = ({ props }) => {
  const headerProps = {
    logo: props.logo,
    branch: props.name,
    faculty: props.faculty.name,
    university: props.faculty.university.name
  }

  const contentProps = {
    roundSeats: props.roundSeats,
    scoreType: props.score ? props.score.scoreType : "Null",
    maxScore: props.score ? props.score.max : "Null",
    minScore: props.score ? props.score.min : "Null",
    avgScore: props.score ? props.score.avg : "Null",
  }

  return (
    <div className='container'>
      <Header headerProps={headerProps} />
      <Content contentProps={contentProps} />
    </div>
  )
}

export default Container
