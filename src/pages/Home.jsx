// import React, { useState } from "react";
// import GenLayout from "./pages/GenLayout";

// const App = () => {
//   // State to store selected components
//   const [selectedHeader, setSelectedHeader] = useState(null);
//   const [selectedFooter, setSelectedFooter] = useState(null);
//   const [selectedLogoCloud, setSelectedLogoCloud] = useState(null);
//   const [selectedServices, setSelectedServices] = useState(null);
//   const [selectedContent, setSelectedContent] = useState(null);
//   const [selectedTeam, setSelectedTeam] = useState(null);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [selectedCTA, setSelectedCTA] = useState(null);
//   const [selectedPricing, setSelectedPricing] = useState(null);

//   const [isConfirmed, setIsConfirmed] = useState(false);

//   // Handle the confirmation and store in sessionStorage
//   const handleConfirm = () => {
//     sessionStorage.setItem("selectedHeader", selectedHeader);
//     sessionStorage.setItem("selectedServices", selectedServices);
//     sessionStorage.setItem("selectedLogoCloud", selectedLogoCloud);

//     sessionStorage.setItem("selectedContent", selectedContent);
//     sessionStorage.setItem("selectedTeam", selectedTeam);
//     sessionStorage.setItem("selectedBlog", selectedBlog);
//     sessionStorage.setItem("selectedCTA", selectedCTA);

//     sessionStorage.setItem("selectedFooter", selectedFooter);
//     setIsConfirmed(true);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Select Header and Footer</h1>

//       {/* Header Selection */}
//       <div>
//         <h3>Select Header:</h3>
//         <button onClick={() => setSelectedHeader("Header1")}>Header1 |</button>
//         <button onClick={() => setSelectedHeader("Header2")}>Header2 |</button>
//         <button onClick={() => setSelectedHeader("Header3")}>Header3 |</button>
//       </div>

//       {/* Services and Features Selection */}
//       <div>
//         <h3>Select Services:</h3>
//         <button onClick={() => setSelectedServices("ServicesFeatures1")}>
//           Services Features 1 |
//         </button>
//       </div>

//       {/* Content Selection */}
//       <div>
//         <h3>Select Contents:</h3>
//         <button onClick={() => setSelectedContent("ContentLeft")}>
//           Content Left Illustrator |
//         </button>
//         <button onClick={() => setSelectedContent("ContentRight")}>
//           Content Right Illustrator
//         </button>
//       </div>

//       {/* Team Selection */}
//       <div>
//         <h3>Select Team:</h3>
//         <button onClick={() => setSelectedTeam("Leadership")}>
//           Leadership Team |
//         </button>
//       </div>

//       {/* Blog Selection */}
//       <div>
//         <h3>Select Blog:</h3>
//         <button onClick={() => setSelectedBlog("ListBlog")}>List Blog |</button>
//         <button onClick={() => setSelectedBlog("CardBlog")}>
//           Cards Blog |
//         </button>
//         <button onClick={() => setSelectedBlog("TwoColumnBlog")}>
//           Two Column Blog |
//         </button>
//       </div>

//       {/* CTA Selection */}
//       <div>
//         <h3>Select CTA:</h3>
//         <button onClick={() => setSelectedCTA("Ecommer")}>Ecommer |</button>
//         <button onClick={() => setSelectedCTA("Product")}>Product |</button>
//         <button onClick={() => setSelectedCTA("Bank")}>Bank |</button>
//         <button onClick={() => setSelectedCTA("App")}>App |</button>
//       </div>

//       {/* Pricing Selection */}
//       <div>
//         <h3>Select Pricing:</h3>
//         <button onClick={() => setSelectedPricing("Organization")}>
//           Organization |
//         </button>
//         <button onClick={() => setSelectedPricing("Team")}>Team |</button>
//         <button onClick={() => setSelectedPricing("Personnal")}>
//           Personnal |
//         </button>
//         <button onClick={() => setSelectedPricing("Comparator")}>
//           Comparator |
//         </button>
//       </div>

//       {/* Logo Cloud Selection */}
//       <div>
//         <h3>Select Logo Cloud:</h3>
//         <button onClick={() => setSelectedLogoCloud("LogoCloud1")}>
//           Logo Cloud 1 |
//         </button>
//         <button onClick={() => setSelectedLogoCloud("LogoCloud2")}>
//           Logo Cloud 2 |
//         </button>
//         <button onClick={() => setSelectedLogoCloud("LogoCloud3")}>
//           Logo Cloud 3 |
//         </button>
//         <button onClick={() => setSelectedLogoCloud("LogoCloud4")}>
//           Logo Cloud 4 |
//         </button>
//       </div>

//       {/* Footer Selection */}
//       <div>
//         <h3>Select Footer:</h3>
//         <button onClick={() => setSelectedFooter("Footer1")}>Footer1 |</button>
//         <button onClick={() => setSelectedFooter("Footer2")}>Footer2 |</button>
//         <button onClick={() => setSelectedFooter("Footer3")}>Footer2 |</button>
//       </div>

//       {/* Confirm Button */}
//       <button onClick={handleConfirm}>Confirm</button>

//       {/* Pass to GenLayout after confirmation */}
//       {isConfirmed && (
//         <GenLayout
//           selectedHeader={selectedHeader}
//           selectedServices={selectedServices}
//           selectedContent={selectedContent}
//           selectedTeam={selectedTeam}
//           selectedBlog={selectedBlog}
//           selectedCTA={selectedCTA}
//           selectedPricing={selectedPricing}
//           selectedLogoCloud={selectedLogoCloud}
//           selectedFooter={selectedFooter}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GenLayout from "./GenLayout";

const Home = () => {
  // State to store selected components
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedFooter, setSelectedFooter] = useState(null);
  const [selectedLogoCloud, setSelectedLogoCloud] = useState(null);
  const [selectedServices, setSelectedServices] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedCTA, setSelectedCTA] = useState(null);
  const [selectedPricing, setSelectedPricing] = useState(null);

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [viewMode, setViewMode] = useState("desktop");

  const nav = useNavigate()
  // Handle the confirmation and store in sessionStorage
  const handleConfirm = () => {
    sessionStorage.setItem("selectedHeader", selectedHeader);
    sessionStorage.setItem("selectedServices", selectedServices);
    sessionStorage.setItem("selectedLogoCloud", selectedLogoCloud);
    sessionStorage.setItem("selectedContent", selectedContent);
    sessionStorage.setItem("selectedTeam", selectedTeam);
    sessionStorage.setItem("selectedBlog", selectedBlog);
    sessionStorage.setItem("selectedCTA", selectedCTA);
    sessionStorage.setItem("selectedFooter", selectedFooter);
    setIsConfirmed(true);
  };

  const handleDemo = () => {  
    nav('/demo')
  }

  return (
    <div className="grid grid-cols-[20%,80%] gap-4">
      <div className="bg-gray-200 sticky top-0 h-screen p-5 overflow-y-auto">
        <h1>Select Components</h1>

        {/* Header Selection */}
        <div>
          <h3>Select Header:</h3>
          <label>
            <input
              type="radio"
              value="Header1"
              checked={selectedHeader === "Header1"}
              onChange={() => setSelectedHeader("Header1")}
            />
            Header1
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Header2"
              checked={selectedHeader === "Header2"}
              onChange={() => setSelectedHeader("Header2")}
            />
            Header2
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Header3"
              checked={selectedHeader === "Header3"}
              onChange={() => setSelectedHeader("Header3")}
            />
            Header3
          </label>
          <br />
        </div>

        {/* Services Selection */}
        <div>
          <h3>Select Services:</h3>
          <label>
            <input
              type="radio"
              value="ServicesFeatures1"
              checked={selectedServices === "ServicesFeatures1"}
              onChange={() => setSelectedServices("ServicesFeatures1")}
            />
            Services Features 1
          </label>
          <br />
        </div>

        {/* Content Selection */}
        <div>
          <h3>Select Content:</h3>
          <label>
            <input
              type="radio"
              value="ContentLeft"
              checked={selectedContent === "ContentLeft"}
              onChange={() => setSelectedContent("ContentLeft")}
            />
            Content Left Illustrator
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="ContentRight"
              checked={selectedContent === "ContentRight"}
              onChange={() => setSelectedContent("ContentRight")}
            />
            Content Right Illustrator
          </label>
          <br />
        </div>

        {/* Team Selection */}
        <div>
          <h3>Select Team:</h3>
          <label>
            <input
              type="radio"
              value="Leadership"
              checked={selectedTeam === "Leadership"}
              onChange={() => setSelectedTeam("Leadership")}
            />
            Leadership Team
          </label>
          <br />
        </div>

        {/* Blog Selection */}
        <div>
          <h3>Select Blog:</h3>
          <label>
            <input
              type="radio"
              value="ListBlog"
              checked={selectedBlog === "ListBlog"}
              onChange={() => setSelectedBlog("ListBlog")}
            />
            List Blog
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="CardBlog"
              checked={selectedBlog === "CardBlog"}
              onChange={() => setSelectedBlog("CardBlog")}
            />
            Cards Blog
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="TwoColumnBlog"
              checked={selectedBlog === "TwoColumnBlog"}
              onChange={() => setSelectedBlog("TwoColumnBlog")}
            />
            Two Column Blog
          </label>
          <br />
        </div>

        {/* CTA Selection */}
        <div>
          <h3>Select CTA:</h3>
          <label>
            <input
              type="radio"
              value="Ecommer"
              checked={selectedCTA === "Ecommer"}
              onChange={() => setSelectedCTA("Ecommer")}
            />
            Ecommer
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Product"
              checked={selectedCTA === "Product"}
              onChange={() => setSelectedCTA("Product")}
            />
            Product
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Bank"
              checked={selectedCTA === "Bank"}
              onChange={() => setSelectedCTA("Bank")}
            />
            Bank
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="App"
              checked={selectedCTA === "App"}
              onChange={() => setSelectedCTA("App")}
            />
            App
          </label>
          <br />
        </div>

        {/* Pricing Selection */}
        <div>
          <h3>Select Pricing:</h3>
          <label>
            <input
              type="radio"
              value="Organization"
              checked={selectedPricing === "Organization"}
              onChange={() => setSelectedPricing("Organization")}
            />
            Organization
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Team"
              checked={selectedPricing === "Team"}
              onChange={() => setSelectedPricing("Team")}
            />
            Team
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Personnal"
              checked={selectedPricing === "Personnal"}
              onChange={() => setSelectedPricing("Personnal")}
            />
            Personnal
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Comparator"
              checked={selectedPricing === "Comparator"}
              onChange={() => setSelectedPricing("Comparator")}
            />
            Comparator
          </label>
          <br />
        </div>

        {/* Logo Cloud Selection */}
        <div>
          <h3>Select Logo Cloud:</h3>
          <label>
            <input
              type="radio"
              value="LogoCloud1"
              checked={selectedLogoCloud === "LogoCloud1"}
              onChange={() => setSelectedLogoCloud("LogoCloud1")}
            />
            Logo Cloud 1
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="LogoCloud2"
              checked={selectedLogoCloud === "LogoCloud2"}
              onChange={() => setSelectedLogoCloud("LogoCloud2")}
            />
            Logo Cloud 2
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="LogoCloud3"
              checked={selectedLogoCloud === "LogoCloud3"}
              onChange={() => setSelectedLogoCloud("LogoCloud3")}
            />
            Logo Cloud 3
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="LogoCloud4"
              checked={selectedLogoCloud === "LogoCloud4"}
              onChange={() => setSelectedLogoCloud("LogoCloud4")}
            />
            Logo Cloud 4
          </label>
          <br />
        </div>

        {/* Footer Selection */}
        <div>
          <h3>Select Footer:</h3>
          <label>
            <input
              type="radio"
              value="Footer1"
              checked={selectedFooter === "Footer1"}
              onChange={() => setSelectedFooter("Footer1")}
            />
            Footer1
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Footer2"
              checked={selectedFooter === "Footer2"}
              onChange={() => setSelectedFooter("Footer2")}
            />
            Footer2
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Footer3"
              checked={selectedFooter === "Footer3"}
              onChange={() => setSelectedFooter("Footer3")}
            />
            Footer3
          </label>
          <br />
        </div>

        {/* Confirm Button */}
        <button onClick={handleConfirm}>Confirm | </button>
        <button onClick={handleDemo}>Show Demo</button>
      </div>

      <div>
        {/* Pass to GenLayout after confirmation */}
        {isConfirmed && (
          <GenLayout
            selectedHeader={selectedHeader}
            selectedServices={selectedServices}
            selectedContent={selectedContent}
            selectedTeam={selectedTeam}
            selectedBlog={selectedBlog}
            selectedCTA={selectedCTA}
            selectedPricing={selectedPricing}
            selectedLogoCloud={selectedLogoCloud}
            selectedFooter={selectedFooter}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
