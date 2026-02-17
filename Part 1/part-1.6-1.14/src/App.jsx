import { useState } from "react"

const Title = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <p>{anecdote}</p>
    </div>
  )
}

const Votes = ({ votes }) => {
  return (
    <div>
      <p>Has {votes} votes</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const MajorVoted = ({ anecdote, vote }) => {
  if(vote === 0) {
    return (
        <div>
        <p>There are no anecdote with votes to show </p>
        </div>
    )
  }
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {vote} votes</p>
    </div>
  )
}



const App = () => {
  const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.']

  const [selected, setSelected] = useState(0) 
 
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const handleNextClick = () => {
    const random = Math.floor(Math.random() * (anecdotes.length));
    console.log(anecdotes[random], random)
    setSelected(random)
  }

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const winner = votes.reduce((acomulator, currentVotes, index) => {
    if(currentVotes > acomulator.votes){
      return{
        text : anecdotes[index],
        votes : currentVotes
      }
    }
    return acomulator
  }, { text : anecdotes[0], votes : votes[0] })

  return (
    <div>
      <Title title = {'Anecdote of the day'}/>
      <Anecdote anecdote = {anecdotes[selected]} />
      <Votes votes = {votes[selected]}/>
      <Button handleClick = {handleVoteClick} text = {'vote'}/>
      <Button handleClick = {handleNextClick} text = {'next anectode'}/>
      <Title title = {'Anecdote with most votes'}/>
      <MajorVoted anecdote = {winner.text} vote = {winner.votes}/>
    </div>
  )
}

export default App