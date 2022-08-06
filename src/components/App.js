import "./App.css";
import Header from "./Header";
import AddContact from "./Addcontact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    { id: "1", name: "vidyut", email: "vid@gmail.com" },
    { id: "2", name: "test", email: "test@gmail.com" },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
