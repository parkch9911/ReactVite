function Ex04(){
    const people = [{name: '김철수', age:30, job:'개발자'},
        {name:'이영희', age:28, job:'디자이너'},
        {name:'박민수', age:35, job:'기획자'}
    ]
    return(
        <>
            <table border="1">
                <tr>
                    <th>{people.name}</th>
                    <th>{people.age}</th>
                    <th>{people.job}</th>
                </tr>
            </table>      
        </>
    )
}
export default Ex04