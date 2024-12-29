import {useState} from 'react'
import emailjs from 'emailjs-com'
import './App.css'

const Navbar = () => (
  <nav className="navbar">
    <h1>Ayodhya Cafe</h1>
    <ul className="nav-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#menu">Menu</a>
      </li>
      <li>
        <a href="#about">About Us</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
)

const Footer = () => (
  <footer className="footer">
    <p>Come visit us and taste the difference!</p>
    <p>Contact: +91 12345 67890 | ayodhyacafe@example.com</p>
    <p>&copy; 2024 Ayodhya Cafe. All rights reserved.</p>
  </footer>
)

const Home = () => (
  <header className="header" id="home">
    <h1>Welcome to Ayodhya Cafe</h1>
    <p>Your perfect spot for coffee, tea, and biscuits!</p>
  </header>
)

const Menu = () => (
  <section className="menu" id="menu">
    <h2>Our Menu Highlights</h2>
    <div className="menu-items">
      <div className="menu-item">
        <img
          src="https://tinyurl.com/coffee-ayodhya"
          alt="Classic Coffee"
          className="menu-image"
        />
        <h3>Classic Coffee</h3>
        <p>
          Classic coffee is a rich and aromatic brew, offering the perfect
          balance of bold flavor and comforting warmth in every cup.
        </p>
      </div>
      <div className="menu-item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfP5nLPwNi30Vgf7mXpu0ht8-8Nui5MppQuw&s"
          alt="Badam milk"
          className="menu-image"
        />
        <h3>Badam milk</h3>
        <p>
          Badam milk is a creamy, nutritious delight infused with the goodness
          of almonds and a touch of sweetness for a perfect blend of health and
          flavor.
        </p>
      </div>
      <div className="menu-item">
        <img
          src="data:image/jpeg;base64,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"
          alt="Lemon Tea"
          className="menu-image"
        />
        <h3>Lemon Tea</h3>
        <p>
          Lemon tea is a zesty and refreshing brew, packed with antioxidants and
          a tangy twist to uplift your mood and energize your day.
        </p>
      </div>
      <div className="menu-item">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUREhIVFRIQFxUQERUTExUQEBAZFhUWFxURGBoYHSkgGRolGxUTITEhJSksOi8vFx82ODMsOCgtLisBCgoKDg0OGxAQGysfICUtLy0tLS03LS0rLS0tLS03LS0wLS0tNi0tLTUtMi0tLS0rNy0tNS0rKy0tLS0rLS01Lf/AABEIAM8A8wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xABGEAABAwIDBAYFBwoFBQAAAAABAAIDBBESITEFE0FRBiJhcYGRMlKhsfAHFEJygrLBIzNUYoOTosLR0xVDU5LhJHOzw/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAMBEBAQACAQMBBAcJAAAAAAAAAAECEQMSITEEE0FhoSIyQlFxkfAFFBVSgbHR4fH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFRzgMybBa6t27TwkNklYxzvRa97Y3u7GtcQXeCbGyRaqPb0bsmsnd3U0+E9zizCfNZ2V7zpTTeO5bfwMl/YgnIoTaqU/wCQR9aRn8pKukmmv1YmEZXvKW25jJhQS0UJs0/GKPstM4/+tN/Pf8yzDzE2fkWD3oJqKHPVSNFxA955MfHf+NzQox2wQLvpalg+oyYjwhe8oNqi1VP0hpnlrd4WPfkyOZklNK88msla1x8AtjHM11wCCRqL5i+lxwQZEREBERAREQEREBERAREQEREBERAREQEREGm6T0zpI2ta9zbOxHC4sxAcCRna9rjiCQotBSyQttE2nYNS2OL5u09t24iT24QtjtfPLkB7XD+ijYlVb3V291Y5qgZujYR2VEh98ICzivk/R3H6kkLvvPCjtPwNfjVW4ifHlr4fHJOpHUltrpP0Wfzp/wAJkNfJ+iz+dP8A3VExHny4jL4z8le1559m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"
          alt="Green Tea"
          className="menu-image"
        />
        <h3>Green Tea</h3>
        <p>
          Green tea is a refreshing elixir, rich in antioxidants, offering
          wellness and tranquility in every sip.
        </p>
      </div>
      <div className="menu-item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kgsO4bgKLCrkdieA241vHtvZCm_ho4jiqg&s"
          alt="Tea Biscuits"
          className="menu-image"
        />
        <h3>Tea Biscuits</h3>
        <p>
          Tea biscuits are crunchy, lightly sweetened treats, perfectly paired
          with a hot cup of tea for a delightful and comforting snack.
        </p>
      </div>
    </div>
  </section>
)

const About = () => (
  <section className="about" id="about">
    <h2>About Us</h2>
    <p>
      At Ayodhya Cafe, we pride ourselves on delivering the finest beverages and
      snacks to our customers. Our cozy ambiance and friendly service ensure
      that every visit is a memorable one.
    </p>
  </section>
)

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_bwxe06f',
        'template_sgjw8mx',
        event.target,
        'rm1Uh12nLPkkaZzUu',
      )
      .then(result => {
        console.log(result.text)
        setSuccessMessage('Message sent successfully!')
        setErrorMessage('')
      })
      .catch(error => {
        console.error(error.text)
        setErrorMessage('An error occurred. Please try again later.')
        setSuccessMessage('')
      })
  }
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your Email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your Message"
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  )
}

const App = () => (
  <div className="app">
    <Navbar />
    <Home />
    <Menu />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default App
