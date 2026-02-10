/**
 * Junior Accounts Manager – CV Website
 * Year in footer, food-delivery infographic from data array.
 */

(function () {
  'use strict';

  /**
   * Food delivery order data (order items with price and discount_price).
   */
  var foodOrderData = [
    { name: '9 McNuggets Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'McChicken Menu', price: 41, discount_price: 21 },
    { name: 'McRoyal Menu', price: 41, discount_price: 21 },
    { name: '9 McNuggets Menu', price: 41, discount_price: 21 },
    { name: '9 McNuggets Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 },
    { name: 'Big Mac Menu', price: 41, discount_price: 21 }
  ];

  /**
   * Returns inline SVG pixel-art icon for a given item name.
   */
  function getItemIcon(name) {
    var svg = '';
    if (name.indexOf('McNuggets') !== -1) {
      svg = '<svg class="infographic-icon infographic-icon--nuggets" viewBox="0 0 24 24" aria-hidden="true" width="28" height="28"><rect x="4" y="8" width="4" height="4" fill="#d4a84b"/><rect x="10" y="6" width="4" height="4" fill="#d4a84b"/><rect x="16" y="8" width="4" height="4" fill="#d4a84b"/><rect x="6" y="14" width="4" height="4" fill="#d4a84b"/><rect x="14" y="14" width="4" height="4" fill="#d4a84b"/><rect x="10" y="18" width="4" height="2" fill="#8b6914"/></svg>';
    } else if (name.indexOf('Big Mac') !== -1) {
      svg = '<svg class="infographic-icon infographic-icon--burger" viewBox="0 0 24 24" aria-hidden="true" width="28" height="28"><rect x="2" y="2" width="20" height="4" fill="#e8c547" rx="1"/><rect x="2" y="8" width="20" height="4" fill="#8b4513"/><rect x="2" y="14" width="20" height="4" fill="#228b22"/><rect x="2" y="20" width="20" height="4" fill="#e8c547" rx="1"/></svg>';
    } else if (name.indexOf('McChicken') !== -1) {
      svg = '<svg class="infographic-icon infographic-icon--chicken" viewBox="0 0 24 24" aria-hidden="true" width="28" height="28"><ellipse cx="12" cy="14" rx="8" ry="6" fill="#f4d03f"/><path d="M8 10 L12 6 L16 10 L14 14 Z" fill="#d4a84b"/><rect x="10" y="18" width="4" height="4" fill="#d4a84b"/></svg>';
    } else if (name.indexOf('McRoyal') !== -1) {
      svg = '<svg class="infographic-icon infographic-icon--royal" viewBox="0 0 24 24" aria-hidden="true" width="28" height="28"><rect x="2" y="2" width="20" height="4" fill="#c9a227" rx="1"/><rect x="2" y="8" width="20" height="4" fill="#654321"/><rect x="2" y="14" width="20" height="4" fill="#2d5016"/><rect x="2" y="20" width="20" height="4" fill="#c9a227" rx="1"/><circle cx="12" cy="12" r="2" fill="#8b4513"/></svg>';
    } else {
      svg = '<svg class="infographic-icon" viewBox="0 0 24 24" aria-hidden="true" width="28" height="28"><rect x="6" y="8" width="12" height="10" fill="#ddd" rx="1"/></svg>';
    }
    return svg;
  }

  /**
   * Renders the food delivery infographic table from foodOrderData.
   */
  function renderFoodInfographic() {
    var tbody = document.getElementById('infographic-tbody');
    var tfoot = document.getElementById('infographic-tfoot');
    if (!tbody || !tfoot) return;

    var totalPlanned = 0;
    var savedTotal = 0;

    foodOrderData.forEach(function (item) {
      var saved = item.price - item.discount_price;
      totalPlanned += item.price;
      savedTotal += saved;

      var tr = document.createElement('tr');
      tr.className = 'infographic-table__row';
      tr.innerHTML =
        '<td class="infographic-table__cell infographic-table__cell--icon">' + getItemIcon(item.name) + '</td>' +
        '<td class="infographic-table__cell">' + escapeHtml(item.name) + '</td>' +
        '<td class="infographic-table__cell infographic-table__cell--num">' + item.price + '</td>' +
        '<td class="infographic-table__cell infographic-table__cell--num">' + item.discount_price + '</td>' +
        '<td class="infographic-table__cell infographic-table__cell--num infographic-table__cell--saved">' + saved + '</td>';
      tbody.appendChild(tr);
    });

    var trFoot = document.createElement('tr');
    trFoot.className = 'infographic-table__footer-row';
    trFoot.innerHTML =
      '<td colspan="2" class="infographic-table__cell infographic-table__cell--label">Total planned price</td>' +
      '<td class="infographic-table__cell infographic-table__cell--num">' + totalPlanned + ' PLN</td>' +
      '<td class="infographic-table__cell infographic-table__cell--num">—</td>' +
      '<td class="infographic-table__cell infographic-table__cell--num infographic-table__cell--saved-total" title="Saved total">' + savedTotal + ' PLN</td>';
    tfoot.appendChild(trFoot);
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function setFooterYear() {
    var yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  function init() {
    setFooterYear();
    renderFoodInfographic();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
