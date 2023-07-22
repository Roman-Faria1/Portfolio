const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/roman-faria/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Roman-Faria1?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/github-mark-white-tiny.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
