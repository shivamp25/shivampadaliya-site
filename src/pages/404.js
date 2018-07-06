import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const NotFoundPage = (props) => {
    return (
        <div>
            <Helmet title={props.data.site.siteMetadata.title}/>
            <h1>NOT FOUND</h1>
            <p><a href="/">home!</a></p>
        </div>
    );
};

NotFoundPage.propTypes = {
    route: PropTypes.object
};

export default NotFoundPage

export const pageQuery = graphql`
query NotFoundQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;