import './Idiomas.scss';
import { useTranslation } from "react-i18next";
export default function Idiomas(){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
};
    return(
        <div className="c-box">
        <div className="c-box__idiomas">
        <h2 className="c-box__languages">{t("languages")}</h2>
            <h3 className="c-box__language">🥘{t("catalan")}</h3>
            <p className="c-box__level">{t("bilingual")}</p>
            <h3 className="c-box__language">🍻{t("español")}</h3>
            <p className="c-box__level">{t("bilingual")}</p>
            <h3 className="c-box__language">🍵{t("ingles")}</h3>
            <p className="c-box__level">{t("medium")}</p>
            <h3 className="c-box__language">🍝{t("italiano")}</h3>
            <p className="c-box__level">{t("high")}</p>
        </div>
        </div>
    )
}