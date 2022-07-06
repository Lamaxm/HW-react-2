import React, { useEffect , useState} from "react";
import {Button} from 'react-bootstrap';


function About() {

  const [seconds, setSeconds] = useState(5);
const [isActive, setIsActive] = useState(false);

function toggle() {
  setIsActive(!isActive);
}

function reset() {
  setSeconds(0);
  setIsActive(false);
}
useEffect(() => {
  let interval = null;
  if (isActive) {
    interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
      if(seconds == 0){
        window.location.replace('/Cards');
      }
    }, 1000);
  } 
  return () => clearInterval(interval);
}, [isActive, seconds]);



  return (
    <div>
        <h1>About</h1>
        <div className="time">
        you will go after {seconds} s
      </div>
      <div className="row">
        <h6>If you want go to card page enter the button</h6>
        <Button variant="primary" className={`${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Cancel' : 'Start'}
        </Button>
      </div>
    </div>
  );
}

export default About;