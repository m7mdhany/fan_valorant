export default function Preloader() {
  return (
    <div className="flex text-white animate-bounce">
      <div className="h-20 w-20 border-2 border-yellow-400  flex justify-center items-center animate-spin-slow">
        <div className="h-16 w-16 border-2 border-blue-600 flex justify-center items-center animate-spin-slow">
          <div className="h-10 w-10 border-4 border-red-500 animate-spin-slow"></div>
        </div>
      </div>
    </div>
  )
}
