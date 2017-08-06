import * as React from 'react';
import ListComponent from '../components/list.jsx'

export default class ListContainer extends React.Component{
	constructor(props) {
		super(props);

		let initialItems = [];
		for (var i=0; i<5; i++) {
			initialItems.push(this.createItem(i));
		}

		this.state = {
			currentId: 5,
			items: initialItems
		};
	}

	createItem(id) {
		return {
			id: id,
			date: new Date()
		};
	}

	addItem() {
		//make a copy we can mutate
		let newState = {...this.state};

		newState.items.push(this.createItem(newState.currentId));
		newState.currentId++;

		this.setState(newState);
	}

	removeItem(id) {
		//make a copy we can mutate
		let newState = {...this.state};

		let removeIndex = newState.items.findIndex(item => (item.id === id));
		if (removeIndex < 0) { return; }

		newState.items.splice(removeIndex, 1);

		this.setState(newState);
	}

	render(){
		return (<ListComponent
			items={this.state.items}
			addAction={this.addItem.bind(this)}
			removeAction={this.removeItem.bind(this)}
		/>);
	}
};
