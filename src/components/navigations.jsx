
export default function(props)
{
    let labels = props.labels;
    return(
        <ul className="hidden md:block list-none">
            {
                labels.map(label => 
                    <li className=" font-Oswald md:text-3xl lg:text-5xl md:my-4 lg:my-6" key={label.id}>{label.name}</li>
                )
            }
        </ul>
    )
}