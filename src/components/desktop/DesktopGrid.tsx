
import { DesktopIcon } from "./DesktopIcon";
import { AppName } from "../apps/AppWindow";
import { WidthProvider, Responsive, Layouts, Layout } from "react-grid-layout";
import { useContext, useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import { DraggingContext } from "../window/DraggingContext";

export function DesktopGrid() {
  const originalLayouts = getFromLS("layouts") || {};
  const [state, setState] = useState<{ layouts: Layout[] }>({ layouts: JSON.parse(JSON.stringify(originalLayouts)) });
  const {setDisableDrag} = useContext(DraggingContext);

  function onLayoutChange(layouts: Layout[]) {
    saveToLS({
      layouts: layouts
    });
  }
  const windowWidth = window.innerWidth;
  return (
    <GridLayout
      className="layout"
      rowHeight={30}
      width={windowWidth}
      verticalCompact={false}
      cols={windowWidth/64}
      onLayoutChange={(layouts) =>
        onLayoutChange(layouts)
      }
      onDragStart={() => setDisableDrag?.(true)}
      onDragStop={() => setDisableDrag?.(false)}
      layout={state.layouts}
    >
      <div key="c">
        <DesktopIcon icon="folder.png" classname="desktop-icon" alt="Folder" name={AppName.explorer}></DesktopIcon>
      </div>
    </GridLayout>
  );
}

function getFromLS(key: string) {
  let ls: { [key: string]: unknown } = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8") ?? "{}") || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(item: { [key: string]: unknown }) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify(item)
    );
  }
}