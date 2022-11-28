import Navigation from "./navigations";
import navigationLabels from "../data/nav_labels";

export default function()
{
    return(
        <div className="md:h-screen grid grid-cols-3 grid-rows-3">
            <div className="flex justify-center items-center text-center col-span-1 row-span-3 bg-gray-400">
                <Navigation labels={navigationLabels} /> 
            </div>
        </div>
    )
}