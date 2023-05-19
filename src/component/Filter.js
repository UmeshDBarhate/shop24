import React from 'react'
import {ListGroup,Button,Col} from "react-bootstrap"

const Filter = () => {
  return (
    <>
    <div className='border border-dark text-center p-2  '>
    <h4> Filter </h4>
    <ListGroup as="ul">
        <ListGroup.Item as="li" active>
            High To Low
        </ListGroup.Item>
        <ListGroup.Item as="li">Low To High</ListGroup.Item>
        < ListGroup.Item as="li" disabled>
            Filter By Rating
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
    <Col className="text-center">
    <Button variant="success">Clear All </Button>
    </Col>
    </div>
    </>
  )
}

export default Filter