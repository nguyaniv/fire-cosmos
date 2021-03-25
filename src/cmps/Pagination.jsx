import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage,scrollToProducts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    
      <ul className='pagination'>
        {pageNumbers.map(number => (
            
          <li key={number} className='page-item'>
            <button  onClick={() =>{scrollToProducts()
             paginate(number)}}
             href='!#' className={number === currentPage ? 'current-page':'page-link'}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    
  );
};

export default Pagination;
