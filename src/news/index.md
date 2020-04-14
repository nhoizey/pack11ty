---
title: News
navorder: 2
---

These are latest news from [Pack11ty]{.pack11ty} :

{% for entry in collections.news %}

  <article>
    <h2><a href="{{ entry.url }}">{{ entry.data.title }}</a> ({{ entry.date | date("Do MMMM YYYY") }})</h2>
    {{ entry.templateContent | safe }}
  </article>
{% endfor %}
