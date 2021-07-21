import Menu2 from "./Menu2"
function Header(props) {
    return (
      <div>
      <div className="header">
        <Menu2 className="myDrawer" sx={{margin:2}} />
        <h1 className='header-text header-h1 '>Deep Wild South</h1>
        <h4 className='header-text header-h4 '>Sustainable, cultural eco-tourism</h4>
        <h4 className='header-text header-h4 '>Southern Belize</h4>

      </div>
      </div>
    );
  }
  
  export default Header;