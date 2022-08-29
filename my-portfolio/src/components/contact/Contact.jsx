import "./contact.css"
import Github from "../../img/Github.png"
import Linkedin from "../../img/Linkedin.png"
import Mail from "../../img/Mail.png"
import Phone from "../../img/Phone.png"
const Contact = () => {
    const onButtonClick = () => {
        fetch('rep.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'rep.pdf';
                alink.click();
            })
        })
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <c-left>
                <h1 className="c-title">Feel free to contact me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon"/>+91-9082609700
                    </div>
                    <div className="c-info-item">
                    <img src={Mail} alt="" className="c-icon"/>akshat2404@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Github} alt="" className="c-icon"/><a href="https://github.com/akshat240401">akshat240401</a>
                    </div>
                    <div className="c-info-item">
                        <img src={Linkedin} alt="" className="c-icon"/><a href="https://www.linkedin.com/in/akshatmehta24/">akshatmehta24</a>
                    </div>
                </div>
            </c-left>
            <c-right>
                <p className="c-desc">
                    <b>Any queries?</b> Get in touch. Always up for work and to learn new things. Looking forward for exciting opportunities.
                </p>
                <form>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea name="message" rows="5" placeholder="Message"/>
                    <button className="resume" onClick={onButtonClick}>
                        Downlaod Resume
                    </button>
                </form>
            </c-right>
        </div>
    </div>
  )
}

export default Contact
