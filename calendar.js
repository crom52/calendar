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
      events: [
        {
          title: 'All Day Event',
          start: '2023-02-01',
        },
        {
          title: 'Long Event',
          start: '2023-02-07',
          end: '2023-02-10',
        },
        {
          title: 'Conference',
          start: '2023-02-11',
          end: '2023-02-13',
        },
        {
          title: 'Lunch',
          start: '2023-02-12T12:00:00',
        },
        {
          title: 'Meeting',
          start: '2023-02-12T14:30:00',
        },
        {
          title: 'Happy Hour',
          start: '2023-02-12T17:30:00',
        },
        {
          title: 'Dinner',
          start: '2023-02-12T20:00:00',
        },
        {
          title: 'Birthday Party',
          start: '2023-02-13T07:00:00',
        },
      ],
    });
    calendar.render();
    $$('popupAddEventButton').attachEvent('onItemClick', () => {
      const event = $$('formAddEvent').getValues();
      if (!$$('formAddEvent').validate()) return;
      calendar.addEvent({
        title: event.eventTitle,
        start: event.eventTimeStart,
        end: event.eventTimeEnd,
        allDay: Boolean($$('checkboxAllDayEvent').getValue()),
      });
      $$('popupAddEvent').hide();
      webix.message({
        text: 'Thêm thành công',
        type: 'success',
        expire: 2000,
      });
    });
  };

  return {
    initCalendar,
  };
})();
