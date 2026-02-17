const Header = (props) =>{
  console.log(props.course)
  return (
    <div>
      <h1>!Hello!, this is the coruse {props.course.name}</h1>
    </div>
  )
}
const Part = (props) =>{
  console.log(props.p)
  return (
    <div>
      <p>{props.p.name} - {props.p.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <h3>Content:</h3>
      <Part p = {props.course.parts[0]}/>
      <Part p = {props.course.parts[1]}/>
      <Part p = {props.course.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  const sum = props.course.parts.reduce((
    accumulator, currentValue) => accumulator + currentValue.exercises, 0);
  return (
    <div>
      <h3>Total number of exercises - {sum}</h3>
    </div>
  )
}

const App = () => {
  //variables
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamental of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    //components
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App 


