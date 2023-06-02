import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { UPDATE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENT, GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';
import { GET_PROJECTS } from '../queries/projectQueries';
import { FaEdit } from 'react-icons/fa';

export default function EditClientForm({clientID}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    console.log('client', clientID);
    // const [clientId, setClientId] = useState('');


    // const { loading, error } = useQuery(GET_CLIENT, {
    //     variables: { id: client },
    //     onCompleted: ({client}) => {
    //         setName(client.name);
    //         setPhone(client.phone);
    //         setClientId(client.id)
    //     }
    // });

    // const [updateClient] = useMutation(UPDATE_CLIENT, {
    //     variables: { id: clientId, name, phone },
    //     refetchQueries: [{ query: GET_CLIENTS }, {
    //         query: GET_PROJECTS
    //       }]
    //     // update(cache, {data: { updateClient }}) {
    //     //     const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //     //     cache.writeQuery({
    //     //         query: GET_CLIENTS,
    //     //         data: { clients: [...clients, updateClient]}
    //     //     });
    //     // }
    // });

    // if(loading) return <Spinner />;
    // if(error) return <p>Something Went Wrong</p>;

    const handleEdit = (e) => {
        e.preventDefault();
        console.log('e.target.id',e);
    };

    const onSubmit = (e) => {
        // updateClient(name, phone)
        e.preventDefault();
        console.log(clientID);
        

    };

  return (
    <>
        <button type="button" className="btn btn-primary" onClick={handleEdit}
        style={{width: "36px"}} data-bs-toggle="modal" data-bs-target="#editClientModal">
            <FaEdit className='icon'/>
        </button>
        <div className="modal fade" id="editClientModal" aria-labelledby="editClientModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editClientModalLabel">Edit Client</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Name</label>
                                <input type="text" className="form-control" id="name" value={name}
                                onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Phone</label>
                                <input type="text" className="form-control" id="phone" value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <button type="submit"
                            data-bs-dismiss="modal"
                            className="btn btn-secondary"
                            >Submit</button>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}
