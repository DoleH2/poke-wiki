import { upperFirst } from "../utils/handleString"
import { useState, useEffect } from 'react';

export const TagElement = ({ data }) => {
    return (
        <>
            {data && (
                <div className={`frame-tag-element rounded-pill ${data && data.name}`}>
                    {
                        data && data.name && upperFirst(data.name)
                    }
                </div>)}
        </>

    )
}