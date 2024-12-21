const btnPrevious = document.querySelectorAll('.control-buttons button').item(0);
const btnHome = document.querySelectorAll('.control-buttons button').item(1);
const btnNext = document.querySelectorAll('.control-buttons button').item(2);
const btnRefresh = document.querySelector('.refresh');

const tbody = document.querySelector('tbody');

const txtMac = document.querySelector('#txtMac');
const txtIp = document.querySelector('#txtIp');
const txtTtl = document.querySelector('#txtTtl');

btnPrevious.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p2_tcp_table.html";

});

btnHome.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/home.html";

});

btnNext.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p4_snmp_statistics.html";

});


btnRefresh.addEventListener('click', () => {
    filterTable();
});

filterTable();

/**
 * function to set the data on the table
 * @param {JSON} data the result of filtering the data returned by the server 
 */
function setTableData(data) { 
    data.forEach(element => {
        const tr = document.createElement('tr');
        const rowColor = element.index % 2 ? 'rgb(226, 223, 223)' : 'white';
    
        const tdIndex = document.createElement('td');
        tdIndex.style.backgroundColor = 'rgb(176, 176, 176)';
        tdIndex.innerHTML = element.index;
        tr.appendChild(tdIndex);
    
        const tdMacAddr = document.createElement('td');
        tdMacAddr.style.backgroundColor = rowColor;
        tdMacAddr.innerHTML = element.mac;
        tr.appendChild(tdMacAddr);
    
        const tdIpAddr = document.createElement('td');
        tdIpAddr.style.backgroundColor = rowColor;
        tdIpAddr.innerHTML = element.ip;
        tr.appendChild(tdIpAddr);
    
        const tdTtl = document.createElement('td');
        tdTtl.style.backgroundColor = rowColor;
        tdTtl.innerHTML = element.ttl;
        tr.appendChild(tdTtl);
    
        tbody.appendChild(tr);
    });
}

txtMac.addEventListener('input', filterTable);
txtIp.addEventListener('input', filterTable);
txtTtl.addEventListener('input', filterTable);

/**
 * function to filter the table data based on Mac Address, IP Address, and TTL
 */
function filterTable() {
    const filterMac = txtMac.value.toUpperCase();
    const filterIp = txtIp.value.toUpperCase();
    const filterTtl = txtTtl.value.toUpperCase();

    const xhr = new XMLHttpRequest();
    let json;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const responseText = xhr.responseText;
            json = JSON.parse(responseText);
            const filteredData = json.filter(element => {
                const mac = element.mac.toUpperCase();
                const ip = element.ip.toUpperCase();
                const ttl = element.ttl.toUpperCase();
        
                return (
                    mac.includes(filterMac) &&
                    ip.includes(filterIp) &&
                    ttl.includes(filterTtl)
                );
            });
    
            tbody.innerHTML = '';
            setTableData(filteredData);
        }
    };

    xhr.open("GET", "../php/p3_arp_table.php", true);
    xhr.send(null);
}
