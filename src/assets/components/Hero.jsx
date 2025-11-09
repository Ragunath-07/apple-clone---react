import { width } from "@fortawesome/free-brands-svg-icons/fa11ty"
import Button from "./Button"
import Iphone from "../images/iPhone 17-Pro.jpg"
import IphoneAir from "../images/iphone air.jpg"
import Mac from "../images/MacBook Pro.jpg"

function Hero(){
    return(
        <>
            {/* 1st Card */}
            <div className="bg-black text-white flex flex-col items-center p-3 cursor-pointer">
                <h1 className="text-3xl font-bold py-2 lg:text-5xl">iPhone 17 Pro</h1>
                <h2 className="text-xl font-semibold lg:text-2xl">All out Pro.</h2>
                <Button></Button>
                <img src={Iphone} alt="iPhone 17" style={{width:"900px"}}></img>
            </div>

            {/* 2nd Card */}
            <div className="bg-gray-50 my-5 flex flex-col items-center p-3 cursor-pointer">
                <h1 className="text-3xl font-bold py-2 lg:text-5xl">iPhone Air</h1>
                <p className="text-xl font-semibold lg:text-2xl">The thinnest iPhone ever.</p>
                <p className="text-xl font-semibold lg:text-2xl">With the power of pro inside.</p>
                <Button></Button>
                <img src={IphoneAir} alt="iPhone Air" style={{width:"500px"}} className="text-right"></img>
            </div>

            {/* 3rd Card */}
            <div className="bg-black text-white flex flex-col items-center p-3 cursor-pointer">
                <h1 className="text-3xl font-bold py-2 lg:text-5xl">MacBook Pro 14"</h1>
                <p className="text-xl font-semibold lg:text-2xl">Supercharged by M5.</p>
                <Button></Button>
                <img src={Mac} alt="MacBook Pro" className="w-96 py-3"></img>
            </div>
        </>
    )
}

export default Hero