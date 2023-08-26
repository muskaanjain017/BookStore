import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <nav className="navbar">
    <div className="left"><img className ="HomeImg" src={"BookStoreIcon.png"} title='Home'></img></div>
    <div className="middle">
      <input type="search"  placeholder="Search for the book you want to read it now...Sherlock Homes,Harry Pot..."/>
      <button type="submit" id="Search">Search</button>
    </div>
    <div className="right">
      <img className="NavImg"src="bookmark.png" alt="bookmark" title="bookmark" />
      <img className="NavImg"src="Notification.png" alt="notification" title="notification"/>
      <img className="NavImg"src="diamond.png" alt="Upgrade" title="Upgrade"/>
      <img className="NavImg"src="profile.png" alt="profile" title="profile"/>
    </div>
  </nav>
  )
}
