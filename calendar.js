const CalendarModule = (() => {
  const initCalendar = () => {
    $$('rightLayout').addView({
      view: 'scrollview',
      id: 'scrollviewCalendar',
      scroll: 'xy',
      body: {
        id: 'calendar',
        view: 'template',
        template: `<div id="calendar"></div>`,
      },
    });
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'Asia/Ho_Chi_Minh',
      selectable: true,
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,today,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay addButton',
      },
      customButtons: {
        addButton: {
          text: 'Thêm',
          click: () => {
            $$('popupAddEvent').show();
          },
        },
      },
      eventClick: (info) => {
        showPopupEventInfo(info);
      },
      events: [
        {
          id: randomId(),
          title: 'All Day Event',
          start: '2023-02-01',
        },
        {
          id: randomId(),
          title: 'Long Event',
          start: '2023-02-07',
          end: '2023-02-10',
        },
        {
          id: randomId(),
          title: 'Conference',
          start: '2023-02-11',
          end: '2023-02-13',
          content: 'asd',
        },
        {
          id: randomId(),
          title: 'Lunch',
          start: '2023-02-12T12:00:00',
        },
        {
          id: randomId(),
          title: 'Meeting',
          start: '2023-02-12T14:30:00',
        },

        {
          id: randomId(),
          title: 'Birthday Party',
          start: '2023-02-13T07:00:00',
        },
      ],
    });

    calendar.render();
    $$('popupAddEventButton').attachEvent('onItemClick', () => {
      const event = $$('formAddEvent').getValues();
      console.log(event.eventTimeStart);
      console.log(event.eventTimeEnd);
      if (!$$('formAddEvent').validate()) return;
      calendar.addEvent({
        id: randomId(),
        title: event.eventTitle,
        start: event.eventTimeStart,
        end: event.eventTimeEnd || null,
        allDay: Boolean($$('checkboxAllDayEvent').getValue()) || false,
        content: $$('showEventContent').getValue() || '',
      });
      calendar.render();
      $$('popupAddEvent').hide();
      webix.message({
        text: 'Thêm thành công',
        type: 'success',
        expire: 2000,
      });
    });
    const attachOnClickToButtonEditEvent = () => {
      $$('popupUpdateEventButton').attachEvent('onItemClick', async () => {
        let label = $$('popupUpdateEventButton').getValue();
        if (label == 'Chỉnh sửa') {
          PopupShowEvent.enableEditEvent();
          $$('popupUpdateEventButton').setValue('Lưu');
        } else if (label == 'Lưu') {
          let confirm = await PopupShowEvent.showUpdateEventConfirm();
          console.log(confirm);
          if (confirm) {
            updateEventOnScheduler();
            $$('popupUpdateEventButton').setValue('Chỉnh sửa');
            PopupShowEvent.disableEditEvent();
          }
        }
      });
    };

    const attachOnClickToButtonDeleteEvent = () => {
      $$('popupDeleteEventButton').attachEvent('onItemClick', async () => {
        let confirm = await PopupShowEvent.showDeleteEventConfirm();
        if (!confirm) return;
        removeEvent();
        $$('popupShowEvent').hide();
      });
    };

    const removeEvent = () => {
      let oldEventData = $$('formShowEvent').getValues();
      let oldEvent = calendar.getEventById(oldEventData.showEventId);
      oldEvent.remove();
    };

    const updateEventOnScheduler = () => {
      let oldEventData = $$('formShowEvent').getValues();
      let oldEvent = calendar.getEventById(oldEventData.showEventId);
      if (!oldEventData || !oldEvent || !$$('formShowEvent').validate()) return;
      let clone = {
        id: oldEventData.showEventId,
        title: oldEventData.showEventTitle,
        start: oldEventData.showEventTimeStart,
        end: oldEventData.showEventTimeEnd || null,
        allDay: Boolean($$('showCheckboxAllDayEvent').getValue()) || false,
        content: oldEventData.showEventContent || '',
      };
      oldEvent.remove();
      calendar.addEvent(clone);

      $$('popupShowEvent').hide();
    };

    attachOnClickToButtonEditEvent();
    attachOnClickToButtonDeleteEvent();
  };

  const showPopupEventInfo = (info) => {
    let { title, hasEnd, publicId, allDay } = info.event._def;
    let { start, end } = info.event._instance.range;
    let { content } = info.event._def.extendedProps;
    $$('showEventId').setValue(publicId);
    $$('showEventTitle').setValue(title || '');
    $$('showEventTitle').setValue(title || '');
    $$('showEventTimeStart').setValue(start || null);
    hasEnd ? $$('showEventTimeEnd').setValue(end || null) : null;
    $$('showEventContent').setValue(content || '');
    $$('showCheckboxAllDayEvent').setValue(allDay);

    $$('popupShowEvent').show();
  };

  return {
    initCalendar,
  };
})();
