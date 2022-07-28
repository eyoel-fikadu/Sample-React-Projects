import React from 'react';

const CommentDetail  = (prop) => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={ prop.image }/>
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {prop.author}
                </a>
                <div className='metadata'>
                    <span className='date'>{prop.date}</span>
                </div>
                <div className='text'> {prop.comment}</div>
            </div>
        </div>

    );
};

export default CommentDetail;