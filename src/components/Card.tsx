import React, {Component} from 'react';
import {Col, Card as CardAntd} from "antd";

class Card extends Component<any, any> {
    render() {
        const {name, id, company} = this.props.item
        return (
            <Col key={id} className="gutter-row" span={6}>
                <CardAntd hoverable title={name} style={{width: 250}} cover={<img alt="example" src={"https://randomuser.me/api/portraits/men/"+id+".jpg"}/>}>
                    <p>{company.catchPhrase}</p>
                </CardAntd>
            </Col>
        );
    }
}

export default Card;