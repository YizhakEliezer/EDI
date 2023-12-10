let myArray = [];

let fileContentSearch;


function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);

}

function handleFileInput(event) {
    const files = event.target.files;
    handleFiles(files);


}


function handleFiles(files) {
    myArray = []; // Clear myArray before processing each file
    const fileName = files[0].name;
    document.getElementById('file-name').innerText = ` ${fileName}`;
    checkForValue(files[0]);
}

function triggerFileInput() {
    document.getElementById('file-input').click();
}


function checkForValue(file) {


    const reader = new FileReader();

    reader.onload = function (event) {

        const fileContent = event.target.result;


        // function compareStringsIgnoreCaseAndSpace(str1, str2) {
        //     const formattedStr1 = str1.replace(/\s/g, '').toLowerCase();
        //     const formattedStr2 = str2.replace(/\s/g, '').toLowerCase();
        //
        //
        //     return formattedStr1 === formattedStr2;
        // }


        function compareStringsIgnoreCaseAndSpace(value, target) {
            // Check if value is defined and not empty
            if (value === undefined || value.trim() === "") {
                return false;
            }

            // Remove spaces from both the value and target strings
            const formattedValue = value.trim();
            const formattedTarget = target.trim();

            // Check if the formatted value is exactly equal to the formatted target
            return formattedTarget === formattedValue;
        }


        function tatsapak(tt, sapsk) {
            if (tt === "") {
                return true;
            }
            return false;
        }


        fileContentSearch = fileContent;
        const lines = fileContent.split('\n');
        const secondToLastLine = lines[lines.length - 2];


        const valueBox1 = document.getElementById('box1').value;
        const valueBox2 = document.getElementById('box2').value;
        const valueBox3 = document.getElementById('box3').value;
        const valueBox4 = document.getElementById('box4').value;
        const valueBox5 = document.getElementById('box5').value;

        //line 1
        const ENV00101 = "ENV00101";
        const nameDocument = "MMDE02L";
        const nameDocument2 = "MMDE02R";
        const typeDocument = "SUPDES";
        //line 2
        const HEAD0101 = "HEAD0101";
        //line 3
        const LINE0001 = "LINE0001";

        const LINE0201 = "LINE0201";

        const HEAD9901 = "HEAD9901";
        const ENV00201 = "ENV00201";




        let boolne = true;

        function makatimStartOfLine() {
            for (let i = 3; i < lines.length - 3; i++) {
                const makatimArryStartOfLine = fileContent.split('\n')[i].substring(0, 8);
                console.log(makatimArryStartOfLine)
                if (compareStringsIgnoreCaseAndSpace(makatimArryStartOfLine, LINE0201) ) {

                } else {
                    boolne = false;
                    addElement("תחילית מקט חסר שורה " + (i + 1))
                }
            }
        }







        let boolnemakatim = true;

        function makatim() {
            for (let r = 3; r < lines.length - 3; r++) {

                const makatim = fileContent.split('\n')[r].substring(8, 9);
                const makatim2 = fileContent.split('\n')[r].substring(9, 22);
                const makatim3 = makatim2;


                if (makatim.trim() === "") {
                    boolnemakatim = false;
                    addElement("ברקוד חסר שורה " + (r + 1));

                } else {

                    for (let i = 0; i < makatim3.length; i++) {

                        if (makatim3[i].trim() === "") {

                            for (let j = i + 1; j < makatim3.length; j++) {
                                if (makatim3[j].trim() === "") {

                                } else {
                                    boolnemakatim = false;
                                    addElement("ברקוד חסר שורה " + (r + 1));
                                    break;
                                }
                                break;
                            }

                        }

                    }

                }

            }

        }





        makatimStartOfLine()
        makatim()

        //line 1
        const generalLineHeader = fileContent.split('\n')[0].substring(0, 8);
        const isValidValueBox1 = fileContent.split('\n')[0].substring(8, 22);
        const MMDE02L = fileContent.split('\n')[0].substring(23, 32);
        const MMDE02R = fileContent.split('\n')[0].substring(23, 32);
        const SUPDES = fileContent.split('\n')[0].substring(33, 46);
        const isValidValueBox2 = fileContent.split('\n')[0].substring(49, 67);

        //line 2
        const firstLineDetailsFile = fileContent.split('\n')[1].substring(0, 8);
        const isValidValueBox3 = fileContent.split('\n')[1].substring(8, 22);

        const timeDocument = fileContent.split('\n')[1].substring(23, 35).trim();
        const timeDocumentLength = 12;
        const booleneLength = timeDocument.length === timeDocumentLength;
        const year = Number(timeDocument.substring(0, 4));
        const month = Number(timeDocument.substring(4, 6));
        const day = Number(timeDocument.substring(6, 8));
        const hour = Number(timeDocument.substring(8, 10));
        const minute = Number(timeDocument.substring(10, 12));


        const isValidValueBox4 = fileContent.split('\n')[1].substring(104, 118);
        const isValidValueBox5 = fileContent.split('\n')[1].substring(154, 168);


        //line 3
        const firstLine3row = fileContent.split('\n')[2].substring(0, 8);

        //makatim
        // const makatimArry = fileContent.split('\n')[3].substring(0, 8);
        // const makatim = makatimArry[fileContent.split('\n')[makatimArry.length-2].substring(0, 8)];
        // alert(makatim)

        const lestline = fileContent.split('\n')[lines.length - 3].substring(0, 8);
        const lestline1 = fileContent.split('\n')[lines.length - 2].substring(0, 8);


        if (
            //line 1
            compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101) &&
            compareStringsIgnoreCaseAndSpace(isValidValueBox1, valueBox1) &&
            (compareStringsIgnoreCaseAndSpace(nameDocument, MMDE02L) ||
                compareStringsIgnoreCaseAndSpace(nameDocument2, MMDE02R)) &&
            compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument) &&
            compareStringsIgnoreCaseAndSpace(isValidValueBox2, valueBox2) &&

            //line 2
            compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101) &&
            compareStringsIgnoreCaseAndSpace(isValidValueBox3, valueBox3) &&


            booleneLength === true &&

            (year => 2023 && month > 1 && month <= 12 && day > 1 && day <= 31 && hour > 0 && hour <= 24 &&
                    minute > 0 && minute <= 59
            ) &&


            (tatsapak(valueBox4, valueBox3) === true &&
                compareStringsIgnoreCaseAndSpace(isValidValueBox4, valueBox2) ||
                tatsapak(valueBox4, valueBox3) === false &&
                compareStringsIgnoreCaseAndSpace(isValidValueBox4, valueBox4)
            )

            &&

            (tatsapak(valueBox5, isValidValueBox5) === true ||
                tatsapak(valueBox5, isValidValueBox5) === false &&
                compareStringsIgnoreCaseAndSpace(isValidValueBox5, valueBox5)
            ) &&

            //line 3
            compareStringsIgnoreCaseAndSpace(firstLine3row, LINE0001) &&


            //makatim
            boolne === true && boolnemakatim === true &&

            compareStringsIgnoreCaseAndSpace(lestline, HEAD9901) &&

            compareStringsIgnoreCaseAndSpace(lestline1, ENV00201)


        ) {
            addElement("תעודה תקינה");
        }


        //line 1
        if (!compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101)) {
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
            addElement('SUPDES-ערך חסר');
        }
        if (!compareStringsIgnoreCaseAndSpace(isValidValueBox2, valueBox2)) {
            addElement('מספר ספק שגוי');
        }


        //line 2
        if (!compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101)) {
            addElement('HEAD0101-ערך חסר');
        }
        if (!compareStringsIgnoreCaseAndSpace(isValidValueBox3, valueBox3)) {
            addElement('מספר תעודה שגוי');
        }


        if (booleneLength === false || isNaN(booleneLength)) {
            addElement('פורמט תאריך  שגוי');
        }

        if (year < 2023 || isNaN(year)) {
            addElement('פורמט תאריך שנה שגוי');
        }
        if (month < 1 || month > 12 || isNaN(month)) {
            addElement('פורמט תאריך חודש שגוי');
        }
        if (day < 1 || day > 31 || isNaN(day)) {
            addElement('פורמט תאריך יום שגוי');
        }
        if (hour < 0 || hour > 24 || isNaN(hour)) {
            addElement('פורמט תאריך שעה שגוי');
        }
        if (minute < 0 || minute > 59 || isNaN(minute)) {
            addElement('פורמט תאריך דקה שגוי');
        }


        if (tatsapak(valueBox4, valueBox3) === true && !compareStringsIgnoreCaseAndSpace(isValidValueBox4, valueBox2)) {
            addElement('מספר ספק משני (שורה 2) שגוי או חסר');
        }

        if (tatsapak(valueBox4, valueBox3) === false && !compareStringsIgnoreCaseAndSpace(isValidValueBox4, valueBox4)) {
            addElement('מספר  תת ספק  שגוי');
        }

        if (tatsapak(valueBox5, isValidValueBox5) === false && !compareStringsIgnoreCaseAndSpace(isValidValueBox5, valueBox5)) {
            addElement('מספר  סניף  שגוי');
        }


        //line 3
        if (!compareStringsIgnoreCaseAndSpace(firstLine3row, LINE0001)) {
            addElement('LINE0001-ערך חסר');
        }

        if (!compareStringsIgnoreCaseAndSpace(lestline, HEAD9901)) {
            addElement('HEAD9901-ערך חסר');
        }

        if (!compareStringsIgnoreCaseAndSpace(lestline1, ENV00201)) {
            addElement('ENV00201-ערך חסר');
        }

        //makatim
        // makatim()


    };


    reader.readAsText(file);


}


function addElement(value) {

    if (value.includes("תעודה תקינה")) {
        myArray.push(value);
        messageRusltFix();
    } else {
        myArray.push(value);
        messageRuslt();
    }
}


function messageRuslt() {
    // Get the div element
    const messageRuslt = document.getElementById('messageRuslt');

    // Clear the existing content
    messageRuslt.innerHTML = "";

    myArray.forEach(function (element) {


        messageRuslt.innerHTML += `<p>${element}-</p>`;

    });

}


function messageRusltFix() {
    // Get the div element
    const messageRuslt = document.getElementById('messageRuslt');
    // Clear the existing content
    messageRuslt.innerHTML = "";

    myArray.forEach(function (element) {
        messageRuslt.innerHTML += `<p style="color: #79acf1;font-size: 25px;position: relative;right: 37px">${element}</p>`;
    });

}



















