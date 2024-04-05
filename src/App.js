import React, {useEffect, useState} from 'react';
import FilesGrid from "./components/FilesGrid";
import FileClient from "./Client/File.client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterGrid from "./components/FilterGrid";
import Container from "react-bootstrap/Container";

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [fileName, setFileName] = useState('')


    useEffect(() => {
        getData()
    }, [fileName])

    function getData() {
        setIsLoading(true);

        return FileClient.fetchData(fileName)
            .then((data) => {
                setData(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col><h1>React test app</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <FilterGrid setFileName={setFileName}/>
                    </Col>
                </Row>
                <Row>
                    <Col><FilesGrid data={data} isLoading={isLoading}/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
