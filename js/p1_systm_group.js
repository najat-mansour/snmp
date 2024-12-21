const btnPrevious = document.querySelectorAll('.control-buttons button').item(0);
const btnHome = document.querySelectorAll('.control-buttons button').item(1);
const btnNext = document.querySelectorAll('.control-buttons button').item(2);
const btnRefresh = document.querySelector('.refresh');

btnPrevious.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p4_snmp_statistics.html";

});

btnHome.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/home.html";

});

btnNext.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p2_tcp_table.html";

});

btnRefresh.addEventListener('click', () => {
    setSystemGroupTableContent();
});

setSystemGroupTableContent();

const txtSystemContact = document.querySelectorAll("input").item(0);
const txtSystemName = document.querySelectorAll("input").item(1);
const txtSystemLocation = document.querySelectorAll("input").item(2);

const btnSubmit = document.querySelectorAll('.editable-fields button').item(0);
const btnClear = document.querySelectorAll('.editable-fields button').item(1);

btnSubmit.addEventListener("click", () => {
    //! Special case if the three fields are empty (No data at all)
    if (txtSystemContact.value == '' && txtSystemName.value == '' && txtSystemLocation.value == '') {
        Swal.fire({
            title: 'Warning!',
            text: 'Please, fill at least one field!',
            icon: 'Warning',
            customClass: {
              popup: 'swal'
            }
        });

        return;
    }

    const xhr = new XMLHttpRequest();
    let json;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const responseText = xhr.responseText;
            json = JSON.parse(responseText);
            if (json.statusCode == "200 OK")  { 
                Swal.fire({
                    title: 'Set Your Fields!',
                    text: 'Your data has been set.',
                    icon: 'success',
                    customClass: {
                      popup: 'swal'
                    }
                });
                clearEditableFields();
                setSystemGroupTableContent();
            }
        }
    };

    xhr.open("POST", "../php/p1_system_group_set.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`txtSysContact=${txtSystemContact.value}&txtSysName=${txtSystemName.value}&txtSysLocation=${txtSystemLocation.value}`);
});


btnClear.addEventListener('click', () => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true, // Add this line to show the cancel button
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Reset!',
                'Your data has been reset.',
                'success'
            );
            clearEditableFields();
        }
    });
});

/**
 * function to set the content of the System Group table
 */
function setSystemGroupTableContent() {
    const xhr = new XMLHttpRequest();
    let json;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const responseText = xhr.responseText;
            json = JSON.parse(responseText);
            const tds = document.querySelectorAll('td');
            tds.item(1).innerHTML = json.sysDescription;
            tds.item(3).innerHTML = json.sysObjectID;
            tds.item(5).innerHTML = json.sysUpTime;
            tds.item(7).innerHTML = json.sysContact;
            tds.item(9).innerHTML = json.sysName;
            tds.item(11).innerHTML = json.sysLocation;
        }
    };

    xhr.open("GET", "../php/p1_system_group_get.php", true);
    xhr.send(null);
}


/**
 * function to clear the text of the editable fields
 */
function clearEditableFields() {
    txtSystemContact.value = '';
    txtSystemName.value = '';
    txtSystemLocation.value = '';
}