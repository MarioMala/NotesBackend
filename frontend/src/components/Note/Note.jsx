/** @format */
import styles from './Note.module.css';

export function Note({ title, id, body }) {
	return (
		<div key={id} className={styles.container}>
			<div className={styles.note}>
				<div>
					<p>{title}</p>
					<p className={styles.description}>{body}</p>
				</div>

				<div className={styles.btns}>
					<button>Edytuj</button>
					<button>Usuń</button>
				</div>
			</div>
		</div>
	);
}
