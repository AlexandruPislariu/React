import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const IntructorItem = props =>
{
    return (
      <li>
        <h3>{props.name}</h3>
        <h4>
          Hobbies: {props.hobbies.join(' ,')}
        </h4>
      </li>
    )
}
IntructorItem.propTypes =
{
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      instructors:
      [
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }
      ]
    };
    setTimeout(() =>
    {
        const randomInstructor = Math.floor(
          Math.random() * this.state.instructors.length
        );
        const hobbyIndex = Math.floor(
          Math.random() * this.state.instructors[randomInstructor].length
        );

        const instructors = this.state.instructors.map((instructor,index) =>
        {
          const hobbies = instructor.hobbies.slice();
          if( index === randomInstructor ) 
          {
            hobbies.splice(hobbyIndex,1);
            return {...instructor, hobbies};
          }

          return instructor;
        });
        // instructors[randomInstructor] = Object.assign({}, instructors[randomInstructor]);
        // instructors[randomInstructor].hobbies = instructors[randomInstructor].hobbies.slice();
        // instructors[randomInstructor].hobbies.splice(hobbyIndex,1);
        this.setState({instructors});
    },5000);
  }
  render()
  {

    const instructors = this.state.instructors.map((instructor, index) => (
      <IntructorItem key={index} {...instructor} /> 
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
