import React, { useEffect, useReducer } from 'react';
import getData from '../api/Service'
import Form from './Form';
import Table from './Table';

const FormContainer = () => {
    const ActionTypes = {
        INITIALISE: "INITIALISE",
        FILL_FORM_COLLS: "FILL_FORM_COLLS",
        FILL_FORM_ROWS: "FILL_FORM_ROWS",
        FILL_FORM_DATA: "FILL_FORM_DATA"
    }

    const initialState = {
        formCols: [],
        formRows: [],
        formData: []
    };

    const formReducer = (state, action) => {
        switch (action.type) {
            case ActionTypes.INITIALISE:
                return initialState;
            case ActionTypes.FILL_FORM_COLLS:
                return { ...state, formCols: action.formCols };
            case ActionTypes.FILL_FORM_ROWS:
                return { ...state, formRows: action.formRows };
            case ActionTypes.FILL_FORM_DATA:
                return { ...state, formData: [...state.formData, ...action.formData] };
            default:
                throw new Error("Something went wrong...");
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialState);

    const { formCols, formRows, formData } = state;

    useEffect(() => {
        getData().then(result => {
            dispatch({
                type: ActionTypes.FILL_FORM_COLLS,
                formCols: result.roster_constraints[0].table_data.innermost_table_cols
            });

            dispatch({
                type: ActionTypes.FILL_FORM_ROWS,
                formRows: result.roster_constraints[0].table_data.innermost_table_rows
            });

            dispatch({
                type: ActionTypes.FILL_FORM_DATA,
                formData: result.roster_constraints[0].table_data.array_form
            });

        });

    }, []);

    const handleTabs = (data, fillAllData = false) => {
        if (fillAllData) {
            dispatch({
                type: ActionTypes.FILL_FORM_DATA,
                formData: data
            });
        } else {
            dispatch({
                type: ActionTypes.FILL_FORM_DATA,
                formData: [data]
            });
        }
    }

    return (
        <>
            <Table formData={formData} />
            <Form formRows={formRows} formCols={formCols} handleTabs={handleTabs} />
        </>
    );
}

export default FormContainer