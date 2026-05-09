(function () {
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var template = document.getElementById("result-template");
  if (!input || !results || !template) return;

  var isZh = document.documentElement.lang.startsWith("zh");
  var defaultMsg = isZh
    ? "请在上方输入关键词搜索"
    : "Enter keywords above to search";
  var noResultsMsg = isZh
    ? "没有找到相关文章"
    : "No matching articles found";

  var dataEl = document.getElementById("search-data");
  if (!dataEl) return;
  var searchData = JSON.parse(dataEl.textContent || "[]");

  var fuse = new Fuse(searchData, {
    keys: ["title", "description", "tags"],
    threshold: 0.3,
    includeScore: true,
  });

  input.addEventListener("input", function () {
    var query = input.value.trim();
    if (!query) {
      results.innerHTML =
        '<p class="text-stone-400 text-center py-8">' +
        defaultMsg +
        "</p>";
      return;
    }

    var found = fuse.search(query).slice(0, 20);
    if (found.length === 0) {
      results.innerHTML =
        '<p class="text-stone-400 text-center py-8">' +
        noResultsMsg +
        "</p>";
      return;
    }

    results.innerHTML = "";
    found.forEach(function (r) {
      var item = r.item;
      var clone = template.content.cloneNode(true);
      clone.querySelector(".result-title").textContent = item.title;
      clone.querySelector(".result-desc").textContent = item.description;
      clone.querySelector("a").href = item.href;
      results.appendChild(clone);
    });
  });
})();
