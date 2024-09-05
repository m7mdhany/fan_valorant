export function Label(probs) {
	return (
		<label htmlFor={probs.htf} className={probs.class} >
			{probs.title}
		</label>
	);
}
