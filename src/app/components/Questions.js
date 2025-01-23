export default function Questions() {
    return (
        <div
            key={`question-${index}`}
            className="flex flex-row items-center gap-2"
        >
            <input
                type="radio"
                id={`${element.id}-${index}`}
                name={`question-${element.id}`}
                value={question}
                className="appearance-none m-4 w-8 h-8 rounded-full border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-blue-500"
            />
            <label htmlFor={`${element.id}-${index}`}>{question}</label>
        </div>
    )
}



{/* <div
    key={`question-${index}`}
    className="flex flex-row items-center gap-2"
>
    <input
        type="radio"
        id={`${element.id}-${index}`}
        name={`question-${element.id}`}
        value={question}
        className="appearance-none m-4 w-8 h-8 rounded-full border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-blue-500"
    />
    <label htmlFor={`${element.id}-${index}`}>{question}</label>
</div> */}