import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          These projects reflect my experience in data engineering, cloud computing, and frontend development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300x200.png?text=Data+Pipeline"
              isBlog={false}
              title="Data Pipeline for Audi, Skoda & Volkswagen"
              description="Scalable ETL pipelines built on AWS Glue and PySpark to process sales & planning data. Enabled automated insights with Athena, CloudWatch, and Lambda for monitoring and alerting."
              ghLink="https://github.com/Siddhant1902"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300x200.png?text=YouTube+ETL"
              isBlog={false}
              title="YouTube Data Analysis on AWS"
              description="Built an end-to-end pipeline on AWS for trending video data using Glue, PySpark, S3, and Athena. Delivered insights into viewer engagement and content performance."
              ghLink="https://github.com/Siddhant1902"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/300x200.png?text=CryptoMart"
              isBlog={false}
              title="CryptoMart"
              description="Real-time cryptocurrency tracker built using React JS, Material UI, and Chart.js. Integrated with Coin Gecko API to fetch and visualize live market data."
              ghLink="https://github.com/Siddhant1902"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
