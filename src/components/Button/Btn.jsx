export default function Btn(probs) {
	return (
		<div>
			<div className={`${probs.divclass} relative group`}>
				<a className={`w-full h-full absolute z-10 hidden ${probs.display}`} href={probs.href} target={probs.target}>{probs.name}</a>
				<div className={`${probs.border} border-x border-t h-1/3`}></div>
				<div className='h-1/3'></div>
				<div className={`${probs.border} border-x border-b h-1/3`}></div>
				<div className="flex justify-center items-center absolute top-0 w-full h-full">
					<button className={`${probs.class} top-0`}> {probs.title} </button>
				</div>
			</div>
		</div>
	)
}
