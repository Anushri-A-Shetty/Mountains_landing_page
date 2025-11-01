import './App.css'
function App() {
 
 
  return (
    <>
   
      <div className='landing-page'>
        <nav className='navbar'>
          <h2 className='logo'>Himalaya</h2>
          <ul className='nav-links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#explore'>Explore</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
        </nav>

        {/* HERO SECTION */}
        <section className='hero' id='home'>
          <div className='hero-content'>
            <h1>Explore the mountains</h1>
            <p>Adventure awaits beyond every peak</p>
            <button className='cta-btn'>Get Started</button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className='about' id='about'>
          <h2>About the mountains</h2>
          <p>1Discover breathtaking views,peaceful trails and unforgettable experiences.</p>
        </section>

        {/*EXPLORE SECTION */}
        <section className='explore' id='explore'>
          <h2>Explore</h2>
          <p>Find your next adventure among the worlds most beautiful peaks.</p>
          <div className='explore-cards'>
            <div className='card'>
              <img src="./hmount.jpg" alt="himalayas"></img>
              <p>Himalayas</p>
              <p>Discover the highest peak on earth ,home to breathtaking tails and snowy adventures</p>
            </div>

            <div className='card'>
              <img src='./alps.jpg' alt="Alps"></img>
              <p>Alps</p>
              <p>Experience the beauty of Europes iconic mountain range, perfect for hiking and skiing</p>
            </div>

            <div className='card'>
              <img src='/rockies.jpg' alt="Rockies"></img>
              <p>Rockies</p>
              <p>Explore the rugged landscapes and serene lakes across North America's stunning Rockies</p>
            </div>
            
          </div>
        
        
        
        
        
        
        
        </section>

        {/*CONTACT SECTION */}
        <section className='contact' id='contact'>
          <h2>Contact</h2>
          <p>Start planning your mountain adventure today</p>
          <form className='contact-form'>
            <input type="text" placeholder='Your Name' required></input>
            <input type="email" placeholder='Your Email' required></input>
            <textarea placeholder='Your message' rows="5" required></textarea>
            <button type="submit">Send message</button>
          </form>
        
        
        </section>
      
      </div>
      <footer className='footer'>
        <p>&copy;2025 Mountain Landing Page</p>
      </footer>

    </>
  )
}

export default App
