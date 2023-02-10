const Grid = (() => {
  const grid = {
    view: 'datatable',
    scrollY: true,
    height: 700,
    minHeight: 400,
    select: 'row',
    editable: true,
    editaction: 'dblclick',
    css: 'webix_header_border webix_data_border highlight',
    columns: [
      { id: 'id', header: 'ID', width: 100 },
      { id: 'name', editor: 'text', header: 'Name', fillspace: true },
      {
        id: 'grade',
        editor: 'text',
        editor: 'text',
        header: 'Grade',
        width: 100,
      },
      {
        id: 'phone',
        editor: 'text',
        editor: 'text',
        header: 'Phone',
        width: 150,
      },
      {
        id: 'type',
        editor: 'text',
        editor: 'text',
        header: 'Type',
        width: 150,
      },
    ],
    data: [
      {
        id: 1,
        name: 'John Doe',
        grade: 'A',
        phone: '555-555-1234',
        type: 'Student',
      },
      {
        id: 2,
        name: 'Jane Doe',
        grade: 'B',
        phone: '555-555-5678',
        type: 'Teacher',
      },
      {
        id: 3,
        name: 'James Smith',
        grade: 'C',
        phone: '555-555-9012',
        type: 'Student',
      },
      {
        id: 4,
        name: 'Emily Johnson',
        grade: 'A',
        phone: '555-555-3456',
        type: 'Teacher',
      },
      {
        id: 5,
        name: 'William Brown',
        grade: 'B',
        phone: '555-555-7890',
        type: 'Student',
      },
      {
        id: 6,
        name: 'Michael Davis',
        grade: 'A',
        phone: '555-555-2345',
        type: 'Teacher',
      },
      {
        id: 7,
        name: 'Sarah Wilson',
        grade: 'C',
        phone: '555-555-6789',
        type: 'Student',
      },
      {
        id: 8,
        name: 'David Jones',
        grade: 'B',
        phone: '555-555-0123',
        type: 'Teacher',
      },
      {
        id: 9,
        name: 'Jessica Lee',
        grade: 'A',
        phone: '555-555-4567',
        type: 'Student',
      },
      {
        id: 10,
        name: 'Christopher Wilson',
        grade: 'C',
        phone: '555-555-8901',
        type: 'Teacher',
      },
    ],
  };

  const initUI = () => {
    return webix.ui(grid);
  };
  return { initUI };
})();
