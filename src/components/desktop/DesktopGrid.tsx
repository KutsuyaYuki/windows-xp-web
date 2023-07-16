
import { DesktopIcon } from "./DesktopIcon";
import { AppName } from "../apps/AppWindow";
import { WidthProvider, Responsive, Layouts } from "react-grid-layout";
import { useEffect, useState } from "react";

export function DesktopGrid() {
const originalLayouts = getFromLS("layouts") || {};
    const ResponsiveReactGridLayout = WidthProvider(Responsive);

    const [state, setState] = useState<{layouts: Layouts}>({layouts: JSON.parse(JSON.stringify(originalLayouts))});


    function onLayoutChange(layouts: Layouts) {
        saveToLS({
            layouts: layouts
        });
    }

    return (
        <ResponsiveReactGridLayout className="layout" rowHeight={30} width={1200} verticalCompact={false}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            
          onLayoutChange={(_layout, layouts) =>
            onLayoutChange(layouts)
          }
          layouts={state.layouts}
          >
            
            
            <div key="c">
                <DesktopIcon icon="folder.png" classname="desktop-icon" alt="Folder" name={AppName.explorer}></DesktopIcon>
            </div>
        </ResponsiveReactGridLayout>
    );
}

function getFromLS(key:string) {
    let ls:{[key:string]:unknown} = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem("rgl-8")??"{}") || {};
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls[key];
  }
  
  function saveToLS(item:{[key:string]:unknown}) {
    if (global.localStorage) {
      global.localStorage.setItem(
        "rgl-8",
        JSON.stringify(item)
      );
    }
  }