import React from 'react';
import '../../media/css/main.css'
import Navbar from '../navbar/navbar';
// import pdf from '../../media/pdf/dummy.pdf'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PolicyDocs = () => {

// const pdfUrl =  "https://www.clickdimensions.com/links/TestPDFfile.pdf"
  const location = useLocation();
  const pdfArray = location.state.props;
  // console.log(pdfArray);

  function removeBeforeWord(str, word) {
    const index = str.indexOf(word);
    if (index !== -1) {
        return str.substring(index + word.length);
    }
    return str;
}  

  const handlePdf = async (pdf) => {
    // try {
    const response = await axios.get('http://localhost:8000/user/getPolicyData');
      // console.log(response.data); 
    const path = response.data.pdfPath;
    console.log(path);
    const str =  removeBeforeWord(path , 'public');
    console.log(str);
    window.open(str , '_blank');

  };
  
  return (
    <>
      <Navbar/>
      <table className='policyTable'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Policy Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pdfArray.map((item) => (
            <tr>
              <td>{item.srNo}</td>
              <td>{item.file.slice(0,-4)}</td>
              <td>
                <button className='pdfBtn' onClick={() => handlePdf(item.file)}>OPEN PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    {/* <table className='policyTable' >
      <thead>
        <tr>
          <th>S.No</th>
          <th>Policy Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>Attendance</td>
            <td> <button className='pdfBtn' onClick={() => handlePdf()} >OPEN PDF</button> </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Leave</td>
            <td> <button className='pdfBtn' >OPEN PDF</button> </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Employee</td>
            <td> <button className='pdfBtn' >OPEN PDF</button> </td>
        </tr>
        <tr>
            <td>4</td>
            <td>Holidays</td>
            <td> <button className='pdfBtn' >OPEN PDF</button> </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Salary</td>
            <td> <button className='pdfBtn' >OPEN PDF</button> </td>
        </tr>
        <tr>
            <td>6</td>
            <td>Data</td>
            <td> <button className='pdfBtn' >OPEN PDF</button> </td>
        </tr>
      </tbody>
    </table> */}
    </>
  );
};

export default PolicyDocs;
