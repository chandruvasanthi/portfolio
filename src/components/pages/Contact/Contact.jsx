import React from 'react';
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
 
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a05ac0f-e2a3-4df0-942f-25274dba50c8");

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
 <div id='contact' className="contact">
        <p className='ctp'>Get in touch</p>
   
    <div className="contactsection">
      <div className="contactleft">
        <h1>Let's talk</h1>
        <p className='clp'>I'm currently looking for new opportunities in frontend development. Whether you have a project, a job opportunity, or just want to chat about web development, feel free to reach out. I’d love to connect.</p>
        <div className="contactdetails">
        <div className="details">
          <MdEmail className='icons'/>
          <a href="mailto:chandrutas019@gmail.com"><p>chandrutas019@gmail.com</p></a>
        </div>
        <div className="details">
         <FaPhoneAlt className='icons'/>
         <a href="tel:6381506536"><p>6381506536</p></a>
        </div>
          <div className="details">
            <FaLocationDot className='icons'/><p>Salem, Tamilnadu.</p>
           </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className='contactright'>
         <label htmlFor="">Your Name :</label>
         <input type="text" placeholder='Enter your name' name='name'/>
         <label htmlFor="">Your Email :</label>
         <input type="email" placeholder='Enter your email' name='email' />
         <label htmlFor="Write your message here">Write your message here...</label>
         <textarea name="message"  placeholder='Enter your message' rows={4}></textarea>
         <button className='submitbtn' type='submit'>Submit now</button> 
      </form>

      
    </div>
    <div className='result'>{result}</div>

   </div>
  );
};

export default Contact;
