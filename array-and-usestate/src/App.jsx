import { useState } from "react";
import UpdatingObject from "./components/UpdatingObject";
import "./App.css";
import TwoArrays from "./components/TwoArrays";

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
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                    </li>
                ))}
                <button onClick={handleAddFriend}>Add Friends</button>
            </ul>
            {/* Updating specific object in an array of objects */}
            <UpdatingObject />
            {/* Adding a new value in two dimensional array(array in Array) */}
            <TwoArrays />
        </main>
    );
};

export default App;
