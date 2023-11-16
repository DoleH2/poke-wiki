import ReactPaginate from "react-paginate";
import "../scss/pagingstyle.scss";
import { useSelector } from "react-redux";
import { getPagePokemon } from "../redux/selectors/dataPokemonSelector";
export const Pagination = ({ maxPage, onChange }) => {
  const getCurrPage = useSelector(getPagePokemon);
  const handlePageChange = (page) => {
    onChange(page);
  };
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel={"..."}
      initialPage={getCurrPage}
      marginPagesDisplayed={2} //số trang hiển thị bên trái và phải của trang đang chọn
      pageCount={Math.ceil(maxPage)} //tổng số trang
      onPageChange={handlePageChange} //khi click sang trang xác sẽ xử lý
      containerClassName={"pagination"}
      activeClassName={"active"}
      renderOnZeroPageCount={null}
    />
  );
};
