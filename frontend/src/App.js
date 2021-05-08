import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/v1/posts/')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <div>
            {posts.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
