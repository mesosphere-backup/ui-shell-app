import React from "react";
import styled, { css, cx } from "react-emotion";

const ResetButton = styled("button")`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
`;

const tempIconCls = css`
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding: 0;
`;

interface ResetButtonProps {
  className?: string;
  onClick?: () => void;
}

export default (props: ResetButtonProps) => {
  const { className } = props;

  return (
    <ResetButton {...props} className={cx(className, tempIconCls)}>
      ☰
    </ResetButton>
  );
};
