import React from 'react';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Versatales Club</h1>
        <p>Explore your creativity and connect with fellow storytellers.</p>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="content">
          <h2>About Us</h2>
          <p>
            Versatales is a creative club aimed at igniting expression and
            imagination among students. We host events, writing contests,
            and storytelling sessions to promote creativity and build community.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Internal CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #0b0c0fff;
          color: #111827;
        }

        .header {
          background-color: #1f2937; /* Gray 900 */
          color: white;
          padding: 60px 20px;
          text-align: center;
        }

        .main {
          padding: 40px 20px;
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .content h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #374151;
        }

        .footer {
          background-color: #040608ff; /* Gray 900 */
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }

        .footer .container {
          max-width: 64rem;
          margin: 0 auto;
        }

        .footer h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .footer p {
          font-size: 0.875rem;
          margin: 0.25rem 0;
        }

        .footer .developer-credits {
          margin-top: 1.5rem;
          color: #9ca3af; /* Gray 400 */
          font-size: 0.875rem;
        }

        .footer .copyright {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: #6b7280; /* Gray 500 */
        }
      `}</style>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>Versatales Club</h2>
        <p>Ignite Creativity | Inspire Expression | Build Community</p>

        {/* Developer Credits */}
        <div className="developer-credits">
          <p>Developed by:</p>
          <p>P V R Sasi Kiran – Head of the Club</p>
          <p>K Srinivas Charan</p>
          <p>P Gopi Krishna</p>
        </div>

        {/* Copyright */}
       
      </div>
    </footer>
  );
};

export default App;
