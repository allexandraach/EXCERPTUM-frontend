const NotebookCard = ({ length, paragraphs }) => {
    return (
        <div className='relative p-8 text-dark_brown bg-[#fdf8f2] rounded-se-3xl shadow-lg'>
            {/* Notebook lines */}
            {Array.from({ length }).map((line, index) => (
                <div
                    key={`line${index}`}
                    className='absolute left-0 right-0 h-px bg-gray-300'
                    style={{ top: `${index * 1.8}rem` }}
                >
                </div>
            ))}
            {paragraphs.map((paragraph, index) => (
                <p key={`paragraph${index}`} className='relative z-10 pl-4 text-lg text-left md:text-xl'>
                    {paragraph}
                </p>
            ))}
        </div>
    )
}
export default NotebookCard;