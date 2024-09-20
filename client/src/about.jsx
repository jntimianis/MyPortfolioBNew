// MyPortfolioBNew - Jordan Timianis - 301352262 - September 20th
import sql from '../src/assets/sql_img.png';
import python from '../src/assets/python_img.png';
import csharp from '../src/assets/csharp_img.png';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
          <span className="skillTitle">A Little About Me</span>
          <span className="skillDesc">Throughout my academic journey,
                I’ve had the opportunity to learn about a wide variety of technologies and topics,
                 which has significantly enhanced my ability to adapt and learn quickly. For example,
                  I took part in a group project where I quickly learned D2L Brightspace and APIs. I was
                   able to apply my new knowledge and significantly improve our project. This experience
                    demonstrates my willingness to learn and my overall capability to grasp new ideas.
                     Through applied projects, I have honed my skills in technologies such as Java, HTML/CSS,
                      SQL, and C#, as well as gaining experience with Agile practices, debugging, technical
                       documentation and software systems design. </span>
          <p>Here is a link to my resume: </p><a href="https://centennialcollegeedu-my.sharepoint.com/:b:/g/personal/jtimiani_my_centennialcollege_ca/EUi8Wfp8oBNDrU6DFmHN0ggBxBhiQjndfyGJHHZO9dhWCw?e=HevhWT" target="_blank">Resume</a>
          <p>Here is a link to my GitHub account: </p><a href="https://github.com/jntimianis" target="_blank">GitHub</a>
          <div className="skillBar">
               <img src={sql} alt="SQL" className="skillBarImg1" />
               <div className="skillBarText">
               <h2>Database Management (SQL)</h2>
               <p>Proficient in SQL and adept at managing and querying databases.</p>
               </div>
          </div>
          <div className="skillBar">
               <div className="skillBarText">
               <h2>Python</h2>
               <p>Skilled in Python and experienced in developing efficient and scalable code.</p>
               </div>
               <img src={python} alt="Python" className="skillBarImg2" />
          </div>
          <div className="skillBar">
               <img src={csharp} alt="CSharp" className="skillBarImg3" />
               <div className="skillBarText">
               <h2>C# Programming</h2>
               <p>Experienced in C# and experienced in building robust and efficient applications.</p>
               </div>
          </div>   
     </section>
     </>
}
    