// import React from 'react'

// const PrintFriend = (props) => {
//   return (
//     <div>
//       {props.pFriend.map((friend, idx) => (
//         <li key={idx}>{friend}</li>
//       ))}
//     </div>
//   )
// }


// const PracticeComp = () => {
//   const friend = ['sonu', 'piri', 'aman', 'arpit'];
//   return (
//     <div>
//       <h1>Lists of my Friend</h1>
//       <ul>
//         <PrintFriend pFriend = {friend}/>
//       </ul>
//     </div>
//   )
// }

// export default PracticeComp




//------------------------------------------------//

// import React from 'react'

// const skills = [
//     ['HTML', 10],
//     ['CSS', 7],
//     ['JavaScript', 9],
//     ['React', 8],
//   ]

// const PrintSkill = ({skills}) => {
//     const skillList = skills.map((skill, idx) => <Skill key={idx} skill={skill}/>)
//     return skillList;
// }

// const Skill = ({skill : [name, rating]}) => {
//     return(
//         <li>
//             {name} Rating : {rating}
//         </li>
//     )
// }

// const PracticeComp = () => {
//   return (
//     <div>
//         <h1>My Skills</h1>
//         <ul>
//             <PrintSkill skills = {skills} />
//         </ul>
//     </div>
//   )
// }

// export default PracticeComp

//------------------------------------------------//

import React from 'react'

const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
  ]

const PrintCountry = ({countries}) => {
    const countryList = countries.map((country, idx) => <Country key={idx} country={country}/>)
    return <div>{countryList}</div>
}

const Country = ({country : {name, city}}) => {
    return (
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    )
}

const PracticeComp = () => {
  return (
    <div>
        <h1>Country and City</h1>
        <ul>
            <PrintCountry countries = {countries}/>
        </ul>
    </div>
  )
}

export default PracticeComp