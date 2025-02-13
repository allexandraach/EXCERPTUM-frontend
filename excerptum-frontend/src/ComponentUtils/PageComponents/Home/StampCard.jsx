import { GiBookmarklet } from "react-icons/gi";

export default function StampCard({ title, text }) {
    return (
        <div className="stamp-border text-soft_beige w-full md:w-1/3 lg:w-1/3 p-6 pb-12 flex flex-col items-center bg-[#fdf8f2] rounded-lg flex-grow
         p-4 relative">

            <div className="flex gap-2 items-center">
                <p className="uppercase font-semibold mt-4 mb-2 text-lg">{title}</p>
                <GiBookmarklet size={40} className="" />
            </div>

            <p className="text-center px-4">
                {text}
            </p>
        </div>
    );
}