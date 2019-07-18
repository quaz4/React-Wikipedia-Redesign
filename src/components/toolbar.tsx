import * as React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <nav>
        <div className="logo">
          <img 
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg"
            alt=""
          />
        </div>
        <div className="search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-search">
            <circle cx="10" cy="10" r="7" className="primary"/>
            <path className="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
          </svg>
          <input type="text" placeholder="Search Wikipedia..."/>
          <button>GO</button>
        </div>

        <div className="user">
          <img src="https://avatars3.githubusercontent.com/u/3041344?v=4" alt="profile"/>
        </div>
        <div className="hamburger">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-menu">
            <path className="secondary" fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </div>
      </nav>
      
    );
  }
}

export { Toolbar };
export default Toolbar;