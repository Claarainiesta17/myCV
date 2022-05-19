import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    es: {
        translation: {
            city: "Barcelona (España)",
            aboutme: "Sobre mí",
            aboutme1: "Programadora junior buscando trabajo!",
            aboutme2: "Viajar, cocinar y comer son mis pasiones!",
            aboutme3: "Músico, musicóloga y museóloga!",
            tech: "Tecnologías",
            frontend: "HTML, CSS (SASS), Javascript, Angular y React",
            backend: "NodeJS, PHP (Symfony) y Java",
            base: "Base de datos:",
            datos: "MongoDB y mySQL",
            metodologia: "Metodologías",
            meto: "Agile y SCRUM",
            otros: "Otros:",
            git: "Conocimientos de GIT y de Docker",
            education: "Educación",
            experience: "Experiencia",
            bootcamp: "Bootcamp Full Stack Developer",
            master: "Máster en Gestión del Patrimonio Cultural y Museología",
            ub: "Universidad de Barcelona",
            degree: "Estudios Superiores en Musicología",
            erasmus: "Erasmus en Turín (Italia)",
            torino: "Universidad de Turín",
            bachillerato: "Bachillerato Humanístico",
            instituto: "Instituto Joaquim Bau (Tortosa)",
            conservatorio: "Grado profesional de música",
            musica: "Conservatorio de Música de Tortosa",
            trombon: "Profesora de trombón",
            curator: "Comisaria, investigadora y diseñadora de exposiciones",
            diputacio: "Diputación de Tarragona",
            securitas: "Operadora de seguridad",
            musicologist: "Musicóloga y museóloga",
            library: "CRAI Biblioteca de Reserva (Barcelona)",
            medical: "Gestora de urgencias médicas",
            assistant: "Asistente de museo",
            museum: "Museo de la Música de Barcelona",
            radio: "Locutora de radio",
            languages: "Idiomas",
            catalan: "Catalán",
            bilingual: "Bilingüe",
            español: "Español",
            ingles: "Inglés",
            medium: "Medio",
            italiano: "Italiano",
            high: "Alto",
            skills: "Habilidades",
            skill1: "Disciplinada y dispuesta a aprender",
            skill2: "Sé trabajar en grupo",
            skill3: "Flexibilidad",
            skill4: "Capaz de realizar múltiples tareas",
            skill5: "Buena actitud!"
        }
    },
    en: {
        translation: {
            city: "Barcelona (Spain)",
            aboutme: "About me",
            aboutme1: "Junior programmer looking for a job!",
            aboutme2: "Traveling, cooking and eating are my passions!",
            aboutme3: "Musician, musicologist and museologist!",
            tech: "Technologies",
            frontend: "HTML, CSS (SASS), Javascript, Angular and React",
            backend: "NodeJS, PHP (Symfony) and Java",
            base: "Database:",
            datos: "MongoDB and mySQL",
            metodologia: "Methodologies",
            meto: "Agile and SCRUM",
            otros: "Others:",
            git: "Knowledge of GIT and Docker",
            education: "Education",
            experience: "Experiencie",
            bootcamp: "Bootcamp Full Stack Developer",
            master: "Master in Cultural Heritage Management and Museology",
            ub: "University of Barcelona",
            degree: "Higher degree in Musicology",
            erasmus: "Erasmus in Torino (Italy)",
            torino: "University of Torino",
            bachillerato: "Humanistic Baccalaureate",
            instituto: "Joaquim Bau Institute (Tortosa)",
            conservatorio: "Professional music degree",
            musica: "Tortosa Music Conservatory",
            trombon: "Trombone teacher",
            curator: "Curator, researcher and designer of an exhibitions",
            diputacio: "Tarragona Provincial Council",
            securitas: "Security operator",
            musicologist: "Musicologist and Museologist",
            library: "CRAI Reserve Library (Barcelona)",
            medical: "Medical emergency manager",
            assistant: "Museum assistant",
            museum: "Barcelona Music Museum",
            radio: "Radio host",
            languages: "Languages",
            catalan: "Catalan",
            bilingual: "Bilingal",
            español: "Spanish",
            ingles: "English",
            medium: "Medium",
            italiano: "Italian",
            high: "High",
            skills: "Skills",
            skill1: "Disciplined and eager to learn",
            skill2: "I Know how to work in a group",
            skill3: "Flexibility",
            skill4: "Capable of multitasking",
            skill5: "Good attitude!"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;