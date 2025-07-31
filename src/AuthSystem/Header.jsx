import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function Header() {
  const { isLoggedIn, username, logout } = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: "lightpink",
      }}
    >
      <div>
        <h1>Header</h1>
      </div>
      <div>
        {isLoggedIn && (
          <div>
            <p>Welcome, {username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
