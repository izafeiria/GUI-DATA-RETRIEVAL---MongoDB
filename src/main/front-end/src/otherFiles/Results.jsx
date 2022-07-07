// import React, {useState, useEffect}  from 'react'
// import Service from '../services/Service'
// import {useLocation} from 'react-router-dom';
// import ButtonForFirstPage from './ButtonForFirstPage';
// import Save from './Save';
// import Highlighter from "react-highlight-words";

// function Results ({navigation}) {
//     const [results, setResults] = useState([])
//     const location = useLocation();

//     useEffect(() => {
//         getResults()
//     }, [])
    
//     const getResults = () => {
//         if(location.state.name === 'Date'){
//         console.log(location.state)
//         Service.getDateComparison(location.state).then((response) => {
//             setResults(response.data)
//             console.log(response.data);
//         });}
//         if (location.state.name ==='app'){ 
//             console.log(location.state)
//             Service.getApplianceDate(location.state).then((response) => {
//                 setResults(response.data)
//                 console.log(response.data);
//             });}
//         if (location.state.name === 'existence'){
//             console.log(location.state)
//             Service.getAppliances(location.state).then((response) => {
//                 setResults(response.data)
//                 console.log(response.data);
//             });}
//         if (location.state.name === 'chars'){
//             console.log(location.state)
//             Service.getCharacteristics(location.state).then((response) => {
//                 setResults(response.data)
//                 console.log(response.data);
//             });
//         }
//     };

//     return (
//         <div className='first-page'>
//             <div className="d-inline-flex flex-row" >
//             <ButtonForFirstPage />
//              <div className=" d-inline-flex justify-content-center">
//                 <h2 className="text-center" style ={{color: '#242b2f',margin:"50px" , marginLeft: "400px", padding: "0px"}}>Installations Depending on Date</h2>
//                 </div>
//                 <Save  data={results} filename={"dependOnDate.csv"}/>
//                 </div>
//                 <pre><Highlighter
//                 highlightClassName="YourHighlightClass"
//                 searchWords={["installationId", "_id"]}
//                 autoEscape={true}
//                 textToHighlight={JSON.stringify(results, null, 10) } /></pre>
//             </div>
    

//     )
    
// }

// export default Results