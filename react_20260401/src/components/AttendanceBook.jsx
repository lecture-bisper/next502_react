//  AttendanceBook.jsx

const students = [
  { id: 1, name: 'Inje' },
  { id: 2, name: 'Steve' },
  { id: 3, name: 'Bill' },
  { id: 4, name: 'Jeff' },
];

function AttendanceBook() {
  return (
    <div>
      <ul className={'list-group'}>
        {students.map((student) => {
          return <li className={'list-group-item'} key={student.id}>{student.name}</li>
        })}
      </ul>
    </div>
  );
}

export default AttendanceBook;