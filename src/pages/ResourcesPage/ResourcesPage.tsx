import styles from './ResourcesPage.module.css';
import stuImg from '../../assets/students.jpeg';
import ArticleSlider from '../../components/Slider/ArticleSlider';
import type { ArticleType } from '../../components/Slider/ArticleSlider';
import Button from '../../components/Button/Button';
import book from "../../assets/resources.svg"

export default function ResourcesPage() {
  const goToLink = (link: string) => {
    window.location.href = link;
  };
  // Article data for each section
  const designGuides: ArticleType[] = [
    {
      type: 'Article',
      title: 'Design Guide: How to Create A Good Technical Drawing',
      author: 'By Joel Schadegg',
      readTime: '10 min read',
      description: 'Improve your 2D technical drawings by following our best practices covered in this article',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/design-guides/technical-drawing-best-practices/',
    },
    {
      type: 'Design Guide',
      title: 'Design Guide: 3D Printing Process & Material Design Guide',
      author: 'By Team Xometry ',
      description: 'With this guide, you can quickly find the right additive process and material for your next big idea by comparing each of our 3D printing processes based on the intended application of your part',
      buttonText: 'See Guide',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/course-principles-of-3d-printing-design-for-industrial-engineers/',
    },
    {
      type: 'Design Guide',
      title: 'Design Guide: CNC Machining',
      author: 'By Team Xometry',
      description: 'With all of today’s innovative CNC machining capabilities, it’s important to understand the strengths and trade-offs of this process',
      buttonText: 'See Guide',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/design-guides/design-guide-cnc-machining/',
    }
  ];

  const printingDesign: ArticleType[] = [
    {
      type: 'eBook',
      title: 'How to Prepare a File for 3D Printing',
      author: 'By Team Xometry',
      description: 'When designing models for 3D Printing, they must be saved with specific properties to ensure high-quality results. In this guide you will learn about the most common design mistakes that lead to unsatisfactory 3D models, and several tips you can use to avoid them.',
      buttonText: 'See eBook',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/ebook-how-to-prepare-a-file-for-3d-printing/',
    },
    {
      type: 'Article',
      title: 'The Advantages of Additive Manufacturing',
      author: 'By Greg Paulson',
      readTime: '6 min read',
      description: 'Because computer models and designs can be effortlessly transported electronically or even shared for download on the Internet, additive manufacturing allows businesses to quickly and cost effectively develop functional prototypes for product testing or even run a limited production line without having to worry about line limits and minimums while also allowing quick modifications when necessary.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/additive-manufacturing-advantages/',
    },
    {
      type: 'Article',
      title: '3D Printer Filament: Types, Materials, Uses, and Services',
      author: 'By Dean McClements',
      readTime: '10 min read',
      description: 'Learn more about the options for filament materials that are used in 3D printing.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/3d-printer-filament/',
    },
    {
      type: 'Interactive Course',
      title: 'Principles of 3D Printing Design for Industrial Engineers',
      author: 'By Team Xometry ',
      description: 'Complete guide covering design considerations, material selection, and optimization techniques for 3D printing projects.',
      buttonText: 'See Course',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/course-principles-of-3d-printing-design-for-industrial-engineers/',
    },
  ];

  const machiningDesign: ArticleType[] = [
    {
      type: 'Article',
      title: 'All About CNC Machining and How It Works',
      author: 'By Kat de Naoum',
      readTime: '6 min read',
      description: 'Get a better understanding of the inner workings behind this important manufacturing process.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/what-is-cnc-machining/',
    },
    {
      type: 'Video',
      title: 'Video: 10 Tips to Improve Your CAD Designs for CNC Machining',
      author: 'By Joel Schadegg',
      readTime: '5 min watch',
      description: 'This video covers 10 essential tips for improving your CAD designs so that you can produce more affordable and well-optimized parts',
      buttonText: 'Watch Video',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/10-tips-improve-cad-cnc-design/',
    },
    {
      type: 'Article',
      title: '9 Types of Machining Processes to Know About',
      author: 'By Kat de Naoum',
      readTime: '6 min read',
      description: 'A quick guide to machining methods and when it’s best to rely on each',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/types-of-machining-processes/',
    },
  ];

  return (
    <>
      <div className={styles.marginDiv} >
        <div className={styles.introDiv}>
          <div className={styles.introContentDiv}>
            <h1 className={styles.header}>
              Student Resources
            </h1>
            <p className={styles.pageDescription}>
              Welcome to your dedicated student hub for mastering manufacturing! Whether you're designing your first prototype or pushing the boundaries of a research project, our curated guides, tutorials, and expert insights are here to help you turn your ideas into reality.
            </p>
            <div onClick={() => goToLink("https://www.xometry.com/resources/")}>
              <Button text={"View All Xometry Resources"}></Button>
            </div>
          </div>
          <div className={styles.introImgDiv}>
            <img src={stuImg} className={styles.introImg} alt="Introduction" />
          </div>
        </div>
      </div>
      <div className={styles.marginDiv} style={{backgroundColor: "#f4f7f8"}}>
      <div className={styles.container}  style={{ width: "1380px" }}>
        <div className={styles.sectionsContainer} >
          
          {/* Design Guides Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader} style={{marginTop: "100px"}}>
              <div>
                <h2 className={styles.sectionTitle}>Design Guides</h2>
                <p className={styles.sectionDescription}>
                Perfect for every student designer, these guides cover essential best practices for creating parts across all manufacturing processes.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/design-guides/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Design Guides Content
              </a>
            </div>
            <ArticleSlider articles={designGuides} cardStyles={styles} />
          </section>

          {/* 3D Printing Design Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>3D Printing Design</h2>
                <p className={styles.sectionDescription}>
                New to additive manufacturing? Dive in with our expert guides on choosing the right materials, optimizing your designs, and preparing your files for perfect 3D prints every time.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/3d-printing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All 3D Printing Design Content
              </a>
            </div>
            <ArticleSlider articles={printingDesign} cardStyles={styles} />
          </section>

          {/* Machining Design Section */}
          <section className={styles.section} style={{marginBottom: "100px"}}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Machining Design</h2>
                <p className={styles.sectionDescription}>
                Get started with CNC machining and fabrication! Explore different processes, understand material considerations, and learn to refine your designs for real-world, precision-engineered parts, even if you're just beginning.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/machining/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Machining Design Content
              </a>
            </div>
            <ArticleSlider articles={machiningDesign} cardStyles={styles} />
          </section>
        </div>
      </div>
      </div>
      <div
        className={styles.marginDiv}
        style={{ backgroundColor: "#e6f0fc", marginBottom: "0px" }}
      >
        <div className={styles.introDiv} style={{justifyContent: "space-between"}}>
          <div className={styles.introContentDiv}>
            <h2 style={{ marginBottom: "25px" }}>
              All Done Learning?
            </h2>

            <div onClick={() => goToLink("/")}>
              <Button text={"Return to Student Page"} />
            </div>
          </div>
          <div style={{justifyContent: "space-between", display: "flex", gap: "20px"}}>
                      <img src={book} style={{height: "100%"}}/>
          
          </div>
        </div>
      </div>
    </>
  );
}
