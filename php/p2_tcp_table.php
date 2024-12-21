<?php

require_once "helpers.php";

$data = array();

/**
 * Get the content of the TCP connection table
 */
$states = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.6.13.1.1");           // TCP connection states
$localAddresses = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.6.13.1.2");   // Local IP addresses
$localPorts = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.6.13.1.3");       // Local port numbers
$remoteAddresses = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.6.13.1.4");  // Remote IP addresses
$remotePorts = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.6.13.1.5");      // Remote port numbers

/**
 * Define an index for the table
 */
$index = 0;

foreach ($localAddresses as $k => $val) {
    $data[] = array(
        "index"         => $index + 1, //! index on table starts from 1
        "state"         => removeDataType($states[$index]),
        "localAddress"  => removeDataType($localAddresses[$index]),
        "localPort"     => removeDataType($localPorts[$index]),
        "remoteAddress" => removeDataType($remoteAddresses[$index]),
        "remotePort"    => removeDataType($remotePorts[$index])
    );
    $index++;
}

/**
 * Decode the array as JSON
 */
echo json_encode($data);
