import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Dallo Tech · Lalitpur, Nepal</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Jan 2024 – Jun 2025. Architected and delivered 12+ REST API
              endpoints for a multi-vendor e-commerce platform, reducing average
              API response time by 35% through indexing and query optimization on
              PostgreSQL schemas with 15+ normalized tables. Implemented JWT-based
              authentication with RBAC across 3 roles, deployed 4 microservices to
              AWS EC2 with S3 integration, and streamlined CI/CD workflows cutting
              deployment time from 45 to under 8 minutes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Computer Science</h4>
                <h5>Youngstown State University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Coursework: Data Structures & Algorithms, Operating Systems,
              Object Oriented Programming, Data Science & Machine Learning,
              Computer Architecture, Networking, Database Development, Calculus
              I–III, Probability & Statistics, Linear Algebra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
