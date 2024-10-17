// src/i18n.js

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next) // detect user language
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    "login": "Log in"
                }
            },
            ru: {
                translation: {
                    "login": "Войти в приложение"
                }
            }
        },
    });

export default i18n;