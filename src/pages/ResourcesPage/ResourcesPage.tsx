import styles from './ResourcesPage.module.css';
import introImg from '../../assets/introImg.jpeg';

export default function ResourcesPage() {
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
            <img src={introImg} className={styles.introImg} alt="Introduction" />
          </div>
        </div>
      </div>
      <div className={styles.container}>

      {/* Featured Section */}
      {/* <section className={styles.featuredSection}>
        <div className={styles.featuredContent}>
          <div className={styles.featuredText}>
            <h2>Start Your Manufacturing Journey</h2>
            <p>
              Access expert-curated content, step-by-step tutorials, and real-world case studies 
              designed specifically for students and emerging engineers.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Design Guides</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Articles</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Video Tutorials</div>
            </div>
          </div>
        </div>
      </section> */}

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
            <button className={styles.viewAllButton}>View All Design Guides Content</button>
          </div>
          
          <div className={styles.articlesGrid}>
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Download</div>
              <h3 className={styles.articleTitle}>Design Guide: 3D Printing Fundamentals</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Team Xometry</p>
              </div>
              <p className={styles.articleDescription}>
                Complete guide covering design considerations, material selection, and optimization techniques for 3D printing projects.
              </p>
              <button className={styles.primaryButton}>Download Guide</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Download</div>
              <h3 className={styles.articleTitle}>Design Guide: CNC Machining Essentials</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Team Xometry</p>
              </div>
              <p className={styles.articleDescription}>
                Learn the fundamentals of designing for CNC machining, including tolerances, surface finishes, and cost optimization.
              </p>
              <button className={styles.primaryButton}>Download Guide</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Article</div>
              <h3 className={styles.articleTitle}>How to Create Effective Technical Drawings</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Joel Schadegg</p>
                <p className={styles.articleReadTime}>10 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Master the art of technical drawing with this comprehensive guide to dimensioning, tolerancing, and drawing standards.
              </p>
              <button className={styles.secondaryButton}>Read Article</button>
            </div>
          </div>
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
            <button className={styles.viewAllButton}>View All 3D Printing Design Content</button>
          </div>
          
          <div className={styles.articlesGrid}>
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Article</div>
              <h3 className={styles.articleTitle}>Everything You Need to Know About Support Structures</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Greg Paulsen</p>
                <p className={styles.articleReadTime}>8 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Understanding when and how to use support structures effectively in your 3D printing projects.
              </p>
              <button className={styles.secondaryButton}>Read Article</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Article</div>
              <h3 className={styles.articleTitle}>Material Selection Guide for Student Projects</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Dean McClements</p>
                <p className={styles.articleReadTime}>12 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Comprehensive comparison of PLA, ABS, PETG, and specialty filaments for different applications.
              </p>
              <button className={styles.secondaryButton}>Read Article</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Video</div>
              <h3 className={styles.articleTitle}>Print Orientation: Optimizing Strength and Surface Quality</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Kat de Naoum</p>
                <p className={styles.articleReadTime}>15 min watch</p>
              </div>
              <p className={styles.articleDescription}>
                Learn how part orientation affects strength, surface finish, and print success rates.
              </p>
              <button className={styles.secondaryButton}>Watch Video</button>
            </div>
          </div>
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
            <button className={styles.viewAllButton}>View All Machining Design Content</button>
          </div>
          
          <div className={styles.articlesGrid}>
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Article</div>
              <h3 className={styles.articleTitle}>Understanding CNC Tooling and Tool Selection</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Dean McClements</p>
                <p className={styles.articleReadTime}>14 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Comprehensive guide to selecting the right cutting tools for different materials and machining operations.
              </p>
              <button className={styles.secondaryButton}>Read Article</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Article</div>
              <h3 className={styles.articleTitle}>Design for Manufacturability in CNC Machining</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Joel Schadegg</p>
                <p className={styles.articleReadTime}>9 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Learn how to design parts that are both functional and cost-effective to manufacture.
              </p>
              <button className={styles.secondaryButton}>Read Article</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Tool</div>
              <h3 className={styles.articleTitle}>Feeds and Speeds Calculator</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Team Xometry</p>
              </div>
              <p className={styles.articleDescription}>
                Interactive tool to calculate optimal cutting parameters for different materials and cutting tools.
              </p>
              <button className={styles.primaryButton}>Use Calculator</button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Student Success Stories</h2>
              <p className={styles.sectionDescription}>
                Real-world examples of student projects and how they overcame manufacturing challenges.
              </p>
            </div>
            <button className={styles.viewAllButton}>View All Case Studies</button>
          </div>
          
          <div className={styles.articlesGrid}>
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Case Study</div>
              <h3 className={styles.articleTitle}>Senior Design Project: Autonomous Drone Frame</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Tricia Contreras</p>
                <p className={styles.articleReadTime}>6 min read</p>
              </div>
              <p className={styles.articleDescription}>
                How a team of engineering students designed and manufactured a lightweight, durable drone frame for their capstone project.
              </p>
              <button className={styles.secondaryButton}>Read Case Study</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Case Study</div>
              <h3 className={styles.articleTitle}>Formula SAE: Rapid Prototyping for Competition</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Greg Paulsen</p>
                <p className={styles.articleReadTime}>8 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Learn how university racing teams use rapid prototyping to iterate designs and meet competition deadlines.
              </p>
              <button className={styles.secondaryButton}>Read Case Study</button>
            </div>
            
            <div className={styles.articleCard}>
              <div className={styles.articleType}>Case Study</div>
              <h3 className={styles.articleTitle}>Biomedical Device Development: From Concept to Prototype</h3>
              <div className={styles.articleMeta}>
                <p className={styles.articleAuthor}>By Kat de Naoum</p>
                <p className={styles.articleReadTime}>10 min read</p>
              </div>
              <p className={styles.articleDescription}>
                Student team develops a novel medical device prototype using advanced manufacturing techniques.
              </p>
              <button className={styles.secondaryButton}>Read Case Study</button>
            </div>
          </div>
        </section>

      </div>
    </div>
    </>
  );
}
