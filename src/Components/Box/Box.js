import React from "react";
import "./Box.css";
import { ReactComponent as ArrowRight } from "../../assets/angle-right-solid.svg";

const Box = ({ data, half }) => {
  const boxStyle = {
    background: `url(${data.backgroundImg}) no-repeat  center`,
    backgroundSize: "cover",
    height: half ? "600px" : "700px",
    color: `${data?.color ?? "inherit"}`,
    margin: half ? "0.4rem" : "inital",
  };

  const addHalfToClass = (name) => {
    return `${name}${half ? "_half" : ""}`;
  };

  return (
    <div className={addHalfToClass("box")} style={boxStyle}>
      <div className={`box__content box__${data?.contentPos ?? "top"}`}>
        {data?.title ? (
          <div className={addHalfToClass("box__content__title")}>
            {data.title}
          </div>
        ) : data?.logo ? (
          <div>
            <img
              className={addHalfToClass("box__content__logo")}
              alt=""
              src={data.logo}
            />
          </div>
        ) : null}
        {data?.subHeading && (
          <div className={addHalfToClass("box__content__subHeading")}>
            {data.subHeading}
            {data?.subHeadingImg ? (
              <img
                className={addHalfToClass("box__content__subHeading__img")}
                alt=""
                src={data.subHeadingImg}
              />
            ) : null}
          </div>
        )}
        <div className={addHalfToClass("box__content__info")}>{data?.info}</div>
        {data?.links && data.links?.length > 0 && (
          <div className={`box__content__links${half ? " links_half" : ""}`}>
            {data.links.map((link, idx) => (
              <a
                key={`box-link-${idx}`}
                style={
                  data?.color === "white"
                    ? { color: "#2997ff" }
                    : { color: "#06c" }
                }
                href={link?.href}
              >
                <span>{link?.name}</span>
                <ArrowRight
                  className="box__content__links__arrowRight"
                  height={14}
                  fill={`${data?.color === "white" ? "#2997ff" : "#06c"}`}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
