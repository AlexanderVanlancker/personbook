import React, {Component} from 'react';
import {Input} from 'antd';

class Search extends Component<any, any> {
    render() {
        return (
            <div>
                <Input
                type={"search"}
                style={{width: 250}}
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default Search;