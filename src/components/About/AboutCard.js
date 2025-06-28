import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhant Pratap Singh</span> from <span className="purple">India</span>.
            <br />
            I’m currently working as a <strong className="purple">Data Engineer</strong> at Motherson Technology Services Limited.
            <br />
            I specialize in designing scalable data pipelines using AWS services like Glue, Athena, Lambda, and S3.
            <br />
            I also enjoy building full-stack apps using the MERN stack and learning cloud-native tools.
            <br />
            <br />
            Besides coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos & Documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Behind every dashboard is a data engineer who made the mess invisible."{" "}
          </p>
          <footer className="blockquote-footer">Siddhant, probably after 5 failed Glue jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
