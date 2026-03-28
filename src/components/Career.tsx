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
              <h3>2025</h3>
            </div>
            <p>
              Jan 2025 – Jun 2025. Built and extended backend REST APIs for a
              multi-vendor e-commerce platform using Java and Spring Boot.
              Implemented JWT-based authentication and role-based authorization.
              Designed and maintained relational database schemas using
              PostgreSQL/MySQL with optimized SQL queries. Containerized services
              with Docker and deployed to AWS EC2 with S3 integration.
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
