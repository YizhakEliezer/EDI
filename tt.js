function searchCertificate() {
  // Get user-entered values from input boxes
  const valueBox1 = document.getElementById('box1').value;
  const valueBox2 = document.getElementById('box2').value;
  const valueBox3 = document.getElementById('box3').value;
  const valueBox4 = document.getElementById('box4').value;


  let myArray = [];

  function addElement(value) {
    myArray.push(value);
    messageRuslt();
  }


  function messageRuslt() {
    // Get the div element
    const messageRuslt = document.getElementById('messageRuslt');

    // Clear the existing content
    messageRuslt.innerHTML = "";

    // Add each array element to the div
    myArray.forEach(function (element) {
      messageRuslt.innerHTML += `<p>${element}</p>`;
    });
  }



  const fileInput = document.getElementById('file-input');
  const selectedFile = fileInput.files[0];



  // if (!selectedFile ) {
  //   alert('Please select a file.');
  //   return;
  // }





  const reader = new FileReader();


  reader.onload = function (event) {
    const fileContent = event.target.result;



    function compareStringsIgnoreCaseAndSpace(str1, str2) {
      const formattedStr1 = str1.replace(/\s/g, '').toLowerCase();
      const formattedStr2 = str2.replace(/\s/g, '').toLowerCase();

      return formattedStr1 === formattedStr2;
    }


    const ENV00101 = "ENV00101";
    const nameDocument = "MMDE02L";
    const nameDocument2 = "MMDE02R";
    const typeDocument = "SUPDES";


    const isValidCertificate = fileContent.split('\n')[0].substring(0, 8);
    const isValidValueBox1 = fileContent.split('\n')[0].substring(8, 22);
    const MMDE02L = fileContent.split('\n')[0].substring(23, 32);
    const MMDE02R = fileContent.split('\n')[0].substring(23, 32);
    const SUPDES = fileContent.split('\n')[0].substring(33, 46);
    const isValidValueBox2 = fileContent.split('\n')[0].substring(49, 63);


    if (compareStringsIgnoreCaseAndSpace(isValidCertificate, ENV00101) &&
        compareStringsIgnoreCaseAndSpace(isValidValueBox1, valueBox1) &&
        (compareStringsIgnoreCaseAndSpace(MMDE02L, nameDocument) ||
            compareStringsIgnoreCaseAndSpace(MMDE02R, nameDocument2)) &&
        compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument) &&
        compareStringsIgnoreCaseAndSpace(isValidValueBox2, valueBox2)
    ) {
      addElement("תעודה תקינה");
    }




    if (!compareStringsIgnoreCaseAndSpace(isValidCertificate, ENV00101)) {
      addElement('ENV00101-ערך חסר');
    }

    if (!compareStringsIgnoreCaseAndSpace(isValidValueBox1, valueBox1)) {
      addElement('מספר רשת שגוי');
    }


    if (!compareStringsIgnoreCaseAndSpace(MMDE02L, nameDocument) &&
        !compareStringsIgnoreCaseAndSpace(MMDE02R, nameDocument2)) {

      addElement("MMDE02L-ערך חסר ");
    }

    if (!compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument)) {
      addElement(' SUPDES-ערך חסר');
    }

    if (!compareStringsIgnoreCaseAndSpace(isValidValueBox2, valueBox2)) {
      addElement('מספר ספק שגוי');
    }




  };

  reader.readAsText(selectedFile);




  function checkValueInFileExactly(fileContent, targetValue, lineIndex, startPosition, endPosition) {
    const targetSubstring = fileContent.split('\n')[lineIndex - 1].substring(startPosition - 1, endPosition);
    // targetSubstring.indexOf(fileContent.split('\n')[lineIndex - 1].substring(startPosition - 1, endPosition));
    return targetSubstring === targetValue;
  }


  function checkValueInFileContain(fileContent, targetValue, startPosition, endPosition) {
    const lineContent = fileContent.substring(startPosition - 1, endPosition);
    return lineContent === targetValue;
  }


}








