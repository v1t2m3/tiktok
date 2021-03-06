import React, { useEffect, useState } from "react";
import Styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import Button from "../../../Button";
import AccountItem from "../../components/Header/SearchAccountItem";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Styles);

function SideBar() {
  const [suggestedList, setSuggestedList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3400/suggested_acc").then((response) => {
      setSuggestedList(response.data);
    });
  }, []);
  console.log(suggestedList);

  return (
    <aside className={cx("wrapper")}>
      <div className={cx("menu")}>
        <Button
          className={cx("menu-item")}
          to="/forYou"
          leftIcon={<FontAwesomeIcon icon={faHouse} />}
        >
          For You
        </Button>
        <Button
          className={cx("menu-item")}
          to="/following"
          leftIcon={<FontAwesomeIcon icon={faUserGroup} />}
        >
          Following
        </Button>
        <Button
          className={cx("menu-item")}
          to="/live"
          leftIcon={<FontAwesomeIcon icon={faVideo} />}
        >
          LIVE
        </Button>
      </div>
      <div className={cx("suggested-accounts")}>
        <p>Suggested accounts</p>
        {suggestedList.map((item) => (
          <AccountItem key={item.id} info={item} />
        ))}
        <Button to="/seeall" className={cx("seeall-btn")}>
          See all
        </Button>
      </div>
      <div className={cx("discovery")}>
        <Button className={cx("hashtag")} rounded>
          #giaitri
        </Button>
        <Button className={cx("hashtag")} rounded>
          #amnhac
        </Button>
        <Button className={cx("hashtag")} rounded>
          #thegioidienanh
        </Button>
        <Button className={cx("hashtag")} rounded>
          #critianoRonaldo
        </Button>
        <Button className={cx("hashtag")} rounded>
          # Vi???t Nam h???i!
        </Button>
        <Button className={cx("hashtag")} rounded>
          # Kh??ng ai chung t??nh ???????c m??i
        </Button>
        <Button className={cx("hashtag")} rounded>
          # N??? c?????i tu???i 18
        </Button>
        <Button className={cx("hashtag")} rounded>
          # Anh thanh ni??n
        </Button>
      </div>
    </aside>
  );
}

export default SideBar;
