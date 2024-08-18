import { useRef, useState } from "react";

function App() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const showcaseRef = useRef(null);
  const contactRef = useRef(null);
  const pre1Ref = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsDropdownVisible(false); // Hide dropdown after selecting an option
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="lista">
        <h1>Hey, I'm Asko!</h1>
        <p>Full-Stack Developer & Software Engineer</p>

        <pre 
          id="pre1" 
          ref={pre1Ref}
          className="pre1">
          <a onClick={() => scrollToSection(aboutMeRef)}>About Me   </a>
          <a onClick={() => scrollToSection(servicesRef)}>Services   </a>
          <a onClick={() => scrollToSection(showcaseRef)}>Showcase   </a>
          <a onClick={() => scrollToSection(contactRef)}>Contact   </a>
        </pre>

        <button className="button" onClick={toggleDropdown}>
          Navigation
        </button>

        {isDropdownVisible && (
          <div className="dropdown-menu">
            <a onClick={() => scrollToSection(aboutMeRef)}>About Me</a>
            <a onClick={() => scrollToSection(servicesRef)}>Services</a>
            <a onClick={() => scrollToSection(showcaseRef)}>Showcase</a>
            <a onClick={() => scrollToSection(contactRef)}>Contact</a>
          </div>
        )}
      </div>

      <h1 className="header" ref={aboutMeRef}>About Me</h1>
      <pre className="abm">
        Hey, I'm Asko! I am a full-stack developer and software engineer. I specialize in web, mobile application,
        software and AI development. I have been programming for about 2 years now and know multiple programming languages, such as JavaScript, C++, C#, Dart, Java, Python, etc. I also work with frameworks and languages such as HTML, CSS, React.JS, React Native, .NET and more. In my free time, I develop and play video games.
      </pre>

      <h1 className="header" id="srv" ref={servicesRef}>Services</h1>
      <pre className="srvc">
        I can develop you a custom website, a personal or professional mobile or even desktop application. I set prices depending on the type of software/web I am about to develop. Websites: 20-200€, Mobile Applications: 25-500€, Desktop Applications: 70-2K€. I calculate the prices based on the difficulty, size, features, and more factors of the application/web type. These prices are NOT debatable and cannot be affected. Handling of orders: First, you need to contact me through my discord or email, make sure to include a lot of details. After that, we can debate if you want to pay before or after I finish your project. Then, I calculate and set the price of the product. After a successful payment and finishing the project, I will send you all the files and instructions. NOTE: I do not accept any kind of refunds, please acknowledge this before purchasing my products. Trying to scam me will not end up well for you either.
      </pre>

      <h1 className="header" id="scs" ref={showcaseRef}>Showcase</h1>

      <h1 className="header" id="cnch" ref={contactRef}>Contact</h1>
      <pre className="cnc">
        You may contact me via my discord (asko4660) or my email (askoo.dev@gmail.com), I will most likely respond within 2 to 48 hours after being sent the message. Please make sure to include as many details about the application as possible, such as name, functions and features, purpose, etc.
      </pre>
    </>
  );
}

export default App;
