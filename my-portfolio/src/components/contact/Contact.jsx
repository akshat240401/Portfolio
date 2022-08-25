import { useRef } from "react"
import "./contact.css"
const Contact = () => {
    const formRef = useRef

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <c-left>
                <h1 className="c-title">Feel free to contact me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        +91-9082609700
                    </div>
                    <div className="c-info-item">
                        akshat2404@gmail.com
                    </div>
                    <div className="c-info-item">
                        https://github.com/akshat240401
                    </div>
                    <div className="c-info-item">
                        https://www.linkedin.com/in/akshatmehta24/
                    </div>
                </div>
            </c-left>
            <c-right>
                <p className="c-desc">
                    <b>Any queries?</b> Get in touch. Send and E-mail directly. Always up for work and to learn new things. Looking forward for exciting opportunities.
                </p>
                <form>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea name="message" rows="5" placeholder="Message"/>
                    <button>Submit</button>
                </form>
            </c-right>
        </div>
    </div>
  )
}

export default Contact
