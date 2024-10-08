import React from "react";
import Header1 from "../components/Header/Header1";
import Header2 from "../components/Header/Header2";

const headerComponents = {
  Header1: Header1,
  Header2: Header2,
  
};

export default function Demo() {
  const headerKey = sessionStorage.getItem("selectedHeader"); // Get the key from sessionStorage
  const Header = headerComponents[headerKey] || null; // Map the key to the component, default to null if not found

  console.log(Header); // This will log the component or null

  return (
    <>
      {Header ? <Header /> : <p>No Header Selected</p>}

      
    </>
  );
}
