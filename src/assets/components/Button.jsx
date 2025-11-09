function Button(){
    return(
        <div className="flex justify-center gap-4 p-4">
            <button class="bg-blue-700  border border-blue-700  text-white font-semibold  px-4 py-2  rounded-3xl">Learn more</button>
            <button class="bg-transparent  border  border-blue-700  text-blue-700 font-semibold  px-4 py-2  rounded-3xl hover:bg-blue-700 hover:text-white">Buy</button>       
        </div>
    )
}

export default Button