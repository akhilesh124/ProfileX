import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Typography, Accordion, AccordionSummary, AccordionDetails, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../style/Profile.css';

function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <div className="profile">
      <AppBar position="static">
        <Tabs className="profileHeader" value={value} onChange={handleChange} aria-label="profile tabs">
          <Tab label="Overview" />
          <Tab label="Education" />
          <Tab label="Experience" />
          <Tab label="Skills" />
          <Tab label="Projects" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <div className="profile-header">
          <h1>Akhilesh Kumar</h1>
          <p>Email: <a href="mailto:akhilesh12495@gmail.com">akhilesh12495@gmail.com</a></p>
          <p>Location: Noida</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/akhilesh-yadav-ba22761b0" target="_blank" rel="noopener noreferrer">Akhilesh Kumar</a></p>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="profile-section">
          <h2>Education</h2>
          <p>Bachelor of Technology in Instrumentation and Control</p>
          <p>JSS Academy of Technical Education, Noida</p>
          <p>August 2013 - May 2017</p>
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div className="profile-section">
          <h2>Work Experience</h2>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Software Engineer at Chetu India Pvt Ltd (Aug 2021 - Present)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Develop and maintain a robust backend system using Node.js for a specialized project, ensuring efficient data storage and management.</li>
                <li>Took ownership of the entire development lifecycle, including requirements gathering, architectural design, coding, testing, and deployment.</li>
                <li>Consistently provide timely project updates, ensuring transparent communication with clients. Actively seek and gather feedback from clients to refine the project throughout its development lifecycle.</li>
                <li>Conducted a 15-day comprehensive Node.js training program for company employees, enhancing the team's proficiency in Node.js for effective software development.</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Junior Associate at Tech Mahindra Ltd (Sep 2020 - Mar 2021)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Delivered technical support for hardware and software, ensuring customer satisfaction.</li>
                <li>Collaborated with cross-functional teams to address technical problems and improve product offerings.</li>
                <li>Led the end-to-end development, from project conceptualization to successful deployment.</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div className="profile-section">
          <h2>Skills</h2>
          <div className="skills">
            <Tooltip title="Programming Languages">
              <h3>Languages:</h3>
            </Tooltip>
            <p>Javascript, HTML, CSS</p>
            <Tooltip title="Web Frameworks">
              <h3>Frameworks:</h3>
            </Tooltip>
            <p>Express.js, Nest.js, Node.js, Angular.js</p>
            <Tooltip title="Database Technologies">
              <h3>Databases:</h3>
            </Tooltip>
            <p>SQL, MongoDB, PostgreSQL, HeidiSQL, Firebase</p>
            <Tooltip title="Cloud Services">
              <h3>Cloud Technologies:</h3>
            </Tooltip>
            <p>AWS, Linux, Minio, S3</p>
            <Tooltip title="Other Skills">
              <h3>Miscellaneous:</h3>
            </Tooltip>
            <p>GitHub, ERD, JQuery, Twilio, Minio, Quickbook, Swagger, Yext, Stripe</p>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <div className="profile-section">
          <h2>Projects</h2>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Image Annotation Management Application</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>Technologies: Node.js, PostgreSQL, S3 Bucket, SMTP, AWS EC2</p>
              <p>Description: Developed comprehensive Node.js backend APIs from scratch, integrating Minio S3 for image storage, implemented user role management, login/signup functionality, deployed the server on AWS, and established a system for managing the status of annotated images of Automobile Parts in the S3 bucket.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Multimedia Application</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>Technologies: Node.js, MySQL, Stripe, S3, AWS EC2, HTML, CSS, JS, JQuery, EJS, ERD, Express.js, Sequelize</p>
              <p>Description: Developed the "Multimedia Application" for a marching band using Node.js, featuring login/signup, role permission management, S3 for file storage, MySQL for the database, deployed on EC2, integrated EJS template for admin dashboard with monitoring each uploads, implemented API for multimedia upload, star ratings, likes, comments, and subscription with Stripe payment functionality.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Work Order Management</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>Technologies: Socket, Node.js, Angular, HTML, CSS, JQuery, Swagger, PostgreSQL, Quickbook, Twilio, Stripe</p>
              <p>Description: Developed a comprehensive web application featuring secure login/signup with code validation or subscription options, QuickBooks Online integration for financial management, Twilio for customer messaging, Stripe for subscription management, Socket for two-way communication, Angular for a dynamic frontend dashboard, and Swagger for hosting APIs, ensuring a seamless and feature-rich user experience.</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </TabPanel>
    </div>
  );
}

export default Profile;
