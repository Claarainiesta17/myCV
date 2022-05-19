import './Education.scss';
import { useTranslation } from "react-i18next";

export default function Education() {
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
};
    return(
        <div className="c-box">
        <div className="c-box__education">
            <h3 className="c-box__degree">📕{t("bootcamp")}</h3>
            <p className="c-box__school">Upgrade Hub</p>
            <p className="c-box__year">2022</p>
            <h3 className="c-box__degree">📗{t("master")}</h3>
            <p className="c-box__school">{t("ub")}</p>
            <p className="c-box__year">2019-2021</p>
            <h3 className="c-box__degree">📘{t("degree")}</h3>
            <p className="c-box__school">ESMUC (Barcelona)</p>
            <p className="c-box__year">2015-2019</p>
            <h3 className="c-box__degree">📙{t("erasmus")}</h3>
            <p className="c-box__school">{t("torino")}</p>
            <p className="c-box__year">2017-2018</p>
            <h3 className="c-box__degree">📔{t("bachillerato")}</h3>
            <p className="c-box__school">{t("instituto")}</p>
            <p className="c-box__year">2013-2015</p>
            <h3 className="c-box__degree">📒{t("conservatorio")}</h3>
            <p className="c-box__school">{t("musica")}</p>
            <p className="c-box__year">2004-2015</p>
        </div>
        </div>
    )
}