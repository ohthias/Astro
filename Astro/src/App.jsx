import "./components/index/Navbar.css";

function IndexAstro() {
  return <>{navBar()}</>;
}

function navBar() {
  return (
    <>
      <nav className="navgation_index">
        <button className="navgation_index_button-logo bebas-neue">Astro</button>
        <div className="navgation_index_container">
          <a href="https://github.com/Matheus-Gabriel07/Astro" target="_blank" className="navegation_link bebas-neue">Documentação</a>
          <a href="#" target="_blank" className="navegation_link bebas-neue">Sobre</a>
          <button className="button_entrar bebas-neue">Entrar</button>
        </div>
      </nav>
    </>
  );
}

export default IndexAstro;
