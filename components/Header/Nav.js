import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import MenuData from "../../data/MegaMenu";

import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";

import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const router = useRouter();

  const isActive = (href) => router.pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={` color-white`} href="/">
           About Us
          </Link>
        </li>

        {/* <li className="with-megamenu has-menu-child-item position-static">
          <Link className={` color-white `} onClick={() => {}} href="About">
            About us
          </Link>
        </li> */}

        {/* <li className="with-megamenu has-menu-child-item">
          <Link
            className={`${
              activeMenuItem === "courses" ? "open" : ""
            } color-white`}
            href="Brands"
            onClick={() => toggleMenuItem("courses")}
          >
            Brands
            <i className="feather-chevron-down"></i>
          </Link>

          <div
            className={`rbt-megamenu grid-item-2 ${
              activeMenuItem === "courses" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              {MenuData &&
                MenuData.menuData.map((data, index) => {
                  if (data.menuType === "grid-item-2") {
                    const elements = data.submenuBanner?.map(
                      (value, innerIndex) => (
                        <div className="row" key={innerIndex}>
                          <div className="col-lg-12">
                            <div className="mega-top-banner">
                              <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="description">
                                  {value.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    );
                    return elements;
                  }
                })}
              <div className="row row--15">
                <CourseLayout
                  courseTitle="Course Layout"
                  MenuData={MenuData}
                  type="grid-item-2"
                  courseType={true}
                  num={7}
                />
                <CourseLayout
                  courseTitle="Course Layout"
                  MenuData={MenuData}
                  type="grid-item-2"
                  courseType={false}
                  num={6}
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="nav-quick-access">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-2") {
                          const coursElements = data.menuFooterItems?.map(
                            (value, innerIndex) => (
                              <li key={innerIndex}>
                                <Link href={value.link}>
                                  <i className="feather-folder-minus"></i>
                                  {value.title}
                                </Link>
                              </li>
                            )
                          );
                          return coursElements;
                        }
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${
              activeMenuItem === "dashboard" ? "open" : ""
            } color-white`}
            href="Investors"
            onClick={() => toggleMenuItem("dashboard")}
          >
            Investors
            <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "dashboard" ? "active d-block" : ""
            }`}
          >
            {MenuData &&
              MenuData.menuData.map((data, index) => {
                if (data.menuType === "default-dropdown") {
                  const elements = data.menuItems?.map((value, innerIndex) => (
                    <li className="has-dropdown" key={innerIndex}>
                      <Link href="#">{value.title}</Link>
                      <ul className="submenu">
                        {value.submenuItems?.map(
                          (submenuItem, submenuItemIndex) => (
                            <li key={submenuItemIndex}>
                              <Link href={submenuItem.link}>
                                {submenuItem.title}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ));
                  return elements;
                }
                return null;
              })}
          </ul>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="Coporate"
            className={`${
              activeMenuItem === "pages" ? "open" : ""
            } color-white`}
            onClick={() => toggleMenuItem("pages")}
          >
            Coporate
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu grid-item-4 ${
              activeMenuItem === "pages" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--15">
                <PageLayout
                  title="Get Started"
                  MenuData={MenuData}
                  menuGrid="grid-item-4"
                  gridNumber="1"
                />
                <PageLayout
                  title="Get Started"
                  MenuData={MenuData}
                  menuGrid="grid-item-4"
                  gridNumber="2"
                />
                <PageLayout
                  title="Shop Pages"
                  MenuData={MenuData}
                  menuGrid="grid-item-4"
                  gridNumber="3"
                />
                <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                  <div className="mega-category-item">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-4") {
                          const elements = data.gridMenuItems4?.map(
                            (value, innerIndex) => (
                              <div
                                className="nav-category-item"
                                key={innerIndex}
                              >
                                <div className="thumbnail">
                                  <div className="image">
                                    {value.image ? (
                                      <Image
                                        src={value.image}
                                        width={454}
                                        height={332}
                                        alt={value.title}
                                      />
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <Link href={value.link}>
                                    <span>{value.title}</span>
                                    <i className="feather-chevron-right"></i>
                                  </Link>
                                </div>
                              </div>
                            )
                          );
                          return elements;
                        }
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="Newsroom"
            className={`${
              activeMenuItem === "elements" ? "open" : ""
            } color-white`}
            onClick={() => toggleMenuItem("elements")}
          >
            Newsroom
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu grid-item-3 ${
              activeMenuItem === "elements" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--15 single-dropdown-menu-presentation">
                <ElementsLayout
                  MenuData={MenuData}
                  menuGrid="grid-item-3"
                  num1={0}
                  num2={9}
                />
                <ElementsLayout
                  MenuData={MenuData}
                  menuGrid="grid-item-3"
                  num1={10}
                  num2={18}
                />
                <ElementsLayout
                  MenuData={MenuData}
                  menuGrid="grid-item-3"
                  num1={19}
                  num2={26}
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="btn-wrapper">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Visit Histudy Template</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="Careers"
            className={`${activeMenuItem === "blog" ? "open" : ""} color-white`}
            onClick={() => toggleMenuItem("blog")}
          >
            Careers
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu grid-item-3 ${
              activeMenuItem === "blog" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--15">
                <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                  <h3 className="rbt-short-title">Blog Styles</h3>
                  <ul className="mega-menu-item">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-5") {
                          const elements = data.menuItems?.map(
                            (value, innerIndex) =>
                              value.id <= 7 && (
                                <li key={innerIndex}>
                                  <Link
                                    className={
                                      isActive(value.link) ? "active" : ""
                                    }
                                    href={
                                      value.coming ? "/maintenance" : value.link
                                    }
                                  >
                                    {value.title}
                                    {value.coming ? (
                                      <span className="rbt-badge-card ms-3">
                                        {value.coming}
                                      </span>
                                    ) : value.subTitle ? (
                                      <span className="rbt-badge-card">
                                        {value.subTitle}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </li>
                              )
                          );
                          return elements;
                        }
                      })}
                  </ul>
                </div>
                <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                  <h3 className="rbt-short-title">Get Started</h3>
                  <ul className="mega-menu-item">
                    {MenuData &&
                      MenuData.menuData.map((data, index) => {
                        if (data.menuType === "grid-item-5") {
                          const elements = data.menuItems?.map(
                            (value, innerIndex) =>
                              value.id > 7 &&
                              value.id <= 14 && (
                                <li key={innerIndex}>
                                  <Link
                                    href={
                                      value.coming ? "/maintenance" : value.link
                                    }
                                    className={
                                      isActive(value.link) ? "active" : ""
                                    }
                                  >
                                    {value.title}
                                    {value.coming ? (
                                      <span className="rbt-badge-card ms-3">
                                        {value.coming}
                                      </span>
                                    ) : value.subTitle ? (
                                      <span className="rbt-badge-card">
                                        {value.subTitle}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </li>
                              )
                          );
                          return elements;
                        }
                      })}
                  </ul>
                </div>
                <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                  <div className="rbt-ads-wrapper">
                    <Link className="d-block" href="#">
                      <Image src={addImage} alt="Education Images" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li> */}

        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            className={` color-white`}
            onClick={() => {}}
            href="why-talentely"
          >
            Why Talentely
          </Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            className={` color-white`}
            onClick={() => {}}
            href="our-solution"
          >
            Our Solution                                                                                                
          </Link>
        </li>
        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={` color-white`} onClick={() => {}} href="contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
