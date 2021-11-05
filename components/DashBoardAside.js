import classes from "./DashBoardAside.module.css";
import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const DashBoardAside = () => {
  const router = useRouter();
  const { toggleDropdown, isDropdown, asideContents } = useGlobalContext();

  return (
    <div className={classes.asideMain}>
      <header className={classes.asideHeader}>
        <div style={{ padding: "10px" }}>
          <Image width={100} height={50} src="/WORDMARK.png" />
        </div>
      </header>

      <ul className={classes.asideContainer}>
        {React.Children.toArray(
          asideContents.map((aside) => {
            return (
              <li className={classes.aside} key={aside.text}>
                <Link
                  href={aside.link && "/dashboard" + aside.link}
                  className={classes.asideLink}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "baseline",
                  }}
                >
                  <a
                    className={classes.link_flex}
                    onClick={() => toggleDropdown(aside)}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <span className={classes.icon}>{aside.icon}</span>
                      <span style={{ fontSize: "14px" }}>{aside.text}</span>
                    </span>{" "}
                    <span>
                      {aside.expandable && (
                        <>
                          {aside.open ? (
                            <MdKeyboardArrowDown />
                          ) : (
                            <MdKeyboardArrowRight />
                          )}
                        </>
                      )}
                    </span>
                  </a>
                </Link>

                <div
                  className={aside.open ? classes.showdrop : classes.hide_drop}
                >
                  {aside.dropdown && (
                    <div className={classes.dropdown}>
                      {React.Children.toArray(
                        aside.dropdown.map((drop) => {
                          return (
                            <Link
                              key={drop.text}
                              href={"/dashboard" + drop.link}
                            >
                              <a
                                style={{
                                  display: "flex",
                                  gap: "15px",
                                  alignItems: "center",
                                }}
                              >
                                <span>
                                  <BiLogInCircle />
                                </span>
                                <span style={{ fontSize: "13px" }}>
                                  {drop.text}
                                </span>
                              </a>
                            </Link>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
export default DashBoardAside;
