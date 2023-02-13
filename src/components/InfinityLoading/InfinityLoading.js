import React from 'react';
import loadingimg from 'src/assets/svgs/Infinity-1s-200px.svg';

function InfinityLoading({ wrapperStyle = {} }) {
    return <img src={loadingimg} style={wrapperStyle} />;
}

export default InfinityLoading;
