import { useState } from "react";

const friendsArray = [
    {
        id: 1,
        name: "handy",
        age: 19,
        hobbies: [
            { text: "Cooking", id: 1 },
            { text: "Reading", id: 2 },
        ],
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
        hobbies: [
            { text: "Bathing", id: 1 },
            { text: "Eating", id: 2 },
        ],
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
        hobbies: [
            { text: "Making Videos", id: 1 },
            { text: "Dancing", id: 2 },
            { text: "Coding", id: 3 },
        ],
    },
];

const UpdatingObjectInTwoArray = () => {
    const [friends, setFriends] = useState(friendsArray);

    const handleFirstFriendHobby = () => {
        setFriends(
            friends.map((friend) =>
                friend.id === 1
                    ? {
                          ...friend,
                          hobbies: friend.hobbies.map((hobby) =>
                              hobby.id === 2
                                  ? { ...hobby, text: "Random Hobby" }
                                  : { ...hobby }
                          ),
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
                            <li>{hobby.text}</li>
                        ))}
                    </ul>
                </li>
            ))}
            <button onClick={handleFirstFriendHobby}>
                Change Second Hobby of handy
            </button>
        </ul>
    );
};

export default UpdatingObjectInTwoArray;
