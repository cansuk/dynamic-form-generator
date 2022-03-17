import React from 'react'
import shortid from 'shortid';
import { Table as StyledTable } from './styled-components/Table';
const Table = ({ formData }) => {
    return (
        <StyledTable>
            <tbody>
                {formData?.map(dataArr =>
                    <tr key={shortid.generate()}>
                        {
                            dataArr?.map(data => <td key={shortid.generate()}>{data}</td>)
                        }
                    </tr>
                )}
            </tbody>
        </StyledTable>
    );
}

export default Table;