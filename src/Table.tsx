import React from 'react'

export type DataRequest = {
    data: any[]
    total: number
    totalPerPage: number
}

export type Column = {
    name: string
    data: any
    render?: (data: any) => any
}

type Props = {
    data: DataRequest
    columns: Column[]
}

const Table: React.FC<Props> = ({ data, columns }) => {

    function makeHeader() {
        return columns.map((col, index) => {
            return <th key={index} >{col.name}</th>
        })
    }

    function makeBody() {
        return data.data.map((item, i) => {
            return <tr key={i}>{columns.map((col, j) => {
                return <td key={j}>{item[col.data]}</td>
            })}</tr>
        })
    }

    return (
        <table>
            <thead><tr>{makeHeader()}</tr></thead>
            <tbody>{makeBody()}</tbody>
        </table>
    )
}

export default Table