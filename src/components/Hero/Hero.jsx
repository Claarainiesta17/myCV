import './Hero.scss';
import jo from "../../assets/clara.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import { useTranslation } from "react-i18next";
import castellano from "../../assets/españa.png";
import ingles from "../../assets/inglaterra.png";
export default function Hero(){

    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
};

    return(
        <div className="c-box">
        <div className="c-box__banderas">
        <button>
        <img className="c-box__castellano" src={castellano} alt="castellano" onClick={() => i18n.changeLanguage("es")}/>
        </button>
        <button>
        <img className="c-box__ingles" src={ingles} alt="ingles" onClick={() => i18n.changeLanguage("en")}/>
        </button>
        </div>
        <div className="c-box__hero">
            <h1 className="c-box__name">CLARA INIESTA LLOP</h1>
            <img className="c-box__img" src={jo} alt=""/>
            <p className="c-box__date">12/05/1997</p>
            <p className="c-box__city">{t("city")}</p>
            <a className="c-box__email" href="email">3a.clarainiesta17@gmail.com</a>
            <p className="c-box__mobile">(+34) 670 886 083</p>
            <div className="c-box__iconos">
            <a href="https://www.linkedin.com/in/clara-iniesta-llop-368b6a18a/">
                <img className="c-box__linkedin" src={linkedin} alt="" />
            </a>
            <a href="https://github.com/Claarainiesta17">
                <img className="c-box__github" src={github} alt="" />
            </a>
            <a href="https://www.instagram.com/claara17/">
                <img className="c-box__instagram" src={instagram} alt="" />
            </a>
            <a href="https://twitter.com/clarainiesta17">
                <img className="c-box__twitter" src={twitter} alt="" />
            </a>
            <a href="https://www.facebook.com/clara.iniestallop/">
                <img className="c-box__facebook" src={facebook} alt="" />
            </a>
            </div>
        </div>
            <hr/>
            <div className="c-box__hero">
            <h2 className="c-box__title">{t("aboutme")}</h2>
            <p className="c-box__aboutme">👩‍💻{t("aboutme1")}</p>
            <p className="c-box__aboutme">🌎{t("aboutme2")}</p>
            <p className="c-box__aboutme">🎹{t("aboutme3")}</p>
            </div>
            <hr/>
            <div className="c-box__hero">
            <h2 className="c-box__title">{t("tech")}</h2>
            <h3 className="c-box__aboutme">Frontend:</h3>
            <p className="c-box__aboutme">{t("frontend")}</p>
            <h3 className="c-box__aboutme">Backend:</h3>
            <p className="c-box__aboutme">{t("backend")}</p>
            <h3 className="c-box__aboutme">{t("base")}</h3>
            <p className="c-box__aboutme">{t("datos")}</p>
            <h3 className="c-box__aboutme">{t("metodologia")}</h3>
            <p className="c-box__aboutme">{t("meto")}</p>
            <h3 className="c-box__aboutme">{t("otros")}</h3>
            <p className="c-box__aboutme">{t("git")}</p>
            </div>
            <hr/>
        </div>
    )
}