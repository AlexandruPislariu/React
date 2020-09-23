import React, { Component } from 'react';

class HobbyList extends Component{
    render()
    {   
        const liStyle = {fontSize: '1.5em'};
        const hobbies = ["Sleeping", "Eating", "Cuddling"];
        return (<ul>
                    {
                        hobbies.map((hobbie,index) =>
                        {
                            return <li key={index} style={liStyle}>{hobbie}</li>
                        })
                    }
                </ul>
                );
    }
}

export default HobbyList;