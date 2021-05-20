import { useState } from "react";
import "./App.css";

const friendsArray = [
    {
        name: "handy",
        age: 19,
    },
    {
        name: "Candy",
        age: 18,
    },
    {
        name: "mandy",
        age: 20,
    },
];

const App = () => {
    const [friends, setFriends] = useState(friendsArray); // Setting default value

    const handleAddFriend = () => {
        setFriends((prevFriends) => [
            ...prevFriends,
            {
                name: "Random Friend Name",
                age: 20, // Random age
            },
        ]);
    };

    return (
        <main>
            <h1>Hello Developers</h1>
            <div>
                {friends.map((friend, index) => (
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                    </li>
                ))}
                <button onClick={handleAddFriend}>Add Friends</button>
            </div>
        </main>
    );
};

export default App;
