import React from "react";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        tel={contacts[2].tel}
        email={contacts[2].email}
      />

      <Card
        name={contacts[3].name}
        img={contacts[3].img}
        tel={contacts[3].tel}
        email={contacts[3].email}
      />
    </div>
  );
}

export default App;
