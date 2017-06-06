import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Summary extends React.Component {
  render() {
    return(
      <div id="summary">
        <p>
          This is my summary!
        </p>
      </div>
    )
  };
}

class Educations extends React.Component {
  render() {
    return (
      <div id="educations">
        <p>
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
          This is educations!
        </p>
      </div>
    )
  };
}

class Experiences extends React.Component {
  render() {
    return (
      <div id="experiences">
        <p>
          This is experiences!
        </p>
      </div>
    )
  };
}

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <p>
          This is projects!
        </p>
      </div>
    )
  };
}

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <p>
          This is contact!
        </p>
      </div>
    )
  };
}

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <p>
          This is header!
        </p>
      </div>
    )
  };
}

class Activities extends React.Component {
  render() {
    return (
      <div id="activities">
        <p>
          This is activities!
        </p>
      </div>
    )
  };
}

class Volunteers extends React.Component {
  render() {
    return (
      <div id="volunteers">
        <p>
          This is volunteers!
        </p>
      </div>
    )
  };
}

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <p>
          This is skills!
        </p>
      </div>
    )
  };
}

class Education extends React.Component {
  render() {
    return (
      <div id="education">
        <p>
          This is education!
        </p>
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
        </div>
        <div className="leftsidebar">
          <Contact />
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

