import * as React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../components/list-item.jsx';

const ListComponent = ({items, addAction, removeAction}) => {

	const listItems = items.map((item, index) => (
		<ListItem key={index} id={item.id} date={item.date} removeAction={removeAction}/>
	));

	return (
		<div>
			<h1>
				List
			</h1>
			<button onClick={addAction}>New Item</button>
			<ul>
				{listItems}
			</ul>
		</div>
	);
};


ListComponent.propTypes = {
	items: PropTypes.array.isRequired,
	addAction: PropTypes.func.isRequired,
	removeAction: PropTypes.func.isRequired
};

export default ListComponent;
