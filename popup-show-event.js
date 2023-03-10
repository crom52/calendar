const PopupShowEvent = (() => {
  const initPopup = webix
    .ui({
      view: 'window',
      id: 'popupShowEvent',
      on: {
        onShow: () => {
          disableEditEvent();
        },
        onKeyPress: (code, event) => {
          if (code == 27) {
            $$('popupShowEvent').hide();
          }
        },
      },
      head: {
        view: 'toolbar',
        elements: [
          { id: 'labelShowEvent', view: 'label', label: 'Sự kiện' },
          {
            id: 'closeShowEventButton',
            view: 'icon',
            icon: 'wxi-close',
            on: {
              onItemClick: () => {
                $$('popupShowEvent').hide();
              },
            },
          },
        ],
      },
      resize: true,
      modal: true,
      position: 'center',
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
                format: '%d/%m/%Y',
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
                      $$('showEventTimeEnd').setValue(null);
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
            format: '%d/%m/%Y',
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
    $$('popupUpdateEventButton').setValue('Lưu');
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
    $$('popupUpdateEventButton').setValue('Chỉnh sửa');
  };
  return {
    initPopup,
    showUpdateEventConfirm,
    showDeleteEventConfirm,
    disableEditEvent,
    enableEditEvent,
  };
})();
