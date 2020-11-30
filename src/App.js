import React, { useState, useEffect } from "react";

const usersData = [
  {
    id: 1,
    firstName: "Tania",
    lastName: "floppydiskette",
    email: "dsadsad@gmail.com",
    telephone: "123135",
  },
  {
    id: 2,
    firstName: "Mario",
    lastName: "Jeremy",
    email: "duytuyusad@gmail.com",
    telephone: "123135",
  },
  {
    id: 3,
    firstName: "Robbie",
    lastName: "Lawrel",
    email: "drewrewd@gmail.com",
    telephone: "123135",
  },
];


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(usersData);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const headers = ["id", "firstName", "lastName", "actions"];
  const generateHeaders = headers.map((item) => (
    <th key={item}>
      <a href="/#"> {item}</a>
    </th>
  ));

  const generateData = searchResults.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>
        <a href="/#">Delete</a>
        <br />
        <a href="/#">Edit</a>
      </td>
    </tr>
  ));

  useEffect(() => {
    const results2 = usersData.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm)
      );
    });

    setSearchResults(results2);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <table>
        <thead>
          <tr>{generateHeaders}</tr>
        </thead>
        <tbody>{generateData}</tbody>
      </table>
    </div>
  );
}

export default App;
