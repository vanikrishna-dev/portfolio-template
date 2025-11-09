const List = ({list}) => {
    return <ul className="list-disc ml-5 text-gray-700 list-inside">
        {list.map(item => <li>{item}</li>)}
    </ul>
}

export default List;  