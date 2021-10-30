import ReactPaginate from "react-paginate";

const Opciones = ({ paginas, cambiarPagina }) => {
  const handlePageClick = (event) => {
    cambiarPagina(event.selected);
  };

  return (
    <div className="d-flex justify-content-center">
      <ReactPaginate
        nextLabel="Siguiente >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={paginas}
        previousLabel="< Anterior"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Opciones;
