// .storybook/preview.js
import '../src/index.css'
import {I18nextProvider} from 'react-i18next';
import i18n from '../src/i18n';

const defaultLocale = import.meta.env.VITE_LOCALE || 'en';

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: defaultLocale,
        toolbar: {
            icon: 'globe',
            items: [
                {value: 'en', title: 'English'},
                {value: 'ru', title: 'Russian'},
            ],
            showName: true,
        },
    },
};

const withI18next = (Story, context) => {
    const {locale} = context.globals;
    console.log('Текущая локаль:', locale);

    i18n.changeLanguage(locale);

    return (
        <I18nextProvider i18n={i18n}>
            <Story/>
        </I18nextProvider>
    );
};

export const decorators = [withI18next];