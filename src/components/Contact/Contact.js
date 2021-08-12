import React ,{useRef} from 'react'
import './Contact.css'
const Contact = () => {
    const nameInput = useRef();
    const emailInput = useRef();
    const messageInput = useRef();

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(nameInput.current.value==="" || emailInput.current.value==="" || messageInput.current.value==="" ){
            window.alert('Enter value in all fields');
        }
        else{
            window.alert('Your message has been sent!');
            nameInput.current.value="" ;
            emailInput.current.value="";
            messageInput.current.value=""; 
        }
    }
    return (
        <section className="contact-section" id="contact-section">
            <form>
            <div className="container">
		        <div className="contact-box">
                    {/* <div class="left"></div> */}
                    <div className="right">
                        <h2>contact me</h2>
                        <input ref={nameInput} type="text" className="field" placeholder="name" autoComplete="off" />
                        <input ref={emailInput} type="text" className="field" placeholder="email"autoComplete="off"/>
                        <textarea ref={messageInput} placeholder="message" className="field" ></textarea>
                        <input  type="submit"className="btn-submit" value="Send" onClick={handleSubmit}/>			        
                    </div>
		        </div>
	        </div>
            </form>
        </section>
    )
}

export default Contact
