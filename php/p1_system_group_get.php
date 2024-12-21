<?php

require_once "helpers.php";

/**
 * Get the system properties and store them in an array
 */
$data = array(
    "sysDescription" => removeDataType(snmp2_get(IP, COMMUNITY, ".1.3.6.1.2.1.1.1.0")),
    "sysObjectID"    => removeDataType(snmp2_get(IP, COMMUNITY, ".1.3.6.1.2.1.1.2.0")),
    "sysUpTime"      => removeDataType(snmp2_get(IP, COMMUNITY, ".1.3.6.1.2.1.1.3.0")),
    "sysContact"     => removeDataType(snmp2_get(IP, COMMUNITY, ".1.3.6.1.2.1.1.4.0")),
    "sysName"        => removeDataType(snmp2_get(IP, COMMUNITY, ".1.3.6.1.2.1.1.5.0")),
    "sysLocation"    => removeDataType(snmp2_get(IP, COMMUNITY, ".1.3.6.1.2.1.1.6.0"))
);

// Remove double quotes from attribute values (& is used to pass the value by reference)
foreach ($data as $key => &$value) {
    $value = str_replace('"', '', $value);
}

/**
 * Decode the array as JSON
 */
echo json_encode($data);
