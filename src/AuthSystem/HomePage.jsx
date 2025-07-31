import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function HomePage() {
  const { isLoggedIn, username } = useContext(AuthContext);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        backgroundColor: "lightgray",
      }}
    >
      <h1>HomePage</h1>
      {isLoggedIn && <p>Welcome, {username}</p>}

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum ad
        ducimus, explicabo recusandae rerum atque non impedit eos cum eaque
        omnis, fuga ex nostrum, porro sapiente voluptas necessitatibus soluta.
      </div>

      {isLoggedIn && (
        <div>
          <p>Private content</p>
          <p>This is personal information of the user.</p>
          <ul>
            <li>Name</li>
            <li>Address</li>
            <li>Age</li>
          </ul>
        </div>
      )}
    </div>
  );
}
