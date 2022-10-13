import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue);
    };


    return (
        <Box sx={{width: 150}}>
            <Box sx={{m: 3}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                />
            </Box>
        </Box>
    )
}

export default SuperDoubleRange
