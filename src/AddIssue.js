import { Form , Row , Col ,Button } from "react-bootstrap"
import { useState } from "react"
import {v4 as uuid} from 'uuid'

const defaultIssue = {
    title: '',
    subTitle:'',
    assignedTo:'',
    startDate:'',
    endDate:'',
    priority:'low',
    status:'new',
    completedPercentage: 90,
}

const AddIssue= ({addIssue}) => {
    const [issue, setIssue] = useState(defaultIssue)

    const [errors, setErrors] = useState({

        title: '',
        subTitle:'',
        assignedTo:'',
        startDate:'',
        endDate:'',
        
     })
    const handleChange = (evt) => {
        setIssue({
            ...issue,
            [evt.target.name]: evt.target.value
        })
        setErrors({
            ...errors,
            [evt.target.name]: '',
        })
    }

    const handleSubmit = (evt) => {
       evt.preventDefault()
       const { title, subTitle, assignedTo, startDate, endDate } = issue
       //checking error
       if(title === '') {
           setErrors((prevErrors) => ({
               ...prevErrors,
               title:'Title is required'
           }))
       }

       if(subTitle === '') {
         setErrors((prevErrors) =>({
             ...prevErrors,
             subTitle:'subTitle is Required' 
         }))
       }


       if(assignedTo === '') {
        setErrors((prevErrors) =>({
            ...prevErrors,
            assignedTo:'Assigned To is Required' 
        }))
    }

        if(startDate === '') {
            setErrors((prevErrors) =>({
                ...prevErrors,
                startDate:'Start Date is Required' 
            }))
        }    

            if(endDate === '') {
                setErrors((prevErrors) =>({
                    ...prevErrors,
                    endDate:'End Date is Required' 
                }))    
      }
       //return true if every element is true, otherwise false
    
const isValid = Object.values(issue).every(elm => elm)
if(isValid) {
    //Form Submission
    addIssue({
        id: uuid(),
        ...issue
    })
    //reset the form 
    setIssue(defaultIssue) 

}
    }

 
    const { title, subTitle , assignedTo ,startDate ,endDate ,priority , status , completedPercentage } = issue
    const {
        title:errorTitle,
        subTitle:errorSubTitle ,
        assignedTo:errorAssignedTo ,
        startDate:errorStartDate,
        endDate:errorEndDate,
        
        } = errors

    return (
        <>
        <h1 className='mt-4 mb-4'>Add Issue</h1>
        <Form onSubmit={handleSubmit}>
           <Form.Group as={Row} className='mb-3'>
              <Col sm={3}>
              <Form.Label html-for='Title' column>Title</Form.Label>
              </Col>
              <Col sm={9}>
            <Form.Control 
            type='text' 
            name='title'
             id='Title' 
             onChange={handleChange} 
             value={title}
             placeholder='Enter your task Name'
             isInvalid={errorTitle}
             />
             <Form.Control.Feedback type='invalid' className='d-block'>
               {errorTitle}
              </Form.Control.Feedback>

          </Col>
          
         </Form.Group>

         <Form.Group as={Row} className='mb-3'>
               <Col sm={3}>
               <Form.Label htmlFor='subTitle' column>Sub Title</Form.Label>
               </Col>
               <Col sm={9}>
                   <Form.Control 
                   as='textarea'
                   name='subTitle'
                    id='subTitle' 
                    onChange={handleChange} 
                    value={subTitle}
                    placeholder='Enter your task Details'
                    isInvalid={errorSubTitle}
                    />
                   <Form.Control.Feedback type='invalid' className='d-block'>
               {errorSubTitle}
              </Form.Control.Feedback>

                </Col>
               
         </Form.Group>
         <Form.Group as={Row} className='mb-3'>
               <Col sm={3}>
               <Form.Label htmlFor='assignedTo' column>Assigned To</Form.Label>
               </Col>
               <Col sm={9}>
                   <Form.Control 
                   type='text'
                   name='assignedTo'
                    id='assignedTo' 
                    onChange={handleChange} 
                    value={assignedTo}
                    placeholder='Job whom you want to Assign'
                    isInvalid={errorSubTitle}
                />
               <Form.Control.Feedback type='invalid' className='d-block'>
                   {errorAssignedTo}
                </Form.Control.Feedback>

                </Col>
               
         </Form.Group>

         <Form.Group as={Row} className='mb-3'>
             <Col sm={3}>
             <Form.Label htmlFor='startDate' column>Start Date</Form.Label>
             </Col>
             <Col sm={3}>
              
             <Form.Control
                type='date'
                onChange={handleChange}
                name='startDate'
                value={startDate}
                placeholder='Enter start date'
                isInvalid={errorStartDate}

            />
             <Form.Control.Feedback type='invalid' className='d-block'>
                   {errorStartDate}
            </Form.Control.Feedback> 

             </Col>
              
              <Col sm={6}>
            <Row>
               <Col sm={3}>
               <Form.Label htmlFor='endDate' column>End Date</Form.Label>
               </Col>

               <Col sm={9}>
              
              <Form.Control
                 type='date'
                 onChange={handleChange}
                 name='endDate'
                 value={endDate}
                 placeholder='Enter end date'
                 isInvalid={errorEndDate}
 
              />
              <Form.Control.Feedback type='invalid' className='d-block'>
                    {errorEndDate}
             </Form.Control.Feedback> 
 
              </Col>
            </Row>
         </Col>
      </Form.Group>

      <Form.Group className="mb-3">
      <Row>
        <Col sm={3}>
           <Form.Label htmlFor='priority' column>
            Priority{' '}
           </Form.Label>
        </Col> 
        
        <Col xs='auto'>
        <Form.Check
          type="radio"
          onChange={handleChange}
          name="priority"
          value="high"
          label="High"
          checked={priority === "high"}
         
        />
        </Col>

        <Col xs='auto'>
        <Form.Check
          type="radio"
          onChange={handleChange}
          name="priority"
          value="medium"
          label="Medium"
          checked={priority === "medium"}
        />
        </Col>
        <Col xs='auto'>
        <Form.Check
          type="radio"
          onChange={handleChange}
          name="priority"
          value="low"
          label="Low"
          checked={priority === "low"}
        />
        </Col>

      </Row>
 </Form.Group>

 <Form.Group className='mb-3'>
          <Row>
            <Col xs={3}>
              <Form.Label htmlFor='status' column>
                Status{' '}
              </Form.Label>
            </Col>

            <Col xs='auto'>
              <Form.Check
                type='radio'
                onChange={handleChange}
                name='status'
                label='New'
                value='new'
                checked={status === 'new'}
              />
            </Col>
            <Col xs='auto'>
              <Form.Check
                type='radio'
                onChange={handleChange}
                name='status'
                label='In Progress'
                value='inProgress'
                checked={status === 'inProgress'}
              />
            </Col>
            <Col xs='auto'>
              <Form.Check
                type='radio'
                onChange={handleChange}
                name='status'
                label='Completed'
                value='completed'
                checked={status === 'completed'}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col xs={3}>
              <Form.Label htmlFor='completedPercentage' column>
                Completed In percentage{' '}
              </Form.Label>
            </Col>
            <Col xs={4}>
              <Form.Range
                value={completedPercentage}
                name='completedPercentage'
                onChange={handleChange}
              />
            </Col>
            <Col xs={1}>{completedPercentage}</Col>
          </Row>
        </Form.Group>

          <Button variant='primary' size='md' type='submit'>
             Submit Issue
         </Button>
     </Form>
        
    </>
  )
}

export default AddIssue