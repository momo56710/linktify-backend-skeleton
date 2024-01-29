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
    Heading,
    TableContainer,
} from '@chakra-ui/react'
const Startups = () => {
    const startupsST = [
        {
            name: 'lorem epsum',
            goal: '1000000DZD',
            status : true
        },
        {
            name: 'lorem epsum',
            goal: '8000000DZD',
            prgress : '50%',
            status : false,
            
        },
        {
            name: 'lorem epsum',
            goal: '2000000DZD',
            prgress : '20%',
            status : false,
        },

    ]
    const startupsCM = [
        {
            name: 'lorem epsum',
            status : '2 months',
            fund: '2000000DZD'
        },
        {
            name: 'lorem epsum',
            status : '1 year',
            fund: '4000000DZD'
            
        },
        {
            name: 'lorem epsum',
            status : '5 months',
            fund: '10000000DZD'
        },

    ]
    return (
        <>
        <Heading marginBlock={'1em'}>startups been studied</Heading>
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Investor</Th>
                        <Th>goal</Th>
                        <Th isNumeric>status</Th>
                        <Th isNumeric>Progress</Th>
                    </Tr>
                </Thead>
                {startupsST.map(e => (
                    <Tbody>
                        <Tr>
                            <Td>{e.name}</Td>
                            <Td>{e.goal}</Td>
                            <Td isNumeric>{e.status ? 'funded' : <Button colorScheme='blue'>fund</Button> }</Td>
                            <Td isNumeric>{e.status ? '100%' : e.prgress }</Td>
                        </Tr>
                    </Tbody>
                ))}

            </Table>
        </TableContainer>
        <Heading marginBlock={'1em'}>startups for community</Heading>
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Investor</Th>
                        <Th>SubTime</Th>
                        <Th isNumeric>raised</Th>
                        
                    </Tr>
                </Thead>
                {startupsCM.map(e => (
                    <Tbody>
                        <Tr>
                            <Td>{e.name}</Td>
                            <Td>{e.status}</Td>
                            <Td isNumeric>{e.fund}</Td>
                         
                        </Tr>
                    </Tbody>
                ))}

            </Table>
        </TableContainer>
        </>
    )
}

export default Startups