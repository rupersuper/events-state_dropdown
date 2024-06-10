// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Dropdown from "./components/Dropdown";
import DropdownList from "./components/DropdownList";

function App() {
  const [openDropdownList, setOpenDropdownList] = React.useState(false);
  const toggleDropdownList = () => setOpenDropdownList(!openDropdownList);
  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <Dropdown onClickDropdownButton={toggleDropdownList} />
        <DropdownList open={openDropdownList} setOpen={setOpenDropdownList}/>
      </div>
    </div>
  );
}

export default App;