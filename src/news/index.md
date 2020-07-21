---
title: News
nav:
  order: 3
---

These are latest news from [Pack11ty]{.pack11ty} :

<div class="stack">

{% for entry in collections.news %}

  <article class="news">
    <h2 class="news__title"><a href="{{ entry.url }}">{{ entry.data.title }}</a></h2>
    <p class="news__meta">{{ entry.date | date("Do MMMM YYYY") }}</p>
  </article>
{% endfor %}

</div>
