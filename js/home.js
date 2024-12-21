const btnSystemGroupPage = document.querySelectorAll('button').item(0);
const btnTcpTablePage = document.querySelectorAll('button').item(1);
const btnArpTablePage = document.querySelectorAll('button').item(2);
const btnSnmpStatisticsPage = document.querySelectorAll('button').item(3);

btnSystemGroupPage.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p1_system_group.html";

});

btnTcpTablePage.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p2_tcp_table.html";

});

btnArpTablePage.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p3_arp_table.html";

});

btnSnmpStatisticsPage.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1/HW_02_Part_01/html/p4_snmp_statistics.html";
    
});
