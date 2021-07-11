import React from 'react';

export default function IconDashboard(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 24 24"
            style={{
                fill: `${fillColor}`,
            }}
        >
            <path d="M4 13h6c.552 0 1-.447 1-1V4c0-.553-.448-1-1-1H4C3.448 3 3 3.447 3 4v8C3 12.553 3.448 13 4 13zM3 20c0 .553.448 1 1 1h6c.552 0 1-.447 1-1v-4c0-.553-.448-1-1-1H4c-.552 0-1 .447-1 1V20zM13 20c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-7c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1V20zM14 10h6c.553 0 1-.447 1-1V4c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1v5C13 9.553 13.447 10 14 10z"/>
        </svg>
    )
}
