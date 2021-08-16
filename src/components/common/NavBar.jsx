import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../contexts/UserContext';

export default function NavBar() {
    const { user } = useContext(UserContext);
    const logoutHandler=()=>{
        localStorage.clear();
        window.location='/';
        toast.success("Your are successfully logout", {
            position: toast.POSITION.TOP_CENTER,
          });
    }
    return (
        <div  style={{display:user?'contents':'none'}}>
        <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i> 
        </a>
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                        aria-labelledby="alertsDropdown">
                        <div class="dropdown-menu-header">
                            4 New Notifications
                        </div>
                        <div class="list-group">
                            <a href="#" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <i class="text-danger" data-feather="alert-circle"></i>
                                    </div>
                                    <div class="col-10">
                                        <div class="text-dark">Update completed</div>
                                        <div class="text-muted small mt-1">Restart server 12 to complete the
                                            update.</div>
                                        <div class="text-muted small mt-1">30m ago</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <i class="text-warning" data-feather="bell"></i>
                                    </div>
                                    <div class="col-10">
                                        <div class="text-dark">Lorem ipsum</div>
                                        <div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate
                                            hendrerit et.</div>
                                        <div class="text-muted small mt-1">2h ago</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <i class="text-primary" data-feather="home"></i>
                                    </div>
                                    <div class="col-10">
                                        <div class="text-dark">Login from 192.186.1.8</div>
                                        <div class="text-muted small mt-1">5h ago</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="list-group-item">
                                <div class="row g-0 align-items-center">
                                    <div class="col-2">
                                        <i class="text-success" data-feather="user-plus"></i>
                                    </div>
                                    <div class="col-10">
                                        <div class="text-dark">New connection</div>
                                        <div class="text-muted small mt-1">Christina accepted your request.
                                        </div>
                                        <div class="text-muted small mt-1">14h ago</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="dropdown-menu-footer">
                            <a href="#" class="text-muted">Show all notifications</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle" href="/" id="messagesDropdown"
                        data-bs-toggle="dropdown">
                    <a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown"
                        data-bs-toggle="dropdown ">
                        <div class="position-relative">
                            {/* <i class="align-middle" data-feather="message-square"></i> */}
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                        aria-labelledby="messagesDropdown">
                       
                        <div class="list-group">
                        </div>
                        <div class="dropdown-menu-footer">
                            <a href="/" class="text-muted">Show all messages</a>
                        </div>
                    </div>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="/"
                        data-bs-toggle="dropdown">

                    </a>
                    <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="/"
                        data-bs-toggle="dropdown">
                        <img src="https://zeebraline.com/img/noimg.png" class="avatar img-fluid rounded me-1"
                            alt="Charles Hall" />
                        <span class="text-dark">{user?.name}</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <Link class="dropdown-item" to="/profile">
                            <i class="align-middle me-1"
                            data-feather="user"></i> Profile</Link>
                       
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" to="/updatePassword">
                        <i class="fas fa-lock m-2"></i>change Password</Link>
                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item" onClick={()=>logoutHandler('')} href="/login">
                        <i class="fas fa-sign-out-alt m-2"></i>
                            Log out
                            </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    )
}
