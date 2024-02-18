/** @format */
import styles from './Notes.module.css';
import React from 'react';
import { Note } from '../Note/Note';

export class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.notes = [
			{
				id: '1',
				title: 'Wykąpać psa!',
				body: 'Pamiętaj aby wykąpać psa!',
			},
			{
				id: '2',
				title: 'Zrobić zakupy!',
				body: 'Piwo, wino, litr whisky!',
			},
			{
				id: '3',
				title: 'Zakupić wycieczkę!',
				body: 'Udać się do biura Rainbow!',
			},
		];
	}

	render() {
		return (
			<>
				<p className={styles.title}>Moje notatki: </p>
				{this.notes.map(note => {
					const { id, title, body } = note;
					return <Note id={id} title={title} body={body} />;
				})}
			</>
		);
	}
}
