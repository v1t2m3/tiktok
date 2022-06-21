import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "../../Popper";
import classNames from "classnames/bind";
import Styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(Styles);
function Menu({ children, items = [] }) {
  const renderItems = () => {
    items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
export default Menu;
