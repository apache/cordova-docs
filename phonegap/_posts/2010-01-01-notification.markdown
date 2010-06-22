---
layout: default
title: Notification
objects: ['alert', 'vibrate', 'beep']
---
{% for object in page.objects %}
* ## [notification.{{object}}](#device.{{object}}) ##
{% endfor %}

{: #notification.alert }{% include phonegap/notification.alert.markdown %}