/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';

const PRODUCT_DATA = [
  { id: null, value: '상품을 선택하세요.' },
  { id: '0001', value: '딸기 100g' },
  { id: '0002', value: '포도 100g' },
  { id: '0003', value: '방울토마토 100g' },
  { id: '0004', value: '블루베리 100g' },
  { id: '0005', value: '홍시 100g' },
  { id: '0006', value: '귤 100g' },
  { id: '0007', value: '금귤 100g' },
  { id: '0008', value: '라즈베리 100g' },
];

function Bank() {
  const [selectedDropValue, setSelectedDropValue] =
    useState('상품을 선택하세요.');
  const handleDropProduct = e => {
    const { value } = e.target;
    setSelectedDropValue(PRODUCT_DATA.filter(el => el.value === value)[0].id);
  };

  return (
    <S.ProductNameContainer>
    <S.Product>상품명 *</S.Product>
    <S.ProductBar>
        <S.ProductSearch onChange={handleDropProduct}>
        {PRODUCT_DATA.map(el => {
            return <option key={el.id}>{el.value}</option>;
        })}
        </S.ProductSearch>
    </S.ProductBar>
    <S.ProductCode>
        <S.Code>상품 코드</S.Code>
        <S.ShowingCode>{selectedDropValue}</S.ShowingCode>
    </S.ProductCode>
    </S.ProductNameContainer>
    );
};

export default Bank;