import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FilterGrid({setFileName}) {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        setFileName(inputValue)
    }

    return (
        <>
            <Form style={{margin: '10px'}}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={1}>Filters:</Form.Label>
                    <Col sm={2}>
                        <Form.Control type="text" name="fileName" placeholder="Enter File name" onChange={handleChange}
                                      style={{marginLeft: '10px'}}/>
                    </Col>
                    <Col sm={1}>
                        <Button variant="primary" onClick={handleClick}>Filter</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default FilterGrid