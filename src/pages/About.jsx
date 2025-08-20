import { Link } from "react-router";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>

      <Link to="/">Go back to home</Link>
    </div>
  );
}
