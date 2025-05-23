
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="iq-sidebar  sidebar-default ">
      <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
        <a href="index-2.html" className="header-logo">
          <img
            src="Admin/assets/images/logo.png"
            className="img-fluid rounded-normal light-logo"
            alt="logo"
          />
          <h5 className="logo-title light-logo ml-3">Afjal24</h5>
        </a>
        <div className="iq-menu-bt-sidebar ml-0">
          <i class="fa fa-bars wrapper-menu"></i>
        </div>
      </div>
      <div className="data-scrollbar" data-scroll={1}>
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="active">
              <Link to="/Home" className="svg-icon">
                <svg
                  className="svg-icon"
                  id="p-dash1"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1={12} y1="22.08" x2={12} y2={12} />
                </svg>
                <span className="ml-4">Dashboards</span>
              </Link>
            </li>
            <li className=" ">
              <a
                href="#product"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash2"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={9} cy={21} r={1} />
                  <circle cx={20} cy={21} r={1} />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className="ml-4">Products</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="product"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="">
                  <Link to="/Video">
                    <i className="fa fa-minus" />
                    <span>List Product</span>
                  </Link>
                </li>
                <li className="">
                  <a href="page-add-product.html">
                    <i className="fa fa-minus" />
                    <span>Add Product</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#category"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash3"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span className="ml-4">Home</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="category"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="">
                  <Link to="/Imgnavigation">
                    <i className="fa fa-minus" />
                    <span>Img Navigation</span>
                  </Link>
                </li>
                <li className="">
                  <a href="page-add-category.html">
                    <i className="fa fa-minus" />
                    <span>Add Category</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#sale"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash4"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
                <span className="ml-4">Sale</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="sale"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="">
                  <a href="page-list-sale.html">
                    <i className="fa fa-minus" />
                    <span>List Sale</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-add-sale.html">
                    <i className="fa fa-minus" />
                    <span>Add Sale</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#purchase"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash5"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                  <line x1={1} y1={10} x2={23} y2={10} />
                </svg>
                <span className="ml-4">Purchases</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="purchase"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="">
                  <a href="page-list-purchase.html">
                    <i className="fa fa-minus" />
                    <span>List Purchases</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-add-purchase.html">
                    <i className="fa fa-minus" />
                    <span>Add purchase</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#return"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash6"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1={14} y1={10} x2={21} y2={3} />
                  <line x1={3} y1={21} x2={10} y2={14} />
                </svg>
                <span className="ml-4">Returns</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="return"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="">
                  <a href="page-list-returns.html">
                    <i className="fa fa-minus" />
                    <span>List Returns</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-add-return.html">
                    <i className="fa fa-minus" />
                    <span>Add Return</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#people"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash8"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="ml-4">People</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="people"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="">
                  <a href="page-list-customers.html">
                    <i className="fa fa-minus" />
                    <span>Customers</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-add-customers.html">
                    <i className="fa fa-minus" />
                    <span>Add Customers</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-list-users.html">
                    <i className="las la-minus" />
                    <span>Users</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-add-users.html">
                    <i className="las la-minus" />
                    <span>Add Users</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-list-suppliers.html">
                    <i className="las la-minus" />
                    <span>Suppliers</span>
                  </a>
                </li>
                <li className="">
                  <a href="page-add-supplier.html">
                    <i className="las la-minus" />
                    <span>Add Suppliers</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="page-report.html" className="">
                <svg
                  className="svg-icon"
                  id="p-dash7"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1={16} y1={13} x2={8} y2={13} />
                  <line x1={16} y1={17} x2={8} y2={17} />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="ml-4">Reports</span>
              </a>
              <ul
                id="reports"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              ></ul>
            </li>
            <li className=" ">
              <a
                href="#otherpage"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash9"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                  <rect x={7} y={7} width={3} height={9} />
                  <rect x={14} y={7} width={3} height={5} />
                </svg>
                <span className="ml-4">other page</span>
                <svg
                  className="svg-icon iq-arrow-right arrow-active"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="10 15 15 20 20 15" />
                  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                </svg>
              </a>
              <ul
                id="otherpage"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className=" ">
                  <a
                    href="#user"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash10"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <polyline points="17 11 19 13 23 9" />
                    </svg>
                    <span className="ml-4">User Details</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="user"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="https://templates.iqonic.design/posdash/html/app/user-profile.html">
                        <i className="las la-minus" />
                        <span>User Profile</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="https://templates.iqonic.design/posdash/html/app/user-add.html">
                        <i className="las la-minus" />
                        <span>User Add</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="https://templates.iqonic.design/posdash/html/app/user-list.html">
                        <i className="las la-minus" />
                        <span>User List</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#ui"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash11"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    <span className="ml-4">UI Elements</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="ui"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="ui-avatars.html">
                        <i className="las la-minus" />
                        <span>Avatars</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-alerts.html">
                        <i className="las la-minus" />
                        <span>Alerts</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-badges.html">
                        <i className="las la-minus" />
                        <span>Badges</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-breadcrumb.html">
                        <i className="las la-minus" />
                        <span>Breadcrumb</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-buttons.html">
                        <i className="las la-minus" />
                        <span>Buttons</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-buttons-group.html">
                        <i className="las la-minus" />
                        <span>Buttons Group</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-boxshadow.html">
                        <i className="las la-minus" />
                        <span>Box Shadow</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-colors.html">
                        <i className="las la-minus" />
                        <span>Colors</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-cards.html">
                        <i className="las la-minus" />
                        <span>Cards</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-carousel.html">
                        <i className="las la-minus" />
                        <span>Carousel</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-grid.html">
                        <i className="las la-minus" />
                        <span>Grid</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-helper-classes.html">
                        <i className="las la-minus" />
                        <span>Helper classes</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-images.html">
                        <i className="las la-minus" />
                        <span>Images</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-list-group.html">
                        <i className="las la-minus" />
                        <span>list Group</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-media-object.html">
                        <i className="las la-minus" />
                        <span>Media</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-modal.html">
                        <i className="las la-minus" />
                        <span>Modal</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-notifications.html">
                        <i className="las la-minus" />
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-pagination.html">
                        <i className="las la-minus" />
                        <span>Pagination</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-popovers.html">
                        <i className="las la-minus" />
                        <span>Popovers</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-progressbars.html">
                        <i className="las la-minus" />
                        <span>Progressbars</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-typography.html">
                        <i className="las la-minus" />
                        <span>Typography</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-tabs.html">
                        <i className="las la-minus" />
                        <span>Tabs</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-tooltips.html">
                        <i className="las la-minus" />
                        <span>Tooltips</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="ui-embed-video.html">
                        <i className="las la-minus" />
                        <span>Video</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#auth"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash12"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="ml-4">Authentication</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="auth"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="auth-sign-in.html">
                        <i className="las la-minus" />
                        <span>Login</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="auth-sign-up.html">
                        <i className="las la-minus" />
                        <span>Register</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="auth-recoverpw.html">
                        <i className="las la-minus" />
                        <span>Recover Password</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="auth-confirm-mail.html">
                        <i className="las la-minus" />
                        <span>Confirm Mail</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="auth-lock-screen.html">
                        <i className="las la-minus" />
                        <span>Lock Screen</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a
                    href="#form"
                    className="collapsed svg-icon"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash13"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
                    </svg>
                    <span className="ml-4">Forms</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="form"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="form-layout.html">
                        <i className="las la-minus" />
                        <span className="">Form Elements</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="form-input-group.html" className="svg-icon">
                        <i className="las la-minus" />
                        <span className="">Form Input</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="form-validation.html" className="svg-icon">
                        <i className="las la-minus" />
                        <span className="">Form Validation</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="form-switch.html" className="svg-icon">
                        <i className="las la-minus" />
                        <span className="">Form Switch</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="form-chechbox.html" className="svg-icon">
                        <i className="las la-minus" />
                        <span className="">Form Checkbox</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="form-radio.html" className="svg-icon">
                        <i className="las la-minus" />
                        <span className="">Form Radio</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="form-textarea.html" className="svg-icon">
                        <i className="las la-minus" />
                        <span className="">Form Textarea</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#table"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash14"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={3} y={3} width={7} height={7} />
                      <rect x={14} y={3} width={7} height={7} />
                      <rect x={14} y={14} width={7} height={7} />
                      <rect x={3} y={14} width={7} height={7} />
                    </svg>
                    <span className="ml-4">Table</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="table"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="tables-basic.html">
                        <i className="las la-minus" />
                        <span>Basic Tables</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="table-data.html">
                        <i className="las la-minus" />
                        <span>Data Table</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="table-tree.html">
                        <i className="las la-minus" />
                        <span>Table Tree</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="#pricing"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash16"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx={12} cy={5} rx={9} ry={3} />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                    <span className="ml-4">Pricing</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="pricing"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="pricing.html">
                        <i className="las la-minus" />
                        <span>Pricing 1</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="pricing-2.html">
                        <i className="las la-minus" />
                        <span>Pricing 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="pages-invoice.html" className="svg-icon">
                    <svg
                      className="svg-icon"
                      id="p-dash07"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="ml-4">Invoice</span>
                  </a>
                </li>
                <li className=" ">
                  <a
                    href="#pages-error"
                    className="collapsed"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <svg
                      className="svg-icon"
                      id="p-dash17"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1={12} y1={9} x2={12} y2={13} />
                      <line x1={12} y1={17} x2="12.01" y2={17} />
                    </svg>
                    <span className="ml-4">Error</span>
                    <svg
                      className="svg-icon iq-arrow-right arrow-active"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 15 15 20 20 15" />
                      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                    </svg>
                  </a>
                  <ul
                    id="pages-error"
                    className="iq-submenu collapse"
                    data-parent="#otherpage"
                  >
                    <li className="">
                      <a href="pages-error.html">
                        <i className="las la-minus" />
                        <span>Error 404</span>
                      </a>
                    </li>
                    <li className="">
                      <a href="pages-error-500.html">
                        <i className="las la-minus" />
                        <span>Error 500</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="pages-blank-page.html">
                    <svg
                      className="svg-icon"
                      id="p-dash18"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                    <span className="ml-4">Blank Page</span>
                  </a>
                </li>
                <li className="">
                  <a href="pages-maintenance.html">
                    <svg
                      className="svg-icon"
                      id="p-dash19"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    <span className="ml-4">Maintenance</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="sidebar-bottom" className="position-relative sidebar-bottom">
          <div className="card border-none">
            <div className="card-body p-0">
              <div className="sidebarbottom-content">
                <div className="image">
                  <img
                    src="Admin/assets/images/layouts/side-bkg.png"
                    className="img-fluid"
                    alt="side-bkg"
                  />
                </div>
                <h6 className="mt-4 px-4 body-title">
                  Get More Feature by Upgrading
                </h6>
                <button type="button" className="btn sidebar-bottom-btn mt-4">
                  Go Premium
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3" />
      </div>
    </div>
  );
}
export default Sidebar;
