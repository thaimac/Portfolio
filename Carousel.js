import React from 'react';

import Card from '../components/Card.js';

import emailclient from '../assets/images/emailclient.PNG';
import sudoku from '../assets/images/sudoku.PNG';
import atm from '../assets/images/atm.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Email Client built w/ Java FX',
                    subTitle: 'Receive emails your way',
                    imgSrc: emailclient,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Sudoku Solver',
                    subTitle: 'The lazy intellectuals best friend',
                    imgSrc: sudoku,
                    selected: false
                },
                {
                    id: 2,
                    title: 'ATM',
                    subTitle: 'ATM simulation built in Java',
                    imgSrc: atm,
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }
    makeItems = (items) => {
        return items.map(item => {
           return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    } 

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;