import React, {Component} from 'react';
import CardList from "./CardList";
import Search from "./Search";

interface user {
    name: string,
    id: number
}

class Users extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({users: res, filteredUsers: res}))
            .catch(err => console.log(err))
    }

   handleSearch = (e:any) => {
        const searchField = e.target.value.toLowerCase();
        this.setState({searchField})
    }

    render() {
        let filtered = this.state.users.filter((user:user) => user.name.toLowerCase().includes(this.state.searchField))

        return (
            <div>
                <Search onChangeHandler={this.handleSearch} placeholder={"search users"}/>
                <CardList items={filtered}/>
            </div>
        );
    }
}

export default Users;