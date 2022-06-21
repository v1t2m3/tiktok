import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "tippy.js/dist/tippy.css";
import Button from "../../../Button";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import {
  faBoltLightning,
  faCircleXmark,
  faMagnifyingGlass,
  faMobileButton,
  faSignIn,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "./SearchAccountItem";

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
          visible={searchResult.length > 0}
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
          <Button text to="/upload">
            Up load
          </Button>
          <Button primary>Log in</Button>
          <Button
            rightIcon={<FontAwesomeIcon icon={faBoltLightning} />}
          ></Button>
        </div>
        <div />
      </div>
    </header>
  );
}

export default Header;
