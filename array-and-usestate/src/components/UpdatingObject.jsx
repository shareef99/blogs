import { useState } from "react";

const friendsArray = [
    {
        id: 1,
        name: "handy",
        age: 19,
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
    },
];

const UpdatingObject = () => {
    const [friends, setFriends] = useState(friendsArray);

    const handleSecondFriend = () => {
        setFriends(
            friends.map((friend) =>
                friend.id === 2
                    ? { ...friend, name: "Changed Name" }
                    : { ...friend }
            )
        );
    };

    return (
        <ul>
            {friends.map((friend, index) => (
                <li key={friend.id}>
                    <span>name: {friend.name}</span>{" "}
                    <span>age: {friend.age}</span>
                </li>
            ))}
            <button onClick={handleSecondFriend}>Change Second Name</button>
        </ul>
    );
};

export default UpdatingObject;
