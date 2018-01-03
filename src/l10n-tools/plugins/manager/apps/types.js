
const appTypes = {
    'l10n.apps.web': {
        name: 'appsL10nWebAppName',
        schema: {
            title: "L10n App",
            type: "object",
            properties: {
                url: {
                    type: "string",
                    format: "uri"}}},
        sidebar: require('l10n-tools/sidebar/apps').default}}

export default appTypes;
