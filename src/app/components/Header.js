import Image from "next/image";
import logo from "../../../public/assets/logo.png";

export default function Header() {
    return (
        <div className="flex justify-center items-center m-auto text-center p-8">
            <Image src={logo} alt="logo" />
        </div>
    )
}