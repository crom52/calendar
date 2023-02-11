const initView = () => {};
webix.ready(function () {
  webix.ui({
    rows: [
      {
        view: 'toolbar',
        padding: 3,
        elements: [
          {
            view: 'icon',
            icon: 'mdi mdi-menu',
            click: function () {
              $$('sidebar').toggle();
            },
          },
          { view: 'label', label: 'Quản lý' },
          {},
          { view: 'icon', icon: 'mdi mdi-comment', badge: 4 },
          { view: 'icon', icon: 'mdi mdi-bell', badge: 10 },
        ],
      },
      {
        cols: [
          Sidebar.sidebar,
          {
            rows: [
              Grid.grid,
              {
                id: 'calendar',
                view: 'template',
                template: `<div id="calendar"></div>`,
              },
            ],
          },
        ],
      },
    ],
  });
  Calendar.initCalendar();
});
