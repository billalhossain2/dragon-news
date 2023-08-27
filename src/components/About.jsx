import React from 'react';
import NavigationBar from './shared/navigationBar/NavigationBar';
import { useContext } from 'react';
import { userContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const About = () => {
    const {user} = useContext(userContext)
    console.log('Inside about page => ', user)
  const userInfo = {
    name: 'John Doe',
    age: 28,
    occupation: 'Web Developer',
    description: 'Passionate about creating web experiences that users love.',
    location: 'Cumilla, Bangladesh',
  };

  return (
    <div className="container mt-5">
        <NavigationBar></NavigationBar>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mb-4">About Me</h1>
          <p>
            <strong>Name:</strong> {user.displayName}
          </p>
          <p>
            <strong>Age:</strong> {userInfo.age}
          </p>
          <p>
            <strong>Occupation:</strong> {userInfo.occupation}
          </p>
          <p>
            <strong>Description:</strong> {userInfo.description}
          </p>
          <p>
            <strong>Location:</strong> {userInfo.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
