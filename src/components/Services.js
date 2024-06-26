import React from "react";
import styled from "@emotion/styled";

const SectionTitles = styled.div`
  font-size: 12pt;
  color: #646363;
  font-family: system-ui;
  margin-bottom: 50px;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const SectionHeading = styled.div`
  font-size: 35pt;
  color: black;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`;
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #6e6e6e;
  margin-bottom: 50px;
  margin-left: 23px;
  margin-right: 23px;
`;

const Description = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

const ItemsTitle = styled.div`
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
const Logo = styled.i`
  border-radius: 50%;
  padding: 7px 10px 7px 10px;
  color: lightgray;
  background-color: #1e3f68;
  font-size: 25px;
  margin-top: 30px;
`;

const XLargeColService = ({ title, description }) => {
  return (
    <>
      <div className="col-12 col-sm-6 mb-4 d-none d-xl-block">
        <div className="row">
          <div className="col-2 mb-4">
            <Logo className="bi bi-bookmark-check" />
          </div>

          <div className="col-10">
            <ItemsTitle>{title}</ItemsTitle>
            <Description>{description}</Description>
          </div>
        </div>
      </div>
    </>
  );
};
const ColService = ({ title, description }) => {
  return (
    <>
      <div className="col-12 col-sm-6 mb-4 d-block d-xl-none">
        <div className="row">
          <div className="col-2 mb-4">
            <Logo className="bi bi-bookmark-check" />
          </div>
          <div className="row">
            <div className="col-10">
              <ItemsTitle>{title}</ItemsTitle>
              <Description>{description}</Description>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <SectionTitles className="text-center text-uppercase">
        Services
      </SectionTitles>
      <SectionHeading>WHAT WE OFFER</SectionHeading>
      <SectionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SectionDescription>

      <div className="container padding-small">
        <div className="row">
          <ColService
            title="Vehicles Detailing"
            description="We detail Vehicles, motorhomes, boats, trailers, commercial equipment and more."
          />
          <XLargeColService
            title="Vehicles Detailing"
            description="We detail Vehicles, motorhomes, boats, trailers, commercial equipment and more."
          />
          <ColService
            title="Boats Detailing"
            description="We detail Vehicles, motorhomes, boats, trailers, commercial equipment and more."
          />
          <XLargeColService
            title="Boats Detailing"
            description="We detail Vehicles, motorhomes, boats, trailers, commercial equipment and more."
          />
          <ColService
            title="RV/ Trailer Detailing"
            description="We detail Vehicles, motorhomes, boats, trailers, commercial equipment and more."
          />
          <XLargeColService
            title="RV/ Trailer Detailing"
            description="We detail Vehicles, motorhomes, boats, trailers, commercial equipment and more."
          />
          <ColService
            title="Paint Protection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Paint Protection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />

          <ColService
            title="Fabric Protection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Fabric Protection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />
          <ColService
            title="Leather Protection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Leather Protection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />

          <ColService
            title="Decal Removal"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Decal Remover"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />
          <ColService
            title="Ceramic Coating"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Ceramic Coating"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />
          <ColService
            title="Paint Correction"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Paint Correction"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />
          <ColService
            title="Headlights restoration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua."
          />
          <XLargeColService
            title="Headlights restoration"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
