import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};


const MarketingMessage = styled.span`
  color: ${COLORS.white};
  flex-grow: 1;  
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  justify-content: space-around;
  padding: 8px 8px 8px 8px;

  ${SearchInput} {
    margin-left: 8px;
    }
${HelpLink} {
    margin-left: 8px;
    }

${UnstyledButton} {
    margin-left: 8px;
    }
  

  &:first-child {
    margin-left: 0px;
  }
}
 
  `;


export default SuperHeader;
