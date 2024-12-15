import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SubZero AI"
              description="Personal Chat Bot build with Nodejs & Javascript that runs on whatsapp & also an android app.It is multi media as it downloads songs, videos, apps etc using scrape APIs from Youtube & Playstore"
              ghLink="https://github.com/ZwSyntax"
              demoLink="https://comingsoon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DevFolio"
              description="My personal developers portifolio which showcases ones talent designed with Html, CSS & Js to meet up to your requirements."
              ghLink="https://github.com/ZwSyntax/DevFolio"
              demoLink="https://comingsoon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/ZwSyntax/Editor.io"
              demoLink="https://comingsoon.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="WhatsApp Unban Apk"
              description="This is an advanced app designed to remove both permanent & temporary whatsapp bans. It uses both email request method to unban and more stuff.It can also ban users "
              ghLink="https://github.com/ZwSyntax/WAUnbanner"
              demoLink="https://comingsoon.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Delicious Cake Recipes App"
              description="This is an app that works offline with a bunch of readily loaded cake recipes & instructions. It is the best for bakers or curious cookers. I was insipired by my mom on this."            ghLink="https://github.com/ZwSyntax/CakeRecipes"
              demoLink="https://comingsoon.vercel.app" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Zero Crash Bugbot"
              description="This app uses advanced Algorithms & APIs to crash both Android & iOS whatsapp users. It is meant for educational purposes not haram by exploiting whatsapp weaknesses."
              ghLink="https://github.com/ZwSyntax/ZeroCrash"
               demoLink="https://comingsoon.vercel.app"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
