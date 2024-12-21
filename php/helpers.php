<?php

/**
 * IP and Community constants
 */
const IP = "127.0.0.1:161";
const COMMUNITY = "public";

/**
 * Function to remove SNMP data type from value
 * @param string $value the value to be manipulated by removing the data type from it
 */
function removeDataType($value) {
    // Split by colon
    $parts = explode(':', $value);

    // Ignore the first item (index 0) and concatenate the remaining parts
    return implode(':', array_slice($parts, 1));
}

/**
 * Array for the names of objects in SNMP statistics group 
 */
$snmpStatisticsNames = array(
    ".1.3.6.1.2.1.11.1"  => "snmpInPkts",
    ".1.3.6.1.2.1.11.2"  => "snmpOutPkts",
    ".1.3.6.1.2.1.11.3"  => "snmpInBadVersions",
    ".1.3.6.1.2.1.11.4"  => "snmpInBadCommunityNames",
    ".1.3.6.1.2.1.11.5"  => "snmpInBadCommunityUses",
    ".1.3.6.1.2.1.11.6"  => "snmpInASNParseErrs",
    ".1.3.6.1.2.1.11.8"  => "snmpInTooBigs",
    ".1.3.6.1.2.1.11.9"  => "snmpInNoSuchNames",
    ".1.3.6.1.2.1.11.10" => "snmpInBadValues",
    ".1.3.6.1.2.1.11.11" => "snmpInReadOnlys",
    ".1.3.6.1.2.1.11.12" => "snmpInGenErrs",
    ".1.3.6.1.2.1.11.13" => "snmpInTotalReqVars",
    ".1.3.6.1.2.1.11.14" => "snmpInTotalSetVars",
    ".1.3.6.1.2.1.11.15" => "snmpInGetRequests",
    ".1.3.6.1.2.1.11.16" => "snmpInGetNexts",
    ".1.3.6.1.2.1.11.17" => "snmpInSetRequests",
    ".1.3.6.1.2.1.11.18" => "snmpInGetResponses",
    ".1.3.6.1.2.1.11.19" => "snmpInTraps",
    ".1.3.6.1.2.1.11.20" => "snmpOutTooBigs",
    ".1.3.6.1.2.1.11.21" => "snmpOutNoSuchNames",
    ".1.3.6.1.2.1.11.22" => "snmpOutBadValues",
    ".1.3.6.1.2.1.11.24" => "snmpOutGenErrs",
    ".1.3.6.1.2.1.11.25" => "snmpOutGetRequests",
    ".1.3.6.1.2.1.11.26" => "snmpOutGetNexts",
    ".1.3.6.1.2.1.11.27" => "snmpOutSetRequests",
    ".1.3.6.1.2.1.11.28" => "snmpOutGetResponses",
    ".1.3.6.1.2.1.11.29" => "snmpOutTraps",
    ".1.3.6.1.2.1.11.30" => "snmpEnableAuthenTraps"
);
