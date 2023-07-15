import { useContext } from "react";
import ErrorWindow from "./ErrorWindow";
import TitlebarWindow from "./TitlebarWindow";
import { WindowContext } from "./WindowContext";
export function ScreenCanvas(){
    const windowContext = useContext(WindowContext);
    return (<div className="screenCanvas">      
    {windowContext.windowItems.map((window, index) => {
            if (window.isError) {
              return (<ErrorWindow windowId={window.id} title={window.title} key={index}>{window.content}</ErrorWindow>)
            }
            return (
              <TitlebarWindow
                windowId={window.id}
                title={window.title}
                key={index}>
                {window.content}
              </TitlebarWindow>
            );
          })}
    </div>);
}