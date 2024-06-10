import React from "react";

export default function DropdownList({ open, setOpen }) {

  const [selectedListItem, setSelectedListItem] = React.useState(0);
  const list = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  const selectListItemAndClose = (index) => {
    setSelectedListItem(index);
    setOpen(false);
  };
  return (
    <>
      {open && (
        <ul data-id="dropdown" className="dropdown">
          {list.map((listItem, index) => (
            <li
              key={index}
              onClick={() => selectListItemAndClose(index)}
              className={selectedListItem === index ? "active" : ""}
            >
              <a href="#">{listItem}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
