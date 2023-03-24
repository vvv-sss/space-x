import { gql } from "@apollo/client";

export const GET_HISTORIES_QUERY = gql`
    query Histories {
        histories {
            id
            title
            details
        }
    }
`;
