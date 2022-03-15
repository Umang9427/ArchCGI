(function() {
  (function() {
    var logo, logo_css;
    logo = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>codepen-logo</title><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.139 21.651l1.35-1.35a.387.387 0 0 0 0-.54l-3.49-3.49a.387.387 0 0 0-.54 0l-1.35 1.35a.39.39 0 0 0 0 .54l3.49 3.49a.38.38 0 0 0 .54 0zm6.922.153l2.544-2.543a.722.722 0 0 0 0-1.018l-6.582-6.58a.722.722 0 0 0-1.018 0l-2.543 2.544a.719.719 0 0 0 0 1.018l6.58 6.579c.281.28.737.28 1.019 0zm14.779-5.85l-7.786-7.79a.554.554 0 0 0-.788 0l-5.235 5.23a.558.558 0 0 0 0 .789l7.79 7.789c.216.216.568.216.785 0l5.236-5.236a.566.566 0 0 0 0-.786l-.002.003zm-3.89 2.806a.813.813 0 1 1 0-1.626.813.813 0 0 1 0 1.626z" fill="#FFF" fill-rule="evenodd"/></svg>';
    logo_css = '.mM{display:block;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);position:fixed;bottom:1em;right:1em;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all 240ms ease-in-out;transition:all 240ms ease-in-out;z-index:9999;opacity:0.75}.mM svg{display:block}.mM:hover{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125)}';
    document.head.insertAdjacentHTML('beforeend', '<style>' + logo_css + '</style>');
    document.body.insertAdjacentHTML('beforeend', '<a href="https://codepen.io/mican/" target="_blank" class="mM">' + logo + '</a>');
    return$('.gallery-link').magnificPopup;
    return {
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.find('figcaption').text() || item.el.attr('title');
        }
      },
      zoom: {
        enabled: true
      },
      // duration: 300
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        tCounter: ''
      },
      disableOn: function() {
        return $(window).width() > 640;
      }
    };
  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0gsUUFBQSxJQUFBLEVBQUE7SUFBRSxJQUFBLEdBQU87SUFDUCxRQUFBLEdBQVc7SUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDLFNBQUEsR0FBWSxRQUFaLEdBQXVCLFVBQXJFO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBZCxDQUFpQyxXQUFqQyxFQUE4QyxpRUFBQSxHQUFvRSxJQUFwRSxHQUEyRSxNQUF6SDtJQUNBLE9BQUEsQ0FBUSxlQUFSLENBQXdCLENBQUM7V0FDekI7TUFBQSxJQUFBLEVBQU0sT0FBTjtNQUNBLG1CQUFBLEVBQXFCLElBRHJCO01BRUEsY0FBQSxFQUFnQixLQUZoQjtNQUdBLFNBQUEsRUFBVyw4QkFIWDtNQUlBLEtBQUEsRUFDRTtRQUFBLFdBQUEsRUFBYSxJQUFiO1FBQ0EsUUFBQSxFQUFVLFFBQUEsQ0FBQyxJQUFELENBQUE7aUJBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFSLENBQWEsWUFBYixDQUEwQixDQUFDLElBQTNCLENBQUEsQ0FBQSxJQUFxQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQVIsQ0FBYSxPQUFiO1FBRDdCO01BRFYsQ0FMRjtNQVFBLElBQUEsRUFDRTtRQUFBLE9BQUEsRUFBUztNQUFULENBVEY7O01BV0EsT0FBQSxFQUNFO1FBQUEsT0FBQSxFQUFTLElBQVQ7UUFDQSxrQkFBQSxFQUFvQixLQURwQjtRQUVBLFFBQUEsRUFBVTtNQUZWLENBWkY7TUFlQSxTQUFBLEVBQVcsUUFBQSxDQUFBLENBQUE7ZUFDVCxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsS0FBVixDQUFBLENBQUEsR0FBb0I7TUFEWDtJQWZYO0VBTkMsQ0FBQTtBQUFIIiwic291cmNlc0NvbnRlbnQiOlsiZG8gLT5cbiAgbG9nbyA9ICc8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPmNvZGVwZW4tbG9nbzwvdGl0bGU+PHBhdGggZD1cIk0xNiAzMkM3LjE2MyAzMiAwIDI0LjgzNyAwIDE2UzcuMTYzIDAgMTYgMHMxNiA3LjE2MyAxNiAxNi03LjE2MyAxNi0xNiAxNnpNNy4xMzkgMjEuNjUxbDEuMzUtMS4zNWEuMzg3LjM4NyAwIDAgMCAwLS41NGwtMy40OS0zLjQ5YS4zODcuMzg3IDAgMCAwLS41NCAwbC0xLjM1IDEuMzVhLjM5LjM5IDAgMCAwIDAgLjU0bDMuNDkgMy40OWEuMzguMzggMCAwIDAgLjU0IDB6bTYuOTIyLjE1M2wyLjU0NC0yLjU0M2EuNzIyLjcyMiAwIDAgMCAwLTEuMDE4bC02LjU4Mi02LjU4YS43MjIuNzIyIDAgMCAwLTEuMDE4IDBsLTIuNTQzIDIuNTQ0YS43MTkuNzE5IDAgMCAwIDAgMS4wMThsNi41OCA2LjU3OWMuMjgxLjI4LjczNy4yOCAxLjAxOSAwem0xNC43NzktNS44NWwtNy43ODYtNy43OWEuNTU0LjU1NCAwIDAgMC0uNzg4IDBsLTUuMjM1IDUuMjNhLjU1OC41NTggMCAwIDAgMCAuNzg5bDcuNzkgNy43ODljLjIxNi4yMTYuNTY4LjIxNi43ODUgMGw1LjIzNi01LjIzNmEuNTY2LjU2NiAwIDAgMCAwLS43ODZsLS4wMDIuMDAzem0tMy44OSAyLjgwNmEuODEzLjgxMyAwIDEgMSAwLTEuNjI2LjgxMy44MTMgMCAwIDEgMCAxLjYyNnpcIiBmaWxsPVwiI0ZGRlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+J1xuICBsb2dvX2NzcyA9ICcubU17ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtwb3NpdGlvbjpmaXhlZDtib3R0b206MWVtO3JpZ2h0OjFlbTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAyNDBtcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAyNDBtcyBlYXNlLWluLW91dDt6LWluZGV4Ojk5OTk7b3BhY2l0eTowLjc1fS5tTSBzdmd7ZGlzcGxheTpibG9ja30ubU06aG92ZXJ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTI1KTt0cmFuc2Zvcm06c2NhbGUoMS4xMjUpfSdcbiAgZG9jdW1lbnQuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwgJ2JlZm9yZWVuZCcsICc8c3R5bGU+JyArIGxvZ29fY3NzICsgJzwvc3R5bGU+J1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgJzxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vbWljYW4vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJtTVwiPicgKyBsb2dvICsgJzwvYT4nXG4gIHJldHVybiQoJy5nYWxsZXJ5LWxpbmsnKS5tYWduaWZpY1BvcHVwXG4gIHR5cGU6ICdpbWFnZSdcbiAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZVxuICBjbG9zZUJ0bkluc2lkZTogZmFsc2VcbiAgbWFpbkNsYXNzOiAnbWZwLXdpdGgtem9vbSBtZnAtaW1nLW1vYmlsZSdcbiAgaW1hZ2U6IFxuICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgdGl0bGVTcmM6IChpdGVtKSAtPlxuICAgICAgaXRlbS5lbC5maW5kKCdmaWdjYXB0aW9uJykudGV4dCgpIHx8IGl0ZW0uZWwuYXR0cigndGl0bGUnKVxuICB6b29tOlxuICAgIGVuYWJsZWQ6IHRydWVcbiAgICAjIGR1cmF0aW9uOiAzMDBcbiAgZ2FsbGVyeTpcbiAgICBlbmFibGVkOiB0cnVlXG4gICAgbmF2aWdhdGVCeUltZ0NsaWNrOiBmYWxzZVxuICAgIHRDb3VudGVyOiAnJ1xuICBkaXNhYmxlT246IC0+XG4gICAgJCh3aW5kb3cpLndpZHRoKCkgPiA2NDAgIl19
//# sourceURL=coffeescript