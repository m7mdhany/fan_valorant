export function Input(probs) {
	return <input id={probs.id} className={`${probs.class} pl-2 `} type={probs.type} placeholder={probs.holder} disabled={probs.dis} value={probs.value} />;
}
