webix.ready(function () {
  webix
    .ui({
      rows: [
        {
          view: 'toolbar',
          css: 'mtos-toolbar',
          id: 'calendarToolbar',
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
              id: 'rightLayout',
              on: {
                onViewShow: () => {
                  webix.message('ok');
                },
              },
              rows: [Grid.grid],
            },
          ],
        },
      ],
    })
    .show();
  CalendarModule.initCalendar();
});

var randomId = () => {
  return Math.random().toString().slice(2, 15);
};
