import { FiSidebar } from "react-icons/fi";

import './style.css';


export default function Sidebar() {
  return (
    <div className='wrapper'>
      <div className="sidebar">
        <a href="#">Profile</a>
        <a href="#">Notifications</a>
        <a href="#">Setting</a>
        <a href="#">Log Out</a>
      </div>

      <div className="main">
        <label className="toggler">
          <input type="checkbox" />
          <span><FiSidebar fontSize={20} /></span>
        </label>
      </div>
    </div>
  );
}