import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

function Layout(props:any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(token !== null);
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>{props.children}</div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default Layout;
