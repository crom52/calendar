const PopupAddEvent = (() => {
  const initPopup = webix
    .ui({
      view: 'window',
      id: 'popupAddEvent',
      head: {
        view: 'toolbar',
        elements: [
          { id: 'labelAddEvent', view: 'label', label: 'Thêm sự kiện' },
          {
            id: 'closeAddEventButton',
            view: 'icon',
            icon: 'wxi-close',
            on: {
              onItemClick: () => {
                $$('popupAddEvent').hide();
              },
            },
          },
        ],
      },
      resize: true,
      modal: true,
      position: 'center',
      move: true,
      on: {
        onShow: () => {
          $$('formAddEvent').clear();
          $$('eventTimeStart').setValue(new Date());
        },
        onKeyPress: (code, event) => {
          if (code == 27) {
            $$('popupAddEvent').hide();
          }
        },
      },
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
                format: '%d/%m/%Y',
                name: 'eventTimeStart',
                label: 'Bắt đầu',
                timepicker: true,
                value: new Date(),
                required: true,
              },

              { width: 30 },
              {
                labelWidth: 80,
                view: 'checkbox',
                id: 'checkboxAllDayEvent',
                customCheckbox: false,
                label: 'Cả ngày',
                value: false,
                on: {
                  onChange: () => {
                    let isAllDay = $$('checkboxAllDayEvent').getValue();
                    if (isAllDay == 1) {
                      $$('eventTimeEnd').disable();
                      $$('eventTimeEnd').setValue(null);
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
            format: '%d/%m/%Y',
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
