
const Save = (props) => {

    const { Parser } = require('json2csv')
    const {transforms: { flatten }, } = require('json2csv');
    const {fields} = require('json2csv')
    
    
    const save = e => {
      
    e.preventDefault()
    
    const opts =  { flatten, fields }

    const parser = new Parser({opts});

    const csv = parser.parse(props.data);
    download(csv,props.filename)

    }



    const download = (data,fileName) => {
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

      return (
    
    
        <button className="button buttons" style={{marginLeft: "450px"}} onClick={save}> Export to CSV </button>
    
    
      )
    
    }
    
    export default Save