const PopupAddEvent = (() => {
  const initPopup = webix
    .ui({
      view: 'window',
      id: 'popupAddEvent',
      head: 'Tạo mới',
      modal: true,
      position: 'center',
      width: 800,
      height: 600,
      move: true,
      body: {
        view: 'form',
        id: 'formAddEvent',
        width: 700,
        //   height: 500,
        elements: [
          {
            view: 'text',
            label: 'Tiêu đề',
            name: 'eventTitle',
            required: true,
          },
          {
            cols: [
              {
                id: 'eventTime',
                view: 'datepicker',
                name: 'eventTime',
                label: 'Thời gian',
                timepicker: true,
                value: new Date(),
              },
              { width: 30 },
              {
                labelWidth: 60,
                view: 'checkbox',
                id: 'checkboxAllDayEvent',
                customCheckbox: false,
                label: 'Cả ngày',
                value: false,
              },
            ],
          },
          {
            id: 'eventContent',
            view: 'textarea',
            label: 'Nội dung',
            name: 'eventContent',
            height: 200,
          },
          {
            margin: 5,
            cols: [
              {
                id: 'popupAddEventButton',
                view: 'button',
                value: 'Thêm',
                css: 'webix_primary',
              },
              {
                view: 'button',
                value: 'Hủy',
                css: 'webix_danger',
                on: {
                  onItemClick: () => {
                    $$('formAddEvent').clear();
                    $$('popupAddEvent').hide();
                  },
                },
              },
            ],
          },
        ],
      },
    })
    .hide();
  return {
    initPopup,
  };
})();
