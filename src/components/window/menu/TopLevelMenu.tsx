import { useState } from "react";
import { MenuItem } from "../../../models/menuItem";
import { ChildMenu } from "./ChildMenu";

export type TopLevelMenuProps = {
  menu: MenuItem[];
};

export function TopLevelMenu({ menu }: TopLevelMenuProps) {
  const [isOpen, setIsOpen] = useState<MenuItem | undefined>();

  const toggleMenu = (menuItem: MenuItem) => {
    setIsOpen(menuItem);
  };
  return (
    <div className="menu-bar">
      {menu.map((menuItem) => (
        <div className="menu-item" onClick={() => toggleMenu(menuItem)}>
          {menuItem.name}
          {menuItem.children && (
            <div
              className="menu-children-container"
              style={{ display: isOpen == menuItem ? "flex" : "none" }}
            >
              <div className="menu-children">
                <ChildMenu menu={menuItem.children} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
