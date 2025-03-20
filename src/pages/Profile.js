import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        console.log(data);
        setUser(data[0]); // Assuming username is unique
      } catch (err) {
        setError(err.message);
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div>
      <h1>Profile Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      ) : (
        !error && <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Profile;