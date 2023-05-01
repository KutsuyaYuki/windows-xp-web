export function StartMenu() {
    return (<div className="start-menu">
    <div className="start-menu-header">
      <div className="start-menu-header-left">
        <span>Start</span>
      </div>
      <div className="start-menu-header-right"></div>
    </div>
    <div className="start-menu-body">
      <div className="start-menu-group-right">
        <div className="start-menu-group-right-items">
          <button className="start-menu-button start-menu-item" data-programfile="explorer">
            <p>Documents</p>
          </button>
          <button className="start-menu-button start-menu-item">
            <p>My Pictures</p>
          </button>
          <button className="start-menu-button">
            <p>My Music</p>
          </button>
          <button className="start-menu-button">
            <p>My Computer</p>
          </button>
          <button className="start-menu-button">
            <p>Control Panel</p>
          </button>
        </div>
      </div>
      <div className="start-menu-group-left">
        <div className="start-menu-group-item">
          <div className="start-menu-group-left-items">
            <button className="start-menu-button-left">
              <p>Calculator</p>
            </button>
            ...
          </div>
          <div className="start-menu-group-left-items">
            <button className="start-menu-button-left start-menu-item" data-programfile="notepad">
              <p>Notepad</p>
            </button>
          </div>
          <div className="start-menu-group-left-items">
            <button className="start-menu-button-left">
              <p>All programs</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="start-menu-footer">
      {/* <button className="start-menu-button button-logoff">
          <p>Log Off...</p>
        </button>
        <button className="start-menu-button button-shutdown">
          <p>Shut Down...</p>
        </button> */}
    </div>
  </div>);
}

export default StartMenu;