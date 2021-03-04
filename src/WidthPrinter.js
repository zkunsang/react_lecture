import React from 'react';
import useWidthPrinter from './useWidthPrinter';

export default function WidthPrinter() {
    const width = useWidthPrinter(window.innerWidth);
    return <div>{`width is ${width}`}</div>
}