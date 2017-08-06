import * as React from 'react';
import PropTypes from 'prop-types';

const ListComponent = ({id, date, removeAction}) => {
	return (
		<li>
			{id} - {date.toString()} <button onClick={() => removeAction(id)}>Delete</button>
		</li>
	);
};


ListComponent.propTypes = {
	id: PropTypes.number.isRequired,
	date: PropTypes.object.isRequired,
	removeAction: PropTypes.func.isRequired
};

export default ListComponent;
