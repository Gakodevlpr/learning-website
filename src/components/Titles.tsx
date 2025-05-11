const Titles = ({title, text}:{title:string, text:string}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-center font-bold text-2xl">{title}</h2>
            <span className="hidden md:block h-16 border-r border-gray-300"></span>
            <span className="block md:hidden w-full border-b border-gray-300"></span>
            <div className="text-justify">
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
                <br />
                <em className="font-bold text-lg">¡Espero que te sean de ayuda!</em>
            </div>
        </div>
    )
}

export default Titles