import React, {useEffect, useState} from 'react';
import FilesGrid from "./components/FilesGrid";
import FileClient from "./Client/File.client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])


    useEffect(() => {
        getData()
    }, [])

    function getData() {
        setIsLoading(true);

        return FileClient.fetchData()
            .then((data) => {
                setData(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="App">
            <header className="App-header">
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <h1>React test app</h1>
                    </Col>
                </Row>
            </header>
            <container>
                <FilesGrid data={data} isLoading={isLoading}/>
            </container>
        </div>
    );
}

export default App;
