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
                width: 300,
                id: 'eventTimeStart',
                view: 'datepicker',
                name: 'eventTimeStart',
                label: 'Bắt đầu',
                timepicker: true,
                value: new Date(),
              },

              { width: 30 },
              {
                labelWidth: 80,
                view: 'checkbox',
                id: 'checkboxAllDayEvent',
                customCheckbox: false,
                label: 'Trong ngày',
                value: false,
                on: {
                  onChange: () => {
                    let isAllDay = $$('checkboxAllDayEvent').getValue();
                    if (isAllDay == 1) {
                      $$('eventTimeEnd').disable();
                    } else {
                      $$('eventTimeEnd').enable();
                    }
                  },
                },
              },
            ],
          },
          {
            width: 300,
            id: 'eventTimeEnd',
            view: 'datepicker',
            name: 'eventTimeEnd',
            label: 'Kết thúc',
            timepicker: true,
            // value: new Date(),
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
