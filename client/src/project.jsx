// MyPortfolioBNew - Jordan Timianis - 301352262 - September 20th
import srs from '../src/assets/srs.png';
import mosquito from '../src/assets/mosquito_img.jpg';
import ecommerce from '../src/assets/ecommerce_img.png';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     <section id="projects">
          <p className="projectTitle">My Projects</p>
          <span className="projectPara">Here, you’ll find a collection of my work in technology,
                from innovative coding solutions to cutting-edge software development. Each project
                 demonstrates my skills, problem-solving abilities, and passion for tech.</span>
          <div className="projectTitles">
               <p className="projectTitle1">Software Requirements Specifications Document</p>
               <p className="projectTitle2">Mosquito Squasher Game</p>
               <p className="projectTitle3">eCommerce Database</p>
          </div>
          <div className="projectImgs">
                   <img src={srs} alt="srs" className="projectImg" />
                   <img src={mosquito} alt="mosquito_game" className="projectImg" />
                   <img src={ecommerce} alt="ecommerce" className="projectImg" />
          </div>
          <div className="projectContent">
               <p className="projectDesc">
                    Developed an SRS document for an application designed to improve efficiency for students and professors in managing due dates.
                    Collaborated with team members to research and gather software requirements.
                    Utilized MS Visio to create UML diagrams, including use case diagrams and class diagrams.
               </p>
               <p className="projectDesc">
                    Created a simple mosquito squasher, browser-based game designed to provide an interactive user experience.
                    Designed a visually appealing layout to keep users engaged
               </p>
               <p className="projectDesc">
                    Developed an eCommerce Database that makes it easier to find products and keep track of them.
                    Created entity-relationship diagrams to highlight the database schema and relationships.
                    Displayed proficiency by demonstrating additional relevant queries,
               </p>
          </div>  
     </section>
     </>
}
