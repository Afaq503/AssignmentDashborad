import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import CardPage from "./page/CardPage";
import Card2Page from "./page/Card2Page";
import CustomTable from "./page/CustomTable";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Sidebar isOpen={isOpen} />
      <div className="flex flex-col flex-1">
        {/* <Navbar/> */}
        <Header
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flex-1 p-4 overflow-auto">
          <Breadcrumbs
            // title="Dashboard"
            items={[
              { text: "Home", url: "/" },
              { text: "Ecommerce", url: "/ecommerce" },
              // Add more breadcrumb items as needed
            ]}
          />

          <div className="mt-4">
            {/* Your main content goes here */}
            <CardPage/>
            <Card2Page/>

            <CustomTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
