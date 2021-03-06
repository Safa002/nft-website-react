import React, { useState } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/Nft-card/NftCard";

import { NFT__DATA } from "../assets/data/data";

import { Container, Row, Col } from "reactstrap";

import "../styles/market.css";

const Market = () => {
  const [data, setData] = useState(NFT__DATA);

  const handleCategory = () => {};

  const handleItems = () => {};

  // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );

      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
      );

      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"Market"} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>Bütün kateqoriyalar</option>
                      <option value="art">Rəsm</option>
                      <option value="music">Musiqi</option>
                      <option value="domain-name">Domain Adı</option>
                      <option value="virtual-world">Virtual Dünya</option>
                      <option value="trending-card">Trendlər</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <select onChange={handleItems}>
                      <option>Hamısı</option>
                      <option value="single-item">Tək element</option>
                      <option value="bundle">Bağlama</option>
                    </select>
                  </div>
                </div>

                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sırala</option>
                    <option value="high">Yüksək reytinq</option>
                    <option value="mid">Orta reytinq</option>
                    <option value="low">Aşağı reytinq</option>
                  </select>
                </div>
              </div>
            </Col>

            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
