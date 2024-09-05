export function Input(probs) {
	return <input id={probs.id} className={`${probs.class} pl-2 bg-slate-200 `} type={probs.type} placeholder={probs.holder} disabled={true} value={probs.value} />;
}
