---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

reachableCallback
=================

A callback function that provides the reachability status of a hostname.

    function reachableCallback(reachability) {
        // Check the reachability state
    }

Parameters
----------

- __reachability:__ The device's network state. (`NetworkStatus`)
    - Unfortunately, there is no consistency across the platforms on the `reachability` format. See the quirks below for platform details.

Description
-----------

This callback accepts a single argument called `reachability`, which is a `NetworkStatus` constant.

Example
-------

    function reachableCallback(reachability) {
        // There is no consistency on the format of reachability
        var networkState = reachability.code || reachability;
    
        var states = {};
        states[NetworkStatus.NOT_REACHABLE]                      = 'No network connection';
        states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
        states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'WiFi connection';

        alert('Connection type: ' + states[networkState]);
    }

BlackBerry Quirks
-----------------

Provides the network status as the value of `reachablity`

    function reachableCallback(reachability) {
        var hasConnection = (reachability !== NetworkStatus.NOT_REACHABLE);
    }

iPhone Quirks
-------------

The iPhone implementation only provides information about the type of connection available. It does not verify that the host is actually available. 