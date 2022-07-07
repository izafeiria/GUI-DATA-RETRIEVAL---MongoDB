
const ButtonSave = (props) => {

// Function to convert the JSON(Array of objects) to CSV.
const arrayToCsv = (headers, data) => {
  const csvRows = [];
   // getting headers. 
  const headerValues = headers.map(header => header.label); 
  csvRows.push(headerValues.join(','));
  // Push into array as comma separated values.
  // Getting rows. 
  for (const row of data) { 
    const rowValues = headers.map(header => { 
    const escaped =  row[header.key];
          return `"${escaped}"`
    
    })
    csvRows.push(rowValues.join(","));
     // To enter the next rows in the new line '\n' 
  }
  return csvRows.join('\n');
};

  // Function to download the generated CSV as a .csv file.
  const download = (data, fileName) => {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', fileName );
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

 const gencsv =  e => {
   e.preventDefault()
   const csvData= arrayToCsv(props.headers,props.data);
   download(csvData,props.filename);
  }

  return (


    <button className="button buttons" style={{marginLeft: "450px"}} onClick={gencsv}> Export to CSV </button>


  )

}

export default ButtonSave