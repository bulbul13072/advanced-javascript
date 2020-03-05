const students =[
    {id:21, name: 'Omar Sunny'},
    {id:31, name: 'Mannaaaaa'},
    {id:41, name: 'Moyouri'},
    {id:71, name: 'DeepJol'},
];
const names = students.map(s => s.name);
const iDs = students.map(s=> s.id);
// const filters = students.filter(s=> s.id > 40);
const filters = students.find(s=> s.id > 40);
console.log(filters);
