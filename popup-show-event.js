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
      body: {
        view: 'form',
        id: 'formShowEvent',
        width: 700,
        elements: [
          {
            id: 'showEventId',
            name: 'showEventId',
            view: 'text',
            value: '',
            hidden: true,
          },
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
                name: 'showEventTimeStart',
                required: true,
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
                label: 'Cả ngày',
                value: false,
                on: {
                  onChange: () => {
                    let isAllDay = $$('showCheckboxAllDayEvent').getValue();
                    if (isAllDay == 1) {
                      $$('showEventTimeEnd').disable();
                    } else {
                      $$('showEventTimeEnd').enable();
                    }
                  },
                },
              },
            ],
          },
          {
            width: 300,
            disabled: true,
            id: 'showEventTimeEnd',
            view: 'datepicker',
            name: 'showEventTimeEnd',
            label: 'Kết thúc',
            timepicker: true,
          },
          {
            id: 'showEventContent',
            disabled: true,
            view: 'textarea',
            label: 'Nội dung',
            name: 'showEventContent',
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
              },
              {
                id: 'popupDeleteEventButton',
                view: 'button',
                value: 'Xóa sự kiện',
                css: 'webix_danger',
                on: {
                  onItemClick: async () => {
                    let confirm = await showDeleteEventConfirm();
                    console.log(confirm);

                    if (confirm) {
                    }
                  },
                },
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
    .hide();

  const showUpdateEventConfirm = async () => {
    let rs;
    await webix
      .confirm({
        ok: 'Xác nhận',
        cancel: 'Hủy',
        text: 'Bạn có muốn cập nhật sự kiện không ?',
      })
      .then(function (result) {
        rs = result;
      })
      .fail(function () {
        rs = false;
      });
    return rs;
  };
  const showDeleteEventConfirm = async () => {
    let rs;
    await webix
      .confirm({
        ok: 'Xác nhận',
        cancel: 'Hủy',
        text: 'Bạn có chắc muốn xóa sự kiện?',
      })
      .then(function (result) {
        rs = result;
      })
      .fail(function () {
        rs = false;
      });
    return rs;
  };

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
    let isAllDay = $$('showCheckboxAllDayEvent').getValue();
    if (isAllDay == 1) {
      $$('showEventTimeEnd').disable();
    }
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
    showUpdateEventConfirm,
    disableEditEvent,
    enableEditEvent,
  };
})();
