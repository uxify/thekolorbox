import React from 'react';

const Page = (props) => {
    return (
        <div id="page">
            {
                // React.Children.map(props.children, (Children) => {
                //     return <div>{Children}</div>
                // })
                props.children
            }
        </div>
    )
}


export default Page