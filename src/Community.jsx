import React from 'react'
import {
    Table,
    Input,
    Button,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const Investors = () => {
    const investors = [
        {
            name: 'mohamed amine',
            account : true,
            complain : true,
        },
        {
            name: 'brinis nadjib',
            account : true,
            complain : false,
        },
        {
            name: 'maoudj youcef',
            account : false,
            complain : true,
        },
        {
            name: 'bouabdelli walid',
            account : true,
            complain : false,
        },

    ]
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Investor</Th>
                        <Th>account status</Th>
                        <Th isNumeric>Complain</Th>
                    </Tr>
                </Thead>
                {investors.map(e => (
                    <Tbody>
                        <Tr>
                            <Td>{e.name}</Td>
                            <Td>{e.account ? 'verified' : "not verified"}</Td>
                            <Td isNumeric>{e.complain ? <Button>check complain</Button> : 'no complain'}</Td>
                        </Tr>
                    </Tbody>
                ))}

            </Table>
        </TableContainer>
    )
}

export default Investors