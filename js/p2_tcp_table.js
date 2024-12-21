const btnPrevious = document.querySelectorAll('.control-buttons button').item(0);
const btnHome = document.querySelectorAll('.control-buttons button').item(1);
const btnNext = document.querySelectorAll('.control-buttons button').item(2);
const btnRefresh = document.querySelector('.refresh');

const tbody = document.querySelector('tbody');

const txtState = document.querySelector('#txtState');
const txtSrcIp = document.querySelector('#txtSrcIp');
const txtSrcPort = document.querySelector('#txtSrcPort');
const txtDestIp = document.querySelector('#txtDestIp');
const txtDestPort = document.querySelector('#txtDestPort');

btnPrevious.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p1_system_group.html";

});

btnHome.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/home.html";

});

btnNext.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p3_arp_table.html";

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
    data.forEach((element) => {
        const tr = document.createElement('tr');
        const rowColor = element.index % 2 ? 'rgb(226, 223, 223)' : 'white';
    
        const tdIndex = document.createElement('td');
        tdIndex.style.backgroundColor = 'rgb(176, 176, 176)';
        tdIndex.innerHTML = element.index;
        tr.appendChild(tdIndex);
    
        const tdState = document.createElement('td');
        tdState.style.backgroundColor = rowColor;
        tdState.innerHTML = element.state;
        tr.appendChild(tdState);
    
        const tdSrcAddr = document.createElement('td');
        tdSrcAddr.style.backgroundColor = rowColor;
        tdSrcAddr.innerHTML = element.localAddress;
        tr.appendChild(tdSrcAddr);
    
        const tdSrcPort = document.createElement('td');
        tdSrcPort.style.backgroundColor = rowColor;
        tdSrcPort.innerHTML = element.localPort;
        tr.appendChild(tdSrcPort);
    
        const tdDestAddr = document.createElement('td');
        tdDestAddr.style.backgroundColor = rowColor;
        tdDestAddr.innerHTML = element.remoteAddress;
        tr.appendChild(tdDestAddr);
    
        const tdDestPort = document.createElement('td');
        tdDestPort.style.backgroundColor = rowColor;
        tdDestPort.innerHTML = element.remotePort;
        tr.appendChild(tdDestPort);
    
        tbody.appendChild(tr);
    });
}

txtState.addEventListener('input', filterTable);
txtSrcIp.addEventListener('input', filterTable);
txtSrcPort.addEventListener('input', filterTable);
txtDestIp.addEventListener('input', filterTable);
txtDestPort.addEventListener('input', filterTable);

/**
 * function to filter the table data
 */
function filterTable() {
    const filterState = txtState.value.toUpperCase();
    const filterSrcIp = txtSrcIp.value.toUpperCase();
    const filterSrcPort = txtSrcPort.value.toUpperCase();
    const filterDestIp = txtDestIp.value.toUpperCase();
    const filterDestPort = txtDestPort.value.toUpperCase();

    const xhr = new XMLHttpRequest();
    let json;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const responseText = xhr.responseText;
            json = JSON.parse(responseText);
            const filteredData = json.filter(element => {
                const state = element.state.toUpperCase();
                const srcIp = element.localAddress.toUpperCase();
                const srcPort = element.localPort.toUpperCase();
                const destIp = element.remoteAddress.toUpperCase();
                const destPort = element.remotePort.toUpperCase();
        
                return (
                    state.includes(filterState) &&
                    srcIp.includes(filterSrcIp) &&
                    srcPort.includes(filterSrcPort) &&
                    destIp.includes(filterDestIp) &&
                    destPort.includes(filterDestPort)
                );
            });
    
            tbody.innerHTML = '';
            setTableData(filteredData);
        }
    };

    xhr.open("GET", "../php/p2_tcp_table.php", true);
    xhr.send(null);
}