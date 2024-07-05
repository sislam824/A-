import React, { useState } from "react";
import "../Styles/Home.scss";
import Dashboard from "./Dashboard";
import { Button } from "../components/ui/button";
import { LogOut } from "lucide-react";
import Product from "./Product";
import Orders from "./Orders";
import Users from "./Users";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("product");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "product":
        return <Product />;
      case "orders":
        return <Orders />;
      case "users":
        return <Users />;

      default:
        return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/login", { replace: true });
  };

  return (
    <div className="home" id="home">
      <div className="sidebar">
        <div className="flex flex-col gap-2">
          <div className="dashboard">
            <Button
              variant={activeTab === "dashboard" ? "" : "secondary"}
              onClick={() => handleTabClick("dashboard")}
            >
              Dashboard
            </Button>
          </div>
          <div className="product">
            <Button
              variant={activeTab === "product" ? "" : "secondary"}
              onClick={() => handleTabClick("product")}
            >
              Product
            </Button>
          </div>
          <div className="Orders">
            <Button
              variant={activeTab === "orders" ? "" : "secondary"}
              onClick={() => handleTabClick("orders")}
            >
              Orders
            </Button>
          </div>
          <div className="users">
            <Button
              variant={activeTab === "users" ? "" : "secondary"}
              onClick={() => handleTabClick("users")}
            >
              Users
            </Button>
          </div>
        </div>
        <div className="Logout">
          <Button variant={"destructive"} onClick={logout}>
            <LogOut /> Logout
          </Button>
        </div>
      </div>
      <div className="admin-content">{renderContent()}</div>
    </div>
  );
}

export default Home;
