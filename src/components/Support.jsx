import React from "react";
import './Support.css'
import communicateImg from '../Assets/commmmm.jpg'

const Support = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9f59873-7bfc-46cc-ba78-27cd96c6dfa5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='container'  id='support'>
      <h2 className="text-center" style={{fontFamily:'Times New Roman, Times, serif',fontWeight:'bold', marginBottom:'50px'}}>Contact Us</h2>
      <div className='row'>
        <div className='col-md-6 text-center' >
         <img src={communicateImg} alt="..." class="img-fluid" className="support-img" style={{borderRadius:'50%',background:'linear-gradient(rgba(19, 0, 19, 0.7), rgba(7, 0, 0, 0.7))'}}/>
        </div>
        <div className='col-md-6'>
          <div className='right-div' style={{fontFamily:'Times New Roman, Times, serif'}}>
            <form onSubmit={onSubmit}>
              <p className='y-name'>Your name</p>
              <input className='name-txt' type='text' placeholder='Enter your name'/>
              <p className='y-num'>Phone number</p>
              <input className='num-txt' type='text' placeholder='Enter your mobile number'/>
              <p className='y-msg'>Write your messages here</p>
              <textarea className='msg-txt' placeholder='Enter your message' rows={7}></textarea>
              <div><button className='sub-btn'>Submit now</button></div>  
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Support;
