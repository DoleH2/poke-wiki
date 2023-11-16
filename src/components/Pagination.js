import ReactPaginate from 'react-paginate';
import '../scss/pagingstyle.scss';
export const Pagination = ({ maxPage, onChange }) => {
    const handlePageChange = (page) => {
        onChange(page);
    }
    return (
        <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakLabel={'...'}
            marginPagesDisplayed={2}//số trang hiển thị bên trái và phải của trang đang chọn
            pageCount={maxPage}//tổng số trang
            onPageChange={handlePageChange}//khi click sang trang xác sẽ xử lý
            containerClassName={'pagination'}
            activeClassName={'active'}
            renderOnZeroPageCount={null}
        />
    )
}