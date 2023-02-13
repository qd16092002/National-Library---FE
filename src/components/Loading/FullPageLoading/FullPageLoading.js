import React from 'react';
import InfinityLoading from '../InfinityLoading';
import './FullPageLoading.sass';

function FullPageLoading({ opacity = 1 }) {
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                zIndex: 999,
            }}
        >
            <div className="full-page-loading" style={{ backgroundColor: `rgba(255,255,255,${opacity})` }}>
                <InfinityLoading wrapperStyle={{ width: '100px' }} />
            </div>
        </div>
    );
}

export default FullPageLoading;
