// import './App.css';

function App() {
  return (
      <header>
        <nav class="navbar is-fixed-top px-4" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a href="/" class="navbar-item has-text-weight-bold">
                Home
              </a>

              <a href="/" class="navbar-item has-text-weight-bold">
                Documentation
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a href="/" class="navbar-link">
                  More
                </a>

                <div class="navbar-dropdown">
                  <a href="/" class="navbar-item">
                    About
                  </a>
                  <a href="/" class="navbar-item">
                    Jobs
                  </a>
                  <a href="/" class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider" />
                  <a href="/" class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a href="/" class="button is-primary">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
  );
}

export default App;
