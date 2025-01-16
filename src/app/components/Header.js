import Image from "next/image";
import logo from "../../../public/assets/logo.png";

export default function Header() {
    return (
        <div className="flex justify-center items-center p-4 items-center">
            <Image src={logo} alt="logo" />
        </div>
    )
}