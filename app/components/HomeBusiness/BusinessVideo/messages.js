/*
 * BusinessVideo Messages
 *
 * This contains all the text for the BusinessVideo component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.BusinessVideo';

export default defineMessages({
    introvideo: {
        id: `${scope}.introvideo`,
        defaultMessage: 'intro video',
    },
    title: {
        id: `${scope}.title`,
        defaultMessage: 'Geeks On Call has been a nationwide leader',
    },
    details: {
        id: `${scope}.details`,
        defaultMessage: 'Geeks On Call has been a nationwide leader of on-site computer support to thousands of businesses for over a decade. Recogniz ing a need for advice with telecom service contracts, this leader in outsourced IT services recently announced a new profession al telecom audit service designed for business of all sizes to save money.',
    },
});
