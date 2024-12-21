const btnPrevious = document.querySelectorAll('.control-buttons button').item(0);
const btnHome = document.querySelectorAll('.control-buttons button').item(1);
const btnNext = document.querySelectorAll('.control-buttons button').item(2);
const btnRefresh = document.querySelector('.refresh');

btnPrevious.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p3_arp_table.html";

});

btnHome.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/home.html";

});

btnNext.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p1_system_group.html";

});

const tbodySnmpStatisticsByGet = document.querySelector('#snmpStatisticsByGet');
const tbodySnmpStatisticsByWalk = document.querySelector('#snmpStatisticsByWalk');

btnRefresh.addEventListener('click', () => {
    setSnmpStatisticsTableByGet();
    setSnmpStatisticsTableByWalk();
});

setSnmpStatisticsTableByGet();
setSnmpStatisticsTableByWalk();

/**
 * function to set the content of SNMP statistics table using snmp2_get()
 */
async function setSnmpStatisticsTableByGet() {
    tbodySnmpStatisticsByGet.innerHTML = '';
    const xhr = new XMLHttpRequest();
    let json;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const responseText = xhr.responseText;
            json = JSON.parse(responseText);
            for (element of json) {
                const tr = document.createElement('tr');
                const rowColor = element.index % 2 ? 'rgb(226, 223, 223)' : 'white';

                const tdIndex = document.createElement('td');
                tdIndex.style.backgroundColor = 'rgb(176, 176, 176)';
                tdIndex.innerHTML = element.index;
                tr.appendChild(tdIndex);

                const tdName = document.createElement('td');
                tdName.style.backgroundColor = rowColor;
                tdName.innerHTML = element.name;
                tr.appendChild(tdName);

                const tdValue = document.createElement('td');
                tdValue.style.backgroundColor = rowColor;
                tdValue.innerHTML = element.value;
                tr.appendChild(tdValue);

                tbodySnmpStatisticsByGet.appendChild(tr);
            }
        }
    };

    xhr.open("GET", "../php/p4_snmp_statistics_get.php", false); //! turn off the async calling since we've multiple
    xhr.send(null);
}

/**
 * function to set the content of SNMP statistics table using snmp2_walk()
 */
async function setSnmpStatisticsTableByWalk() {
    tbodySnmpStatisticsByWalk.innerHTML = '';
    const xhr = new XMLHttpRequest();
    let json;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const responseText = xhr.responseText;
            json = JSON.parse(responseText);
            for (element of json) {
                const tr = document.createElement('tr');
                const rowColor = element.index % 2 ? 'rgb(226, 223, 223)' : 'white';

                const tdIndex = document.createElement('td');
                tdIndex.style.backgroundColor = 'rgb(176, 176, 176)';
                tdIndex.innerHTML = element.index;
                tr.appendChild(tdIndex);

                const tdName = document.createElement('td');
                tdName.style.backgroundColor = rowColor;
                tdName.innerHTML = element.name;
                tr.appendChild(tdName);

                const tdValue = document.createElement('td');
                tdValue.style.backgroundColor = rowColor;
                tdValue.innerHTML = element.value;
                tr.appendChild(tdValue);

                tbodySnmpStatisticsByWalk.appendChild(tr);
            }
        }
    };

    xhr.open("GET", "../php/p4_snmp_statistics_walk.php", false); //! turn off the async calling since we've multiple
    xhr.send(null);
}