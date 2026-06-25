import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Sr. Backend Engineer with production experience at American Airlines,
          specializing in Java, Spring Boot, and AWS cloud-native architecture.
          Built and maintained REST microservices with Spring AOP and Actuator,
          implemented GitOps-based deployments with OpenShift, and delivered
          serverless functions with AWS Lambda. Passionate about distributed
          systems, event-driven architecture with Kafka, and full-stack
          observability using Prometheus and Grafana.
        </p>
      </div>
    </div>
  );
};

export default About;
