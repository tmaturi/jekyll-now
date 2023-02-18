---
---
var index;

function search() {
  var query = document.getElementById('search-box').value;
  var results = index.search(query);
  var resultHtml = '';
  for (var i = 0; i < results.length; i++) {
    var item = results[i].item;
    resultHtml += '<h3>' + item.title + '</h3>' +
                  '<p>' + item.author + ' (' + item.year + ')</p>';
    if (item.link) {
      resultHtml += '<p><a href="' + item.link + '">Link</a></p>';
    }
    if (item.pdf) {
      resultHtml += '<p><a href="' + item.pdf + '">PDF</a></p>';
    }
    if (item.code) {
      resultHtml += '<p><a href="' + item.code + '">R Code</a></p>';
    }
  }
  document.getElementById('search-results').innerHTML = resultHtml;
}

function initializeIndex() {
  index = lunr(function() {
    this.field('title');
    this.field('author');
    this.field('keywords');
    this.ref('id');
  });

  {% assign publications = site.data.publications %}
  {% for pub in publications %}
    var item = {
      id: '{{ pub.id }}',
      title: '{{ pub.title }}',
      author: '{{ pub.author }}',
      year: '{{ pub.year }}',
      link: '{{ pub.link }}',
      pdf: '{{ pub.pdf }}',
      code: '{{ pub.code }}',
      keywords: '{{ pub.keywords }}'
    };
    index.add(item);
  {% endfor %}
}

initializeIndex();
