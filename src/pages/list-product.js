import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { productService } from '../services';
import { NotFound } from '../assets';
import './product.css';
// import { getCookie } from '../utils/cookie';

const ListProduct = () => {
  const [data, setData] = useState([]);
  const [limit] = useState(12);
  const [offset, setOffSet] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    productService
      .getProduct(limit, offset, search)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {});
  }, [limit, offset, search]);

  const listPro = data.map((produk) => {
    return (
      <>
        {/* <div className="container py-3">
          <div className="row">
            {posts.slice(pagination.start, pagination.end).map((post) => ( */}
        <div className="col-md-3 mb-3" key={produk.id}>
          <div className="card">
            <div className="card-body">
              <div>
                <img
                  id="pro-img"
                  src={
                    produk.variants[0].images[0] ?
                      produk.variants[0].images[0].original_url :
                      NotFound
                  }
                  alt={produk.id}
                />
              </div>
              <p>{produk.name}</p>
              <p>{produk.display_normal_price}</p>
              <p>{produk.display_price}</p>
            </div>
          </div>
        </div>
        {/* ))}
          </div>
        </div> */}
        {/* <li>
          <h1>{produk.name}</h1>
        </li>
        <li>{produk.display_normal_price}</li>
        <li>{produk.display_price}</li> */}
      </>
    );
  });
  // console.log(data[0].images.length);
  return (
    <div>
      <div className="pro-title">
        <h1> List Product </h1>
        {/* <label>Cari</label> */}
        <input
          placeholder="apa yang anda cari?"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="container py-3">
        <div className="row">{listPro}</div>
      </div>

      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={4}
        onPageChange={(e) => {
          setOffSet(e.selected * limit);
        }}
        containerClassName="pagination-product"
        activeClassName="active"
      />
    </div>
  );
};

export default ListProduct;
