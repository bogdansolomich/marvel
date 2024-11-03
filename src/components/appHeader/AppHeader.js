import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <a href="https://bogdansolomich.github.io/marvel/">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <a href="https://bogdansolomich.github.io/marvel/">Characters</a>
          </li>
          /
          <li>
            <a href="https://bogdansolomich.github.io/marvel/">Comics</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
