import React from 'react';

export default function IconBell(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 24 24"
            style={{
                fill: `${fillColor}`,
            }}
        >
            <path d="M5.705 3.71L4.295 2.29C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71zM19.704 2.29l-1.408 1.42C21 6.396 21 8.009 21 11l2-.063C23 7.935 23 5.563 19.704 2.29zM12 22c1.311 0 2.407-.834 2.818-2H9.182C9.593 21.166 10.689 22 12 22zM19 14.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707C3.105 16.48 3 16.734 3 17v1c0 .553.448 1 1 1h16c.553 0 1-.447 1-1v-1c0-.266-.105-.52-.293-.707L19 14.586z" />
        </svg>
    )
}

