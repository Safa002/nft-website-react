import React from "react";

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";

import "../styles/create-item.css";

const item = {
  id: "01",
  title: "Guard",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 7.89,
};

const Create = () => {
  return (
    <>
      <CommonSection title="Yarat" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">İlkin Baxış</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Fayl yüklə</label>
                    <input type="file" className="upload__input" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Qiymət</label>
                    <input
                      type="number"
                      placeholder="Bir element üçün qiymət daxil edin (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Təklif</label>
                    <input type="number" placeholder="Minimum təklifi daxil edin" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Başlanğıc tarixi</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Son tarix</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Başlıq</label>
                    <input type="text" placeholder="Başlıq daxil edin" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Açıqlama</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Açıqlama daxil edin"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
