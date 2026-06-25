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
                <h4>Software Developer III</h4>
                <h5>US Bank · Atlanta, GA (Remote)</h5>
              </div>
              <h3>2024–Present</h3>
            </div>
            <p>
              Nov 2024 – Present. Developed applications using Agile methodology;
              participated in daily scrum, sprint planning, demos, and
              retrospectives. Leveraged Java 17 features including lambda
              expressions, Stream API, method references, parallel collections,
              and enhanced concurrency. Used the full Spring Framework stack:
              Spring Core/IoC, Spring Batch, Spring Boot, Spring Security, Spring
              ORM, and Spring AOP. Built Spring Boot Actuator-monitored
              microservices with Spring MVC architecture; implemented auth using
              Spring Security and OAuth2. Developed Gradle-built microservices
              using Spring Boot and JDK 11 that read and publish data to message
              brokers (Queues) and AWS Kinesis. Created SOAP and RESTful web
              services with WSDL, JAX-WS, CXF, and JAX-RS; delivering XML/JSON
              via Jersey. Configured AWS resources including S3, VPC, EC2, EBS,
              Security Groups, ECS, SNS, Auto Scaling, and RDS via
              CloudFormation and CLI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Backend Engineer</h4>
                <h5>American Airlines · Fort Worth, TX</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Mar 2023 – Oct 2024. Designed and developed applications in Java
              with modern Java 11/17 features. Built and maintained REST
              microservices with Spring Boot using Spring AOP and Actuator.
              Refactored legacy monolithic Java codebases to modular
              microservices, preserving business logic while improving
              performance. Implemented GitOps-based deployments with OpenShift
              with audit traceability, monitored with Prometheus, Grafana, and
              OpenShift Monitoring. Developed serverless functions with AWS
              Lambda and built CI/CD pipelines with AWS CodePipeline, CodeBuild,
              and CodeDeploy using blue-green deployment strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Computer Science</h4>
                <h5>Youngstown State University · Youngstown, OH</h5>
              </div>
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
