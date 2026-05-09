// Climbing map - Leaflet + Gaode tiles
(function () {
  const mapEl = document.getElementById("crag-map");
  if (!mapEl) return;

  const isZh = document.documentElement.lang.startsWith("zh");

  // Fix Leaflet default icon paths
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  const map = L.map("crag-map").setView([32.5, 108], 5);

  L.tileLayer(
    "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    {
      subdomains: ["1", "2", "3", "4"],
      attribution: "&copy; Gaode",
      maxZoom: 18,
    }
  ).addTo(map);

  const gymIcon = L.divIcon({
    className: "custom-marker",
    html: '<div style="background:#e85d2c;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)">&#x1F3E2;</div>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });

  const outdoorIcon = L.divIcon({
    className: "custom-marker",
    html: '<div style="background:#2d5a3d;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)">&#x26F0;</div>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  });

  const markers = [];

  var cragDataEl = document.getElementById("crag-data");
  if (!cragDataEl) return;
  var cragData = JSON.parse(cragDataEl.textContent || "[]");

  cragData.forEach(function (crag) {
    var gcj = gcoord.transform(
      [crag.lng, crag.lat],
      gcoord.WGS84,
      gcoord.GCJ02
    );
    var icon = crag.type === "gym" ? gymIcon : outdoorIcon;
    var name = isZh ? crag.name : crag.nameEn;
    var desc = isZh
      ? crag.description || ""
      : crag.descriptionEn || crag.description || "";
    var typeLabel =
      crag.type === "gym"
        ? isZh
          ? "室内岩馆"
          : "Indoor Gym"
        : isZh
          ? "户外岩场"
          : "Outdoor Crag";

    var marker = L.marker([gcj[1], gcj[0]], { icon: icon })
      .addTo(map)
      .bindPopup(
        '<div style="min-width:200px">' +
          '<h3 style="font-weight:600;font-size:14px;margin-bottom:4px">' +
          name +
          "</h3>" +
          '<span style="display:inline-block;background:' +
          (crag.type === "gym" ? "#e85d2c" : "#2d5a3d") +
          ";color:white;padding:1px 8px;border-radius:10px;font-size:11px;margin-bottom:4px\">" +
          typeLabel +
          "</span>" +
          (crag.difficulty
            ? '<p style="font-size:12px;color:#666;margin:4px 0">' +
              (isZh ? "难度：" : "Grades: ") +
              crag.difficulty +
              "</p>"
            : "") +
          (desc
            ? '<p style="font-size:12px;color:#666;margin:4px 0">' +
              desc +
              "</p>"
            : "") +
          "</div>"
      );

    marker._cragType = crag.type;
    markers.push(marker);
  });

  document.querySelectorAll(".map-filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".map-filter-btn").forEach(function (b) {
        b.classList.remove("bg-primary", "text-white");
        b.classList.add("bg-stone-200", "text-stone-700");
      });
      btn.classList.add("bg-primary", "text-white");
      btn.classList.remove("bg-stone-200", "text-stone-700");

      var filter = btn.dataset.filter;
      markers.forEach(function (m) {
        if (filter === "all" || m._cragType === filter) {
          m.addTo(map);
        } else {
          m.remove();
        }
      });
    });
  });
})();
