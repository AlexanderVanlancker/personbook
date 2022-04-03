import React, {useState, useEffect} from 'react';
import Search from "../components/Search";
import CardList from "../components/CardList";

interface user {
    name: string,
    id: number
}

const Users = () => {
    const [users, setUsers] = useState([])
    const [searchField, setSearchField] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch(err => console.log('error fetching users'))
    },[])

    useEffect(() => {
        setFilteredUsers(users.filter((user:user) => user.name.toLowerCase().includes(searchField)))
    }, [users,searchField])

    const handleSearch = (event:any) => { setSearchField(event.target.value.toLowerCase()); }

    return (
        <div>
            <Search onChangeHandler={handleSearch} placeholder={"search users"}/>
            <CardList items={filteredUsers}/>
        </div>
    );
};

export default Users;