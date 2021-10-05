import './styles.css';
const Header = () => {
    return (
        <header className="header">
        <div className="header__left">
     
        </div>
        <div className="header__center">
          <h1>
            {/* <HighlightIcon /> */}
            Dashbord
          </h1>
        </div>
        <div className="header__right">
     
          {/* <Button type="submit" onClick={user ? signOut : signIn}>
            <h3>{user ? "Logout" : "Login"}</h3>
          </Button> */}
        </div>
      </header>
    )
}

export default Header
