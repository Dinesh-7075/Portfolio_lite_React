import React from "react";
import pic1 from "../Images/pic1.jpeg"
const AboutMe = () => {

    return(
            <div className="about-me">
                <h1 name="AboutMe">AboutMe</h1>
                <img src={pic1} alt="Profile pic"></img>
                <p>
                    Hello everyone! I am thrilled to introduce myself as someone with a passion for software and a track record of success in the industry. With over 2 years of experience in working of Frontend and Automation Testing Projects, I have honed my skills and gained invaluable knowledge along the way.
                    Currently, I am doing full stack developments projects along with data base Management.
                    {<br />}Thank you for this opportunity to introduce myself, and I look forward to engaging with all of you in the exciting world of software development.
                </p>
            </div>
        );

}

export default AboutMe;