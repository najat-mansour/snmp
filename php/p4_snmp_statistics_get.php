<?php

require_once "helpers.php";

$data = array();

/**
 * Get the content of the SNMP group objects
 */
for ($i = 1; $i <= 30; $i++) {
    if ($i != 7 && $i != 23) { // Exclude OIDs 1.3.6.1.2.1.11.7 and 1.3.6.1.2.1.11.23
        $oid = ".1.3.6.1.2.1.11.$i";
        $result = snmp2_get(IP, COMMUNITY, $oid.".0");

        if ($result !== false) {
            $data[] = array(
                "index" => $i,
                "name" => $snmpStatisticsNames[$oid],
                "value" => removeDataType($result)
            );
        }
    }
}

/**
 * Decode the array as JSON
 */
echo json_encode($data);
