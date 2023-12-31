import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/HungryAi.png";

function Navbar() {
  return (
    <>
      <div className="h-28 rounded-xl bg-slate-900 mx-auto sticky flex align-center justify-between gap-6 mr-5 ml-5 mb-10">
        <div className="leftside flex align-center justify-center">
          <ul className="navbar-links pl-5">
            <li className="pt-5 pl-2">
              <Link
                className=""
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#hero"
              >
                <img className="navLogo" src={logo} width={300} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightside">
          <ul className="flex align-center justify-center gap-20 pt-7 pr-10">
            <li className="navButtons">
              <Link
                className="link"
                activeClass="active"
                to="prompt"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#prompt"
              >
                <h3>{".prompt"}</h3>
              </Link>
            </li>
            <li className="navButtons">
              <Link
                className="link"
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#hero"
              >
                <h3>{".about"}</h3>
              </Link>
            </li>
            <li className="navButtons">
              <Link
                className="link"
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#hero"
              >
                <h3>{".help"}</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
