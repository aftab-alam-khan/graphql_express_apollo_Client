import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
mutation addNewClient($name: String!, $email: String!, $phone: String!) {
    addClient( name: $name, email: $email phone: $phone)
    {
        id
        name
        email
        phone
    }
  }
`;

const DELETE_CLIENT = gql`
mutation deleteClient($id: ID!) {
    deleteClient(id: $id)
    {
        id
        name
        email
        phone
    }
}
`;


const UPDATE_CLIENT = gql`
mutation updateClient($id: ID!, $name: String!, $phone: String!){
    updateClient(id: $id, name: $name, phone: $phone ){
        id
        name
        phone
        email
    }
  }
`;

export  { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT };