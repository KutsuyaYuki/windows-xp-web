import { MenuItem } from "../../../models/menuItem";

export type ChildMenuProps = {
  menu: MenuItem[];
};

export function ChildMenu({ menu }: ChildMenuProps) {
  return (
    <>
      {menu.map((menuItem) => (
        <div className="menu-item">
          {menuItem.name}
          {menuItem.children && (
            <div className="menu-children-container">
              <div className="menu-children">
                <ChildMenu menu={menuItem.children} />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
