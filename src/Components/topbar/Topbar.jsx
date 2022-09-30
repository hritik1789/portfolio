import "./topbar.scss"
import Person from "@material-ui/icons/Person"
import Mail from "@material-ui/icons/Mail"


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active") } >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemcontainer">
            <Person  className="icon"/>
            <span> +91 9582138069</span>
          </div>
          <div className="itemcontainer">
            <Mail  className="icon"/>
            <span>hritikyadav014@gmail.com</span>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={ ()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
