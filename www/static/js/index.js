---
---
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
        {% for post in site.posts %}
        dates.push('{{ post.date | date_to_rfc822 }}');{% endfor %}
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
