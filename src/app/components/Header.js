import Image from "next/image";
import logo from "../../../public/assets/logo.png";

export default function Header() {
    return (
        <div className="flex justify-center items-center m-auto text-center p-8 border-b-[0.5px] border-neutras-gray">
            <Image src={logo} alt="logo" />
        </div>
    )
}