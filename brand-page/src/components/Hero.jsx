const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="hero-text">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <a href="https://www.flipkart.com/">
              <img src="./image/flipkart.png" alt="flipkart-logo" />
            </a>
            <a href="https://www.amazon.co.uk/NIKE-Womens-Miler-Sleeve-Shirt/dp/B00BLOUZLS?th=1&psc=1">
              <img src="./image/amazon.png" alt="amazon-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./image/shoe_image.png" alt="shoe_image.png" />
      </div>
    </main>
  );
};

export default Hero;
