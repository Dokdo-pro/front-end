import React from 'react';
import * as MB from './MoreButton.styled';

function MoreButton() {
  return (
    <MB.Container>
      <MB.Border>
        <MB.Button>더보기</MB.Button>
      </MB.Border>
    </MB.Container>
  );
}
export default MoreButton;
