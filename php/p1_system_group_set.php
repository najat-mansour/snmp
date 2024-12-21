<?php

require_once "helpers.php";

/**
 * Read the new values
 */
$sysContactNewValue = $_POST["txtSysContact"];
$sysNameNewValue = $_POST["txtSysName"];
$sysLocationNewValue = $_POST["txtSysLocation"];

/**
 * set the new values if and only if they are set and not empty
 */
if (isset($sysContactNewValue) && !empty($sysContactNewValue)) {
    snmp2_set(IP, COMMUNITY, ".1.3.6.1.2.1.1.4.0", "s", $sysContactNewValue);

}

if (isset($sysNameNewValue) && !empty($sysNameNewValue)) {
    snmp2_set(IP, COMMUNITY, ".1.3.6.1.2.1.1.5.0", "s", $sysNameNewValue);

}

if (isset($sysLocationNewValue) && !empty($sysLocationNewValue)) {
    snmp2_set(IP, COMMUNITY, ".1.3.6.1.2.1.1.6.0", "s", $sysLocationNewValue);

}

echo json_encode(array("statusCode" => "200 OK", "response" => "Success"));
