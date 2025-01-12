import React from "react";

const Sidebar = () => {
    return <>
        <div class="sidebar p-3 d-flex justify-content-between">
            <div class="sidebar-wrapper">
                <div class="close-icon d-lg-none p-3">
                    <i class="fas fa-times"></i>
                </div>
                <h4 class="text-white">Arijit Sarkar</h4>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <i class="fas fa-tachometer-alt"></i> Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#ui-components" aria-expanded="false" aria-controls="ui-components">
                            <i class="fas fa-layer-group"></i> UI Components <span class="new">New</span>
                        </a>
                        <div class="collapse" id="ui-components">
                            <ul class="nav flex-column ms-3">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Buttons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Chart</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Input</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Modal</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Widget</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-pen"></i> Form
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-table"></i> Data Table
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto sidebar-log">
                <a class="nav-link" href="#"><i class="fas fa-comment"></i></a>
                <a class="nav-link" href="#"><i class="fas fa-bell"></i></a>
                <a class="nav-link" href="#"><i class="fas fa-power-off"></i></a>
            </div>
        </div>
    </>
}
export default Sidebar;