import me from '../src/assets/me_img.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/home.css'

export default function Home() {
     return <>
     <section id="intro">
     <p className="introText">I am <span className="introName">Jordan Timianis</span></p> 
          <div className="introContent">
               <img src={me} alt="profile" className="me_img" width="400" height="500" />
               <p className="introTitle">Backend Developer/Data Analyst</p>
               <p className="introPara">
                    I'm excited to pursue a career as both a backend 
                    developer and a data analyst because I’m passionate about harnessing
                    technology to solve complex problems and uncover insights. As a backend
                    developer, I look forward to designing and optimizing systems that power
                    applications and services, ensuring they run smoothly and efficiently.
                    Simultaneously, my interest in data analysis drives me to dive into data
                    sets, uncover meaningful patterns, and support data-driven decision-making.
               </p>
               <Link to="/about"><button className="btn">Check Out My About Me Page</button></Link>
          </div>
     </section>
     </>
}
