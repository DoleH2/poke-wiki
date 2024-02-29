import ReactPaginate from "react-paginate";
import "../../scss/pagingstyle.scss";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Pagination = ({ maxPage, onChange, curPage, changeErrPage }) => {
  let navigate = useNavigate();
  const changeRouter = (path, data) => {
    navigate(path, { state: data });
  };
  const handlePageChange = (page) => {
    onChange(page);
  };
  useEffect(() => {
    if (maxPage === 0) return
    if (
      curPage > maxPage ||
      !Number.isInteger(Number(curPage)) ||
      curPage < 1
    ) {
      changeRouter("/inventory/1");
    }
  }, [curPage]);
  return (
    <>
      {
        (curPage > maxPage) ||
          !Number.isInteger(Number(curPage)) ||
          curPage < 1 ? (<></>) : <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel={"..."}
          // initialPage={curPage - 1}
          marginPagesDisplayed={2} //số trang hiển thị bên trái và phải của trang đang chọn
          pageCount={Math.ceil(maxPage)} //tổng số trang
          onPageChange={handlePageChange} //khi click sang trang xác sẽ xử lý
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={curPage - 1} // theo dõi currentpage được cập nhật
        />
      }
    </>


  );
};
