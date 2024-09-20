import '../src/education.css'
import centennial from '../src/assets/centennial_img.png';

export default function Education() {
     return (
     <>
       <div>
               <p className="educationTitle">Education</p>
               <div className="educationContent">
                    <img src={centennial} alt="CentennialLogo" className="educationImg" />
                    <div className="content1">
                         <p>Software Engineering Technology (Co-op) Advanced Diploma</p>
                         <p>Sept. 2023 - Present</p>
                    </div>
                    <div className="content2">
                         <p className="content3">Centennial College, Toronto, ON</p>
                         <p className="content4">GPA: 4.46/4.5 (A)</p>
                    </div>
               </div>
               <br /><br />
               <p>Relevant Courses:</p>
               <p>| Web Interface Design || C# Programming || Database Concepts (SQL) |</p>
               <p>| Client-Side Web Development || Software Requirements Engineering || Unix/Linux Operating Systems |</p>
               <p>| Java Programming || Advanced Database Concepts || Software System Designs|</p>
          </div>
     </>
     );
}
  