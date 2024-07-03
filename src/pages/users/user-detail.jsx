import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    const obj = useParams();
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${obj.turaxon}`)
            .then((res) => res.json())
            .then((user) => setUser(user));
    }, []);

    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.username}</h1>
        </div>
    );
};