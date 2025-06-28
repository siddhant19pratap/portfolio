import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiPowerbi,
  SiGooglecolab,
  SiGithub,
  SiApachekafka
} from "react-icons/si";

const tools = [
  { icon: <SiGithub />, name: "Git / GitHub" },
  { icon: <SiGooglecolab />, name: "Google Colab" },
  { icon: <SiPowerbi />, name: "Power BI" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiJupyter />, name: "Jupyter Notebook" },
  { icon: <SiApachekafka />, name: "Apache Kafka" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col key={idx} xs={6} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "2rem" }}>{tool.icon}</div>
          <div style={{ fontSize: "0.9rem", marginTop: "8px", color: "#ccc" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
