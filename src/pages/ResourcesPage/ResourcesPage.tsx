import styles from './ResourcesPage.module.css';
import cncImg from '../../assets/CNC.png';
import ArticleSlider from '../../components/Slider/ArticleSlider';
import type { ArticleType } from '../../components/Slider/ArticleSlider';

export default function ResourcesPage() {
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
      <div className={styles.marginDiv}>
        <div className={styles.introDiv}>
          <div className={styles.introContentDiv}>
            <h1 className={styles.header}>
              Student Resources
            </h1>
            <p className={styles.pageDescription}>
        Explore our consolidated library of resources for students. Curated for students who are just starting out in the field of manufacturing.
      </p>
          </div>
          <div className={styles.introImgDiv}>
            <img src={cncImg} className={styles.introImg} alt="Introduction" />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionsContainer}>
          
          {/* Design Guides Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Design Guides</h2>
                <p className={styles.sectionDescription}>
                  In-depth design guides full of best practices for all manufacturing processes.
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
                  The latest news, trends, and manufacturing design tips for additive manufacturing.
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
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Machining Design</h2>
                <p className={styles.sectionDescription}>
                  The latest news, trends, and manufacturing design tips for custom machined and fabricated parts.
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
    </>
  );
}
