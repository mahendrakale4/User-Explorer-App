import { useState, useEffect } from "react";
import { User } from "./User";

function App() {
  const [users, setusers] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading(true);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then(setusers)
      .finally(() => setisloading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1> User List</h1>
      {isloading ? (
        <p>...loading</p>
      ) : (
        <ul>
          {users.map((user) => {
            return <User name={user.name} key={user.id} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
