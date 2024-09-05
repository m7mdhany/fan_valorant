export default function LabeqWithCheck(probs) {
	return (
		<div className={`w-full flex justify-between mt-3`}>
			<label htmlFor={probs.htf} className={`font-bold`}>
				{probs.title}
			</label>
			<p className={`text-sm text-red-500 pr-4`}>{probs.Ptitle}</p>
		</div>
	);
}
