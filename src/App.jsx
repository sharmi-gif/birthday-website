import { useState } from 'react'
import WelcomeImage from './assets/Welcome image.jpeg'
import BirthdayCardImage from './assets/Birthday card.jpeg'
import EngagementPhoto from './assets/Engagement photo.jpeg'
import Ourspecialday from './assets/our special day.jpeg'
import OurFirsttrip from './assets/Our first trip.jpeg'
import MySafestPlace from './assets/My safest place.jpeg'
import MyForever from './assets/My forever.jpeg'
import Happytogether from './assets/Happy together.jpeg'
import Touchtheteddy from './assets/Touch the teddy.jpg'
import IImage from './assets/I.png'
import ILoveImage from './assets/I Love.png'
import ILoveYouImage from './assets/I Love You.png'
import ILoveYouAlwaysImage from './assets/I Love You Always.png'
import './App.css'

function App() {
  const [page, setPage] = useState(0)

  return (
    <div className="birthday-website">

      {/* Welcome Screen */}
      {page === 0 && (
  <section className="welcome-screen">

    <div className="top-title">
      For My love ♡
    </div>

    <div className="top-hearts">
      ♡ ♡
    </div>

    <div className="welcome-content">

      <div className="welcome-text">

        <h1>
          Happy Birthday My Love
        </h1>

        <p>
          You make life brighter
          <br />
          my heart happier and every
          <br />
          day more special
        </p>

        <button
          className="surprise-button"
          onClick={() => setPage(1)}
        >
          <span>Start the surprise</span>
          <span className="arrow">→</span>
        </button>

      </div>

     <div className="welcome-photo">
  <img
    src={WelcomeImage}
    alt="My love"
  />
</div>

    </div>

  </section>
)}

    {page === 1 && (
  <section className="birthday-card-screen">

    {/* Top hearts */}
    <div className="card-decoration top-left">
      ♡
    </div>

    <div className="card-decoration top-right">
      ♡ ♡
    </div>

    {/* Birthday Card */}
    <div className="birthday-card">

      {/* Birthday Card Photo */}
      <div className="birthday-card-image">
        <img
          src={BirthdayCardImage}
          alt="Birthday memory"
        />
      </div>

      {/* Heading */}
      <h1>
        Happy Birthday My Love ❤️
      </h1>

      {/* Message */}
      <p>
        To the most amazing person in my life
      </p>

      <p>
        May your special day be filled with all the love,
        happiness, and joy you bring into my life.
      </p>

      <p>
        Thank you for being my partner, my best friend,
        and my safe place. Every moment with you is a
        memory I will always treasure.
      </p>

      <p>
        Happy Birthday, my love. ❤️
      </p>

      <p>
        With all my love,
        <br />
        Forever yours.
      </p>

      {/* Next Button */}
      <button
        className="card-next-button"
        onClick={() => setPage(2)}
      >
        Our Memories →
      </button>

    </div>

  </section>
)}


    {/* Our Memories */}
{/* Our Memories */}
{page === 2 && (
  <section className="memories-screen">

    {/* Top Hearts */}
    <div className="memory-decoration top-left">
      ♡
    </div>

    <div className="memory-decoration top-right">
      ♡ ♡
    </div>

    {/* Memories Card */}
    <div className="memories-card">

      {/* Main Heading */}
      <h1>
        Some of Our Favourite Moments
      </h1>

      {/* Sub Heading */}
      <h2>
        Grateful for every moment we get to share together.
      </h2>

      {/* Photos */}
      <div className="memory-grid">

        {/* 1. Engagement Photo */}
        <div className="memory-item">
          <div className="memory-photo">
            <img
              src={EngagementPhoto}
              alt="Engagement Photo"
            />
          </div>

          <h3>Engagement Photo</h3>
        </div>

        {/* 2. Our Special Day */}
        <div className="memory-item">
          <div className="memory-photo">
            <img
              src={Ourspecialday}
              alt="Our Special Day"
            />
          </div>

          <h3>Our Special Day</h3>
        </div>

        {/* 3. My Forever */}
        <div className="memory-item">
          <div className="memory-photo">
            <img
              src={MyForever}
              alt="My Forever"
            />
          </div>

          <h3>My Forever</h3>
        </div>

        {/* 4. My Safest Place */}
        <div className="memory-item">
          <div className="memory-photo">
            <img
              src={MySafestPlace}
              alt="My Safest Place"
            />
          </div>

          <h3>My Safest Place</h3>
        </div>

        {/* 5. Our First Trip */}
        <div className="memory-item">
          <div className="memory-photo">
            <img
              src={OurFirsttrip}
              alt="Our First Trip"
            />
          </div>

          <h3>Our First Trip</h3>
        </div>

        {/* 6. Happy Together */}
        <div className="memory-item">
          <div className="memory-photo">
            <img
              src={Happytogether}
              alt="Happy Together"
            />
          </div>

          <h3>Happy Together</h3>
        </div>

      </div>

      {/* Next Button */}
      <button
        className="card-next-button"
        onClick={() => setPage(3)}
      >
        Just beginning →
      </button>

    </div>

  </section>
)}

      {/* Letter */}
     {/* My Letter */}
{page === 3 && (
  <section className="letter-screen">

    <div className="letter-decoration top-left">
      ♡
    </div>

    <div className="letter-decoration top-right">
      ♡ ♡
    </div>

    <div className="letter-card">

      <h1>My Letter 💌</h1>

      <h2>My Letter to You</h2>

      <p>To my love,</p>

      <p>
        Thank you for being my partner, my best friend,
        and my safe place. ❤️
      </p>

      <p>
        Every moment with you is a beautiful memory, and I’m
        grateful to have you by my side. I look forward to
        creating many more memories, sharing more laughter,
        and growing old together.
      </p>

      <p>
        You are my today, my tomorrow, and my forever. ❤️
      </p>

      <p>
        Happy Birthday, my love! 🎂
      </p>

      <p className="letter-ending">
        Forever yours ❤️
      </p>

      <button
        className="card-next-button"
        onClick={() => setPage(4)}
      >
        Next →
      </button>

    </div>

  </section>
)}

      {/* Surprise Reveal */}
    {/* One Last Thing */}
{page === 4 && (
  <section className="reveal-screen">

    <div className="reveal-card">

      <p className="reveal-small-title">
        For My Love ❤️
      </p>

      <h1>One Last Thing</h1>

      <p className="reveal-subtitle">
        I want you to know something
      </p>

      <h2>
        Very Special
      </h2>

      <div className="reveal-message">
        <p>You are My Today,</p>
        <p>My Tomorrow and</p>
        <p>My Forever ❤️</p>
      </div>

      <button
        className="reveal-button"
        onClick={() => setPage(5)}
      >
        Click to Reveal ✨
      </button>

    </div>

  </section>
)}

      {/* Teddy */}
      {/* Touch the Teddy */}
{page === 5 && (
  <section className="teddy-screen">

    <div className="teddy-card">

      <h1>One More Surprise ❤️</h1>

      <p>Touch the Teddy 🧸</p>

      <img
        src={Touchtheteddy}
        alt="Teddy"
        className="teddy-image"
        onClick={() => setPage(6)}
      />

      <p className="teddy-hint">
        Touch me for your surprise ❤️
      </p>

    </div>

  </section>
)}

      {/* Balloon Surprise */}
      {page === 6 && (
        <BalloonSurprise />
      )}

    </div>
  )
}
function BalloonSurprise() {
  const [step, setStep] = useState(0)

  const messages = [
    {
      image: IImage,
      alt: 'I'
    },
    {
      image: ILoveImage,
      alt: 'I Love'
    },
    {
      image: ILoveYouImage,
      alt: 'I Love You'
    },
    {
      image: ILoveYouAlwaysImage,
      alt: 'I Love You Always'
    }
  ]

  return (
    <section className="balloon-surprise-screen">

      <div className="balloon-card">

        <h1>One Last Surprise ❤️</h1>

        {step < 4 && (
          <>
            <p className="balloon-instruction">
              Pop the balloons one by one 🎈
            </p>

            <div className="balloon-container">

              {messages.map((item, index) => (
                <button
                  key={index}
                  className={`surprise-balloon ${
                    index < step ? 'popped' : ''
                  }`}
                  onClick={() => {
                    if (index === step) {
                      setStep(step + 1)
                    }
                  }}
                >
                  {index < step ? '❤️' : '🎈'}
                </button>
              ))}

            </div>
          </>
        )}

        {step > 0 && (
          <div className="revealed-image-container">
            <img
              src={messages[step - 1].image}
              alt={messages[step - 1].alt}
              className="revealed-message-image"
            />
          </div>
        )}

        {step === 4 && (
          <p className="final-love-text">
            I LOVE YOU ALWAYS ❤️
          </p>
        )}

      </div>

    </section>
  )
}

export default App