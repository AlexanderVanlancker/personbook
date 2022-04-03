import React, {Component} from 'react';
import {Divider, Row} from 'antd'
import Card from './Card'

class CardList extends Component<any, any> {
    render() {
        const {items} = this.props
        return (
            <div>
                <Divider orientation="left">Users</Divider>
                <Row gutter={16}>
                    {
                        items.map((item:any) => {
                            return <Card key={item.id} item={item}/>
                        })
                    }

                </Row>
            </div>
        );
    }
}

export default CardList;