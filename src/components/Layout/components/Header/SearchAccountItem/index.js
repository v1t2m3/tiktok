import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

function AccountItem() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://images.unsplash.com/photo-1655119373888-1bce2223555a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van Tam</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </p>
      </div>
    </div>
  );
}
export default AccountItem;
