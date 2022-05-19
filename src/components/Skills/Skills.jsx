import './Skills.scss';
import { useTranslation } from "react-i18next";
export default function Skills(){
    
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
};
    return(
        <div className="c-box">
        <div className="c-box__skills">
        <h2 className="c-box__list">{t("skills")}</h2>
            <p className="c-box__skill">👩‍🎓{t("skill1")}</p>
            <p className="c-box__skill">🤼‍♂️{t("skill2")}</p>
            <p className="c-box__skill">🤸‍♀️{t("skill3")}</p>
            <p className="c-box__skill">💪{t("skill4")}</p>
            <p className="c-box__skill">😄{t("skill5")}</p>
        </div>
        </div>
    )
}