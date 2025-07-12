import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Image imports
import cryptoImg from "../../Assets/Projects/crypto.png";
import pipelineImg from "../../Assets/Projects/pipeline_skoda_image.png";
import youtubeImg from "../../Assets/Projects/youtube_analysis.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import spotifyImg from "../../Assets/Projects/spotifyPipeline.png";
import kafkaImg from "../../Assets/Projects/stockKafka.png"; // ✅ New Kafka project

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoImg}
              isBlog={false}
              title="Crypto Mart"
              description="A real-time cryptocurrency tracker built with React.js, Material UI, and Chart.js using CoinGecko API to monitor market prices, volume, and charts."
              ghLink="https://github.com/siddhant19pratap/crypto-mart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeImg}
              isBlog={false}
              title="YouTube Data Analysis (AWS)"
              description="An end-to-end data engineering pipeline built using AWS Glue, PySpark, S3, and Athena to analyze trending YouTube video data for viewer insights."
              ghLink="https://github.com/siddhant19pratap/Youtube-Data-Analysis-Using-AWS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pipelineImg}
              isBlog={false}
              title="Data Pipeline for Reputed Automobile Manufacturer (Professional Project)"
              description="Built scalable data pipelines using AWS Glue, PySpark, and CloudWatch to process automotive sales data and enable strategic decision-making."
              ghLink="https://github.com/siddhant19pratap/-ETL-Pipeline-Project-for-Global-Automobile-Manufacturer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A fully responsive portfolio site built using React.js, Bootstrap, and Particle.js. Includes animated sections for About, Projects, Resume, and more. Hosted on GitHub and ready for deployment on Vercel or Netlify."
              ghLink="https://github.com/siddhant19pratap/portfolio"
              demoLink="https://your-vercel-or-netlify-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyImg}
              isBlog={false}
              title="Spotify Data Pipeline"
              description="Built a data pipeline using Spotify API and PySpark to extract, transform, and load music data into BigQuery for analytics using a layered architecture."
              ghLink="https://github.com/siddhant19pratap/spotify-data-pipeline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kafkaImg}
              isBlog={false}
              title="Stock Market Kafka Pipeline"
              description="Simulated real-time stock market data with a Kafka producer, streamed via AWS EC2, and processed using a Kafka consumer. Data stored in S3 and analyzed with Athena via Glue Catalog."
              ghLink="https://github.com/siddhant19pratap/Stock-Market-Kafka-DE-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
