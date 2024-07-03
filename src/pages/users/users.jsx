import React from 'react'
import { Link } from 'react-router-dom';

export const Users = () => {
    const [data, setData] = React.useState([]);

React.useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((users) => {
setData(users);
});
}, []);

return (
<div>
{data.map((item) => (
    <Link key={item.id} to={`/users/${item.name}/${item.id}`}>
    <h1>{item.name}</h1>
    </Link>
))}
</div>
);

}