## Welcome to SXZ++ V1.0.0

本开源项目旨在让被迫留校的锡监学子能有应该更加快乐的平板使用体验，同时帮助中育科教寻找并修复BUG

### Sxz Nav

- [SxzNav by KuzuSy](/Nav/)
- [SxzNav by litluo](/litluo/)

### Future Project

- SXZ IDE
- SXZ Cloud Computer V1.0.1
- SXZ EpudReader
- SXZ MediaPlayer

### Update Log

#### V1.0.0 2022.06.04

- 启动此项目
- 上传KuzuSy和litluo的SxzNav


{% for post in paginator.posts %}
<div class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
        <h2 class="post-title">
            {{ post.title }}
        </h2>
        {% if post.subtitle %}
        <h3 class="post-subtitle">
            {{ post.subtitle }}
        </h3>
        {% endif %}
        <div class="post-content-preview">
            {{ post.content | strip_html | truncate:200 }}
        </div>
    </a>
    <p class="post-meta">
        Posted by {% if post.author %}{{ post.author }}{% else %}{{ site.title }}{% endif %} on {{ post.date | date: "%B %-d, %Y" }}
    </p>
</div>
<hr>
{% endfor %}
