const PopupShowEvent = (() => {
  const initPopup = webix
    .ui({
      view: 'window',
      id: 'popupShowEvent',
      head: 'Sự kiện',
      modal: true,
      position: 'center',
      width: 800,
      move: true,
      // on: {
      //   onShow: () => {
      //     $$('formAddEvent').clear();
      //     $$('eventTimeStart').setValue(new Date());
      //   },
      // },
      body: {
        view: 'form',
        id: 'formShowEvent',
        width: 700,
        elements: [
          {
            disabled: true,
            view: 'text',
            label: 'Tiêu đề',
            name: 'showEventTitle',
            id: 'showEventTitle',
            required: true,
          },
          {
            cols: [
              {
                width: 300,
                id: 'showEventTimeStart',
                view: 'datepicker',
                name: 'eventTimeStart',
                label: 'Bắt đầu',
                timepicker: true,
                value: new Date(),
                disabled: true,
              },

              { width: 30 },
              {
                labelWidth: 80,
                view: 'checkbox',
                disabled: true,
                id: 'showCheckboxAllDayEvent',
                customCheckbox: false,
                label: 'Trong ngày',
                value: false,
                on: {
                  // onChange: () => {
                  //   let isAllDay = $$('checkboxAllDayEvent').getValue();
                  //   if (isAllDay == 1) {
                  //     $$('eventTimeEnd').disable();
                  //   } else {
                  //     $$('eventTimeEnd').enable();
                  //   }
                  // },
                },
              },
            ],
          },
          {
            width: 300,
            disabled: true,
            id: 'showEventTimeEnd',
            view: 'datepicker',
            name: 'eventTimeEnd',
            label: 'Kết thúc',
            timepicker: true,
          },
          {
            id: 'showEventContent',
            disabled: true,
            view: 'textarea',
            label: 'Nội dung',
            name: 'eventContent',
            height: 200,
          },
          {
            margin: 5,
            cols: [
              {
                id: 'popupUpdateEventButton',
                view: 'button',
                value: 'Chỉnh sửa',
                css: 'webix_primary',
                on: {
                  onItemClick: () => {
                    let label = $$('popupUpdateEventButton').getValue();
                    if (label == 'Chỉnh sửa') {
                      enableEditEvent();
                      $$('popupUpdateEventButton').setValue('Lưu');
                    } else {
                      disableEditEvent();
                      $$('popupUpdateEventButton').setValue('Chỉnh sửa');
                    }
                  },
                },
              },
              {
                id: 'popupDeleteEventButton',
                view: 'button',
                value: 'Xóa sự kiện',
                css: 'webix_danger',
              },
              {
                view: 'button',
                value: 'Đóng',
                css: 'webix_secondary',
                on: {
                  onItemClick: () => {
                    $$('popupShowEvent').hide();
                  },
                },
              },
            ],
          },
        ],
      },
    })
    .show();

  const enableEditEvent = () => {
    let fields = [
      $$('showEventTitle'),
      $$('showEventTimeStart'),
      $$('showCheckboxAllDayEvent'),
      $$('showEventTimeEnd'),
      $$('showEventContent'),
    ];
    fields.forEach((e) => {
      e.enable();
      e.refresh();
    });
  };
  const disableEditEvent = () => {
    let fields = [
      $$('showEventTitle'),
      $$('showEventTimeStart'),
      $$('showCheckboxAllDayEvent'),
      $$('showEventTimeEnd'),
      $$('showEventContent'),
    ];
    fields.forEach((e) => {
      e.disable();
      e.refresh();
    });
  };
  return {
    initPopup,
  };
})();
