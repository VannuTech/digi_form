import Form from 'react-bootstrap/Form';
import '../style.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import  {validate} from '../Validation';
import { createSession } from '../apis';

const AddCallSession = () => {

    const initialValues = { session_name : "",
    session_date : "",
    session_time : "",
    session_end_time : "",
    agent_name : "",
    state:"",
    village:"",
    crop:"",
    tags:""
    }

    const[formValues, setformValues] = useState(initialValues);
    const[formError, setformError] = useState("");

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setformValues({...formValues, [name] : value})
    }

const session_datesplit = formValues.session_date.split('-');

const year = parseInt(session_datesplit[0]);
const month = parseInt(session_datesplit[1]);
const day = parseInt(session_datesplit[2]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setformError(errors);
        if (
            errors.session_nameErr === "" &&
            errors.session_dateErr === "" &&
            errors.session_start_timeErr === "" &&
            errors.session_end_timeErr === "" &&
            errors.agent_nameErr === "" &&
            errors.stateErr === "" &&
            errors.villageErr === "" &&
            errors.cropErr === "" &&
            errors.tagsErr === ""
        ) {
          
           
            const data = {
              "id":"cs19045",   // id will be autogenerated in database on submitting the form.
              "name": formValues.session_name,
              "company_id": "c123",  //there is no field in form to submit company id. So I have put random id
              "session_date": formValues.session_date,
              "session_time": formValues.session_time,
              "day": day,
              "month":month,
              "year": year,
              "tags": formValues.tags,
              "agent_name": formValues.agent_name,
              "village": formValues.village,
              "state": formValues.state,
              "crop": formValues.crop,
              "session_end_time": formValues.session_end_time,                            
             }
            const response = await createSession(data);
            alert(JSON.stringify(response.data.message));
        } else {            
            alert("Please fill correct details.");
        }
    };
    
  //   const states = [
  //     { value: 'Haryana', label: 'Haryana' },
  //     { value: 'Chattisgarh', label: 'Chattisgarh' },
  //     { value: 'Uttarakhand', label: 'Uttarakhand' }
  // ];

  const states = ['Haryana', 'Chattisgarh', 'Uttarakhand', "Punjab", "UP"];
  const agentNames = ['Vinod', 'Kiran', 'Rameshwar'];


  return (
    <Form style={{margin : "40px"}}>
        <h4 className="mb-3 d-block">Add Call Session</h4>
        <text className="mb-3 d-block" >Note: All fields should be entered without comma.</text>

      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Session Name </Form.Label>
        <Form.Control type="text" placeholder="Enter your session name" name="session_name" value={formValues.session_name} onChange={handleChange} />
        {formError && formError.session_nameErr && <p style={{color : "red"}}>Please fill session name!</p>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Session Date</Form.Label>
        <Form.Control type="date"name="session_date"value={formValues.session_date} onChange={handleChange} />
        {formError && formError.session_dateErr && <p style={{color : "red"}}>Please fill session date!</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Session Start Time</Form.Label>
        <Form.Control type = "time" name="session_time" value={formValues.session_time} onChange={handleChange} />    
        {formError && formError.session_start_timeErr && <p style={{color : "red"}}>Please select session start time!</p>}    
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Session End Time</Form.Label>
        <Form.Control type = "time" name="session_end_time" value={formValues.session_end_time} onChange={handleChange} />  
        {formError && formError.session_end_timeErr && <p style={{color : "red"}}>Please fill session end time!</p>}      
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Agent Name</Form.Label>
        <Form.Select aria-label="Default select example" name="agent_name" value={formValues.agent_name} onChange={handleChange}>        
          {agentNames.map(agent => (
                        <option key={agent} value={agent}>{agent}</option>
                    ))}
         </Form.Select>
         {formError && formError.agent_nameErr && <p style={{color : "red"}}>Please select agent name!</p>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">State</Form.Label>
        <Form.Select aria-label="Default select example" name="state" value={formValues.state} onChange={handleChange}>
         {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
    </Form.Select>
    {formError && formError.stateErr && <p style={{color : "red"}}>Please select state name!</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Village Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Village name" name="village" value={formValues.village} onChange={handleChange}/>
        {formError && formError.villageErr && <p style={{color : "red"}}>Please fill village name!</p>}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className="red-asterisk">Crop Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Crop name" name="crop" value={formValues.crop} onChange={handleChange} />
        {formError && formError.cropErr && <p style={{color : "red"}}>Please fill crop name!</p>}
      </Form.Group>
      <Row className="mb-3">
        <Col xs={10}>
          <Form.Group controlId="formGroupTags">
            <Form.Label className="red-asterisk">Tags</Form.Label>
            <Form.Control type="text" placeholder="Enter Tag" name="tags" value={formValues.tags} onChange={handleChange}/>
            {formError && formError.tagsErr && <p style={{color : "red"}}>Please fill tag!</p>}
          </Form.Group>
        </Col>
        <Col xs={2} className="d-flex align-items-end">
          <Button variant="warning" className="w-180">+Tag</Button>
        </Col>
      </Row>
        
<Row className="mb-3">
      <Col xs={12} className="d-flex justify-content-end">
        <Button variant="light" className="mr-1">Cancel</Button>
        <Button variant="warning" onClick={handleSubmit}>+Add Session</Button>
      </Col>
    </Row>  
    </Form>
  );
}

export default AddCallSession;
