import "./HomePage.css";
import MainImage from "../../assets/mainimage.jpg";
import CourseComponent from "../../components/CourseComponent/CourseComponent";

//social media icons
import Insta from "../../assets/socialmediaIcons/instagram.png";
import Facebook from "../../assets/socialmediaIcons/facebook.png";

function HomePage() {
  return (
    <div className="home-page-container">
      <section className="top-section">
        <img className="top-section-image" src={MainImage} alt="" />
        <h1 className="top-section-title">Welcome to 4Finance...</h1>
      </section>

      <div className="home-page-section">
        <section className="about-us-container">
          <h2 className="titles">About Us</h2>
          <p className="about-us-container-text">
            Lorem ipsum dolor sit amet. Vel cupiditate sunt et consequatur
            similique a consequatur corporis qui corrupti officia et eius rerum.
            Ex tempora veniam et architecto accusamus quo minima quidem et quos
            sint et laudantium dolores quo autem possimus. Est Quis assumenda
            qui reprehenderit aliquid ut explicabo recusandae quo illum enim non
            labore perferendis aut blanditiis doloribus. Sed atque assumenda eos
            repellat maiores eos doloribus aperiam est voluptas quis id enim
            eius quo provident fugit ut sint sequi. Lorem ipsum dolor sit amet.
            Vel cupiditate sunt et consequatur similique a consequatur corporis
            qui corrupti officia et eius rerum. Ex tempora veniam et architecto
            accusamus quo minima quidem et quos sint et laudantium dolores quo
            autem possimus. Est Quis assumenda qui reprehenderit aliquid ut
            explicabo recusandae quo illum enim non labore perferendis aut
            blanditiis doloribus. Sed atque assumenda eos repellat maiores eos
            doloribus aperiam est voluptas quis id enim eius quo provident fugit
            ut sint sequi.
          </p>
          <p className="about-us-container-text">
            Lorem ipsum dolor sit amet. Vel cupiditate sunt et consequatur
            similique a consequatur corporis qui corrupti officia et eius rerum.
            Ex tempora veniam et architecto accusamus quo minima quidem et quos
            sint et laudantium dolores quo autem possimus. Est Quis assumenda
            qui reprehenderit aliquid ut explicabo recusandae quo illum enim non
            labore perferendis aut blanditiis doloribus. Sed atque assumenda eos
            repellat maiores eos doloribus aperiam est voluptas quis id enim
            eius quo provident fugit ut sint sequi. Lorem ipsum dolor sit amet.
            Vel cupiditate sunt et consequatur similique a consequatur corporis
            qui corrupti officia et eius rerum. Ex tempora veniam et architecto
            accusamus quo minima quidem et quos sint et laudantium dolores quo
            autem possimus. Est Quis assumenda qui reprehenderit aliquid ut
            explicabo recusandae quo illum enim non labore perferendis aut
            blanditiis doloribus. Sed atque assumenda eos repellat maiores eos
            doloribus aperiam est voluptas quis id enim eius quo provident fugit
            ut sint sequi.
          </p>
        </section>

        {/* courses section */}
        <section className="courses-section">
          <h2 className="titles">Courses</h2>
          <div className="courses-list">
            <CourseComponent
              name="React.js"
              description="React is one of the most popular "
              creditNumber={3}
            />
            <CourseComponent
              name="ASP.NET Core Web API"
              description="Rest API with .NET and C# ASP.NET makes it easy to "
              creditNumber={3}
            />
            <CourseComponent
              name="MySQL"
              description="MySQL "
              creditNumber={3}
            />
          </div>
        </section>

        {/* Contact us section */}
        <section className="contact-us-container">
          <h2 className="titles">Contact Us</h2>

          <div className="contact-us-sm-container">
            <div>
              <h3
                className="links"
                onClick={() => window.open("tel:+96176125766")}
              >
                Phone Number: 00961 76 125 766
              </h3>
              <h3
                className="links"
                onClick={() => window.open("mailto:rozie.ayyash2002@gmail.com")}
              >
                rozie.ayyash2002@gmail.com
              </h3>
            </div>

            <div>
              <img
                className="social-media-icon-logo"
                src={Insta}
                alt="Instagram"
                onClick={() =>
                  window.open(
                    "https://instagram.com/4_finance_?igshid=YmMyMTA2M2Y=",
                    "_blank"
                  )
                }
              />
              <img
                className="social-media-icon-logo"
                src={Facebook}
                alt="Facebook"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/HB4Finance?mibextid=ZbWKwL",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
