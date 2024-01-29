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
            name: 'Djezzy',
            budget: '1000000000DZD'
        },
        {
            name: 'civital',
            budget: '800000000DZD'
        },
        {
            name: 'Ramy',
            budget: '2000000000DZD'
        },

    ]
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Investor</Th>
                        <Th>budget</Th>
                        <Th isNumeric>invest</Th>
                    </Tr>
                </Thead>
                {investors.map(e => (
                    <Tbody>
                        <Tr>
                            <Td>{e.name}</Td>
                            <Td>{e.budget}</Td>
                            <Td isNumeric><Input width={'100px'}></Input> <Button colorScheme='blue'>Invest</Button></Td>
                        </Tr>
                    </Tbody>
                ))}

            </Table>
        </TableContainer>
    )
}

export default Investors