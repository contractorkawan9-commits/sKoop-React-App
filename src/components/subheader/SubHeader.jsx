import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar'; // Import Navbar component
import { subHeaderNavLinks } from '../../data/siteData'; // Import subHeaderNavLinks
import "./SubHeader.css";

/**
 * SubHeader component, displayed on specific pages like 'About Us' and 'Location'.
 * It features the sKoop logo and a simplified navigation bar.
 */
export function SubHeader() {
  return (
    <div className="header2">
      <div className="logo">
        <Logo />
      </div>

      <div className="home">
        {/* Using the flexible Navbar component for sub-header navigation */}
        <Navbar navItems={subHeaderNavLinks} />
      </div>

      <hr className="forceLine" />
    </div>
  );
}
