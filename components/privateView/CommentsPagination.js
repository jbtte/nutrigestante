import Pagination from 'react-bootstrap/Pagination'

export default function CommentsPagination ({active, setActive, numComments}) {
  let items = [];

  for (let number = 1; number <= (numComments/5+1); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className="d-flex justify-content-around">
      <Pagination size="sm">{items}</Pagination>
    </div>
  )
}