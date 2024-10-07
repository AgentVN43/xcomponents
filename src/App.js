import React, { useState } from "react";
import GenLayout from "./pages/GenLayout";

const App = () => {
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select Header and Footer</h1>

      {/* Header Selection */}
      <div>
        <h3>Select Header:</h3>
        <button onClick={() => setSelectedHeader("Header1")}>Header1 |</button>
        <button onClick={() => setSelectedHeader("Header2")}>Header2 |</button>
        <button onClick={() => setSelectedHeader("Header3")}>Header3 |</button>
      </div>

      {/* Services and Features Selection */}
      <div>
        <h3>Select Services:</h3>
        <button onClick={() => setSelectedServices("ServicesFeatures1")}>
          Services Features 1 |
        </button>
        {/* <button onClick={() => setSelectedServices("ServicesFeatures2")}>Services Features 2</button>
        <button onClick={() => setSelectedServices("ServicesFeatures3")}>Services Features 3</button> */}
      </div>

      {/* Content Selection */}
      <div>
        <h3>Select Contents:</h3>
        <button onClick={() => setSelectedContent("ContentLeft")}>
          Content Left Illustrator |
        </button>
        <button onClick={() => setSelectedContent("ContentRight")}>
          Content Right Illustrator
        </button>
        {/*<button onClick={() => setSelectedServices("ServicesFeatures3")}>Services Features 3</button> */}
      </div>

      {/* Team Selection */}
      <div>
        <h3>Select Team:</h3>
        <button onClick={() => setSelectedTeam("Leadership")}>
          Leadership Team |
        </button>
        {/* <button onClick={() => setSelectedServices("ServicesFeatures2")}>Services Features 2</button>
        <button onClick={() => setSelectedServices("ServicesFeatures3")}>Services Features 3</button> */}
      </div>

      {/* Blog Selection */}
      <div>
        <h3>Select Blog:</h3>
        <button onClick={() => setSelectedBlog("ListBlog")}>List Blog |</button>
        <button onClick={() => setSelectedBlog("CardBlog")}>
          Cards Blog |
        </button>
        <button onClick={() => setSelectedBlog("TwoColumnBlog")}>
          Two Column Blog |
        </button>
        {/* <button onClick={() => setSelectedServices("ServicesFeatures2")}>Services Features 2</button>
        <button onClick={() => setSelectedServices("ServicesFeatures3")}>Services Features 3</button> */}
      </div>

      {/* CTA Selection */}
      <div>
        <h3>Select CTA:</h3>
        <button onClick={() => setSelectedCTA("Ecommer")}>Ecommer |</button>
        <button onClick={() => setSelectedCTA("Product")}>Product |</button>
        <button onClick={() => setSelectedCTA("Bank")}>Bank |</button>
        <button onClick={() => setSelectedCTA("App")}>App |</button>

        {/* <button onClick={() => setSelectedServices("ServicesFeatures2")}>Services Features 2</button>
        <button onClick={() => setSelectedServices("ServicesFeatures3")}>Services Features 3</button> */}
      </div>

         {/* Pricing Selection */}
         <div>
        <h3>Select Pricing:</h3>
        <button onClick={() => setSelectedPricing("Organization")}>Organization |</button>
        <button onClick={() => setSelectedPricing("Team")}>Team |</button>
        <button onClick={() => setSelectedPricing("Personnal")}>Personnal |</button>
        <button onClick={() => setSelectedPricing("Comparator")}>Comparator |</button>

        {/* <button onClick={() => setSelectedServices("ServicesFeatures2")}>Services Features 2</button>
        <button onClick={() => setSelectedServices("ServicesFeatures3")}>Services Features 3</button> */}
      </div>

      {/* Logo Cloud Selection */}
      <div>
        <h3>Select Logo Cloud:</h3>
        <button onClick={() => setSelectedLogoCloud("LogoCloud1")}>
          Logo Cloud 1 |
        </button>
        <button onClick={() => setSelectedLogoCloud("LogoCloud2")}>
          Logo Cloud 2 |
        </button>
        <button onClick={() => setSelectedLogoCloud("LogoCloud3")}>
          Logo Cloud 3 |
        </button>
        <button onClick={() => setSelectedLogoCloud("LogoCloud4")}>
          Logo Cloud 4 |
        </button>
      </div>

      {/* Footer Selection */}
      <div>
        <h3>Select Footer:</h3>
        <button onClick={() => setSelectedFooter("Footer1")}>Footer1 |</button>
        <button onClick={() => setSelectedFooter("Footer2")}>Footer2 |</button>
        <button onClick={() => setSelectedFooter("Footer3")}>Footer2 |</button>
      </div>

      {/* Confirm Button */}
      <button onClick={handleConfirm}>Confirm</button>

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
        />
      )}
    </div>
  );
};

export default App;
