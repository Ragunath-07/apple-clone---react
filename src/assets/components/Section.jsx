import Button from "./Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import IpadPro from "../images/iPad pro.jpg"
import AirPods from "../images/airpods pro.jpg"
import Watch from "../images/watch series 11.jpg"
import MackBook from "../images/macbook air.png"
import AppleProducts from "../images/apple products.jpg"
import TradeIn from "../images/trade in.jpg"

function Section(){
    return(
        <section className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-5">
            {/* 1st Sec */}
            <div className="text-white bg-black flex mt-2 flex-col items-center p-3 cursor-pointer">
                <h1 className="text-2xl font-bold py-2 lg:text-4xl">iPad Pro</h1>
                <p className="text-lg font-semibold lg:text-xl text-center">Advanced AI performance and game-changing capabilities</p>
                <Button></Button>
                <img src={IpadPro} alt="iPad Pro" style={{width:"60%"}}></img>
            </div>

            {/* 2nd Sec */}
            <div className="bg-gray-100 flex flex-col items-center mt-2 p-3 cursor-pointer">
                <h1 className="text-2xl font-bold py-2 lg:text-4xl">AirPods Pro 3</h1>
                <p className="text-lg font-semibold lg:text-xl">The world's best in-ear</p>
                <p className="text-lg font-semibold lg:text-xl">Active Noise Cancellation.</p>
                <Button></Button>
                <img src={AirPods} alt="AirPods Pro"></img>
            </div>

            {/* 3rd Sec */}
            <div className="bg-gray-100 flex flex-col items-center mt-2 p-3 cursor-pointer">
                <h1 className="text-2xl font-bold py-2 lg:text-4xl"><FontAwesomeIcon icon={faApple} />Watch Series 11</h1>
                <p className="text-lg font-semibold lg:text-xl">The ultimate watch for a health life.</p>
                <Button></Button>
                <img src={Watch} alt="Watch Series 11"></img>
            </div>

            {/* 4th Sec */}
            <div className="flex flex-col items-center mt-2 p-3 cursor-pointer" style={{backgroundColor:"#D4EAF7"}}>
                <h1 className="text-2xl font-bold py-2 lg:text-4xl">MacBook Air</h1>
                <p className="text-lg font-semibold lg:text-xl">Sky blue colour.</p>
                <p className="text-lg font-semibold lg:text-xl">Sky high performance with M4</p>
                <Button></Button>
                <img src={MackBook} alt="MacBook Air" style={{width:"80%",marginTop:"50px"}}></img>
            </div>

            {/* 5th Sec */}
            <div className="bg-gray-50 flex flex-col items-center p-3 cursor-pointer">
                <h1 className="text-2xl font-bold py-2 lg:text-4xl">Using them together sets them apart</h1>
                <p className="text-lg font-semibold lg:text-xl text-center">Apple devices works together so seamlessly, it almost feels like magic.</p>
                <button class="bg-blue-700  border border-blue-700  text-white font-semibold  px-4 py-2  rounded-3xl mt-3">Learn more</button>
                <img src={AppleProducts} alt="AppleProducts" style={{width:"90%"}}></img>
            </div>

            {/* 6th Sec */}
            <div className="bg-gray-100 flex flex-col items-center p-3 cursor-pointer">
                <h1 className="text-2xl font-bold py-2 lg:text-4xl"><FontAwesomeIcon icon={faApple} />Trade In</h1>
                <p className="text-lg font-semibold lg:text-xl text-center">Upgrade and save.</p>
                <p className="text-lg font-semibold lg:text-xl text-center">It's that easy.</p>
                <button class="bg-blue-700  border border-blue-700  text-white font-semibold  px-4 py-2  rounded-3xl mt-3">Get your estimate</button>
                <img src={TradeIn} alt="Trade in" style={{width:"100%"}}></img>
            </div>
        </section>
    )
}

export default Section