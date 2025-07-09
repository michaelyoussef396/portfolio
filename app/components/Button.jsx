// src/components/Button.jsx
const Button = ({ text, className, id, link }) => {
  const handleClick = (e) => {
    if (!id) return;

    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const offset = window.innerHeight * 0.15;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a
      href={link ?? "#"} 
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      {...(link
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
