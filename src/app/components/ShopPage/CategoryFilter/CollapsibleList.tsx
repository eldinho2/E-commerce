'use client';

import { useState } from "react";

import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";

interface CollapsibleListProps {
  tittle: string;
    items?: string[];
    startCollapsed?: boolean;
    children: React.ReactNode
}

const CollapsibleList = (props: CollapsibleListProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const HandleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div>
      <h1 onClick={HandleIsCollapsed}>{isCollapsed ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}{props.tittle}</h1>
      { isCollapsed ? <div>{props.children}</div> : null }
    </div>
  )
}

export default CollapsibleList;