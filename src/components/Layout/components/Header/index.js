import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "tippy.js/dist/tippy.css";
import Button from "../../../Button";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import {
  faCircleXmark,
  faCloudUploadAlt,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faQuestion,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "./SearchAccountItem";
import Menu from "../../../Popper/Menu";

const handleMenuChange = (menuItem) => {
  switch (menuItem.type) {
    case "language":
      // fcc
      break;
    default:
  }
};
const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "En",
          title: "English",
        },
        {
          code: "Fc",
          title: "France",
        },
        {
          code: "Vi",
          title: "Vietnam",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: "Feeback and Help",
    to: "/feedback_page",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Shorcut",
  },
];
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TIKTOK" />
        </div>
        <Tippy
          interactive
          visibles
          render={(attrs) => (
            <div className={cx("search-tippy")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck="false"
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <div />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <button>
                <FontAwesomeIcon icon={faCloudUploadAlt} />
              </button>
              <button>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text to="/upload">
                Up load
              </Button>
              <Button primary>Log in</Button>
            </>
          )}
          {currentUser ? (
            <>
              <div>Avatar</div>
            </>
          ) : (
            <>
              <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                <button className={cx("menu-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
        <div />
      </div>
    </header>
  );
}

export default Header;
