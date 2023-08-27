import React from 'react'
import NewsDetails from '../newsDetails/NewsDetails'
import Header from '../shared/header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import RightNavBar from '../shared/rightNavBar/RightNavBar'
import EditorInsights from '../editorInsights/EditorInsights'
import { Outlet } from 'react-router-dom'
const NewsLayout = () => {
  return (
        <Container>
        <Header></Header>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                    <EditorInsights></EditorInsights>
                </Col>
                <Col lg={3}>
                    <RightNavBar></RightNavBar>
                </Col>
            </Row>
        </Container>
  )
}

export default NewsLayout