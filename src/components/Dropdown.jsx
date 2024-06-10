export default function Dropdown({ onClickDropdownButton }) {
  return (
    <button
      data-id="toggle"
      className="btn"
      onClick={() => onClickDropdownButton(true)}
    >
      <span>Account Settings</span>
      <i className="material-icons">public</i>
    </button>
  );
}
