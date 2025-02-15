import "../footer/footer.scss";
import facebookIcon from "../../assets/Icons/Facebook.svg";
import twitterIcon from "../../assets/Icons/X_twitter.svg";
import instagramIcon from "../../assets/Icons/Instagram.svg";
import pinterestIcon from "../../assets/Icons/Pinterest.svg";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
  return (
    <section className="footer">
      <section className="footer__wrapper">
        <section className="footer__content">
          <h3 className="footer__header">Snaps</h3>
          <section className="footer__links">
            <article className="footer__column">
              <p className="footer__link">For photographers</p>
              <p className="footer__link">Hire talent</p>
              <p className="footer__link">Inspiration</p>
            </article>
            <article className="footer__column">
              <p className="footer__link">About</p>
              <p className="footer__link">Careers</p>
              <p className="footer__link">Support</p>
            </article>
            <article className="footer__social">
              <a href="" target="_blank" className="footer__social-link">
                <img
                  src={facebookIcon}
                  alt="facebook icon"
                  className="footer__icon"
                />
              </a>
              <a href="" target="_blank" className="footer__social-link">
                <img
                  src={twitterIcon}
                  alt="twitter icon"
                  className="footer__icon"
                />
              </a>
              <a href="" target="_blank" className="footer__social-link">
                <img
                  src={instagramIcon}
                  alt="instagram icon"
                  className="footer__icon"
                />
              </a>
              <a href="" target="_blank" className="footer__social-link">
                <img
                  src={pinterestIcon}
                  alt="pinterest icon"
                  className="footer__icon"
                />
              </a>
            </article>
          </section>
        </section>
      </section>
      <article className="footer__social2">
        <a href="" target="_blank" className="footer__social-link">
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="footer__icon"
          />
        </a>
        <a href="" target="_blank" className="footer__social-link">
          <img src={twitterIcon} alt="twitter icon" className="footer__icon" />
        </a>
        <a href="" target="_blank" className="footer__social-link">
          <img
            src={instagramIcon}
            alt="instagram icon"
            className="footer__icon"
          />
        </a>
        <a href="" target="_blank" className="footer__social-link">
          <img
            src={pinterestIcon}
            alt="pinterest icon"
            className="footer__icon"
          />
        </a>
      </article>
      <p className="footer__copyright">
        &copy; {year} Snaps . Terms Privacy Cookies
      </p>
    </section>
  );
}

export default Footer;
