import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJava,
  DiReact,
  DiNodejs,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus,
  SiExpress,
  SiAmazonaws,
  SiApachespark,
  SiMysql,
} from "react-icons/si";

const techs = [
  // Languages
  { icon: <SiCplusplus />, name: "C/C++" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },

  // Frontend
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React JS" },

  // Backend
  { icon: <DiNodejs />, name: "Node JS" },
  { icon: <SiExpress />, name: "Express JS" },

  // Cloud / Databases
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },

  // Data Engineering
  { icon: <SiApachespark />, name: "PySpark" },

  // Misc
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col key={idx} xs={6} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "2rem" }}>{tech.icon}</div>
          <div style={{ fontSize: "0.9rem", marginTop: "8px", color: "#ccc" }}>
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
