import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem(props) {
  return (
    <div className={cx("wrapper")}>
      <img src={props.avatar} alt="" className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{props.name}</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </h4>
        <h4 className={cx("username")}>{props.fullname}</h4>
      </div>
    </div>
  );
}
export default AccountItem;
