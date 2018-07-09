import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import { siteMeta, aboutMe, aboutWebsite } from '../seo/seo';
import './index.scss'

class Layout extends React.Component {
    render() {
        const {location, children} = this.props;
        // add Header and Footer, pass props
        return (
            <div>
                <Helmet
                    title={siteMeta.title}
                    meta={[
                        { name: 'description', content: siteMeta.og.description },
                        { name: 'keywords', content: siteMeta.keywords.join(", ") },
                        { name: "copyright", content: siteMeta.copyright },
                        { property: "og:title", content: siteMeta.og.title },
                        { property: "og:site_name", content: siteMeta.og.site_name },
                        { property: "og:type", content: siteMeta.og.type },
                        { property: "og:url", content: siteMeta.og.url },
                        { property: "og:image", content: siteMeta.og.image.url },
                        { property: "og:image:alt", content: siteMeta.og.image.alt },
                        { property: "og:image:type", content: siteMeta.og.image.type },
                        { property: "og:image:width", content: siteMeta.og.image.width },
                        { property: "og:image:height", content: siteMeta.og.image.height },
                        { property: "og:description", content: siteMeta.og.description },
                        { property: "og:locale", content: siteMeta.og.locale.main }
                    ]}
                />
                <NavHeader {...this.props} />
                {children()}
                <Footer {...this.props} />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.func,
    location: PropTypes.object,
    route: PropTypes.object
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
