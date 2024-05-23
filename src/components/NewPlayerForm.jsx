import React from "react";
import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userError, setUserError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length >= 1) {
      try {
        const result = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: `${username}`, breed: `${password}` }),
          }
        );
        const data = await result.json();
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    } else {
        setUserError("Longer Username Needed");
    }
  }
  return (
    <>
      <h2>Sign Up Your Puppy Below!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Puppy Name:{" "}
          <input
            placeholder="Waffles"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Breed:{" "}
          <input
            placeholder="Irish Setter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <p onSubmit={handleSubmit}>{userError}</p>
    </>
  );
}
