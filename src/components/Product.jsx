//Import Images
import one from "../assets/images/photo_01.jpeg"
import two from "../assets/images/photo_02.jpeg"
import three from "../assets/images/photo_03.jpeg"

//Product 
function Product() {
    return (
        <div className="product">

            <div className="pro">
                <img src={one} alt="Product 1" />
                <h3>Premium Perfume</h3>
                <p>Experience a refreshing and long-lasting fragrance.</p>
                <h4>₹999</h4>
                <button>Buy Now</button>
            </div>

            <div className="pro">
                <img src={two} alt="Product 2" />
                <h3>Luxury Perfume</h3>
                <p>A beautiful fragrance for your special occasions.</p>
                <h4>₹1,499</h4>
                <button>Buy Now</button>
            </div>

            <div className="pro">
                <img src={three} alt="Product 3" />
                <h3>Classic Perfume</h3>
                <p>Enjoy an elegant fragrance throughout the day.</p>
                <h4>₹1,199</h4>
                <button>Buy Now</button>
            </div>

        </div>
    );

}

export default Product
