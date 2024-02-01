import React, {useState} from 'react';
import '../styling/App.css';

function Topic0Quiz () {

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [score, setScore] = useState(0);

    const handleOptionChange1 = (e) => {
        setSelectedOption1(e.target.value);
        if (e.target.value === "instructions") {
            setScore(score + 1);
        }
      };

    const handleOptionChange2 = (e) => {
        setSelectedOption2(e.target.value);
        if (e.target.value === "programming language") {
            setScore(score + 1);
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected option 1:', selectedOption1);
        console.log('Selected option 2:', selectedOption2);
        console.log(score);
      };

    return (
        <div className = "topic0quiz">
            <h2>Topic 0 quiz</h2> 
            <form onSubmit={handleSubmit}>
            <div>
            <p>What are programs?</p>
            <div>
                <input
                type="radio"
                id="instructions"
                name="program"
                value="instructions"
                checked={selectedOption1 === 'instructions'}
                onChange={handleOptionChange1}
                />
                <label htmlFor="instructions">Instructions given to a computer to execute a command</label>
            </div> 
            <div>
                <input
                type="radio"
                id="tv"
                name="program"
                value="tv"
                checked={selectedOption1 === 'tv'}
                onChange={handleOptionChange1}
                />
                <label htmlFor="tv">What you watch on TV, for e.g. cartoons</label>
            </div> 
            </div>
            <div>
            <p>What is Python?</p>
            <div>
                <input
                type="radio"
                id="program"
                name="python"
                value="program"
                checked={selectedOption2 === 'program'}
                onChange={handleOptionChange2}
                />
                <label htmlFor="program">Program</label>
            </div>
            <div>
                <input
                type="radio"
                id="spoken language"
                name="python"
                value="spoken language"
                checked={selectedOption2 === 'spoken language'}
                onChange={handleOptionChange2}
                />
                <label htmlFor="spoken language">Spoken language</label>
            </div>
            <div>
                <input
                type="radio"
                id="programming language"
                name="python"
                value="programming language"
                checked={selectedOption2 === 'programming language'}
                onChange={handleOptionChange2}
                />
                <label htmlFor="programming language">Programming language</label>
            </div>
            </div>
        <button type="submit">Submit</button>
      </form>          
      </div>
    )
}

export default Topic0Quiz


  
