
export default function ResourcesPage() {
  return (
    <div className="pad-6">
      <h1 className="txt-page-title">Student Resources</h1>
      <p className="txt-body">Discover helpful resources, guides, and tools for all your manufacturing needs.</p>
      
      <div style={{
        marginTop: "var(--l-space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--l-space-8)"
      }}>
        
        {/* Getting Started Section */}
        <section>
          <h2 className="txt-h2" style={{marginBottom: "var(--l-space-4)"}}>Getting Started</h2>
          <div className="bg-gray-50 radius-2 pad-5">
            <h3>Essential Resources for New Students</h3>
            <p>Start your manufacturing journey with these fundamental guides and tools. Perfect for beginners who want to understand the basics of design and manufacturing.</p>
            <div className="gap-4 flex flex-wrap" style={{marginTop: "var(--l-space-4)"}}>
              <div className="brd radius-2 pad-4" style={{flex: "1", minWidth: "200px"}}>
                <h4>📋 Design Guidelines</h4>
                <p className="txt-small">Learn the fundamentals of designing for manufacturing</p>
                <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                  <l-badge count="25+" kind="primary"></l-badge>
                  <span className="txt-small">guides available</span>
                </div>
              </div>
              <div className="brd radius-2 pad-4" style={{flex: "1", minWidth: "200px"}}>
                <h4>📐 Material Selection</h4>
                <p className="txt-small">Choose the right materials for your projects</p>
                <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                  <l-badge count="100+" kind="neutral"></l-badge>
                  <span className="txt-small">materials</span>
                </div>
              </div>
              <div className="brd radius-2 pad-4" style={{flex: "1", minWidth: "200px"}}>
                <h4>🔧 Basic Tools</h4>
                <p className="txt-small">Essential tools and calculators for students</p>
                <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                  <l-badge count="8" kind="success"></l-badge>
                  <span className="txt-small">tools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Printing Resources Section */}
        <section>
          <h2 className="txt-h2" style={{marginBottom: "var(--l-space-4)"}}>3D Printing Resources</h2>
          <div className="brd radius-2 pad-5">
            <div className="gap-4 flex flex-column">
              <div>
                <h3>Additive Manufacturing Hub</h3>
                <p>Everything you need to know about 3D printing, from design considerations to post-processing techniques.</p>
              </div>
              
              <div className="gap-4 flex flex-wrap">
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>🖨️ Design for 3D Printing</h4>
                  <p className="txt-small">Overhangs, supports, wall thickness, and print orientation guidelines</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="primary">Best Practices</l-chip>
                    <l-chip kind="neutral">PDF Guide</l-chip>
                  </div>
                  <l-button kind="primary" style={{marginTop: "var(--l-space-3)"}}>View Guidelines</l-button>
                </div>
                
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>🧪 Material Properties</h4>
                  <p className="txt-small">PLA, ABS, PETG, Resin - understand material characteristics</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="secondary">Database</l-chip>
                    <l-chip kind="success">Interactive</l-chip>
                  </div>
                  <l-button kind="secondary" style={{marginTop: "var(--l-space-3)"}}>Explore Materials</l-button>
                </div>
                
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>⚙️ Post-Processing</h4>
                  <p className="txt-small">Sanding, painting, assembly, and finishing techniques</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="warning">Video Tutorials</l-chip>
                    <l-chip kind="neutral">Step-by-Step</l-chip>
                  </div>
                  <l-button kind="outline" style={{marginTop: "var(--l-space-3)"}}>Learn Techniques</l-button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CNC Milling Resources Section */}
        <section>
          <h2 className="txt-h2" style={{marginBottom: "var(--l-space-4)"}}>CNC Milling Resources</h2>
          <div className="brd radius-2 pad-5">
            <div className="gap-4 flex flex-column">
              <div>
                <h3>Precision Machining Center</h3>
                <p>Master the art of CNC milling with comprehensive guides on tooling, feeds, speeds, and precision manufacturing.</p>
              </div>
              
              <div className="gap-4 flex flex-wrap">
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>🔩 Design for Machining</h4>
                  <p className="txt-small">Tolerances, surface finishes, and machinable features</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="primary">DFM Guidelines</l-chip>
                    <l-chip kind="purple">Examples</l-chip>
                  </div>
                  <l-button kind="primary" style={{marginTop: "var(--l-space-3)"}}>View Guidelines</l-button>
                </div>
                
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>🛠️ Tooling & Setup</h4>
                  <p className="txt-small">End mills, cutting parameters, and workholding strategies</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="secondary">Tool Library</l-chip>
                    <l-chip kind="warning">Safety Guide</l-chip>
                  </div>
                  <l-button kind="secondary" style={{marginTop: "var(--l-space-3)"}}>Learn More</l-button>
                </div>
                
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>📊 Feeds & Speeds</h4>
                  <p className="txt-small">Calculate optimal cutting parameters for different materials</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="success">Calculator</l-chip>
                    <l-chip kind="neutral">Reference Tables</l-chip>
                  </div>
                  <l-button kind="outline" style={{marginTop: "var(--l-space-3)"}}>Use Calculator</l-button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sheet Metal Resources Section */}
        <section>
          <h2 className="txt-h2" style={{marginBottom: "var(--l-space-4)"}}>Sheet Metal Resources</h2>
          <div className="brd radius-2 pad-5">
            <div className="gap-4 flex flex-column">
              <div>
                <h3>Sheet Metal Fabrication</h3>
                <p>Learn the fundamentals of sheet metal design, from bend allowances to laser cutting optimization.</p>
              </div>
              
              <div className="gap-4 flex flex-wrap">
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>📐 Bend Design</h4>
                  <p className="txt-small">Bend radii, allowances, and relief cuts for optimal forming</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="primary">Design Rules</l-chip>
                    <l-chip kind="success">Calculator</l-chip>
                  </div>
                  <l-button kind="primary" style={{marginTop: "var(--l-space-3)"}}>View Guidelines</l-button>
                </div>
                
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>⚡ Laser Cutting</h4>
                  <p className="txt-small">Kerf compensation, nesting, and cutting parameter optimization</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="secondary">Optimization</l-chip>
                    <l-chip kind="warning">Material Guide</l-chip>
                  </div>
                  <l-button kind="secondary" style={{marginTop: "var(--l-space-3)"}}>Learn More</l-button>
                </div>
                
                <div className="bg-gray-50 radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
                  <h4>🔧 Assembly Methods</h4>
                  <p className="txt-small">Welding, fasteners, and joining techniques for sheet metal</p>
                  <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                    <l-chip kind="purple">Techniques</l-chip>
                    <l-chip kind="neutral">Best Practices</l-chip>
                  </div>
                  <l-button kind="outline" style={{marginTop: "var(--l-space-3)"}}>Explore Options</l-button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section>
          <h2 className="txt-h2" style={{marginBottom: "var(--l-space-4)"}}>Additional Resources</h2>
          <div className="gap-4 flex flex-wrap">
            <div className="brd radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
              <h4>📖 Technical Papers</h4>
              <p>In-depth research and case studies on advanced manufacturing topics.</p>
              <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                <l-badge count="50+" kind="neutral"></l-badge>
                <span className="txt-small">papers available</span>
              </div>
              <l-button kind="text" style={{marginTop: "var(--l-space-3)"}}>Browse Papers</l-button>
            </div>
            
            <div className="brd radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
              <h4>🎥 Video Library</h4>
              <p>Comprehensive video tutorials covering all manufacturing processes.</p>
              <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                <l-badge count="100+" kind="primary"></l-badge>
                <span className="txt-small">videos</span>
              </div>
              <l-button kind="text" style={{marginTop: "var(--l-space-3)"}}>Watch Videos</l-button>
            </div>
            
            <div className="brd radius-2 pad-4" style={{flex: "1", minWidth: "250px"}}>
              <h4>💬 Expert Support</h4>
              <p>Connect with industry professionals for personalized guidance.</p>
              <div className="gap-2 flex" style={{marginTop: "var(--l-space-2)"}}>
                <l-badge count="24/7" kind="success"></l-badge>
                <span className="txt-small">support available</span>
              </div>
              <l-button kind="text" style={{marginTop: "var(--l-space-3)"}}>Get Help</l-button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
