import "./About.css"
import Logo from "../../img/sticker4.png"
import Mern from "../../img/mern.png"
const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Logo} alt="" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
                <p className="a-sub">Here's Something About Myself</p>
                <p className="a-desc">I suppose that I got into software development in an unusual way. When I was in Grade 8 or so, I was helping to host an event that required me to reach out to a variety of sponsors, which is when I came across the Y-Combinator startup directory which had hundreds of startups. The only issue was that going through each startup’s page would take hours. I eventually found a tutorial on YouTube that showed me how to web scrape any site and easily save time. Before I knew it, I was doing even more tutorials on programming, and eventually got into web development.
                As for my technical skills, I’ve worked with a couple tools in my personal projects and previous internships including React, HTML & CSS, Node.js, Python and MongoDB.</p>
                <div className="a-mern">
                    <img src={Mern} alt="" className="a-mern-img"/>
                </div>
        </div>
    </div>
  )
}

export default About
