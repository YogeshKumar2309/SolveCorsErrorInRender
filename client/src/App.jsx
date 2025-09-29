import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/data`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Frontend</h1>
      <p>Message from backend: {data.message}</p>
      <p>Items: {data.items.join(", ")}</p>
    </div>
  );
}

export default App;
