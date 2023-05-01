export type TaskbarProps = { 
    startButtonPressed: (pressed: boolean | ((o: boolean) => boolean)) => void;
};
export function Taskbar({startButtonPressed}: TaskbarProps) {
    return (<div className="taskbar">
        <div className="start-button" onMouseDown={() => startButtonPressed(previousState => !previousState)}>
            Start
        </div>
        <div className="quick-launch">
            <button className="quick-launch-button">
                <img src="images/icons/desktop.png" className="show-desktop" alt="Show Desktop" width="24" height="24" data-programfile="explorer" />
            </button>
            <button className="quick-launch-button">
                <img src="images/icons/explorer.png" className="show-explorer" alt="Explorer" width="24" height="24" />
            </button>
        </div>
        <div className="open-windows-list"></div>
      <div className="clock" id="current-time"></div>
    </div>);
}

export default Taskbar;