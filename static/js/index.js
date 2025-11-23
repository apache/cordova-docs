// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

function copyToClipboard(evt) {
    let text = evt.querySelector('.text-to-copy').textContent;
    navigator.clipboard.writeText(text);
}

function openNpmjsPluginsSearch() {
    window.open('https://www.npmjs.com/search?q=keywords:ecosystem:cordova', '_blank');
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var lastVisit = getCookie("visitTime");
function checkNotification() {
    var dates = [];
    if (lastVisit != "") {
        
        dates.push('Sun, 23 Nov 2025 00:00:00 +0000');
        dates.push('Wed, 05 Nov 2025 00:00:00 +0000');
        dates.push('Wed, 22 Oct 2025 00:00:00 +0000');
        dates.push('Fri, 29 Aug 2025 00:00:00 +0000');
        dates.push('Fri, 29 Aug 2025 00:00:00 +0000');
        dates.push('Sat, 09 Aug 2025 00:00:00 +0000');
        dates.push('Wed, 30 Apr 2025 00:00:00 +0000');
        dates.push('Wed, 26 Mar 2025 00:00:00 +0000');
        dates.push('Wed, 26 Feb 2025 00:00:00 +0000');
        dates.push('Sun, 02 Feb 2025 00:00:00 +0000');
        dates.push('Fri, 31 Jan 2025 00:00:00 +0000');
        dates.push('Wed, 08 Jan 2025 00:00:00 +0000');
        dates.push('Wed, 20 Nov 2024 00:00:00 +0000');
        dates.push('Sat, 02 Nov 2024 00:00:00 +0000');
        dates.push('Fri, 01 Nov 2024 00:00:00 +0000');
        dates.push('Mon, 28 Oct 2024 00:00:00 +0000');
        dates.push('Wed, 23 Oct 2024 00:00:00 +0000');
        dates.push('Mon, 21 Oct 2024 00:00:00 +0000');
        dates.push('Wed, 24 Jul 2024 00:00:00 +0000');
        dates.push('Thu, 23 May 2024 00:00:00 +0000');
        dates.push('Wed, 03 Apr 2024 00:00:00 +0000');
        dates.push('Mon, 11 Mar 2024 00:00:00 +0000');
        dates.push('Fri, 12 Jan 2024 00:00:00 +0000');
        dates.push('Fri, 24 Nov 2023 00:00:00 +0000');
        dates.push('Thu, 23 Nov 2023 00:00:00 +0000');
        dates.push('Thu, 21 Sep 2023 00:00:00 +0000');
        dates.push('Tue, 12 Sep 2023 00:00:00 +0000');
        dates.push('Wed, 06 Sep 2023 00:00:00 +0000');
        dates.push('Mon, 28 Aug 2023 00:00:00 +0000');
        dates.push('Fri, 18 Aug 2023 00:00:00 +0000');
        dates.push('Tue, 11 Jul 2023 00:00:00 +0000');
        dates.push('Mon, 10 Jul 2023 00:00:00 +0000');
        dates.push('Mon, 22 May 2023 00:00:00 +0000');
        dates.push('Mon, 22 May 2023 00:00:00 +0000');
        dates.push('Sat, 13 May 2023 00:00:00 +0000');
        dates.push('Sat, 15 Apr 2023 00:00:00 +0000');
        dates.push('Thu, 09 Mar 2023 00:00:00 +0000');
        dates.push('Fri, 24 Feb 2023 00:00:00 +0000');
        dates.push('Mon, 16 Jan 2023 00:00:00 +0000');
        dates.push('Tue, 15 Nov 2022 00:00:00 +0000');
        dates.push('Fri, 09 Sep 2022 00:00:00 +0000');
        dates.push('Tue, 12 Jul 2022 00:00:00 +0000');
        dates.push('Mon, 30 May 2022 00:00:00 +0000');
        dates.push('Mon, 30 May 2022 00:00:00 +0000');
        dates.push('Fri, 15 Apr 2022 00:00:00 +0000');
        dates.push('Mon, 11 Apr 2022 00:00:00 +0000');
        dates.push('Wed, 06 Apr 2022 00:00:00 +0000');
        dates.push('Tue, 22 Mar 2022 00:00:00 +0000');
        dates.push('Wed, 09 Mar 2022 00:00:00 +0000');
        dates.push('Tue, 25 Jan 2022 00:00:00 +0000');
        dates.push('Tue, 21 Dec 2021 00:00:00 +0000');
        dates.push('Sun, 31 Oct 2021 00:00:00 +0000');
        dates.push('Fri, 08 Oct 2021 00:00:00 +0000');
        dates.push('Wed, 15 Sep 2021 00:00:00 +0000');
        dates.push('Mon, 06 Sep 2021 00:00:00 +0000');
        dates.push('Wed, 25 Aug 2021 00:00:00 +0000');
        dates.push('Mon, 23 Aug 2021 00:00:00 +0000');
        dates.push('Mon, 16 Aug 2021 00:00:00 +0000');
        dates.push('Fri, 30 Jul 2021 00:00:00 +0000');
        dates.push('Tue, 20 Jul 2021 00:00:00 +0000');
        dates.push('Mon, 28 Jun 2021 00:00:00 +0000');
        dates.push('Thu, 03 Jun 2021 00:00:00 +0000');
        dates.push('Tue, 11 May 2021 00:00:00 +0000');
        dates.push('Tue, 13 Apr 2021 00:00:00 +0000');
        dates.push('Tue, 16 Feb 2021 00:00:00 +0000');
        dates.push('Sun, 07 Feb 2021 00:00:00 +0000');
        dates.push('Thu, 04 Feb 2021 00:00:00 +0000');
        dates.push('Tue, 02 Feb 2021 00:00:00 +0000');
        dates.push('Tue, 02 Feb 2021 00:00:00 +0000');
        dates.push('Mon, 30 Nov 2020 00:00:00 +0000');
        dates.push('Fri, 02 Oct 2020 00:00:00 +0000');
        dates.push('Tue, 29 Sep 2020 00:00:00 +0000');
        dates.push('Fri, 18 Sep 2020 00:00:00 +0000');
        dates.push('Mon, 31 Aug 2020 00:00:00 +0000');
        dates.push('Fri, 14 Aug 2020 00:00:00 +0000');
        dates.push('Tue, 04 Aug 2020 00:00:00 +0000');
        dates.push('Tue, 28 Jul 2020 00:00:00 +0000');
        dates.push('Tue, 21 Jul 2020 00:00:00 +0000');
        dates.push('Sat, 18 Jul 2020 00:00:00 +0000');
        dates.push('Sat, 04 Jul 2020 00:00:00 +0000');
        dates.push('Mon, 29 Jun 2020 00:00:00 +0000');
        dates.push('Tue, 23 Jun 2020 00:00:00 +0000');
        dates.push('Mon, 15 Jun 2020 00:00:00 +0000');
        dates.push('Sat, 13 Jun 2020 00:00:00 +0000');
        dates.push('Mon, 01 Jun 2020 00:00:00 +0000');
        dates.push('Mon, 01 Jun 2020 00:00:00 +0000');
        dates.push('Mon, 13 Apr 2020 00:00:00 +0000');
        dates.push('Mon, 30 Mar 2020 00:00:00 +0000');
        dates.push('Wed, 18 Mar 2020 00:00:00 +0000');
        dates.push('Wed, 08 Jan 2020 00:00:00 +0000');
        dates.push('Mon, 06 Jan 2020 00:00:00 +0000');
        dates.push('Tue, 24 Dec 2019 00:00:00 +0000');
        dates.push('Mon, 02 Dec 2019 00:00:00 +0000');
        dates.push('Mon, 25 Nov 2019 00:00:00 +0000');
        dates.push('Tue, 05 Nov 2019 00:00:00 +0000');
        dates.push('Tue, 17 Sep 2019 00:00:00 +0000');
        dates.push('Tue, 27 Aug 2019 00:00:00 +0000');
        dates.push('Mon, 01 Jul 2019 00:00:00 +0000');
        dates.push('Fri, 14 Jun 2019 00:00:00 +0000');
        dates.push('Mon, 22 Apr 2019 00:00:00 +0000');
        dates.push('Thu, 11 Apr 2019 00:00:00 +0000');
        dates.push('Fri, 22 Mar 2019 00:00:00 +0000');
        dates.push('Fri, 22 Mar 2019 00:00:00 +0000');
        dates.push('Mon, 18 Mar 2019 00:00:00 +0000');
        dates.push('Mon, 18 Mar 2019 00:00:00 +0000');
        dates.push('Fri, 08 Mar 2019 00:00:00 +0000');
        dates.push('Thu, 28 Feb 2019 00:00:00 +0000');
        dates.push('Sat, 16 Feb 2019 00:00:00 +0000');
        dates.push('Sat, 09 Feb 2019 00:00:00 +0000');
        dates.push('Mon, 04 Feb 2019 00:00:00 +0000');
        dates.push('Mon, 04 Feb 2019 00:00:00 +0000');
        dates.push('Thu, 17 Jan 2019 00:00:00 +0000');
        dates.push('Thu, 10 Jan 2019 00:00:00 +0000');
        dates.push('Thu, 03 Jan 2019 00:00:00 +0000');
        dates.push('Tue, 25 Dec 2018 00:00:00 +0000');
        dates.push('Fri, 21 Dec 2018 00:00:00 +0000');
        dates.push('Fri, 23 Nov 2018 00:00:00 +0000');
        dates.push('Wed, 21 Nov 2018 00:00:00 +0000');
        dates.push('Wed, 07 Nov 2018 00:00:00 +0000');
        dates.push('Sun, 07 Oct 2018 00:00:00 +0000');
        dates.push('Fri, 05 Oct 2018 00:00:00 +0000');
        dates.push('Thu, 04 Oct 2018 00:00:00 +0000');
        dates.push('Thu, 27 Sep 2018 00:00:00 +0000');
        dates.push('Wed, 26 Sep 2018 00:00:00 +0000');
        dates.push('Mon, 17 Sep 2018 00:00:00 +0000');
        dates.push('Mon, 17 Sep 2018 00:00:00 +0000');
        dates.push('Tue, 14 Aug 2018 00:00:00 +0000');
        dates.push('Fri, 10 Aug 2018 00:00:00 +0000');
        dates.push('Wed, 01 Aug 2018 00:00:00 +0000');
        dates.push('Thu, 26 Jul 2018 00:00:00 +0000');
        dates.push('Mon, 23 Jul 2018 00:00:00 +0000');
        dates.push('Wed, 18 Jul 2018 00:00:00 +0000');
        dates.push('Tue, 26 Jun 2018 00:00:00 +0000');
        dates.push('Tue, 19 Jun 2018 00:00:00 +0000');
        dates.push('Mon, 04 Jun 2018 00:00:00 +0000');
        dates.push('Mon, 16 Apr 2018 00:00:00 +0000');
        dates.push('Tue, 27 Feb 2018 00:00:00 +0000');
        dates.push('Mon, 26 Feb 2018 00:00:00 +0000');
        dates.push('Fri, 02 Feb 2018 00:00:00 +0000');
        dates.push('Mon, 29 Jan 2018 00:00:00 +0000');
        dates.push('Sat, 30 Dec 2017 00:00:00 +0000');
        dates.push('Wed, 20 Dec 2017 00:00:00 +0000');
        dates.push('Mon, 18 Dec 2017 00:00:00 +0000');
        dates.push('Mon, 04 Dec 2017 00:00:00 +0000');
        dates.push('Mon, 27 Nov 2017 00:00:00 +0000');
        dates.push('Tue, 21 Nov 2017 00:00:00 +0000');
        dates.push('Mon, 20 Nov 2017 00:00:00 +0000');
        dates.push('Fri, 10 Nov 2017 00:00:00 +0000');
        dates.push('Thu, 09 Nov 2017 00:00:00 +0000');
        dates.push('Tue, 31 Oct 2017 00:00:00 +0000');
        dates.push('Mon, 30 Oct 2017 00:00:00 +0000');
        dates.push('Thu, 19 Oct 2017 00:00:00 +0000');
        dates.push('Wed, 18 Oct 2017 00:00:00 +0000');
        dates.push('Mon, 16 Oct 2017 00:00:00 +0000');
        dates.push('Tue, 10 Oct 2017 00:00:00 +0000');
        dates.push('Wed, 27 Sep 2017 00:00:00 +0000');
        dates.push('Mon, 25 Sep 2017 00:00:00 +0000');
        dates.push('Fri, 22 Sep 2017 00:00:00 +0000');
        dates.push('Fri, 08 Sep 2017 00:00:00 +0000');
        dates.push('Tue, 05 Sep 2017 00:00:00 +0000');
        dates.push('Tue, 29 Aug 2017 00:00:00 +0000');
        dates.push('Fri, 12 May 2017 00:00:00 +0000');
        dates.push('Thu, 04 May 2017 00:00:00 +0000');
        dates.push('Thu, 04 May 2017 00:00:00 +0000');
        dates.push('Mon, 01 May 2017 00:00:00 +0000');
        dates.push('Fri, 28 Apr 2017 00:00:00 +0000');
        dates.push('Wed, 26 Apr 2017 00:00:00 +0000');
        dates.push('Wed, 05 Apr 2017 00:00:00 +0000');
        dates.push('Thu, 30 Mar 2017 00:00:00 +0000');
        dates.push('Tue, 07 Mar 2017 00:00:00 +0000');
        dates.push('Mon, 13 Feb 2017 00:00:00 +0000');
        dates.push('Wed, 01 Feb 2017 00:00:00 +0000');
        dates.push('Fri, 27 Jan 2017 00:00:00 +0000');
        dates.push('Mon, 23 Jan 2017 00:00:00 +0000');
        dates.push('Thu, 05 Jan 2017 00:00:00 +0000');
        dates.push('Mon, 12 Dec 2016 00:00:00 +0000');
        dates.push('Wed, 07 Dec 2016 00:00:00 +0000');
        dates.push('Fri, 02 Dec 2016 00:00:00 +0000');
        dates.push('Mon, 07 Nov 2016 00:00:00 +0000');
        dates.push('Tue, 25 Oct 2016 00:00:00 +0000');
        dates.push('Mon, 24 Oct 2016 00:00:00 +0000');
        dates.push('Mon, 24 Oct 2016 00:00:00 +0000');
        dates.push('Mon, 24 Oct 2016 00:00:00 +0000');
        dates.push('Tue, 04 Oct 2016 00:00:00 +0000');
        dates.push('Sat, 01 Oct 2016 00:00:00 +0000');
        dates.push('Wed, 14 Sep 2016 00:00:00 +0000');
        dates.push('Mon, 22 Aug 2016 00:00:00 +0000');
        dates.push('Fri, 12 Aug 2016 00:00:00 +0000');
        dates.push('Wed, 27 Jul 2016 00:00:00 +0000');
        dates.push('Wed, 13 Jul 2016 00:00:00 +0000');
        dates.push('Wed, 13 Jul 2016 00:00:00 +0000');
        dates.push('Mon, 11 Jul 2016 00:00:00 +0000');
        dates.push('Sat, 02 Jul 2016 00:00:00 +0000');
        dates.push('Thu, 23 Jun 2016 00:00:00 +0000');
        dates.push('Tue, 14 Jun 2016 00:00:00 +0000');
        dates.push('Fri, 03 Jun 2016 00:00:00 +0000');
        dates.push('Tue, 24 May 2016 00:00:00 +0000');
        dates.push('Wed, 27 Apr 2016 00:00:00 +0000');
        dates.push('Wed, 20 Apr 2016 00:00:00 +0000');
        dates.push('Tue, 05 Apr 2016 00:00:00 +0000');
        dates.push('Mon, 04 Apr 2016 00:00:00 +0000');
        dates.push('Mon, 04 Apr 2016 00:00:00 +0000');
        dates.push('Wed, 23 Mar 2016 00:00:00 +0000');
        dates.push('Tue, 22 Mar 2016 00:00:00 +0000');
        dates.push('Sat, 12 Mar 2016 00:00:00 +0000');
        dates.push('Fri, 04 Mar 2016 00:00:00 +0000');
        dates.push('Thu, 03 Mar 2016 00:00:00 +0000');
        dates.push('Wed, 02 Mar 2016 00:00:00 +0000');
        dates.push('Wed, 02 Mar 2016 00:00:00 +0000');
        dates.push('Tue, 16 Feb 2016 00:00:00 +0000');
        dates.push('Tue, 09 Feb 2016 00:00:00 +0000');
        dates.push('Thu, 04 Feb 2016 00:00:00 +0000');
        dates.push('Thu, 04 Feb 2016 00:00:00 +0000');
        dates.push('Thu, 28 Jan 2016 00:00:00 +0000');
        dates.push('Sun, 24 Jan 2016 00:00:00 +0000');
        dates.push('Tue, 19 Jan 2016 00:00:00 +0000');
        dates.push('Mon, 18 Jan 2016 00:00:00 +0000');
        dates.push('Fri, 08 Jan 2016 00:00:00 +0000');
        dates.push('Fri, 08 Jan 2016 00:00:00 +0000');
        dates.push('Fri, 18 Dec 2015 00:00:00 +0000');
        dates.push('Mon, 14 Dec 2015 00:00:00 +0000');
        dates.push('Tue, 08 Dec 2015 00:00:00 +0000');
        dates.push('Tue, 08 Dec 2015 00:00:00 +0000');
        dates.push('Tue, 24 Nov 2015 00:00:00 +0000');
        dates.push('Tue, 24 Nov 2015 00:00:00 +0000');
        dates.push('Fri, 20 Nov 2015 00:00:00 +0000');
        dates.push('Wed, 11 Nov 2015 00:00:00 +0000');
        dates.push('Mon, 09 Nov 2015 00:00:00 +0000');
        dates.push('Fri, 06 Nov 2015 00:00:00 +0000');
        dates.push('Mon, 02 Nov 2015 00:00:00 +0000');
        dates.push('Tue, 22 Sep 2015 00:00:00 +0000');
        dates.push('Mon, 21 Sep 2015 00:00:00 +0000');
        dates.push('Wed, 09 Sep 2015 00:00:00 +0000');
        dates.push('Tue, 08 Sep 2015 00:00:00 +0000');
        dates.push('Sat, 05 Sep 2015 00:00:00 +0000');
        dates.push('Tue, 18 Aug 2015 00:00:00 +0000');
        dates.push('Thu, 13 Aug 2015 00:00:00 +0000');
        dates.push('Tue, 04 Aug 2015 00:00:00 +0000');
        dates.push('Tue, 21 Jul 2015 00:00:00 +0000');
        dates.push('Mon, 22 Jun 2015 00:00:00 +0000');
        dates.push('Wed, 10 Jun 2015 00:00:00 +0000');
        dates.push('Thu, 04 Jun 2015 00:00:00 +0000');
        dates.push('Wed, 03 Jun 2015 00:00:00 +0000');
        dates.push('Tue, 26 May 2015 00:00:00 +0000');
        dates.push('Tue, 21 Apr 2015 00:00:00 +0000');
        dates.push('Tue, 21 Apr 2015 00:00:00 +0000');
        dates.push('Wed, 15 Apr 2015 00:00:00 +0000');
        dates.push('Mon, 02 Mar 2015 00:00:00 +0000');
        dates.push('Fri, 27 Feb 2015 00:00:00 +0000');
        dates.push('Wed, 25 Feb 2015 00:00:00 +0000');
        dates.push('Tue, 10 Feb 2015 00:00:00 +0000');
        dates.push('Fri, 06 Feb 2015 00:00:00 +0000');
        dates.push('Fri, 09 Jan 2015 00:00:00 +0000');
        dates.push('Tue, 09 Dec 2014 00:00:00 +0000');
        dates.push('Tue, 25 Nov 2014 00:00:00 +0000');
        dates.push('Tue, 18 Nov 2014 00:00:00 +0000');
        dates.push('Thu, 13 Nov 2014 00:00:00 +0000');
        dates.push('Tue, 11 Nov 2014 00:00:00 +0000');
        dates.push('Thu, 06 Nov 2014 00:00:00 +0000');
        dates.push('Thu, 06 Nov 2014 00:00:00 +0000');
        dates.push('Fri, 17 Oct 2014 00:00:00 +0000');
        dates.push('Thu, 16 Oct 2014 00:00:00 +0000');
        dates.push('Mon, 22 Sep 2014 00:00:00 +0000');
        dates.push('Mon, 08 Sep 2014 00:00:00 +0000');
        dates.push('Wed, 13 Aug 2014 00:00:00 +0000');
        dates.push('Mon, 11 Aug 2014 00:00:00 +0000');
        dates.push('Wed, 06 Aug 2014 00:00:00 +0000');
        dates.push('Mon, 04 Aug 2014 00:00:00 +0000');
        dates.push('Thu, 10 Jul 2014 00:00:00 +0000');
        dates.push('Tue, 08 Jul 2014 00:00:00 +0000');
        dates.push('Thu, 12 Jun 2014 00:00:00 +0000');
        dates.push('Fri, 23 May 2014 00:00:00 +0000');
        dates.push('Wed, 23 Apr 2014 00:00:00 +0000');
        dates.push('Wed, 09 Apr 2014 00:00:00 +0000');
        dates.push('Wed, 05 Mar 2014 00:00:00 +0000');
        dates.push('Mon, 03 Mar 2014 00:00:00 +0000');
        dates.push('Thu, 20 Feb 2014 00:00:00 +0000');
        dates.push('Mon, 10 Feb 2014 00:00:00 +0000');
        dates.push('Fri, 31 Jan 2014 00:00:00 +0000');
        dates.push('Thu, 02 Jan 2014 00:00:00 +0000');
        dates.push('Mon, 16 Dec 2013 00:00:00 +0000');
        dates.push('Fri, 06 Dec 2013 00:00:00 +0000');
        dates.push('Wed, 04 Dec 2013 00:00:00 +0000');
        dates.push('Fri, 22 Nov 2013 00:00:00 +0000');
        dates.push('Fri, 15 Nov 2013 00:00:00 +0000');
        dates.push('Wed, 13 Nov 2013 00:00:00 +0000');
        dates.push('Wed, 06 Nov 2013 00:00:00 +0000');
        dates.push('Mon, 28 Oct 2013 00:00:00 +0000');
        dates.push('Mon, 21 Oct 2013 00:00:00 +0000');
        dates.push('Thu, 10 Oct 2013 00:00:00 +0000');
        dates.push('Wed, 02 Oct 2013 00:00:00 +0000');
        dates.push('Tue, 01 Oct 2013 00:00:00 +0000');
        dates.push('Fri, 13 Sep 2013 00:00:00 +0000');
        dates.push('Fri, 06 Sep 2013 00:00:00 +0000');
        dates.push('Mon, 12 Aug 2013 20:45:04 +0000');
        dates.push('Tue, 23 Jul 2013 18:45:04 +0000');
        dates.push('Thu, 11 Jul 2013 20:45:04 +0000');
    }
    var new_blog_count = 0;
    for(var i = 0; i < dates.length ; i++) {
        var blog_time = new Date(dates[i]).getTime();
        if(blog_time > lastVisit) {
            new_blog_count++;
        }
        else {
            break;
        }
    }
    return new_blog_count;
}

$(document).ready(function () {

    // code for blog badge
    $('.adorner').each(function(i) {
        var blog_time = new Date($(this).attr('blogTime')).getTime();
        if(lastVisit != "" && blog_time > lastVisit) {
            this.style.backgroundColor = "#3992ab";
        }
    });

    var new_blog_count = checkNotification();
    if (new_blog_count) {
        document.getElementById("new_blog_count").innerHTML = new_blog_count;
    }

    var copyButtons = document.getElementsByClassName("btn-copy");
    for (var i = 0; i < copyButtons.length; i++) {
        copyButtons[i].addEventListener("click", function (clickEvent) {
            var id = clickEvent.target.getAttribute("data-clipboard-target");

            var range = document.createRange();
            range.selectNode(document.getElementById(id));

            var select = window.getSelection();
            select.removeAllRanges();
            select.addRange(range);

            try {
                document.execCommand("copy");
            } catch (e) {
                // Silently fail for now
            }

            select.removeAllRanges();
        });
    }

    // Smooth scroll to anchor links
    $("a[href^='#']").on('click', function(e) {

        // scroll only if there is a hash in the link's href
        var hash = this.hash;
        if (hash) {

            // prevent default anchor click behavior
            e.preventDefault();

            // get the fragment without the "#" symbol because location.hash
            // is returned with it
            var targetName = hash.slice(1);

            // escape single quotes in target name because
            // we use them in the selector to find matching targets
            targetName.replace(/'/g, "\\\'").replace(/"/g, "\\\"");

            // check if the target exists by looking at either ID or name
            // NOTE:
            //      we're not using "# + targetName" to select by ID
            //      because the ID might contain special characters that
            //      are annoying to escape
            var targetSelector = "*[id='" + targetName + "'], *[name='" + targetName + "']";

            var matchingTargets = $(targetSelector);
            if (matchingTargets.length < 1) {
                return;
            }
            if (matchingTargets.length > 1) {
                console.warn("found more than one anchor to go to; will go to the first one");
            }

            // get resulting scroll height
            var matchingTarget = matchingTargets.first();
            var scrollHeight   = matchingTarget.offset().top;

            // add an extra offset (to account for the fixed page header),
            // but only if there is no "fragment-anchor" class (because it
            // already has an offset of its own for this purpose)
            if (!matchingTarget.hasClass("fragment-anchor")) {
                scrollHeight -= 50;
            }

            // animate
            $('html, body').animate(
                {scrollTop: scrollHeight},
                300,
                function () {
                    // when done, add hash to url (default click behaviour)
                    window.location.hash = hash;
                }
            );
        }
    });
});
