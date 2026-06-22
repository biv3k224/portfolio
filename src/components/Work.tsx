import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Async Notification Dispatch Engine",
    category: "Event-Driven Microservice",
    tools: "Spring Boot · Kafka · SendGrid/Twilio API · PostgreSQL · Docker",
    image: "/public/ticket.jpeg",
    link: "https://github.com/biv3k224",
    highlights: [
      "Reduced notification delivery latency from ~4.2s to under 800ms",
      "Handled 50,000+ test notification events during integration testing",
      "97% of failed deliveries recovered via Kafka dead-letter retry strategy",
    ],
  },
  {
    title: "Intelligent Log Aggregator with Anomaly Alerting",
    category: "Observability & Monitoring Pipeline",
    tools: "Spring Boot · Kafka · Elasticsearch · Python · Docker Compose",
    image: "/public/maze.jpeg",
    link: "https://github.com/biv3k224",
    highlights: [
      "Full-text search across 1M+ log records in under 300ms via Elasticsearch",
      "91% precision anomaly detection — Slack alerts within 10 seconds",
      "Reduced MTTD from ~12 minutes to under 90 seconds",
    ],
  },
  {
    title: "Real-Time Chat App",
    category: "Full-Stack Messaging Platform",
    tools: "Spring Boot WebSocket · STOMP · MongoDB · React · Docker Compose",
    image: "/public/chat.jpeg",
    link: "https://github.com/biv3k224/chatApp",
    highlights: [
      "Real-time bidirectional messaging over WebSocket/STOMP protocol",
      "JWT-secured endpoints with role-based access control",
      "Containerized with Docker Compose for single-command local spin-up",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.highlights && (
                          <ul className="carousel-highlights">
                            {project.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
