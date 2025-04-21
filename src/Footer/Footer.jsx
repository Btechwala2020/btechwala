import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
    <div>
      <div id="footer">
        <div id="footer-part1">
          <h3>let's explore </h3>
          <h3>to enhance your</h3>
          <h3>knowledge</h3>
        </div>

        <div id="idfoot">
          <div id="footer-part-2">
            <div id="footer-part-2-part1">
              <h1>Syllabus</h1>
              <a href="https://drive.google.com/file/d/1BnA9G05Wm6J1VMPFy6NX0T13RZfTNbVv/view?usp=drive_link">First Year</a>
              <a href="https://drive.google.com/file/d/1_YDwgyweXD7za8X-8ZyZ_6nQX4A4EUSz/view?usp=drive_link">Second year</a>
              <a href="https://drive.google.com/file/d/1vGU6VDl-r7k_Bsoi6yE9eVU0HyL0lB0x/view?usp=drive_link">Third year</a>
              <a href="https://drive.google.com/file/d/1fHGTtAdhUkLAHOk-TKfYh_lQDYVlM-U0/view?usp=drive_link">Fourth year</a>
            </div>
            <div id="footer-part-2-part1">
              <h1>Quantum</h1>
              <Link to={"/FirstYearQuantum"}>First Year</Link>
              <Link to={"/SecondYearQuantum"}>Second year</Link>
              <Link to={"/ThirdYearQuantum"}>Third year</Link>
              <Link to={"/FourthYearQuantum"}>Fourth year</Link>
              
            </div>
          </div>

          <div id="footer-part-2">
            <div id="footer-part-2-part1">
              <h1>Previous year paper</h1>
              <Link to={"/pyq/First-year"}>First Year</Link>
              <Link to={"/pyq/Second-year"}>Second year</Link>
              <Link to={"/pyq/Third-year"}>Third year</Link>
              <Link to={"/pyq/Fourth-year"}>Fourth year</Link>
            </div>
            <div id="footer-part-2-part1">
              <h1>Important Topics</h1>
              <Link to={"/ImportantTopic/Firstyear"}>First Year</Link>
              <Link to={"/ImportantTopic/Secondyear"}>Second year</Link>
              <Link to={"/ImportantTopic/Thirdyear"}>Third year</Link>
              <Link to={"/ImportantTopic/Fourthyear"}>Fourth year</Link>
              
            </div>
          </div>
        </div>

        <div id="footer-part-3">
          <span>
            <div id="footer-part-2-part1">
              <h1>Best Youtube Channel</h1>
              <a href="https://www.btechwala.in/yt_sub_selection.html">First Year</a>
              <a href="https://www.btechwala.in/contact_us.html">Second year</a>
              <a href="https://www.btechwala.in/faq.html">Third year</a>
              <a href="https://www.btechwala.in/privacy_policy.html">Fourth year</a>
            </div>
          </span>
          <div id="footer-part-2-part2">
            <h1>Lets Connect With Our Social</h1>
            <div id="social">
              <a href="https://www.instagram.com/btechwala01/"><i className="ri-instagram-fill"></i></a>
              <a href="https://www.linkedin.com/in/btech-wala-93a890356/"><i className="ri-linkedin-box-fill"></i></a>
              <a href="https://discord.gg/Q7waAja5"><i className="ri-discord-fill"></i></a>
              <a href="https://www.youtube.com/@BtechWala-y0x"><i className="ri-youtube-fill"></i></a>
              <a href="https://www.btechwala.in/privacy_policy.html"><i className="ri-twitter-fill"></i></a>
            </div>
          </div>
        </div>

        <div id="footer-part4">
          <div id="fp41">
            <a href="https://www.btechwala.in/terms_and_condition.html">Terms & Conditions</a>
            <span><a href="https://www.btechwala.in/payment-terms.html">Payment Terms</a></span>
            <a href="https://www.btechwala.in/privacy_policy.html">Privacy Policy</a>
            <a href="https://www.btechwala.in/contact_us.html">Contact Us</a>
            <a href="https://www.btechwala.in/about_us.html">About Us</a>
            <a href="">©2025 Copyright @Btechwala</a>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Footer