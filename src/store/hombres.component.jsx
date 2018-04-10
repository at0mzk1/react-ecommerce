import React, { Component } from 'react';
import { Row, Col, Grid, Thumbnail } from 'react-bootstrap';
import './hombres.css';

const shortImages = {
    1: "http://bibliotecnologia.com/wp-content/uploads/2017/08/18382676_136466486899257_2562937105852399616_n.jpg",
    2: "http://bibliotecnologia.com/wp-content/uploads/2017/08/18444490_755015404658562_6867316272925769728_n.jpg",
    3: "http://bibliotecnologia.com/wp-content/uploads/2017/08/19122360_1785268501783575_7808093563073331200_n.jpg",
    4: "http://bibliotecnologia.com/wp-content/uploads/2017/08/19120422_1900231236884888_7264290466483404800_n.jpg",
    5: "http://bibliotecnologia.com/wp-content/uploads/2017/08/19379244_1450904441622741_5003871370694623232_n.jpg",
    6: "http://bibliotecnologia.com/wp-content/uploads/2017/08/20688200_125540118066775_8702504864489406464_n.jpg",
    7: "http://bibliotecnologia.com/wp-content/uploads/2017/08/20837258_340075056444349_4379922882986246144_n.jpg",
    8: "http://bibliotecnologia.com/wp-content/uploads/2017/08/20987379_483822388645078_1421166968433541120_n.jpg"        
}

class Hombres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    componentDidMount() {
        this.CharacterList();
    }

    CharacterList() {
        let images = [];
        for(var image in shortImages) {
            images.push(
                <Col xs={12} md={4} key={image}>
                    <a className="product">
                        <Thumbnail src={shortImages[image]} alt="242x200">
                            <h3>
                                TEST
                            </h3>
                            <p>
                                TEST
                            </p>
                        </Thumbnail>
                    </a>
                </Col>
            )
        }
                this.setState({ characters: images });
    }

    render() {
        return (
            <Grid>
                <Row>{this.state.characters}</Row>
            </Grid>
        );
    }
}

export default Hombres;