import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { DropdownItem, InputGroup, Placeholder } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { Form,FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { createPortal } from 'react-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

/*
GPA Conversions
Weighted GPA Scale:
Widget Dropdown for weighted/unweighted. Unweighted max will be 4 and 100 so no values above those
can be entered. Weighted max will be 5 and 110, so no values above those can be entered.
*NOTE* we will have validation on widgets to make sure only valid values can be entered. Only positive
floats can be entered
Widget Dropdown menu for user to select gpa scale (4,100)
Widget to enter Users GPA
Widget dropdown for the scale they want to convert to
Widget button to calculate the new gpa
Widget text field for the result


Ratio:

users gpa/total gpa (4.0 for example) 3.9/4 = x/100 
*/

const findGPA = (userGPA, totalGPA, conversion) => {
  var conversionGPA = (userGPA/totalGPA) * conversion;
  console.log(conversionGPA);
  return conversionGPA; //save this to text component
}
function handleClick(gpa) {
  console.log(gpa);
  
}
const userGpaScale = (gpa) => {
  console.log(gpa);
  return gpa;
}
/* to validate user gpa we need the scale it's on first. so take scale (4,5,100,110) and then
the users gpa. make sure the gpa is less than or equal to what the scale is

*/
function validateUserGpa(userGpa,scale) {
  if(userGpa < 0 || userGpa > scale)
  {
    console.log("error");
  }
    
}

function App() {
  const [userGpa, setUserGpa] = useState();
  const [show, setShow] = useState(false);
  const [userScale, setUserScale] = useState();
  const [convertScale, setConvertScale] = useState();
  const { width, height } = useWindowSize()
  return (

    <div className="App">
      <style>
        {'body { background-color: grey; }'}
      </style>
      <h1 style={
        {
          color: 'lightblue',
          flex: 'center'
        }
      }
      >
        GPA Converter
      </h1>
    
      <Form.Select aria-label="GPA Scale" size='sm' id='gpaScale' style={
        {
          margin: 10,
          flex: 'center'
        }
      }>
        <option value='gpa scale'>Select GPA Scale...</option>
        <option id='4pt' value="4" onClick={() => setUserScale(4)}>4 pt</option>
        <option id='100pt' value="100" onClick={() => setUserScale(100)} >100 pt</option>
      </Form.Select>

      <Form.Select aria-label="Conversion" size='sm' id='conversion' style={
        {
          margin: 10,
          flex: 'center'
        }
      }>
        <option value='convert'>Select Conversion Scale</option>
        <option id='4pt' value="4" onClick={() => setConvertScale(4)}>4 pt</option>
        <option id='100pt' value="100" onClick={() => setConvertScale(100)} >100 pt</option>
      </Form.Select>

        <input
            placeholder='Enter GPA...'
            type='float'
            pattern='numeric'
            min={0}
            value={userGpa}
            onChange={e => setUserGpa(e.target.value)}
            required
            style={{
              margin: 10
            }}
          />
      <Row>
        <Col md={15} className="mb-2">
          <Button onClick={() => setShow(true)} className="mb-2">
            Convert GPA
          </Button>
          <Toast show={show} onClose={() => setShow(false) }>
            <Toast.Header>
            <Confetti
                width={width}
                height={height}
              />
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Conversion to {convertScale} point scale</strong>
              <small>These values are approximate, not a perfect conversion</small>
            </Toast.Header>
            <Toast.Body>
              {findGPA(userGpa,userScale,convertScale)}</Toast.Body>
          </Toast>
        </Col>
      </Row>
      
        

        
    </div>
  );
}

export default App
