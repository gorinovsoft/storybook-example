import {Page} from '../components/Page/Page.jsx';

export default {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
};

export const LoggedOut = {};

export const LoggedIn = {
    args: {
        initialUser: {
            name: 'Jane Doe',
        },
    },
};