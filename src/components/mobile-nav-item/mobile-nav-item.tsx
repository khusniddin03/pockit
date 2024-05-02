import { INavItem } from "@/types";
import { Link } from "react-router-dom";
import ArrowDown from "../arrow-down/arrow-down";
import { useState } from "react";

interface IProps extends INavItem {
  setActive: (value: boolean) => void;
}

export default function MobileNavItem(props: IProps): React.ReactElement {
  const { label, path, children, setActive } = props;
  const [collapse, setCollapse] = useState<boolean>(false);

  const onCollapse = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCollapse(!collapse);
  };

  const closeModal = () => {
    setActive(false);
  };

  return (
    <li
      className={`mobile-burger__item${collapse ? " active" : ""}`}
      onClick={closeModal}
    >
      <Link className="mobile-burger__link" to={path}>
        {label}
      </Link>
      {children?.length && (
        <>
          <div onClick={onCollapse} className="mobile-burger__icon">
            <ArrowDown />
          </div>
          <div className="mobile-burger__child-content">
            <ul className="mobile-burger__children">
              {children?.map((child, index) => (
                <li key={index}>
                  <Link
                    className="mobile-burger__children-link"
                    to={child?.path}
                  >
                    {child?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
}
