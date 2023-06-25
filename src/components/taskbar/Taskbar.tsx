import { WindowItem } from "../../models/windowItem";

export type TaskbarProps = { 
    startButtonPressed: (pressed: boolean | ((o: boolean) => boolean)) => void;
    windowItems: WindowItem[];
};
export function Taskbar({startButtonPressed, windowItems}: TaskbarProps) {
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
        <div className="taskbar-windows-list">{windowItems.map((windowItem, index) => {
            return (<div className="taskbar-window-entry" key={index}>
                <img src="images/icons/explorer.png" className="taskbar-windows-icon" alt="Explorer" width="24" height="24" />
                <span className="taskbar-windows-title">{windowItem.title}</span>
            </div>);
        })}
        </div>
      <div className="clock" id="current-time"></div>
    </div>);
}

export default Taskbar;