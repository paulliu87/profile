import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Summary extends React.Component {
  render() {
    return(
      <div className="block">
        <div className="container">
          <div id="summary" className="section">
            <h2>Summary</h2>
            <p>
              Software development engineer and a former electrical engineer with hands-on experience in system design, agile development and test driven development. A life-long learner and an ethuistiasitc team player dedicates to efficiently resolving project issues. Eager to contribute to an agile team rooted in solving real world problems by taking ownership of core components.
            </p>
          </div>
        </div>
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
            <h2>Education</h2>
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

            <h3>
              Algorithm, System Design
            </h3>
            <h4>
              NineChapters
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
            <h2>Experience</h2>
            <h3>
              Web Developer Student
            </h3>
            <h4>
              Dev Bootcamp
            </h4>
            <p>
              Collaborate with teammates to make a web pairing application to help over 100 DBC students during their study period...
            </p><br/>

            <h3>
              Electrical Engineer in Training
            </h3>
            <h4>
              JAPK Engineering & Consulting Inc.
            </h4>
            <p>
              Assist Senior Drafter to develop automated electrical package template to reduce drafting process from 1-2 hours down to under 1 mins...
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
            <h2>Projects</h2>
            <h3>
              PairBooked
            </h3>
            <p>
              Created an online pairing tool for over 100 DBC students to utilize their study schedule ...
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
        <div className="avator-container">
          <div className="avator">
            <img src={require('./images/avator.png')} alt="avator" />
          </div>
        </div>
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
            <h2>Activities</h2>
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
            <h2>Volunteers</h2>
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
            <h2>Skills</h2>
            <table>
              <tr>
                <th><img src={require('./images/java.jpg')} /></th>
                <th><img src={require('./images/rails_on_ruby.jpg')} /></th>
                <th><img src={require('./images/html-xxl.png')} /></th>
                <th><img src={require('./images/css-xxl.png')} /></th>
              </tr>
              <tr>
                <th><img src={require('./images/javascript.png')} /></th>
                <th><img src={require('./images/jquery.png')} /></th>
                <th><img src={require('./images/sql.png')} /></th>
              </tr>
              <tr>
                <th><img src={require('./images/algorithm-512.png')} /></th>
                <th><img src={require('./images/TDD-icon.png')} /></th>
                <th><img src={require('./images/agile.png')} /></th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  };
}

// function Avator(props) {
//   return (
//     <div className="avator-container">
//       <div className="avator">
//         <img src={props.address)} />
//       </div>
//     </div>
//   );
// }

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
          <Contact />
        </div>
        <div className="leftsidebar">
          <Summary />
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

