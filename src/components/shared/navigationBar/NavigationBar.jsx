import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../../providers/AuthProvider";
const NavigationBar = () => {
  const {user, logOutUser} = useContext(userContext);
  const navigate = useNavigate()
  const handleLogout = ()=>{
    logOutUser()
    .then(()=>{
      alert("Successfully log out!");
      navigate('/')
    })
    .catch(error => console.log("Logout failed======> ", error.message))
  }
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" lg={10}>
          <Nav className="d-flex gap-3">
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={`/about`}>About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={`/career`}>Career</Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="d-flex align-items-center" lg={2}>
            <p className="fs-5 me-1">
              {user ? <img style={{width:'50px', height:'50px', borderRadius:'50%'}} src={localStorage.getItem(user.photoURL)} alt="User" /> : <FaUserCircle></FaUserCircle>}
            </p>
            {user ? <Button onClick={handleLogout} style={{background:"#403F3F", border:'none', padding:'5px 30px', fontSize:'20px'}}>Logout</Button> : <Link to="/login"> <Button style={{background:"#403F3F", border:'none', padding:'5px 30px', fontSize:'20px'}}>Login</Button></Link>}
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
