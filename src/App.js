import { Container,Row,Col, } from 'react-bootstrap'
import { useState } from 'react'

import Navigation from './Navigation'
import AddIssue  from './AddIssue'
import IssueBar from './IssueBar'
import Issues  from './Issues'
import './Style.css'


const App = () => {
  const [issues, setIssues] = useState([{
    id:"c3be9446-96e7-4717-a522-877d9055aa1b",
    title: 'sample Title',
    subTitle:'Task details',
    assignedTo:'Minhaz',
    startDate:'',
    endDate:'',
    priority:'low',
    status:'new',
    completedPercentage: 1,
  }])

  const [totalCount, setTotalCount] = useState(0)
  const [newCount, setNewCount] = useState(0)
  const [progressCount, setProgressCount] = useState(0)
  const [completedCount , setCompletedCount] = useState(0)

const addIssue = (issue) => {
setIssues([...issues, issue])

setTotalCount((prevCount) => prevCount + 1 )

if(issue.status === 'new') {
  setNewCount(prevCount => prevCount + 1)
}

if(issue.status === 'inProgress') {
  setProgressCount(prevCount => prevCount + 1)
}

if(issue.status === 'completed') {
  setCompletedCount(prevCount => prevCount + 1)
}


  }
  return (
     <Row>
        <Navigation />
        <Col sm={{span: 10, offset: 2}}>
       <Container>
           <AddIssue addIssue={addIssue}/>
           <IssueBar totalCount={totalCount} newCount={newCount} progressCount={progressCount} completedCount={completedCount}/>
           <Issues issues={issues} />
       </Container>
        
        </Col>

    </Row>
  );
}

export default App;
