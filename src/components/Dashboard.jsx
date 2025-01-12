import React from "react";

const Dashboard = () =>{
  return (
    <>
      <div class="hamburger-icon d-lg-none p-3">
        <i class="fas fa-bars"></i>
    </div>

    <div class="content flex-grow-1">
        <h2>Dashboard</h2>
        <div class="row mb-4">
            <div class="col-md-3">
                <div class="card card-revenue">
                    <div class="card-body">
                        <div>
                            <h5>$ 153.000</h5>
                            <p>Revenue</p>
                        </div>
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-sales">
                    <div class="card-body">
                        <div>
                            <h5>20</h5>
                            <p>Sales</p>
                        </div>
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-customer">
                    <div class="card-body">
                        <div>
                            <h5>20</h5>
                            <p>Customer</p>
                        </div>
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-employee">
                    <div class="card-body">
                        <div>
                            <h5>20</h5>
                            <p>Employee</p>
                        </div>
                        <i class="fas fa-gift"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5>Chart Daily</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5>Todo List</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;
