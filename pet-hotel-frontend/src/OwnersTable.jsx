import { useDispatch, useSelector } from 'react-redux';

function OwnersTable() {

const dispatch = useDispatch();

const owners = useSelector(store => store.ownersList);

const handleDelete = (id) => {
    console.log('Clicked DELETE id:', id);
    dispatch({
        type: 'DELETE_OWNER',
        payload: id,
    })
}

return (

    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of Pets</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {owners.map((owner, index) => {
                    return (
                        <tr key={index}>
                            <td>{owner[2]}</td>
                            <td>{owner[3]}</td>
                            <td>{owner[0]}</td>
                            <td>
                                <button onClick={() => handleDelete(owner[1])}>Delete</button>
                            </td>
                        </tr>
                    )
                })

                }
            </tbody>
        </table>
    </div>

)

}

export default OwnersTable;