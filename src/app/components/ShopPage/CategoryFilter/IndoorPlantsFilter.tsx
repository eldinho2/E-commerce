'use client';

import CollapsibleList from "./CollapsibleList";

import Link from "next/link";

interface Props {
  quantity: Array<Array<Object>>;
}

const IndoorPlantsFilter = (props: Props) => {
  return (
    <CollapsibleList tittle="Plantas Internas">
      {
        <ul>
          <li>
          <Link href={'/shop/indoorPlants'} >
            <p>Todas as Plantas Internas</p>
            {<span>({props.quantity[0].length})</span>}
          </Link>
          </li>
          <li>
          <Link href={'/shop/smallPlants'}>
            <p>Pequenas</p>
            {<span>({props.quantity[1].length})</span>}
          </Link>
          </li>
          <li>
          <Link href={'/shop/flowers'}>
            <p>Flores</p>
            {<span>({props.quantity[2].length})</span>}
          </Link>
          </li>
          <li>
          <Link href={'/shop/seeds'}>
            <p>Sementes</p>
            {<span>({props.quantity[3].length})</span>}
          </Link>
          </li>
        </ul>
      }
    </CollapsibleList>
  );
};

export default IndoorPlantsFilter;
