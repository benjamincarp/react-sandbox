import React from 'react';
import PropTypes from 'prop-types';

const Root = ({ store }) => (
	<h1>
		Hello World!!!
	</h1>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
