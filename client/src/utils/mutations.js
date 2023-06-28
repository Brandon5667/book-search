import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String! ) {
        login( email: $email, password: $password ) {
            token
            user {
              _id
              username
            }
        }
    }
`;


export const ADD_USER = gql`
    mutation adduser($username: String!, $email: String!, $password: String! ) {
        adduser( username: $username, email: $email, password: $password ) {
            token
            user {
              _id
              username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook( $bookId: String!, $authors: [String!], $descripstion: String!, $title: String!, $image: String!, $link: String! ) {
        saveBook( bookId: $bookId, authors: $authors, descripstion: $description, title: $title, image: $title, link: $link ) {
            _id
            username
            bookCount
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook( $bookId: String! ) {
        removeBook(  bookId: $bookId ) {
            _id
            username
            bookCount
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;