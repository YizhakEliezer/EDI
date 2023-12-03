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


        fileContentSearch = fileContent;
        const lines = fileContent.split('\n');
        const secondToLastLine = lines[lines.length - 2];


        const valueBox1 = document.getElementById('box1').value;
        const valueBox2 = document.getElementById('box2').value;
        const valueBox3 = document.getElementById('box3').value;
        const valueBox4 = document.getElementById('box4').value;


        //line 1
        const ENV00101 = "ENV00101";
        const nameDocument = "MMDE02L";
        const nameDocument2 = "MMDE02R";
        const typeDocument = "SUPDES";

        //line 2
        const HEAD0101 = "HEAD0101";

        //line 1
        const generalLineHeader = fileContent.split('\n')[0].substring(0, 8);
        const isValidValueBox1 = fileContent.split('\n')[0].substring(8, 22);
        const MMDE02L = fileContent.split('\n')[0].substring(23, 32);
        const MMDE02R = fileContent.split('\n')[0].substring(23, 32);
        const SUPDES = fileContent.split('\n')[0].substring(33, 46);
        const isValidValueBox2 = fileContent.split('\n')[0].substring(49, 63);

        //line 2
        const firstLineDetailsFile = fileContent.split('\n')[1].substring(0, 8);
        const isValidValueBox3 = fileContent.split('\n')[1].substring(8, 22);






        const timeDocument = fileContent.split('\n')[1].substring(23, 34);
        const stringTimeSpaces = timeDocument.replace(/\s/g);

        const year = Number(stringTimeSpaces.substring(0, 4));
        const month = Number(stringTimeSpaces.substring(4, 6));
        const day = Number(stringTimeSpaces.substring(6, 8));
        const hour = Number(stringTimeSpaces.substring(8, 10));
        const minute = Number(stringTimeSpaces.substring(10, 12));

        alert(timeDocument)
        // alert(year)
        // alert(month)
        // alert(day)
        // alert(hour)
        // alert(minute)


        if (
            //line 1
            compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101) &&
            compareStringsIgnoreCaseAndSpace(isValidValueBox1, valueBox1) &&
            (compareStringsIgnoreCaseAndSpace(MMDE02L, nameDocument) ||
                compareStringsIgnoreCaseAndSpace(MMDE02R, nameDocument2)) &&
            compareStringsIgnoreCaseAndSpace(SUPDES, typeDocument) &&
            compareStringsIgnoreCaseAndSpace(isValidValueBox2, valueBox2) &&

            //line 2
            compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101) &&
            compareStringsIgnoreCaseAndSpace(isValidValueBox3, valueBox3) &&


            (year => 2023 && month > 1 && month <= 12 && day > 1 && day <= 31 && hour > 0 && hour <= 24 &&
                minute > 0 && minute <= 59
            )
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



        

        if (stringTimeSpaces = undefined) {
            addElement('פרמט תאריך  שגוי');
        }

        if (year < 2023) {
            addElement('פרמט תאריך שנה שגוי');
        }
        if (month < 1 || month > 12) {
            addElement('פרמט תאריך חודש שגוי');
        }
        if (day < 1 || day > 31) {
            addElement('פרמט תאריך יום שגוי');
        }
        if (hour < 0 || hour > 24) {
            addElement('פרמט תאריך שעה שגוי');
        }
        if (minute < 0 || minute > 59) {
            addElement('פרמט תאריך דקה שגוי');
        }


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
        messageRuslt.innerHTML += `<p style="color: #79acf1;font-size: 25px;position: absolute;
            top: 100px;left: 270px;">${element}</p>`;
    });

}



















