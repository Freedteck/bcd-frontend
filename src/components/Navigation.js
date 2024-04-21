import { ConnectKitButton } from "connectkit";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAccount();
          const balance = await provider.getBalance(address);
          setUserBalance(ethers.formatEther(balance));
        } catch (error) {
          console.error("Error fetching user balance:", error);
        }
      }
    };

    fetchBalance();
  }, []);

  return (
    <header className="navbar-header">
      <nav className="container">
        <h1 className="logo">
          B<span>C</span>D
        </h1>
        <ul className="nav-links">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
        </ul>
        <div>
          <ConnectKitButton />
          {userBalance && <p>User Balance: {userBalance} ETH</p>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
