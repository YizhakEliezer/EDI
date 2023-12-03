function Search() {
    myArray = [];

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




    const lines = fileContentSearch.split('\n');
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
    const generalLineHeader = fileContentSearch.split('\n')[0].substring(0, 8);
    const isValidValueBox1 = fileContentSearch.split('\n')[0].substring(8, 22);
    const MMDE02L = fileContentSearch.split('\n')[0].substring(23, 32);
    const MMDE02R = fileContentSearch.split('\n')[0].substring(23, 32);
    const SUPDES = fileContentSearch.split('\n')[0].substring(33, 46);
    const isValidValueBox2 = fileContentSearch.split('\n')[0].substring(49, 63);

    //line 2
    const firstLineDetailsFile = fileContentSearch.split('\n')[1].substring(0, 8);
    const isValidValueBox3 = fileContentSearch.split('\n')[1].substring(8, 22);


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
        compareStringsIgnoreCaseAndSpace(isValidValueBox3, valueBox3)
    ) {
        addElement("תעודה תקינה");
    }



    //line 1
    if (!compareStringsIgnoreCaseAndSpace(generalLineHeader, ENV00101)) {
        addElement('ENV00101-ערך חסר');
    }

    if (!compareStringsIgnoreCaseAndSpace(isValidValueBox1, valueBox1)) {
        addElement( 'מספר רשת שגוי');
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
    if (! compareStringsIgnoreCaseAndSpace(firstLineDetailsFile, HEAD0101)) {
        addElement('HEAD0101-ערך חסר');
    }
    if (!compareStringsIgnoreCaseAndSpace(isValidValueBox3, valueBox3)) {
        addElement('מספר תעודה שגוי');
    }






}



