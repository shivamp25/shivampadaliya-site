module.exports = {
    siteMetadata: {
        title: 'Shivam Padaliya | Software Engineer',
        description: 'MY personal Website',
        site_url: '',
        author: 'Shivam Padaliya'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    'open sans\:400,700'
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "",
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`
        }
    ],
};
