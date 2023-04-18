import headerLogo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header root__content">
      <a className="header__link" href="#">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип-надпись место Россия"
        />
      </a>
    </header>
  );
}

export default Header;
