import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Summary extends React.Component {
  render() {
    return(
      <div id="summary">
        <p>
          As an electrical engineer with developer skills, I have a passion for new technology. I love to find my own limit and push it further. I crave for new knowledge and skills. More importantly, I have many ideas and I want to use my skills to make them come true.
        </p>
      </div>
    )
  };
}

class Educations extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div id="educations" className="section">
            <h3>
              Electrical Engineer
            </h3>
            <h4>
              University of Calgary
            </h4>
            <br/>

            <h3>
              Software Development
            </h3>
            <h4>
              Dev Bootcamp
            </h4>
            <br/>
          </div>
        </div>
      </div>
    )
  };
}

class Experiences extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div id="experiences" className="section">
            <h3>
              Web Developer Student
            </h3>
            <h4>
              Dev Bootcamp
            </h4>
            <p>
              Collaborate with teammates to make a web pairing application to help over 100 DBC students during their study period.
The students can log in with their GitHub accounts and receive an email notification when they paired up. The product is built from scratch with Ruby on Rails and deployed on Heroku
            </p><br/>

            <h3>
              Electrical Engineer in Training
            </h3>
            <h4>
              JAPK Engineering & Consulting Inc.
            </h4>
            <p>
              Assist Senior Drafter to develop automated electrical package template to reduce drafting process from 1-2 hours down to under 1 mins.
Assist Senior Engineers in the review of 50 P&IDs and updating hundreds relevant drawings and schematics to finalize projects.
Prepare I/O list, Fire & Gas detection, project tracking list, SD key, voltage drop calculation, total load
calculation and other technical documents for the senior project manager.
Run the panel review from the panel shop before the panels are sent to the site.
Power distribution design for oil and gas industry under 600V including single phase wiring diagrams, motor control centers, and lighting panels.
            </p><br/>
          </div>
        </div>
      </div>
    )
  };
}

class Projects extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div id="projects" className="section">
            <h3>
              PairBooked
            </h3>
            <p>
              Created an online pairing tool for over 100 DBC students to utilize their study schedule during phase 0.
              The app is made from Ruby of Rails and deloyed on Heroku. The students could log in with their GitHub accounts
              and receive an email notification when they paired up. Created experiences that come to life on digital devices,
              such as laptops, tablets and smartphones.
            </p><br/>
            <h3>
              SocialSphere
            </h3>
            <p>
              An a-frame project, it displayes 
            </p><br/>
          </div>
        </div>
      </div>
    )
  };
}

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <p>
          <strong>Cell: </strong>(206) 377-9239
        </p>
        <p>
          <strong>Email: </strong>paul.pliu87@gmail.com
        </p>
        <p>
          <strong>GitHub: </strong>paulliu87
        </p>
        <p>
          <strong>Linkedin: </strong>paulpliueit
        </p>
      </div>
    )
  };
}

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <h1>
          Paul Liu
        </h1>
        <h2>
          Software Developer
        </h2> 
        <p>
          Seattle, Washington
        </p>
      </div>
    )
  };
}

class Activities extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div id="activities" className="section">
            <p>
              This is activities!
            </p>
          </div>
        </div>
      </div>
    )
  };
}

class Volunteers extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div id="volunteers" className="section">
            <p>
              This is volunteers!
            </p>
          </div>
        </div>
      </div>
    )
  };
}

class Skills extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="container">
          <div id="skills" className="section">
            <p>
              This is skills!
            </p>
            <table>
              <tr>
                <th>Ruby on Rails</th>
                <th>HTML</th>
                <th>CSS</th>
              </tr>
              <tr>
                <th>Javascript</th>
                <th>JQuery</th>
                <th>SQL</th>
              </tr>
              <tr>
                <th>Algorithm</th>
                <th>TDD</th>
                <th>Agile Development</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  };
}

class Navigation extends React.Component {
  render() {
    return (
        <Header />
    )
  };
}


class Resume extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="rightsidebar">
          <Header />
          <Summary />
          <Contact />
        </div>
        <div className="leftsidebar">
          <Educations />
          <Skills />
          <Experiences />
          <Projects />
          <Volunteers />
          <Activities />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Resume />,
  document.getElementById('root')
);

