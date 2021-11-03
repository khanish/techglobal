/*
 * Quote Messages
 *
 * This contains all the text for the Quote component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Quote';

export default defineMessages({
    title: {
        id: `${scope}.title`,
        defaultMessage: 'Creativity Is Intelligence Having Fun.',
    },
    Creativesolutions: {
        id: `${scope}.Creativesolutions`,
        defaultMessage: 'Creative solutions',
    },
    Quote: {
        id: `${scope}.Quote`,
        defaultMessage: 'Quote',
    },
    details: {
        id: `${scope}.details`,
        defaultMessage: 'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT ',
    },
    getaquote: {
        id: `${scope}.getaquote`,
        defaultMessage: 'get a quote ',
    },
});
