import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./Loading";

function FilesGrid({data, isLoading}) {
    return (
        <>
            <Container>
                <Row>
                    <Col className={'text-bg-dark p-3'}><b>File name</b></Col>
                    <Col className={'text-bg-dark p-3'}><b>Text</b></Col>
                    <Col className={'text-bg-dark p-3'}><b>Number</b></Col>
                    <Col className={'text-bg-dark p-3'}><b>Hex</b></Col>
                </Row>
                {isLoading ? (
                    <Loading/>
                ) : !data || data.length === 0 ? (
                    <Row>
                        <Col>No hay datos para mostrar</Col>
                    </Row>
                ) : (
                    data.map((object) => (
                        object?.lines?.map((item, j) => (
                            <Row key={j} className={`py-2`}>
                                <Col>{object.file}</Col>
                                <Col>{item.text}</Col>
                                <Col>{item.number}</Col>
                                <Col>{item.hex}</Col>
                            </Row>
                        ))
                    ))
                )
                }
            </Container>
        </>
    )
}

export default FilesGrid