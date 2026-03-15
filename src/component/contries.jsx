import React, { use } from 'react';

const Contries = ({contriesPromise}) => {
    const contriesData = use(contriesPromise)
    const contries = contriesData.countries;
    console.log(contries)
    return (
        <div>
            <p>In the contries :{contries.length}</p>
        </div>
    );
};

export default Contries;