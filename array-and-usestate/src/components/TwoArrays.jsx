import { useState } from "react";

const friendsArray = [
    {
        id: 1,
        name: "handy",
        age: 19,
        hobbies: ["Cooking", "Reading"],
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
        hobbies: ["Bathing", "Eating"],
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
        hobbies: ["Making Videos", "Dancing", "Coding"],
    },
];

const TwoArrays = () => {
    const [friends, setFriends] = useState(friendsArray);

    const handleThirdFriendHobby = () => {
        setFriends(
            friends.map((friend) =>
                friend.id === 3
                    ? {
                          ...friend,
                          hobbies: [...friend.hobbies, "Random Hobby"],
                      }
                    : { ...friend }
            )
        );
    };

    return (
        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <span>name: {friend.name}</span>{" "}
                    <span>age: {friend.age}</span>
                    <br />
                    <span>Hobbies</span>
                    <ul>
                        {friend.hobbies.map((hobby) => (
                            <li>{hobby}</li>
                        ))}
                    </ul>
                </li>
            ))}
            <button onClick={handleThirdFriendHobby}>Add Hobby to mandy</button>
        </ul>
    );
};

export default TwoArrays;
