import * as React from "react";

const styles = {
  about: {
    paddingTop: "3em",
    display: "grid",
    justifyContent: "center",
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "30px",
    textAlign: "center" as TODO,
    fontSize: "36px"
  },
  version: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "darkcyan",
  },
  desc: {
    padding: "0px 50px",
    fontSize: "20px"
  }
}


const AboutPage: React.FC = () => {
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>About</b></div>
        <div style={styles.version}>CMS Assist</div>
        <div style={styles.desc}>
           <p> <b>Our Vision</b> - "Empowering effortless content management and seamless online experiences for all." </p>
          <p>CMS Assist offers a comprehensive suite of features and a user-friendly interface, making it the ideal choice for businesses, bloggers, and content creators of all backgrounds. Whether you're a tech-savvy professional or a novice in web development, ContentEase allows you to take full charge of your website's content without the need for extensive coding knowledge.
           </p>
          <b>Developed By</b>
          <ol>
            <li>Arpit Ujjwal - 1901330100063</li>
            <li>Akansha Gupta - 1901330100026</li>
            <li>Ishaan Pandey - 1901330100125</li>
            <li>Abhishek Khantwal - 1901330100011</li>
          </ol>
        </div>
      </div>
    );
  }


export default AboutPage;
