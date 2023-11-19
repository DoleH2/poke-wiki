import ReactPaginate from "react-paginate";
import "../scss/pagingstyle.scss";
import { useSelector } from "react-redux";
import { getPagePokemon } from "../redux/selectors/dataPokemonSelector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Pagination = ({ maxPage, onChange, curPage }) => {
  let navigate = useNavigate();
  const changeRouter = (path, data) => {
    navigate(path, { state: data });
  };

  const handlePageChange = (page) => {
    onChange(page);
  };
  useEffect(() => {
    if (
      curPage - 1 > maxPage ||
      !Number.isInteger(Number(curPage)) ||
      curPage < 1
    ) {
      console.log("vao");
      changeRouter("/error");
    }
  }, []);
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel={"..."}
      initialPage={curPage - 1}
      marginPagesDisplayed={2} //số trang hiển thị bên trái và phải của trang đang chọn
      pageCount={Math.ceil(maxPage)} //tổng số trang
      onPageChange={handlePageChange} //khi click sang trang xác sẽ xử lý
      containerClassName={"pagination"}
      activeClassName={"active"}
      renderOnZeroPageCount={null}
    />
  );
};
