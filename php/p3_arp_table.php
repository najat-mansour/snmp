<?php

require_once "helpers.php";

$data = array();

/**
 * Get the content of the table
 */
$macs = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.4.22.1.2");
$ips = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.4.22.1.3");
$ttls = snmp2_walk(IP, COMMUNITY, ".1.3.6.1.2.1.4.22.1.4");

/**
 * Define an index for the table
 */
$index = 0;

foreach ($macs as $k => $val) {
    $data[] = array(
        "index" => $index + 1, //! index on table starts from 1
        "mac"   => removeDataType($macs[$index]),
        "ip"    => removeDataType($ips[$index]),
        "ttl"   => removeDataType($ttls[$index])
    );
    $index++;
}

/**
 * Decode the array as JSON
 */
echo json_encode($data);
