// MyPortfolioBNew - Jordan Timianis - 301352262 - September 20th
import React from 'react';
import { Link } from 'react-router-dom';
import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <section id="contactForm">
     <h2 className="contactTitle">Contact</h2>
          <form id="ffp">
				<label htmlFor="myFName"> First Name * </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> Last Name * </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				<label htmlFor="myEmail"> Email * </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
                    <label htmlFor="myMessage"> Message (Optional) </label>
				<input type="text" id="myMessage" name="myMessage" /> <br /> <br />

				<Link to="/"><input type="submit" className="submit" value="Submit" /></Link> <br />
		</form>
          <p><i>Text me at: <strong>905-665-1490</strong></i></p>
          <p>Email: jtimiani@my.centennialcollege.ca</p>
     </section>
     </>
     );
}