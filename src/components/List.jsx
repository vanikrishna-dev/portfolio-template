const List = ({list}) => {
    return <ul className="list-disc ml-5 text-gray-700 list-inside">
        {list.map(item => <li key={item}>{item}</li>)}
    </ul>
}

export default List;  