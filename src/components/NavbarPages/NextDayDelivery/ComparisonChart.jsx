// import React from "react";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #0057b8;
  margin-bottom: 10px;
  /* background-color: red; */
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  background-color: #0057b8;
  color: white;
  font-size: 18px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;

  &:first-child {
    text-align: left;
    background-color: #f2f2f2;
    font-weight: bold;
  }

  &:nth-child(2) {
    background-color: #ffe699;
  }

  &:nth-child(3) {
    background-color: #ffcc99;
  }

  &:nth-child(4) {
    background-color: #ff9999;
  }

  &:nth-child(5) {
    background-color: #ccccff;
  }
`;

const TickMark = styled.span`
  color: green;
  font-weight: bold;
`;

const ComparisonChart = () => {
  return (
    <ChartContainer>
      <Heading>Comparison Chart</Heading>
      <Subheading>
        See how Yale Appliance matches up to some of the biggest names offering
        Free* Delivery
      </Subheading>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Service Offering</TableHeader>
            <TableHeader>Yale Appliance</TableHeader>
            <TableHeader>Home Depot</TableHeader>
            <TableHeader>Lowes</TableHeader>
            <TableHeader>Best Buy</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>
              Estimated cost of a 4-piece Kitchen delivery including removal and
              set up
            </TableCell>
            <TableCell>$199.99</TableCell>
            <TableCell>$200.00</TableCell>
            <TableCell>$200.00</TableCell>
            <TableCell>$239.95</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery Window: how many hours</TableCell>
            <TableCell>2 Hours</TableCell>
            <TableCell>4 Hours</TableCell>
            <TableCell>6 Hours</TableCell>
            <TableCell>6 Hours</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Day of Delivery Tracking</TableCell>
            <TableCell>
              <TickMark>✓</TickMark>
            </TableCell>
            <TableCell>
              <TickMark>✓</TickMark>
            </TableCell>
            <TableCell>
              <TickMark>✓</TickMark>
            </TableCell>
            <TableCell>
              <TickMark>✓</TickMark>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery includes stairs and multiple floors</TableCell>
            <TableCell>$0.00 / piece</TableCell>
            <TableCell>$50.00 / piece</TableCell>
            <TableCell>$50.00 / piece</TableCell>
            <TableCell>$50.00 / piece</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Removal of old, disconnected appliances</TableCell>
            <TableCell>
              <TickMark>✓</TickMark>
            </TableCell>
            <TableCell>Additional Fee</TableCell>
            <TableCell>Additional Fee</TableCell>
            <TableCell>Additional Fee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Floor protection for heavy items</TableCell>
            <TableCell>
              <TickMark>✓</TickMark>
            </TableCell>
            <TableCell>Additional Fee</TableCell>
            <TableCell>Additional Fee</TableCell>
            <TableCell>Additional Fee</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Single Delivery</TableCell>
            <TableCell>$199.99</TableCell>
            <TableCell>Free* over $365</TableCell>
            <TableCell>Free* over $45</TableCell>
            <TableCell>Free* over $50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Multiple Delivery</TableCell>
            <TableCell>One Fee, multiplied</TableCell>
            <TableCell>One Fee, multiplied</TableCell>
            <TableCell>One Fee, multiplied</TableCell>
            <TableCell>One Fee, multiplied</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </ChartContainer>
  );
};

export default ComparisonChart;
