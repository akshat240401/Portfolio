import "./Introduction.css"
import Me from "../../img/hi.png"
const Introduction = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello There, I am</h2>
                <h1 className="i-name">Akshat Mehta</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Aspiring MERN Stack Developer</div>
                        <div className="i-title-item">Frontend Developer</div>
                        <div className="i-title-item">Backend Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Passionate Coder</div>
                    </div>
                </div>
                <p className="i-desc">Passionate in Web Designing, Coding and Integration with intuitive Problem-Solving Skills. Proﬁcient in PYTHON, JAVASCRIPT, C, C++, HTML5, CSS3. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.Looking to start the career with a ﬁrm driven by technology</p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Introduction
