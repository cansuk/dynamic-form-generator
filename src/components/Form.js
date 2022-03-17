import { useState } from "react";
import shortid from "shortid";
import { colors } from "./constants/constants";
import { Button } from "./styled-components/Button";
import { Row } from "./styled-components/Layout";
import { Table } from "./styled-components/Table";
import { TextBox } from "./styled-components/TextBox";

const Form = ({ formRows, formCols, handleTabs }) => {
    const [data, setData] = useState([]);


    const handleChange = (e, index, fieldIndex) => {
        if (!data[index]) {
            data[index] = [];
        }

        data[index][fieldIndex] = e.target.value;
    }

    const handleFill = (e) => {
        // generate auto-filled form rows 
        const tempArr = Array(formRows.length);
        tempArr.fill(data[0]);
        setData(tempArr);
        //handleTabs(tempArr, true);
    }

    const handleClearForm = (e) => {
        setData([]);
    }

    return <>
        <Table>
            <thead>
                <tr>
                    <th key={shortid.generate()}></th>
                    {formCols?.map(col => {
                        return <th key={shortid.generate()}>{col}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {formRows?.map((row, index) => {
                    return <tr key={shortid.generate()}>
                        <td key={shortid.generate()}>{row}</td>
                        <td key={shortid.generate()}>
                            <Row>
                                <TextBox type="text" value={data?.[index]?.[0]} onChange={(e) => handleChange(e, index, 0)} />
                                {index === 0 && <Button color={colors.btnColor} backcolor={colors.btnBackColor} onClick={handleFill}>Doldur</Button>}
                            </Row>
                        </td>
                        <td key={shortid.generate()}>
                            <Row>
                                <TextBox type="text" value={data?.[index]?.[1]} onChange={(e) => handleChange(e, index, 1)} />
                                {index === 0 && <Button color={colors.btnColor} backcolor={colors.btnBackColor} onClick={handleFill}>Doldur</Button>}
                                <Button color={colors.btnColor} backcolor={colors.btnBackColor} onClick={() => handleTabs(data[index])}>Ekle</Button>
                            </Row>
                        </td>

                    </tr>
                })}
            </tbody>

        </Table>
        <Row justifyContent="space-evenly">
            <Button onClick={handleClearForm}>Temizle</Button>
            <Button onClick={() => { handleTabs(data, true); }}>Tümünü ekle</Button>
        </Row>


    </>
}

export default Form;