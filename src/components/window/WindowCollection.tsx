import { useContext } from "react";
import ErrorWindow from "./ErrorWindow";
import TitlebarWindow from "./TitlebarWindow";
import { WindowContext } from "./WindowContext";
export function WindowCollection() {
    const windowContext = useContext(WindowContext);
    return (<>{windowContext.windowItems.map((window, index) => {
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
      })}</>);
}