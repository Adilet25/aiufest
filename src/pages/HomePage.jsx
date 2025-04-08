import { lazy, useRef } from "react";
import Layout from "../components/Layout/Layout";

const MainSection = lazy(() =>
  import("../components/Sections/MainSection/MainSection")
);
const SecondSection = lazy(() =>
  import("../components/Sections/SecondSection/SecondSection")
);
const PartnerSection = lazy(() =>
  import("../components/Sections/PartnerSection/PartnerSection")
);
const AboutSection = lazy(() =>
  import("../components/Sections/AboutSection/AboutSection")
);
const MapSection = lazy(() =>
  import("../components/Sections/MapSection/MapSection")
);
const AlbumSection = lazy(() =>
  import("../components/Sections/AlbumSection/AlbumSection")
);
// const ExpoSection = lazy(() =>
//   import("../components/Sections/ExpoSection/ExpoSection")
// );
const WorkSection = lazy(() =>
  import("../components/Sections/WorkSection/WorkSection")
);

const HomePage = () => {
  const mainRef = useRef(null);
  const secondRef = useRef(null);
  const partnerRef = useRef(null);
  const aboutRef = useRef(null);
  const mapRef = useRef(null);
  const workRef = useRef(null);
  const albumRef = useRef(null);

  const sectionRefs = {
    mainRef,
    secondRef,
    partnerRef,
    aboutRef,
    mapRef,
    workRef,
    albumRef,
  };
  return (
    <div style={{ color: "white" }}>
    <Layout sectionRefs={sectionRefs}>
      <div ref={secondRef}><MainSection /></div>
      <div ref={mapRef}><SecondSection /></div>
      <div ref={partnerRef}><PartnerSection /></div>
      <div ref={mainRef}><AboutSection /></div>
      <div ref={aboutRef}><MapSection /></div>
      <div ref={workRef}><WorkSection /></div>
      <div ref={albumRef}><AlbumSection /></div>
    </Layout>
  </div>
  );
};

export default HomePage;
