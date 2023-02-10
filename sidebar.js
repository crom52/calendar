const SideBar = (() => {
  const sidebar = {
    view: 'sidebar',
    width: 200,
    data: [
      { id: 1, icon: 'mdi mdi-view-dashboard', value: 'Danh sách học sinh' },
      { id: 2, icon: 'mdi mdi-view-column', value: 'Thời Khóa Biểu' },
    ],
    on: {
      onItemClick: function (id) {
        var item = this.getItem(id);
      },
    },
  };
  const initUI = () => {
    webix.ui(sidebar).show();
  };
  return { initUI };
})();
