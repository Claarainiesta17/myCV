import './Experience.scss';
import { useTranslation } from "react-i18next";
export default function Experience(){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
};
    return (
        <div className="c-box">
        <div className="c-box__experience">
        <h3 className="c-box__position">🎺{t("trombon")}</h3>
        <p className="c-box__business">Aula de Música 7 (Barcelona)</p>
        <p className="c-box__duration">2020 - 2022</p>
        <h3 className="c-box__position">🎭{t("curator")}</h3>
        <p className="c-box__business">{t("diputacio")}</p>
        <p className="c-box__duration">2022</p>
        <h3 className="c-box__position">📠{t("securitas")}</h3>
        <p className="c-box__business">Securitas Direct (Barcelona)</p>
        <p className="c-box__duration">2021-2022</p>
        <h3 className="c-box__position">📚{t("musicologist")}</h3>
        <p className="c-box__business">{t("library")}</p>
        <p className="c-box__duration">2020</p>
        <h3 className="c-box__position">🚑{t("medical")}</h3>
        <p className="c-box__business">Teladoc Health (Barcelona)</p>
        <p className="c-box__duration">2020</p>
        <h3 className="c-box__position">🎨{t("assistant")}</h3>
        <p className="c-box__business">{t("museum")}</p>
        <p className="c-box__duration">2019</p>
        <h3 className="c-box__position">🎙{t("radio")}</h3>
        <p className="c-box__business">Ràdio Tortosa</p>
        <p className="c-box__duration">2017</p>
        </div>
        </div>
    )
}