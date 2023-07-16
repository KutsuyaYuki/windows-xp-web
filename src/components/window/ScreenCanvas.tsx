
import { DesktopGrid } from "../desktop/DesktopGrid";
import { WindowCollection } from "./WindowCollection";
export function ScreenCanvas() {
  return (
    <div className="screenCanvas">
      <DesktopGrid></DesktopGrid>
      <WindowCollection></WindowCollection>
    </div>
  );
}