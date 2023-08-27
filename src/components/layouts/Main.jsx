import React from 'react'
import Header from '../shared/header/Header'
import NavigationBar from '../shared/navigationBar/NavigationBar'
import { Col, Container, Row } from 'react-bootstrap'
import Marquees from '../Marquees'
import LeftNavBar from '../leftNavBar/LeftNavBar'
import RightNavBar from '../shared/rightNavBar/RightNavBar'
import NewsCards from '../newsCards/NewsCards'
import { Outlet } from 'react-router-dom'
const Main = () => {
  return (
    <Container className='mb-5'>
        <Header></Header>
       <Marquees></Marquees>
       <NavigationBar></NavigationBar>
       <Row>
          <Col lg={3}>
            <LeftNavBar></LeftNavBar>
          </Col>
          <Col lg={6}>
            <h5>Dragon News</h5>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNavBar> </RightNavBar>
          </Col>
       </Row>
    </Container>
  )
}

export default Main