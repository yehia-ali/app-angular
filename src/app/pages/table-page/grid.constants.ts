export function generatedata(rowscount?: number): any[] {
  let data = new Array();
  if (rowscount == undefined) rowscount = 100;
  let names =
  [
      'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi'
  ];

  let addres =
  [
      'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase'
  ];

  let emails =
  [
      'ya@teest.com', 's@yahoo.com', 'Caffe@gmail.com', 'Doubleshot@f.io', 'ya@gmail.com'
  ];


  for (let i = 0; i < rowscount; i++) {
      let row = {};
      row['id'] = i;
      row['name'] = names[Math.floor(Math.random() * names.length)];
      row['address'] = addres[Math.floor(Math.random() * addres.length)];
      row['email'] = emails[Math.floor(Math.random() * emails.length)];
      data[i] = row;
  }

  return data;
}
