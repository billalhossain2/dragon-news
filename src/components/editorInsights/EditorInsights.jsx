import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import insightImg  from "../../assets/images/child.png";
import { FaCalendar } from 'react-icons/fa';
const EditorInsights = () => {
  return (
    <div>
        <h4>Editor Insights</h4>
        <CardGroup className='d-flex gap-3'>
      <Card>
        <Card.Img variant="top" src={insightImg} />
        <Card.Body>
          <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> <FaCalendar></FaCalendar> Jan 4, 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={insightImg} />
        <Card.Body>
          <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> <FaCalendar></FaCalendar> Jan 4, 2023</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={insightImg} />
        <Card.Body>
          <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> <FaCalendar></FaCalendar> Jan 4, 2023</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default EditorInsights