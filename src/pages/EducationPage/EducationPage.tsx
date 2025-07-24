import styles from "./EducationPage.module.css";
import introImg from "../../assets/introImg.jpeg";
import Button from "../../components/Button/Button";
import GridItem from "../../components/GridItem/GridItem";
import Slider from "../../components/Slider/Slider";

import UCIrvineLogo from "../../assets/UCIrvineLogo.png";
import UCIrvineProject from "../../assets/UCIrvineProject.avif";

import UCSanDiegoLogo from "../../assets/UCSanDiegoLogo.png";
import UCSanDiegoProject from "../../assets/UCSanDiegoProject.avif";

import UPennProject from "../../assets/UPennProject.avif";
import UPennLogo from "../../assets/UPennLogo.png";

export default function EducationPage() {
  const handleGetQuoteClick = () => {
    window.location.href = "https://www.xometry.com/quoting/home/?";
  };
  const items = [
    {
      schoolName: "UC Irvine",
      schoolLogo: UCIrvineLogo,
      projectImg: UCIrvineProject,
      description: "Xometry Helps UC Irvine Rocket Team Prepare for Spaceshot",
      link: "https://www.xometry.com/resources/case-studies/case-study-xometry-helps-uc-irvine-rocket-team-prepare-for-spaceshot/" ,
    },
    {
      schoolName: "UC San Diego",
      schoolLogo: UCSanDiegoLogo,
      projectImg: UCSanDiegoProject,
      description: "These Students Invented a Way to Brew Beer on the Moon",
      link: "https://www.xometry.com/resources/case-studies/these-students-invented-a-way-to-brew-beer-on-the-moon/",
    },
    {
      schoolName: "U Penn",
      schoolLogo: UPennLogo,
      projectImg: UPennProject,
      description:
        "UPenn Racing Team Hopes to Shatter Records With Xometry's Help",
        link: "https://www.xometry.com/resources/case-studies/upenn-team-hopes-to-shatter-records-again-with-xometrys-help/",
    },
    {
      schoolName: "UC Irvine",
      schoolLogo: UCIrvineLogo,
      projectImg: UCIrvineProject,
      description: "Xometry Helps UC Irvine Rocket Team Prepare for Spaceshot",
      link: "https://www.xometry.com/resources/case-studies/case-study-xometry-helps-uc-irvine-rocket-team-prepare-for-spaceshot/" ,
    },
    {
      schoolName: "UC Irvine",
      schoolLogo: UCIrvineLogo,
      projectImg: UCIrvineProject,
      description: "Xometry Helps UC Irvine Rocket Team Prepare for Spaceshot",
      link: "https://www.xometry.com/resources/case-studies/case-study-xometry-helps-uc-irvine-rocket-team-prepare-for-spaceshot/" ,
    },
    {
      schoolName: "UC Irvine",
      schoolLogo: UCIrvineLogo,
      projectImg: UCIrvineProject,
      description: "Xometry Helps UC Irvine Rocket Team Prepare for Spaceshot",
      link: "https://www.xometry.com/resources/case-studies/case-study-xometry-helps-uc-irvine-rocket-team-prepare-for-spaceshot/" ,
    },
   
  ];

  return (
    <>
      <div className={styles.marginDiv} style={{ backgroundColor: "#e6f0fc" }}>
        <div className={styles.introDiv}>
          <div className={styles.introContentDiv}>
            <h1 className={styles.header}>
              Prototypes and Production Parts for Engineering Students &
              Universities
            </h1>
            <h3>
              Turn your ideas into real-world parts with fast lead times, expert
              feedback, and industry-grade quality — all with an exclusive 7%
              academic discount.
            </h3>
            <div onClick={handleGetQuoteClick}>
              <Button text={"Get Your Instant Quote"} />
            </div>
          </div>
          <div className={styles.introImgDiv}>
            <img src={introImg} className={styles.introImg}></img>
          </div>
        </div>
      </div>

      <div className={styles.marginDiv}>
        <div className={styles.contentDiv}>
          <div className={styles.H2HeaderDiv}>
            <h2>
              Why Choose Xometry as a Manufacturing Partner for Your Project
            </h2>
          </div>
          <div className={styles.gridDiv}>
            <GridItem
              title="Exclusive Student Discount"
              description="Engineering students and university teams get a 7% academic discount on all custom parts ordered through Xometry. Build your prototypes affordably without compromising on quality or speed."
            />

            <GridItem
              title="Instant Quoting Engine"
              description="Upload your CAD file, configure your manufacturing specs, and get an instant quote. You can add multiple parts in one quote and place an order in a few clicks. Xometry handles everything from logistics to delivery."
            />

            <GridItem
              title="One-Stop Shop for Metal & Plastic Parts"
              description="Xometry offers over 16 manufacturing processes on one platform, including CNC machining, sheet metal fabrication, and 3D printing. For high-volume production, we provide injection moulding and die casting, with access to 10,000+ global manufacturers."
            />

            <GridItem
              title="DFM Feedback"
              description="We help students and engineers refine their designs with real-time Design for Manufacturing (DFM) feedback. Whether it's CNC, 3D printing, or sheet metal, your part is reviewed for cost-effectiveness and manufacturability."
            />
            <GridItem
              title="Endless Options Available"
              description="From over 130 materials to dozens of surface finishes and tolerances, Xometry offers thousands of possible combinations. Our network supports even tight tolerances for highly customized, production-ready parts."
            />
            <GridItem
              title="Special Finishing Options"
              description="Improve aesthetics or mechanical properties with anodizing, polishing, electroplating, powder coating, heat treatment, and more. We also support custom finishes for strength, water-resistance, or biocompatibility."
            />
            <GridItem
              title="Rapid Prototyping"
              description="Save time and budget while developing functional prototypes. Our Instant Quoting Engine helps you explore technical alternatives quickly, and our team can assist with design feedback from start to finish."
            />
            <GridItem
              title="Quality Assurance & Control"
              description="Our integrated quality system includes expert engineers, quality labs, and trusted manufacturing partners to ensure your parts are delivered with the precision, documentation, and consistency you need."
            />
          </div>
        </div>
      </div>

      <div className={styles.marginDiv} style={{ backgroundColor: "#f4f7f8", marginBottom: "0px" }}>
        <div className={styles.contentDiv} style={{ width: "1360px", marginBottom: "75px" }}>
          <div className={styles.H2HeaderDiv}>
            <h2>Student Projects Made With Xometry</h2>
            <Slider items={items}></Slider>
          </div>
        </div>
      </div>

      <div className={styles.marginDiv} style={{ backgroundColor: "#f4f7f8" }}>
        <div className={styles.contentDiv} style={{ width: "1360px" }}>
          <div className={styles.H2HeaderDiv}>
            <h2>Xometry Education Services</h2>
            <div className={styles.servicesGridDiv}>
              <div className={styles.servicesItemDiv}></div>
              <div className={styles.servicesItemDiv}></div>
              <div className={styles.servicesItemDiv}></div>
              <div className={styles.servicesItemDiv}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
