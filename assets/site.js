/* Prototype Muslim Hands France v3 : en-tête, pied de page, icônes, carte, données structurées, fiche SEO.
   Chaque page déclare window.PAGE = { path, title, meta, h1, type, breadcrumb, faq, donate, changes, extraJsonLd }. */
(function () {
  const P = window.PAGE || {};
  const ORIGIN = "https://muslimhands.fr";

  // ---- icônes (sprite SVG inline, traits fins) ----
  const ICONS = {
    drop: '<path class="tone" d="M12 3.5c3.5 4.2 6 7.4 6 10.5a6 6 0 01-12 0c0-3.1 2.5-6.3 6-10.5z"/><path d="M12 3.5c3.5 4.2 6 7.4 6 10.5a6 6 0 01-12 0c0-3.1 2.5-6.3 6-10.5z"/><path d="M9.5 14a2.5 2.5 0 002 2.4"/>',
    well: '<path class="tone" d="M5 16h14v4H5z"/><path d="M4.5 9.5L12 4.5l7.5 5"/><path d="M6.5 9.5V16M17.5 9.5V16"/><path d="M5 16h14v4H5z"/><path d="M12 4.5V8"/><path d="M9.8 8h4.4l-.6 4h-3.2z"/>',
    tap: '<path d="M3 10.5h9.5a4.5 4.5 0 014.5 4.5v1.5h-4V15"/><path d="M8.5 10.5V7.5"/><path d="M5.5 7.5h6"/><path d="M3 10.5v3"/><path class="tone" d="M15 21c0-1.4 1.2-2.3 1.5-3.6.3 1.3 1.5 2.2 1.5 3.6a1.5 1.5 0 01-3 0z"/><path d="M15 21c0-1.4 1.2-2.3 1.5-3.6.3 1.3 1.5 2.2 1.5 3.6a1.5 1.5 0 01-3 0z"/>',
    pump: '<path class="tone" d="M9 20v-8h6v8z"/><path d="M5 20.5h14"/><path d="M9 20v-8h6v8"/><path d="M12 12V6.5"/><path d="M8 6.5h8.5l3-2.5"/><path d="M15 14h3v4"/>',
    jerrycan: '<path class="tone" d="M6 9h12v9a2 2 0 01-2 2H8a2 2 0 01-2-2z"/><path d="M6 9h12v9a2 2 0 01-2 2H8a2 2 0 01-2-2V9z"/><path d="M8.5 9V5.5h4V9"/><path d="M14.5 5.5h2V9"/><path d="M9 13h6"/>',
    soap: '<path class="tone" d="M4 10h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2z"/><rect x="4" y="10" width="16" height="10" rx="2.5"/><path d="M8.5 10V8a2 2 0 012-2h1.5"/><circle cx="16.5" cy="4.5" r="1.3"/><circle cx="19.5" cy="8" r="1"/>',
    bread: '<path class="tone" d="M5 10.5c0-3 3-5.5 7-5.5s7 2.5 7 5.5V18a1 1 0 01-1 1H6a1 1 0 01-1-1z"/><path d="M5 10.5c0-3 3-5.5 7-5.5s7 2.5 7 5.5V18a1 1 0 01-1 1H6a1 1 0 01-1-1v-7.5z"/><path d="M9 8.5l1.2 2.5M13 8.5l1.2 2.5"/>',
    parcel: '<path class="tone" d="M3.5 8l8.5-4 8.5 4-8.5 4z"/><path d="M3.5 8l8.5-4 8.5 4v9l-8.5 4-8.5-4V8z"/><path d="M3.5 8l8.5 4 8.5-4"/><path d="M12 12v9"/><path d="M7.5 6l8.5 4"/>',
    meal: '<path class="tone" d="M3.5 12h17a8.5 8.5 0 01-17 0z"/><path d="M3.5 12h17a8.5 8.5 0 01-17 0z"/><path d="M8 20.5h8"/><path d="M9.5 8.5c0-1.5 1-1.5 1-3M13.5 8.5c0-1.5 1-1.5 1-3"/>',
    wheat: '<path d="M12 21.5V9"/><path class="tone" d="M12 9c-3.2 0-5.2-2-5.2-5.2 3.2 0 5.2 2 5.2 5.2zM12 9c3.2 0 5.2-2 5.2-5.2-3.2 0-5.2 2-5.2 5.2zM12 14.5c-3.2 0-5.2-2-5.2-5.2 3.2 0 5.2 2 5.2 5.2zM12 14.5c3.2 0 5.2-2 5.2-5.2-3.2 0-5.2 2-5.2 5.2z"/><path d="M12 9c-3.2 0-5.2-2-5.2-5.2 3.2 0 5.2 2 5.2 5.2z"/><path d="M12 9c3.2 0 5.2-2 5.2-5.2-3.2 0-5.2 2-5.2 5.2z"/><path d="M12 14.5c-3.2 0-5.2-2-5.2-5.2 3.2 0 5.2 2 5.2 5.2z"/><path d="M12 14.5c3.2 0 5.2-2 5.2-5.2-3.2 0-5.2 2-5.2 5.2z"/>',
    palm: '<path d="M12 21.5v-9.5"/><path class="tone" d="M12 12c-1-4.2-4.2-6.3-8.5-5.3 2.2 3.2 5.2 4.4 8.5 5.3zM12 12c1-4.2 4.2-6.3 8.5-5.3-2.2 3.2-5.2 4.4-8.5 5.3z"/><path d="M12 12c-1-4.2-4.2-6.3-8.5-5.3 2.2 3.2 5.2 4.4 8.5 5.3z"/><path d="M12 12c1-4.2 4.2-6.3 8.5-5.3-2.2 3.2-5.2 4.4-8.5 5.3z"/><path d="M12 12c-2.8-2.2-3-6-1-8.5 2 2.5 2.2 6.3 1 8.5z"/><circle cx="12" cy="14.5" r="1" class="fill"/>',
    sheep: '<path class="tone" d="M7 12a6 6 0 1112 0 4.5 4.5 0 01-6 4.2A6 6 0 017 12z"/><ellipse cx="13" cy="12" rx="6" ry="4.5"/><circle cx="6" cy="10.5" r="2.5"/><path d="M10 16.5v3M16 16.5v3"/><path d="M4.6 8.6l1-1.6M7.4 8.6l-1-1.6"/>',
    child: '<circle class="tone" cx="12" cy="8" r="3.8"/><circle cx="12" cy="8" r="3.8"/><path d="M6 20.5v-2a6 6 0 0112 0v2"/><path d="M9.5 20.5h5"/>',
    orphan: '<path class="tone" d="M12 5.2l-.9-.9a2.5 2.5 0 00-3.5 3.5L12 12.2l4.4-4.4a2.5 2.5 0 00-3.5-3.5z"/><path d="M12 5.2l-.9-.9a2.5 2.5 0 00-3.5 3.5L12 12.2l4.4-4.4a2.5 2.5 0 00-3.5-3.5l-.9.9z"/><path d="M3 15v6"/><path d="M3 19.5h12.5a2 2 0 00.4-3.9l-5-1.2a3 3 0 00-2.2.3L7 15.5"/><path d="M11 17.5h2.5"/>',
    family: '<circle cx="8" cy="7" r="2.6"/><circle cx="16" cy="7" r="2.6"/><circle class="tone" cx="12" cy="13.5" r="2.2"/><circle cx="12" cy="13.5" r="2.2"/><path d="M2.5 19.5v-1.5a4 4 0 014-4H8M21.5 19.5v-1.5a4 4 0 00-4-4H16"/><path d="M8.5 21v-1a3.5 3.5 0 017 0v1"/>',
    school: '<path class="tone" d="M3.5 20V10.5L12 5.5l8.5 5V20z"/><path d="M3.5 20V10.5L12 5.5l8.5 5V20"/><path d="M2.5 20h19"/><path d="M9.5 20v-5h5v5"/><path d="M12 5.5V2.5h3.5l-1 1.3 1 1.2H12"/>',
    book: '<path class="tone" d="M4.5 5.5A2 2 0 016.5 3.5H19.5v15H6.5a2 2 0 00-2 2z"/><path d="M4.5 5.5A2 2 0 016.5 3.5H19.5v15H6.5a2 2 0 00-2 2V5.5z"/><path d="M4.5 19.5A2 2 0 016.5 17.5H19.5"/><path d="M9.5 8h6"/>',
    graduation: '<path class="tone" d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M2.5 9.5L12 5l9.5 4.5L12 14l-9.5-4.5z"/><path d="M6.5 11.5v4.3c0 1.6 2.5 3.2 5.5 3.2s5.5-1.6 5.5-3.2v-4.3"/><path d="M21.5 9.5v5.5"/>',
    pencil: '<path class="tone" d="M14.5 6l3.5 3.5L8 19.5l-4 1 1-4z"/><path d="M4 20.5l1-4.5L16.5 4.5a2.1 2.1 0 013 3L8 19.5l-4 1z"/><path d="M14.5 6.5l3 3"/>',
    toy: '<circle class="tone" cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M3.5 12h17"/><circle cx="12" cy="12" r="2.5" class="fill"/>',
    health: '<path class="tone" d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z"/><path d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6v-6z"/>',
    stethoscope: '<path d="M5 4.5v5.5a4 4 0 008 0V4.5"/><path d="M4.5 4.5h1M12.5 4.5h1"/><path d="M9 14v2.5a4 4 0 008 0V14"/><circle class="tone" cx="17" cy="11.5" r="2.5"/><circle cx="17" cy="11.5" r="2.5"/>',
    ambulance: '<path class="tone" d="M3 7.5a1 1 0 011-1h9v10H3z"/><path d="M3 16.5V7.5a1 1 0 011-1h9v10"/><path d="M13 10h4l3 3.5v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/><path d="M8 9.5v4M6 11.5h4"/>',
    clinic: '<path class="tone" d="M4.5 20V6a1 1 0 011-1h13a1 1 0 011 1v14z"/><path d="M4.5 20V6a1 1 0 011-1h13a1 1 0 011 1v14"/><path d="M3 20h18"/><path d="M12 8v5M9.5 10.5h5"/><path d="M10 20v-3.5h4V20"/>',
    eye: '<path class="tone" d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="3"/>',
    pill: '<rect class="tone" x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M8.5 15.5l7-7"/>',
    shelter: '<path class="tone" d="M3 20L12 5l9 15z"/><path d="M3 20L12 5l9 15H3z"/><path d="M12 20v-7l-3 7M12 13l3 7"/>',
    home: '<path class="tone" d="M5.5 9.5L12 4l6.5 5.5V20h-13z"/><path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>',
    alert: '<path class="tone" d="M12 3.5l9.5 16.5h-19z"/><path d="M12 3.5l9.5 16.5h-19L12 3.5z"/><path d="M12 10v4.5M12 17.5v.3"/>',
    lifebuoy: '<circle class="tone" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M5.6 5.6l3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9"/>',
    snow: '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/><path d="M12 3l-2 2M12 3l2 2M12 21l-2-2M12 21l2-2M3 12l2-2M3 12l2 2M21 12l-2-2M21 12l-2 2"/>',
    coat: '<path class="tone" d="M8 4l4 1.5L16 4l4.5 3-2 3-2-1v11h-9V9l-2 1-2-3z"/><path d="M8 4l4 1.5L16 4l4.5 3-2 3-2-1v11h-9V9l-2 1-2-3L8 4z"/>',
    flame: '<path class="tone" d="M12 3.5c1 3 4.5 4.5 4.5 8.5a4.5 4.5 0 01-9 0c0-2 1-3.2 1.7-4.2.4 1.5 1.3 2.2 2.3 2.7-.9-2.6-.1-5 .5-7z"/><path d="M12 3.5c1 3 4.5 4.5 4.5 8.5a4.5 4.5 0 01-9 0c0-2 1-3.2 1.7-4.2.4 1.5 1.3 2.2 2.3 2.7-.9-2.6-.1-5 .5-7z"/><path d="M4 20.5h16"/>',
    truck: '<path class="tone" d="M2.5 6h12v10h-12z"/><path d="M2.5 6h12v10h-12V6z"/><path d="M14.5 10h4l3 3.5V16h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    heart: '<path class="tone" d="M12 20.5s-8-5-8-11a4.5 4.5 0 018-2.8 4.5 4.5 0 018 2.8c0 6-8 11-8 11z"/><path d="M12 20.5s-8-5-8-11a4.5 4.5 0 018-2.8 4.5 4.5 0 018 2.8c0 6-8 11-8 11z"/>',
    coins: '<ellipse class="tone" cx="12" cy="6.5" rx="7" ry="3"/><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4"/><path d="M5 10.5v4c0 1.7 3.1 3 7 3s7-1.3 7-3v-4"/><path d="M5 14.5v3c0 1.7 3.1 3 7 3s7-1.3 7-3v-3"/>',
    receipt: '<path class="tone" d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    percent: '<path d="M18 6L6 18"/><circle class="tone" cx="7.5" cy="7.5" r="2.5"/><circle cx="7.5" cy="7.5" r="2.5"/><circle class="tone" cx="16.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
    scale: '<path d="M12 3.5v17"/><path d="M8 20.5h8"/><path d="M4 7h16"/><path class="tone" d="M2.5 14a3.5 3.5 0 007 0zM14.5 14a3.5 3.5 0 007 0z"/><path d="M6 7l-3.5 7a3.5 3.5 0 007 0L6 7z"/><path d="M18 7l-3.5 7a3.5 3.5 0 007 0L18 7z"/>',
    calc: '<rect class="tone" x="5" y="3" width="14" height="18" rx="2"/><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 7h7"/><path d="M8.7 11.5h.01M12 11.5h.01M15.3 11.5h.01M8.7 14.8h.01M12 14.8h.01M15.3 14.8h.01M8.7 18h.01M12 18h.01M15.3 18h.01"/>',
    gift: '<path class="tone" d="M3.5 11h17v9h-17z"/><path d="M3.5 11h17v9h-17z"/><path d="M12 8v12"/><path d="M3 8h18v3H3z"/><path d="M12 8c-1-2.5-4-3.5-5-2s1 2.5 5 2zM12 8c1-2.5 4-3.5 5-2s-1 2.5-5 2z"/>',
    repeat: '<path d="M17 2.5l3 3-3 3"/><path d="M4 11V8.5a3 3 0 013-3h13"/><path d="M7 21.5l-3-3 3-3"/><path d="M20 13v2.5a3 3 0 01-3 3H4"/>',
    hand: '<path class="tone" d="M7 11.5V6a1.5 1.5 0 013 0v4.5h3V4.5a1.5 1.5 0 013 0V13l2-2a1.5 1.5 0 012.3 2L17 17.5c-1.5 2.5-3.3 3.5-6 3.5-2.4 0-4.8-1.5-5.8-4.5L4 12.5a1.5 1.5 0 012.7-1.3z"/><path d="M7 11.5V6a1.5 1.5 0 013 0v4.5"/><path d="M10 10V4.5a1.5 1.5 0 013 0V10"/><path d="M13 10V5.5a1.5 1.5 0 013 0V13"/><path d="M16 13l2-2a1.5 1.5 0 012.3 2L17 17.5c-1.5 2.5-3.3 3.5-6 3.5-2.4 0-4.8-1.5-5.8-4.5L4 12.5a1.5 1.5 0 012.7-1.3L7 11.5"/>',
    handshake: '<path class="tone" d="M12 7.5a5.5 5.5 0 010 9 5.5 5.5 0 010-9z"/><circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>',
    moon: '<path class="tone" d="M19.5 15.5A8.5 8.5 0 1110.5 4a7 7 0 009 11.5z"/><path d="M19.5 15.5A8.5 8.5 0 1110.5 4a7 7 0 009 11.5z"/><path d="M17.5 3.5l.6 1.4 1.4.2-1 1 .3 1.4-1.3-.7-1.3.7.3-1.4-1-1 1.4-.2z" class="fill"/>',
    mosque: '<path class="tone" d="M6 20v-7a6 6 0 0112 0v7z"/><path d="M6 20v-7a6 6 0 0112 0v7"/><path d="M2.5 20h19"/><path d="M12 6.5V3.5"/><path d="M10 20v-3.5a2 2 0 014 0V20"/><path d="M3.5 20V9.5l1-2.5 1 2.5V20M18.5 20V9.5l1-2.5 1 2.5V20"/>',
    lantern: '<path d="M9.5 3h5"/><path d="M12 3v2.5"/><path class="tone" d="M8 7.5h8l1 2-1 7.5H8L7 9.5z"/><path d="M8 7.5h8l1 2-1 7.5H8L7 9.5l1-2z"/><path d="M8 17h8v2.5H8z"/><path d="M12 7.5V17"/>',
    star: '<path class="tone" d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8z"/><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 17l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5z"/>',
    calendar: '<rect class="tone" x="3.5" y="5" width="17" height="15.5" rx="2"/><rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17"/><path d="M8 3v4M16 3v4"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01"/>',
    clock: '<circle class="tone" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    sprout: '<path d="M12 21.5v-8.5"/><path class="tone" d="M12 13c0-4-3-6.5-7.5-6.5 0 4.5 3 6.5 7.5 6.5zM12 11c0-4 3-6.5 7.5-6.5 0 4.5-3 6.5-7.5 6.5z"/><path d="M12 13c0-4-3-6.5-7.5-6.5 0 4.5 3 6.5 7.5 6.5z"/><path d="M12 11c0-4 3-6.5 7.5-6.5 0 4.5-3 6.5-7.5 6.5z"/><path d="M7.5 21.5h9"/>',
    tree: '<path class="tone" d="M8.5 16a5 5 0 01-2.5-8.5A5 5 0 0112 3.5a5 5 0 016 4 5 5 0 01-2.5 8.5z"/><path d="M8.5 16a5 5 0 01-2.5-8.5A5 5 0 0112 3.5a5 5 0 016 4 5 5 0 01-2.5 8.5h-7z"/><path d="M12 21v-5"/><path d="M9 21h6"/>',
    sun: '<circle class="tone" cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="4"/><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8"/>',
    briefcase: '<rect class="tone" x="3" y="7" width="18" height="13" rx="2"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7V5a1.5 1.5 0 011.5-1.5h4A1.5 1.5 0 0115.5 5v2"/><path d="M3 12.5h18"/><path d="M10.5 12.5v2h3v-2"/>',
    recycle: '<path d="M7 8l2.5-4.5h5L17 8"/><path d="M9.5 3.5L7 8l4 .2"/><path d="M19.5 10l2 4.5-2.5 4.5H15"/><path d="M21.5 14.5L19.5 10l-3.5 2"/><path d="M8.5 19H4.5L2 14.5 4.5 10"/><path d="M4.5 19l-2-4.5 3.5-2"/>',
    shield: '<path class="tone" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    chart: '<path d="M3.5 20.5h17"/><path class="tone" d="M4.5 17.5v-5h3v5zM9.5 17.5v-9h3v9zM14.5 17.5v-4h3v4zM19 17.5V6h3v11.5z"/><path d="M6 17.5v-5M11 17.5v-9M16 17.5v-4M21 17.5V6"/>',
    document: '<path class="tone" d="M6 3h8l5 5v13H6z"/><path d="M6 3h8l5 5v13H6V3z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>',
    search: '<circle class="tone" cx="10.5" cy="10.5" r="6.5"/><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5l5 5"/>',
    users: '<circle class="tone" cx="9" cy="8" r="3.5"/><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20v-1.5a5 5 0 015-5h3a5 5 0 015 5V20"/><path d="M16 4.5a3.5 3.5 0 010 7"/><path d="M18.5 13.6a5 5 0 013 4.6V20"/>',
    volunteer: '<circle class="tone" cx="12" cy="6.5" r="3"/><circle cx="12" cy="6.5" r="3"/><path d="M7 20.5v-5a5 5 0 0110 0v5"/><path d="M3 9.5l2-2M21 9.5l-2-2"/><path d="M2.5 13.5h3M18.5 13.5h3"/>',
    badge: '<circle class="tone" cx="12" cy="9" r="6"/><circle cx="12" cy="9" r="6"/><path d="M9 14.5L7.5 21l4.5-2.5 4.5 2.5L15 14.5"/><path d="M9.8 9l1.5 1.5 3-3"/>',
    globe: '<circle class="tone" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    pin: '<path class="tone" d="M12 21.5s-6.5-6.2-6.5-11.2a6.5 6.5 0 0113 0c0 5-6.5 11.2-6.5 11.2z"/><path d="M12 21.5s-6.5-6.2-6.5-11.2a6.5 6.5 0 0113 0c0 5-6.5 11.2-6.5 11.2z"/><circle cx="12" cy="10.3" r="2.5"/>',
    map: '<path class="tone" d="M3 6l6-2.5 6 2.5 6-2.5v15l-6 2.5-6-2.5-6 2.5z"/><path d="M3 6l6-2.5 6 2.5 6-2.5v15l-6 2.5-6-2.5-6 2.5V6z"/><path d="M9 3.5v15M15 6v15"/>',
    hexagon: '<path class="tone" d="M12 2.5l8.5 5v9l-8.5 5-8.5-5v-9z"/><path d="M12 2.5l8.5 5v9l-8.5 5-8.5-5v-9l8.5-5z"/><circle cx="12" cy="12" r="1.2" class="fill"/>',
    phone: '<path class="tone" d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 006.6 6.6l1.4-2.3 4.5 1.8V19a2 2 0 01-2 2A15.5 15.5 0 013 5.5a2 2 0 012-2z"/><path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 006.6 6.6l1.4-2.3 4.5 1.8V19a2 2 0 01-2 2A15.5 15.5 0 013 5.5a2 2 0 012-2z"/>',
    mail: '<rect class="tone" x="3" y="5" width="18" height="14" rx="2"/><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7.5l9 6 9-6"/>',
    arrow: '<path d="M4 12h16"/><path d="M14 6l6 6-6 6"/>',
    "arrow-up-right": '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>',
    "chevron-down": '<path d="M6 9.5l6 6 6-6"/>',
    "chevron-right": '<path d="M9.5 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    info: '<circle class="tone" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.3"/>',
    download: '<path d="M12 3.5v12"/><path d="M7.5 11l4.5 4.5 4.5-4.5"/><path d="M4 20.5h16"/>',
    share: '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4M8.2 13.2l7.6 4"/>',
    quote: '<path class="tone" d="M4 16a3 3 0 003-3V8H4v4"/><path d="M4 12V8h3v5a3 3 0 01-3 3"/><path class="tone" d="M14 16a3 3 0 003-3V8h-3v4"/><path d="M14 12V8h3v5a3 3 0 01-3 3"/>',
    play: '<circle class="tone" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
    lock: '<rect class="tone" x="4.5" y="10.5" width="15" height="10" rx="2"/><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/><path d="M12 14.5v2.5"/>',
    facebook: '<path class="fill" d="M14 8h2.5V4.5H14c-2.5 0-4 1.6-4 4V11H7.5v3.5H10V21h3.5v-6.5h2.6l.5-3.5h-3.1V8.9c0-.6.3-.9 1-.9z"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle class="fill" cx="17.3" cy="6.7" r="1.1"/>',
    youtube: '<path class="fill" d="M22 8.2c-.2-1.2-1-2-2.1-2.2C18 5.6 12 5.6 12 5.6s-6 0-7.9.4C3 6.2 2.2 7 2 8.2 1.6 10 1.6 12 1.6 12s0 2 .4 3.8c.2 1.2 1 2 2.1 2.2 1.9.4 7.9.4 7.9.4s6 0 7.9-.4c1.1-.2 1.9-1 2.1-2.2.4-1.8.4-3.8.4-3.8s0-2-.4-3.8zM10 15V9l5.2 3L10 15z"/>',
    x: '<path d="M4 3.5h4.2L20 20.5h-4.2L4 3.5z"/><path d="M20 3.5l-6.6 7.6M4 20.5l6.6-7.6"/>',
    linkedin: '<path class="fill" d="M6.5 9H3.6v11.5h2.9V9zM5 3.6a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20.4 13.6c0-3.2-1.7-4.9-4.2-4.9-1.6 0-2.6.8-3.1 1.6V9h-2.9v11.5h2.9v-6c0-1.6.7-2.7 2.1-2.7s2.1 1 2.1 2.7v6h3v-6.9z"/>',
    tiktok: '<path class="fill" d="M16.5 3c.3 2.3 1.7 3.9 4 4.1v3.2c-1.5 0-2.9-.5-4-1.3v6.2c0 3.3-2.6 5.8-5.8 5.8S4.9 18.5 4.9 15.2s2.6-5.8 5.8-5.8c.3 0 .6 0 .9.1v3.3c-.3-.1-.6-.2-.9-.2-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6V3h3.2z"/>',
  };
  window.ico = (name, cls) => `<svg class="ico ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  document.querySelectorAll("i[data-ico]").forEach(el => { el.outerHTML = window.ico(el.dataset.ico, el.className); });

  const NAV = [
    { label: "Nous connaître", items: [["users", "Qui sommes-nous", "qui-sommes-nous.html"], ["chart", "Transparence : où va votre don", "transparence.html"], ["globe", "Nos pays d'intervention", "qui-sommes-nous.html#carte"], ["document", "Actualités et guides", "actualites.html"], ["volunteer", "Devenir bénévole", "qui-sommes-nous.html#benevolat"]] },
    { label: "Nos actions", items: [["__g", "En France"], ["hexagon", "Marseille : La Fourchette Fraternelle", "marseille.html"], ["hexagon", "Lyon : maraudes et mineurs isolés", "lyon.html"], ["hexagon", "Paris et Saint-Ouen", "paris.html"], ["snow", "Campagne hiver", "campagne-hiver.html"], ["__g", "À l'international"], ["drop", "Construire un puits", "construire-un-puits.html"], ["orphan", "Parrainer un orphelin", "parrainer-un-orphelin.html"], ["school", "Éducation : Écoles de l'Excellence", "education.html"], ["health", "Santé : cliniques et maternités", "sante.html"], ["briefcase", "Moyens de subsistance", "moyens-de-subsistance.html"]] },
    { label: "Urgences", items: [["alert", "Toutes les urgences", "urgences.html"], ["pin", "Gaza, Palestine", "urgence-gaza.html"], ["pin", "Soudan", "urgence-soudan.html"], ["pin", "Yémen", "urgence-yemen.html"], ["pin", "Somalie", "urgence-somalie.html"], ["pin", "Liban", "urgence-liban.html"], ["pin", "Afghanistan", "urgence-afghanistan.html"]] },
    { label: "Zakat et dons religieux", items: [["coins", "Zakat al Maal 2027", "zakat.html"], ["calc", "Calculateur de zakat", "zakat-calculateur.html"], ["moon", "Zakat al Fitr 2027", "zakat-al-fitr.html"], ["moon", "Ramadan 2027", "ramadan.html"], ["sheep", "Sacrifice de l'Aïd al-Adha 2027", "sacrifice-aid-al-adha.html"], ["sprout", "Sadaqa jariya", "sadaqa-jariya.html"], ["mosque", "Waqf", "waqf.html"]] },
    { label: "Nous soutenir", items: [["heart", "Faire un don", "faire-un-don.html"], ["percent", "Inestimable et déductible : jusqu'à 75 %", "inestimable-et-deductible.html"], ["percent", "Déduction fiscale : 66 % et 75 %", "deduction-fiscale.html"], ["orphan", "Parrainer un orphelin", "parrainer-un-orphelin.html"], ["check", "Changements appliqués (prototype)", "changements.html"]] }
  ];

  // ---- balises de tête ----
  document.documentElement.lang = "fr";
  if (P.title) document.title = P.title;
  const head = document.head;
  const meta = (attrs) => { const m = document.createElement("meta"); Object.entries(attrs).forEach(([k, v]) => m.setAttribute(k, v)); head.appendChild(m); };
  if (P.meta) meta({ name: "description", content: P.meta });
  meta({ name: "robots", content: "noindex, nofollow" });
  const canon = document.createElement("link"); canon.rel = "canonical"; canon.href = ORIGIN + (P.path || "/"); head.appendChild(canon);
  meta({ property: "og:title", content: P.title || "" }); meta({ property: "og:description", content: P.meta || "" }); meta({ property: "og:url", content: ORIGIN + (P.path || "/") }); meta({ property: "og:type", content: "website" }); meta({ property: "og:locale", content: "fr_FR" });
  if (P.ogImage) meta({ property: "og:image", content: ORIGIN + "/" + P.ogImage });
  meta({ name: "twitter:card", content: "summary_large_image" });

  // ---- données structurées ----
  const org = { "@type": "NGO", "@id": ORIGIN + "/#org", name: "Muslim Hands France", url: ORIGIN + "/", logo: ORIGIN + "/assets/logo-muslim-hands-france.png", foundingDate: "2007", telephone: "+33 1 49 48 05 05", email: "contact@muslimhands.fr",
    address: { "@type": "PostalAddress", streetAddress: "Bâtiment Energy 2, 155 rue du Dr Bauer", postalCode: "93400", addressLocality: "Saint-Ouen-sur-Seine", addressCountry: "FR" },
    sameAs: ["https://www.facebook.com/MuslimHandsFR", "https://www.instagram.com/muslimhandsfr/", "https://www.youtube.com/user/MuslimHandsFR", "https://x.com/muslimhandsfr", "https://fr.linkedin.com/company/muslim-hands-france", "https://www.tiktok.com/@muslimhandsfr"],
    nonprofitStatus: "https://schema.org/NonprofitType", parentOrganization: { "@type": "NGO", name: "Muslim Hands", url: "https://muslimhands.org.uk/" } };
  const graph = [org];
  if (P.breadcrumb && P.breadcrumb.length) graph.push({ "@type": "BreadcrumbList", itemListElement: P.breadcrumb.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b[0], item: ORIGIN + b[1] })) });
  if (P.faq && P.faq.length) graph.push({ "@type": "FAQPage", mainEntity: P.faq.map(q => ({ "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } })) });
  if (P.donate) graph.push({ "@type": "DonateAction", name: P.donate.name, recipient: { "@id": ORIGIN + "/#org" }, target: ORIGIN + P.donate.target, price: P.donate.price, priceCurrency: "EUR" });
  if (P.type === "article") graph.push({ "@type": "Article", headline: P.h1, datePublished: P.datePublished, dateModified: P.dateModified, author: { "@type": "Organization", name: "Muslim Hands France" }, publisher: { "@id": ORIGIN + "/#org" } });
  if (P.extraJsonLd) graph.push(...P.extraJsonLd);
  const ld = { "@context": "https://schema.org", "@graph": graph };
  const ldScript = document.createElement("script"); ldScript.type = "application/ld+json"; ldScript.textContent = JSON.stringify(ld, null, 1); head.appendChild(ldScript);

  // ---- en-tête ----
  const header = document.createElement("header"); header.className = "site-header";
  const navHtml = NAV.map(g => `<details><summary>${g.label}</summary><div class="menu">${g.items.map(it => it[0] === "__g" ? `<div class="group">${it[1]}</div>` : `<a href="${it[2]}">${window.ico(it[0])}${it[1]}</a>`).join("")}</div></details>`).join("");
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="index.html" aria-label="Muslim Hands France, accueil"><img class="logo-fr" src="assets/logo-muslim-hands-france.svg" alt="Muslim Hands France" width="205" height="69"></a>
    <nav class="nav" id="mainnav" aria-label="Navigation principale">${navHtml}</nav>
    <div class="header-cta"><a class="btn btn-ghost btn-sm" href="zakat-calculateur.html">${window.ico("calc")} Calculer ma zakat</a><a class="btn btn-sun btn-sm" href="faire-un-don.html">${window.ico("heart")} Faire un don</a><button class="burger" type="button" aria-expanded="false" aria-controls="mainnav">Menu</button></div>
  </div>`;
  const protoBar = document.createElement("div"); protoBar.className = "proto-bar";
  protoBar.innerHTML = `<div class="wrap"><span>Prototype du site cible muslimhands.fr</span><span>Corrections SEO appliquées : voir <a href="changements.html">les changements</a> ou la fiche SEO de chaque page.</span></div>`;
  document.body.prepend(header); window.__protoBar = protoBar;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 60); onScroll(); addEventListener("scroll", onScroll, { passive: true });
  const burger = header.querySelector(".burger"); const nav = header.querySelector(".nav");
  burger.addEventListener("click", () => { const open = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(open)); });
  header.querySelectorAll("details").forEach(d => d.addEventListener("toggle", () => { if (d.open) header.querySelectorAll("details").forEach(o => { if (o !== d) o.open = false; }); }));
  document.addEventListener("click", (e) => { if (!header.contains(e.target)) header.querySelectorAll("details").forEach(o => o.open = false); });

  // ---- fil d'Ariane : uniquement en JSON-LD (plus de fil visible, la photo démarre en haut) ----

  // ---- carte du monde : injectée dans [data-map] ----
  const COUNTRIES = { France: "Paris, Lyon, Marseille", Palestine: "Gaza : repas, eau, soins", Lebanon: "Déplacés, forage d'Akkar", Yemen: "Usine à pain, forages", Sudan: "Colis, nutrition", Somalia: "Clinique, eau", Afghanistan: "Clinique de Kaboul", Pakistan: "Orphelins, inondations", India: "Cachemire : orphelins", Bangladesh: "Pompes, Rohingyas", "Sri Lanka": "Forages, école", Nepal: "Inondations 2025", Mali: "Puits, Écoles de l'Excellence", Niger: "Puits, orphelins", Senegal: "Puits, parrainage", Gambia: "Orphelins", Mauritania: "Orphelins", Malawi: "Puits, école" };
  const FR = { Lebanon: "Liban", Yemen: "Yémen", Sudan: "Soudan", Somalia: "Somalie", Senegal: "Sénégal", Gambia: "Gambie", Mauritania: "Mauritanie", India: "Inde", Nepal: "Népal", Palestine: "Palestine" };
  document.querySelectorAll("[data-map]").forEach(async (box) => {
    try {
      const svg = await (await fetch("assets/world-map.svg?v=20261019f")).text();
      box.innerHTML = svg;
      const list = document.querySelector("[data-country-list]");
      if (list) list.innerHTML = Object.entries(COUNTRIES).map(([k, v]) => `<li data-country="${k}">${FR[k] || k}<small>${v}</small></li>`).join("");
      const sync = (name, on) => { document.querySelectorAll(`[data-country="${name}"]`).forEach(el => el.classList.toggle("on", on)); };
      document.querySelectorAll("[data-country]").forEach(el => { el.addEventListener("mouseenter", () => sync(el.dataset.country, true)); el.addEventListener("mouseleave", () => sync(el.dataset.country, false)); });
    } catch (e) { box.textContent = "Carte indisponible."; }
  });

  // ---- pied de page ----
  const footer = document.createElement("footer"); footer.className = "site-footer";
  footer.innerHTML = `<div class="wrap">
    <div class="cols">
      <div><img class="logo-fr footer-logo" src="assets/logo-muslim-hands-france.svg" alt="Muslim Hands France" width="205" height="69"><p style="margin-top:1.1rem;max-width:38ch;opacity:.9">Association humanitaire d'intérêt général, loi 1901, fondée en 2007. Membre du réseau Muslim Hands, présent dans plus de 30 pays depuis 1993.</p>
        <div class="social" aria-label="Réseaux sociaux"><a href="https://www.facebook.com/MuslimHandsFR" aria-label="Facebook" title="Facebook">${window.ico("facebook")}</a><a href="https://www.instagram.com/muslimhandsfr/" aria-label="Instagram" title="Instagram">${window.ico("instagram")}</a><a href="https://www.youtube.com/user/MuslimHandsFR" aria-label="YouTube" title="YouTube">${window.ico("youtube")}</a><a href="https://x.com/muslimhandsfr" aria-label="X (Twitter)" title="X">${window.ico("x")}</a><a href="https://fr.linkedin.com/company/muslim-hands-france" aria-label="LinkedIn" title="LinkedIn">${window.ico("linkedin")}</a><a href="https://www.tiktok.com/@muslimhandsfr" aria-label="TikTok" title="TikTok">${window.ico("tiktok")}</a></div></div>
      <div><h4>Donner</h4><ul><li><a href="faire-un-don.html">Faire un don</a></li><li><a href="zakat.html">Zakat al Maal</a></li><li><a href="zakat-al-fitr.html">Zakat al Fitr</a></li><li><a href="sadaqa-jariya.html">Sadaqa jariya</a></li><li><a href="waqf.html">Waqf</a></li><li><a href="deduction-fiscale.html">Déduction fiscale</a></li></ul></div>
      <div><h4>Agir</h4><ul><li><a href="parrainer-un-orphelin.html">Parrainer un orphelin</a></li><li><a href="construire-un-puits.html">Construire un puits</a></li><li><a href="urgences.html">Urgences</a></li><li><a href="ramadan.html">Ramadan 2027</a></li><li><a href="sacrifice-aid-al-adha.html">Aïd al-Adha 2027</a></li><li><a href="campagne-hiver.html">Campagne hiver</a></li></ul></div>
      <div><h4>L'association</h4><ul><li><a href="qui-sommes-nous.html">Qui sommes-nous</a></li><li><a href="transparence.html">Transparence et rapports</a></li><li><a href="actualites.html">Actualités</a></li><li><a href="qui-sommes-nous.html#benevolat">Bénévolat et emploi</a></li><li><a href="qui-sommes-nous.html#contact">Contact : 01 49 48 05 05</a></li></ul></div>
    </div>
    <div class="legal"><p>© 2026 Muslim Hands France · Bâtiment Energy 2, 155 rue du Dr Bauer, 93400 Saint-Ouen-sur-Seine · Association loi 1901 n° 1407 · SIREN 498 845 502</p><nav class="legal-links" aria-label="Informations légales"><a href="mentions-legales.html">Mentions légales</a><a href="politique-de-confidentialite.html">Politique de confidentialité</a><a href="conditions-generales-du-don.html">Conditions générales du don</a><a href="politique-de-confidentialite.html#cookies">Gérer mes cookies</a></nav></div>
  </div>`;
  document.body.appendChild(footer);

  // ---- fiche SEO (outil de visualisation) ----
  const h1s = document.querySelectorAll("h1");
  const imgs = [...document.images].filter(i => !i.closest(".site-header, .site-footer"));
  const noAlt = imgs.filter(i => !i.hasAttribute("alt")).length;
  const donateLinks = [...document.querySelectorAll('main a[href*="faire-un-don"], main a[href*="don-"], main a[href*="donate"]')].length;
  const internal = [...document.querySelectorAll("main a[href]")].filter(a => !/^https?:/.test(a.getAttribute("href"))).length;
  const words = (document.querySelector("main")?.innerText || "").trim().split(/\s+/).length;
  const fab = document.createElement("button"); fab.className = "seo-fab"; fab.type = "button"; fab.textContent = "Fiche SEO";
  const panel = document.createElement("aside"); panel.className = "seo-panel"; panel.setAttribute("aria-label", "Fiche SEO de la page");
  const cls = (ok) => ok ? "ok" : "warn";
  panel.innerHTML = `<h2>Fiche SEO <button class="close" type="button">Fermer</button></h2>
    <p class="count">Ce que Google lit sur cette page du prototype. Les mêmes réglages sont à reproduire dans Umbraco.</p>
    <dl>
      <dt>URL cible</dt><dd class="ok"><code>${ORIGIN}${P.path || "/"}</code></dd>
      <dt>Title <span class="count">(${(P.title || "").length} caractères, objectif ≤ 60)</span></dt><dd class="${cls((P.title || "").length <= 65)}">${P.title || ""}</dd>
      <dt>Meta description <span class="count">(${(P.meta || "").length} caractères, objectif ≤ 155)</span></dt><dd class="${cls(!!P.meta && P.meta.length <= 160)}">${P.meta || "absente"}</dd>
      <dt>H1</dt><dd class="${cls(h1s.length === 1)}">${h1s.length} H1 : « ${h1s[0] ? h1s[0].textContent.trim() : "aucun"} »</dd>
      <dt>Langue, robots, canonical</dt><dd class="ok"><code>lang="fr"</code> · <code>index, follow</code> · canonical auto-référente</dd>
      <dt>Contenu</dt><dd class="${cls(words > 300)}">${words} mots · ${internal} liens internes · ${donateLinks} liens HTML vers une fiche de don</dd>
      <dt>Images</dt><dd class="${cls(noAlt === 0)}">${imgs.length} image(s), ${noAlt} sans attribut alt, srcset 900/1400/1920 px</dd>
      <dt>Données structurées</dt><dd class="ok">${graph.map(g => `<span class="pill">${g["@type"]}</span>`).join("")}</dd>
      <dt>Mot-clé principal</dt><dd>${P.keyword || "—"}</dd>
      ${P.changes ? `<dt>Ce qui change par rapport au staging</dt><dd><ul>${P.changes.map(c => `<li>${c}</li>`).join("")}</ul></dd>` : ""}
      <dt>JSON-LD injecté dans le &lt;head&gt;</dt><dd><pre>${JSON.stringify(ld, null, 1).replace(/</g, "&lt;")}</pre></dd>
    </dl>`;
  document.body.append(fab, panel);
  fab.addEventListener("click", () => panel.classList.add("open"));
  panel.querySelector(".close").addEventListener("click", () => panel.classList.remove("open"));

  // ---- interactions : montants, segments, formulaires ----
  document.querySelectorAll(".amounts").forEach(group => group.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
    group.querySelectorAll("button").forEach(o => o.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed", "true");
    const box = group.closest(".donate"); const out = box?.querySelector("[data-cost]"); const rate = Number(box?.dataset.rate || 0.66);
    if (out) { const v = Number(b.dataset.v || 0); const fmt = n => Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ","); out.textContent = v ? `${fmt(v)}\u00a0€ vous coûtent ${fmt(Math.round(v * (1 - rate) * 100) / 100)}\u00a0€ après réduction d'impôt de ${Math.round(rate * 100)}\u00a0%.` : "Saisissez un montant libre."; }
  })));
  document.querySelectorAll(".seg").forEach(t => t.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { t.querySelectorAll("button").forEach(o => o.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed", "true"); })));
  document.querySelectorAll("form").forEach(f => f.addEventListener("submit", e => { e.preventDefault(); const n = f.querySelector("[data-confirm]"); if (n) { n.hidden = false; } }));
})();

// ---- carrousel du grand header (accueil) ----
(function () {
  document.querySelectorAll("[data-carousel]").forEach(c => {
    const slides = [...c.querySelectorAll(".slide")]; if (slides.length < 2) return;
    const dots = c.querySelector(".hero-dots"); let i = 0, timer;
    slides.forEach((_, k) => { const b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", "Diapositive " + (k + 1)); b.addEventListener("click", () => go(k, true)); dots.appendChild(b); });
    const go = (n, manual) => { i = (n + slides.length) % slides.length; slides.forEach((sl, k) => { sl.classList.toggle("is-active", k === i); sl.setAttribute("aria-hidden", k === i ? "false" : "true"); }); [...dots.children].forEach((d, k) => d.setAttribute("aria-current", k === i ? "true" : "false")); if (manual) restart(); };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(i + 1), 7000); };
    c.querySelector(".hero-prev")?.addEventListener("click", () => go(i - 1, true));
    c.querySelector(".hero-next")?.addEventListener("click", () => go(i + 1, true));
    c.addEventListener("mouseenter", () => clearInterval(timer)); c.addEventListener("mouseleave", restart);
    go(0); restart();
  });
})();

// Bandeau de présentation : affiché seulement hors de l'ordinateur local (lien de présentation en ligne).
(function () {
  try {
    if (/^(127\.0\.0\.1|localhost|\[::1\])$/.test(location.hostname)) return;
    var b = document.createElement("div");
    b.className = "proto-banner"; b.setAttribute("role", "note");
    b.textContent = "Maquette de présentation du futur site · aucun don n'est encaissé sur cette version";
    document.body.insertBefore(b, document.body.firstChild);
  } catch (e) {}
})();
