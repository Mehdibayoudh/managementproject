import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="mytask-layout">
                    {/* sidebar */}
                    <div className="sidebar px-4 py-4 py-md-5 me-0" style={{backgroundColor: '#343a40'}}>
                        <div className="d-flex flex-column h-100">
                            <a href="index.html" className="mb-0 brand-icon">
        <span className="logo-icon">
          <svg
              width={35}
              height={35}
              fill="currentColor"
              className="bi bi-clipboard-check"
              viewBox="0 0 16 16"
          >
            <path
                fillRule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
        </span>
                                <span className="logo-text">My-Task</span>
                            </a>
                            {/* Menu: main ul */}
                            <ul className="menu-list flex-grow-1 mt-3">
                                <li className="collapsed">
                                    <a
                                        className="m-link active"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#dashboard-Components"
                                        href="#"
                                    >
                                        <i className="icofont-home fs-5" /> <span>Dashboard</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse show" id="dashboard-Components">
                                        <li>
                                            <a className="ms-link active" href="index.html">
                                                {" "}
                                                <span>Hr Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="project-dashboard.html">
                                                {" "}
                                                <span>Project Dashboard</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#project-Components"
                                        href="#"
                                    >
                                        <i className="icofont-briefcase" />
                                        <span>Projects</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="project-Components">
                                        <li>
                                            <a className="ms-link" href="projects.html">
                                                <span>Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="task.html">
                                                <span>Tasks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="timesheet.html">
                                                <span>Timesheet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="team-leader.html">
                                                <span>Leaders</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#tikit-Components"
                                        href="#"
                                    >
                                        <i className="icofont-ticket" /> <span>Tickets</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="tikit-Components">
                                        <li>
                                            <a className="ms-link" href="tickets.html">
                                                {" "}
                                                <span>Tickets View</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="ticket-detail.html">
                                                {" "}
                                                <span>Ticket Detail</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#client-Components"
                                        href="#"
                                    >
                                        <i className="icofont-user-male" /> <span>Our Clients</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="client-Components">
                                        <li>
                                            <a className="ms-link" href="ourclients.html">
                                                {" "}
                                                <span>Clients</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="profile.html">
                                                {" "}
                                                <span>Client Profile</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#emp-Components"
                                        href="#"
                                    >
                                        <i className="icofont-users-alt-5" /> <span>Employees</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="emp-Components">
                                        <li>
                                            <a className="ms-link" href="members.html">
                                                {" "}
                                                <span>Members</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="employee-profile.html">
                                                {" "}
                                                <span>Members Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="holidays.html">
                                                {" "}
                                                <span>Holidays</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="attendance-employees.html">
                                                {" "}
                                                <span>Attendance Employees</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="attendance.html">
                                                {" "}
                                                <span>Attendance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="leave-request.html">
                                                {" "}
                                                <span>Leave Request</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="department.html">
                                                {" "}
                                                <span>Department</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="loan.html">
                                                {" "}
                                                <span>Loan</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-Componentsone"
                                        href="#"
                                    >
                                        <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="menu-Componentsone">
                                        <li>
                                            <a className="ms-link" href="invoices.html">
                                                <span>Invoices</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="payments.html">
                                                <span>Payments</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="expenses.html">
                                                <span>Expenses</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="create-invoice.html">
                                                <span>Create Invoice</span>{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#payroll-Components"
                                        href="#"
                                    >
                                        <i className="icofont-users-alt-5" /> <span>Payroll</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="payroll-Components">
                                        <li>
                                            <a className="ms-link" href="salaryslip.html">
                                                <span>Employee Salary</span>{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#app-Components"
                                        href="#"
                                    >
                                        <i className="icofont-contrast" /> <span>App</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="app-Components">
                                        <li>
                                            <a className="ms-link" href="calendar.html">
                                                {" "}
                                                <span>Calander</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="chat.html">
                                                <span>Chat App</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="collapsed">
                                    <a
                                        className="m-link"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#extra-Components"
                                        href="#"
                                    >
                                        <i className="icofont-code-alt" /> <span>Other Pages</span>{" "}
                                        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
                                    </a>
                                    {/* Menu: Sub menu ul */}
                                    <ul className="sub-menu collapse" id="extra-Components">
                                        <li>
                                            <a className="ms-link" href="charts.html">
                                                {" "}
                                                <span>Apex Charts</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="forms.html">
                                                <span>Forms Example</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="table.html">
                                                {" "}
                                                <span>Table Example</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="review.html">
                                                <span>Reviews Page</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="icon.html">
                                                <span>Icons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="contact.html">
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="widgets.html">
                                                <span>Widgets</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="ms-link" href="todo-list.html">
                                                <span>Todo-List</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="m-link" href="ui-elements/ui-alerts.html">
                                        <i className="icofont-paint" /> <span>UI Components</span>
                                    </a>
                                </li>
                            </ul>
                            {/* Menu: menu collepce btn */}
                            <button
                                type="button"
                                className="btn btn-link sidebar-mini-btn text-light"
                            >
        <span className="ms-2">
          <i className="icofont-bubble-right" />
        </span>
                            </button>
                        </div>
                    </div>
                    {/* main body area */}
                    <div className="main px-lg-4 px-md-4">
                        {/* Body: Header */}
                        <div className="header">
                            <nav className="navbar py-4">
                                <div className="container-xxl">
                                    {/* header rightbar icon */}
                                    <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                                        <div className="d-flex">
                                            <a
                                                className="nav-link text-primary collapsed"
                                                href="help.html"
                                                title="Get Help"
                                            >
                                                <i className="icofont-info-square fs-5" />
                                            </a>
                                            <div className="avatar-list avatar-list-stacked px-3">
                                                <img
                                                    className="avatar rounded-circle"
                                                    src="assets/images/xs/avatar2.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="avatar rounded-circle"
                                                    src="assets/images/xs/avatar1.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="avatar rounded-circle"
                                                    src="assets/images/xs/avatar3.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="avatar rounded-circle"
                                                    src="assets/images/xs/avatar4.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="avatar rounded-circle"
                                                    src="assets/images/xs/avatar7.jpg"
                                                    alt=""
                                                />
                                                <img
                                                    className="avatar rounded-circle"
                                                    src="assets/images/xs/avatar8.jpg"
                                                    alt=""
                                                />
                                                <span
                                                    className="avatar rounded-circle text-center pointer"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#addUser"
                                                >
                  <i className="icofont-ui-add" />
                </span>
                                            </div>
                                        </div>
                                        <div className="dropdown notifications">
                                            <a
                                                className="nav-link dropdown-toggle pulse"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="icofont-alarm fs-5" />
                                                <span className="pulse-ring" />
                                            </a>
                                            <div
                                                id="NotificationsDiv"
                                                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
                                            >
                                                <div className="card border-0 w380">
                                                    <div className="card-header border-0 p-3">
                                                        <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                                            <span>Notifications</span>
                                                            <span className="badge text-white">11</span>
                                                        </h5>
                                                    </div>
                                                    <div className="tab-content card-body">
                                                        <div className="tab-pane fade show active">
                                                            <ul className="list-unstyled list mb-0">
                                                                <li className="py-2 mb-1 border-bottom">
                                                                    <a href="javascript:void(0);" className="d-flex">
                                                                        <img
                                                                            className="avatar rounded-circle"
                                                                            src="assets/images/xs/avatar1.jpg"
                                                                            alt=""
                                                                        />
                                                                        <div className="flex-fill ms-2">
                                                                            <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Dylan Hunter
                                </span>{" "}
                                                                                <small>2MIN</small>
                                                                            </p>
                                                                            <span className="">
                                Added 2021-02-19 my-Task ui/ux Design{" "}
                                                                                <span className="badge bg-success">Review</span>
                              </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="py-2 mb-1 border-bottom">
                                                                    <a href="javascript:void(0);" className="d-flex">
                                                                        <div className="avatar rounded-circle no-thumbnail">
                                                                            DF
                                                                        </div>
                                                                        <div className="flex-fill ms-2">
                                                                            <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Diane Fisher
                                </span>{" "}
                                                                                <small>13MIN</small>
                                                                            </p>
                                                                            <span className="">
                                Task added Get Started with Fast Cad project
                              </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="py-2 mb-1 border-bottom">
                                                                    <a href="javascript:void(0);" className="d-flex">
                                                                        <img
                                                                            className="avatar rounded-circle"
                                                                            src="assets/images/xs/avatar3.jpg"
                                                                            alt=""
                                                                        />
                                                                        <div className="flex-fill ms-2">
                                                                            <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Andrea Gill
                                </span>{" "}
                                                                                <small>1HR</small>
                                                                            </p>
                                                                            <span className="">
                                Quality Assurance Task Completed
                              </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="py-2 mb-1 border-bottom">
                                                                    <a href="javascript:void(0);" className="d-flex">
                                                                        <img
                                                                            className="avatar rounded-circle"
                                                                            src="assets/images/xs/avatar5.jpg"
                                                                            alt=""
                                                                        />
                                                                        <div className="flex-fill ms-2">
                                                                            <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Diane Fisher
                                </span>{" "}
                                                                                <small>13MIN</small>
                                                                            </p>
                                                                            <span className="">
                                Add New Project for App Developemnt
                              </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="py-2 mb-1 border-bottom">
                                                                    <a href="javascript:void(0);" className="d-flex">
                                                                        <img
                                                                            className="avatar rounded-circle"
                                                                            src="assets/images/xs/avatar6.jpg"
                                                                            alt=""
                                                                        />
                                                                        <div className="flex-fill ms-2">
                                                                            <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Andrea Gill
                                </span>{" "}
                                                                                <small>1HR</small>
                                                                            </p>
                                                                            <span className="">
                                Add Timesheet For Rhinestone project
                              </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="py-2">
                                                                    <a href="javascript:void(0);" className="d-flex">
                                                                        <img
                                                                            className="avatar rounded-circle"
                                                                            src="assets/images/xs/avatar7.jpg"
                                                                            alt=""
                                                                        />
                                                                        <div className="flex-fill ms-2">
                                                                            <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Zoe Wright
                                </span>{" "}
                                                                                <small className="">1DAY</small>
                                                                            </p>
                                                                            <span className="">Add Calander Event</span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <a className="card-footer text-center border-top-0" href="#">
                                                        {" "}
                                                        View all notifications
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center">
                                            <div className="u-info me-2">
                                                <p className="mb-0 text-end line-height-sm ">
                                                    <span className="font-weight-bold">Dylan Hunter</span>
                                                </p>
                                                <small>Admin Profile</small>
                                            </div>
                                            <a
                                                className="nav-link dropdown-toggle pulse p-0"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                data-bs-display="static"
                                            >
                                                <img
                                                    className="avatar lg rounded-circle img-thumbnail"
                                                    src="assets/images/profile_av.png"
                                                    alt="profile"
                                                />
                                            </a>
                                            <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                                <div className="card border-0 w280">
                                                    <div className="card-body pb-0">
                                                        <div className="d-flex py-1">
                                                            <img
                                                                className="avatar rounded-circle"
                                                                src="assets/images/profile_av.png"
                                                                alt="profile"
                                                            />
                                                            <div className="flex-fill ms-3">
                                                                <p className="mb-0">
                                                                    <span className="font-weight-bold">Dylan Hunter</span>
                                                                </p>
                                                                <small className="">Dylan.hunter@gmail.com</small>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <hr className="dropdown-divider border-dark" />
                                                        </div>
                                                    </div>
                                                    <div className="list-group m-2 ">
                                                        <a
                                                            href="task.html"
                                                            className="list-group-item list-group-item-action border-0 "
                                                        >
                                                            <i className="icofont-tasks fs-5 me-3" />
                                                            My Task
                                                        </a>
                                                        <a
                                                            href="members.html"
                                                            className="list-group-item list-group-item-action border-0 "
                                                        >
                                                            <i className="icofont-ui-user-group fs-6 me-3" />
                                                            members
                                                        </a>
                                                        <a
                                                            href="ui-elements/auth-signin.html"
                                                            className="list-group-item list-group-item-action border-0 "
                                                        >
                                                            <i className="icofont-logout fs-6 me-3" />
                                                            Signout
                                                        </a>
                                                        <div>
                                                            <hr className="dropdown-divider border-dark" />
                                                        </div>
                                                        <a
                                                            href="ui-elements/auth-signup.html"
                                                            className="list-group-item list-group-item-action border-0 "
                                                        >
                                                            <i className="icofont-contact-add fs-5 me-3" />
                                                            Add personal account
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-md-1">
                                            <a
                                                href="#offcanvas_setting"
                                                data-bs-toggle="offcanvas"
                                                aria-expanded="false"
                                                title="template setting"
                                            >
                                                <svg
                                                    className="svg-stroke"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={22}
                                                    height={22}
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    {/* menu toggler */}
                                    <button
                                        className="navbar-toggler p-0 border-0 menu-toggle order-3"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#mainHeader"
                                    >
                                        <span className="fa fa-bars" />
                                    </button>
                                    {/* main menu Search*/}
                                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                                        <div className="input-group flex-nowrap input-group-lg">
                                            <button
                                                type="button"
                                                className="input-group-text"
                                                id="addon-wrapping"
                                            >
                                                <i className="fa fa-search" />
                                            </button>
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search"
                                                aria-label="search"
                                                aria-describedby="addon-wrapping"
                                            />
                                            <button
                                                type="button"
                                                className="input-group-text add-member-top"
                                                id="addon-wrappingone"
                                                data-bs-toggle="modal"
                                                data-bs-target="#addUser"
                                            >
                                                <i className="fa fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {/* Body: Body */}
                        {/* Modal Members*/}
                    </div>
                </div>


            </div>
        );
    }
}

export default Header;