const Sidebar = (() => {
  const sidebar = {
    view: 'sidebar',
    data: [
      {
        id: 'calendar',
        icon: 'mdi mdi-view-dashboard',
        value: 'Thời khóa biểu',
      },
      {
        id: 'studentGrid',
        icon: 'mdi mdi-view-column',
        value: 'Danh sách học sinh',
      },
    ],
    id: 'sidebar',
    on: {
      onAfterSelect: function (id) {
        $$('studentGrid').hide();
        $('#calendar').hide();
        if (id == 'studentGrid') {
          $$('studentGrid').show();
        } else if (id == 'calendar') {
          $('#calendar').show();
        }
      },
    },
  };
  return { sidebar };
})();
