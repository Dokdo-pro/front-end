import React from 'react';
import { Link } from 'react-router-dom';
import * as MB from '@/components/common/morebutton/MoreButton.styled';


interface MoreButtonProps {
  to: string;
  children: React.ReactNode;
}

function MoreButton({ to, children }: MoreButtonProps) {
  return (
    <MB.Border>
      <Link to={to}>
        <MB.Button>{children}</MB.Button>
      </Link>
    </MB.Border>
  );
}

export default MoreButton;