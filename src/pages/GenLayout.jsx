import React from "react";
import Header1 from "../components/Header/Header1";
import Header2 from "../components/Header/Header2";
import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2";
import Footer3 from "../components/Footer/Footer3";
import Header3 from "../components/Header/Header3";
import LogoCloud1 from "../components/LogoCloud/LogoCloud1";
import LogoCloud2 from "../components/LogoCloud/LogoCloud2";
import LogoCloud3 from "../components/LogoCloud/LogoCloud3";
import LogoCloud4 from "../components/LogoCloud/LogoCloud4";
import ServicesFeatures1 from "../components/ServicesFeatures/ServicesFeatures1";
import LeftImage from "../components/Content/LeftImage";
import RightImage from "../components/Content/RightImage";
import Leadership from "../components/Team/Leadership";
import ListBlog from "../components/Blog/ListBlog";
import CardBlog from "../components/Blog/CardBlog";
import TwoColumnBlog from "../components/Blog/TwoColumnBlog";
import Ecommer from "../components/CallToAction/Ecommer";
import Product from "../components/CallToAction/Product";
import Bank from "../components/CallToAction/Bank";
import App from "../components/CallToAction/App";
import Organization from "../components/Pricing/Organization";
import Team from "../components/Pricing/Team";
import Personnal from "../components/Pricing/Personnal";
import Comparator from "../components/Pricing/Comparator";

const GenLayout = ({
  selectedHeader,
  selectedFooter,
  selectedLogoCloud,
  selectedServices,
  selectedContent,
  selectedTeam,
  selectedBlog,
  selectedCTA,
  selectedPricing,
}) => {
  const renderHeader = () => {
    switch (selectedHeader) {
      case "Header1":
        return <Header1 />;
      case "Header2":
        return <Header2 />;
      case "Header3":
        return <Header3 />;
      default:
        return null;
    }
  };

  const renderServices = () => {
    switch (selectedServices) {
      case "ServicesFeatures1":
        return <ServicesFeatures1 />;
      //   case "Services Features 2":
      //     return <LogoCloud2 />;
      //   case "Services Features 3":
      //     return <LogoCloud3 />;
      //   case "Services Features 4":
      //     return <LogoCloud4 />;
      default:
        return null;
    }
  };

  const renderContentLeft = () => {
    switch (selectedContent) {
      case "ContentLeft":
        return <LeftImage />;
      //   case "Services Features 3":
      //     return <LogoCloud3 />;
      //   case "Services Features 4":
      //     return <LogoCloud4 />;
      default:
        return null;
    }
  };

  const renderContentRight = () => {
    switch (selectedContent) {
      case "ContentRight":
        return <RightImage />;
      //   case "Services Features 3":
      //     return <LogoCloud3 />;
      //   case "Services Features 4":
      //     return <LogoCloud4 />;
      default:
        return null;
    }
  };

  const renderTeam = () => {
    switch (selectedTeam) {
      case "Leadership":
        return <Leadership />;
      //   case "Services Features 3":
      //     return <LogoCloud3 />;
      //   case "Services Features 4":
      //     return <LogoCloud4 />;
      default:
        return null;
    }
  };

  const renderBlog = () => {
    switch (selectedBlog) {
      case "ListBlog":
        return <ListBlog />;
      case "CardBlog":
        return <CardBlog />;
      case "TwoColumnBlog":
        return <TwoColumnBlog />;
      default:
        return null;
    }
  };

  const renderCTA = () => {
    switch (selectedCTA) {
      case "Ecommer":
        return <Ecommer />;
      case "Product":
        return <Product />;
      case "Bank":
        return <Bank />;
      case "App":
        return <App />;
      default:
        return null;
    }
  };

  const renderPricing = () => {
    switch (selectedPricing) {
      case "Organization":
        return <Organization />;
      case "Team":
        return <Team />;
      case "Personnal":
        return <Personnal />;
      case "Comparator":
        return <Comparator />;
      default:
        return null;
    }
  };

  const renderLogoCloud = () => {
    switch (selectedLogoCloud) {
      case "LogoCloud1":
        return <LogoCloud1 />;
      case "LogoCloud2":
        return <LogoCloud2 />;
      case "LogoCloud3":
        return <LogoCloud3 />;
      case "LogoCloud4":
        return <LogoCloud4 />;
      default:
        return null;
    }
  };

  const renderFooter = () => {
    switch (selectedFooter) {
      case "Footer1":
        return <Footer1 />;
      case "Footer2":
        return <Footer2 />;
      case "Footer3":
        return <Footer3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Render Header, Content, and Footer */}
      <div>{renderHeader()}</div>
      <div>{renderServices()}</div>
      <div>{renderContentLeft()}</div>
      <div>{renderContentRight()}</div>
      <div>{renderTeam()}</div>
      <div>{renderBlog()}</div>
      <div>{renderCTA()}</div>
      <div>{renderPricing()}</div>
      {/* <div style={{ height: "300px", backgroundColor: "#f0f0f0" }}>
        Content Area
      </div> */}
      <div>{renderLogoCloud()}</div>
      <div>{renderFooter()}</div>
    </div>
  );
};

export default GenLayout;
