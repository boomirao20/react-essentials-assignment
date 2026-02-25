import { useState } from "react";

const images = [
  "/images/profile1.jpg",
  "/images/profile2.jpg",
  "/images/profile3.jpg",
  "/images/profile4.jpg",
];

function ProfileCard() {
  const [theme, setTheme] = useState("light");
  const [likes, setLikes] = useState(128);
  const [index, setIndex] = useState(0);

  const skills = [
    "HTML",
    "Python",
    "Machine Learning",
    "ReactJS",
    "Deep Learning",
    "Django",
  ];

  return (
    <div className={`card ${theme}`}>
      <button className="theme-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        ☀ Toggle theme
      </button>

      <div className="header">
        <img src={images[index]} className="avatar" alt="profile" />
        <div>
          <h2>TuteDude</h2>
          <p className="role">Product Designer & Frontend Engineer</p>
        </div>
      </div>

      <p className="bio">
        I design and build calm, focused product experiences for fast-moving
        teams. Currently exploring AI-assisted interfaces, design systems,
        and high-performance UI engineering.
      </p>

      <h4 className="skill-title">Skills</h4>
      <div className="skills">
        {skills.map((skill, i) => (
          <span key={i} className="pill">{skill}</span>
        ))}
      </div>

      <div className="footer">
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>‹</button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={() => setIndex((index + 1) % images.length)}>›</button>

        <div className="likes" onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </div>

        <button className="contact">✉ Contact</button>
      </div>
    </div>
  );
}

export default ProfileCard;