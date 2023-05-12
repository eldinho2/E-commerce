'use client';

import CollapsibleList from "./CollapsibleList";

import Link from "next/link";

const IndoorPlantsFilter = () => {
  return (
    <CollapsibleList tittle="Plantas Internas">
      {
        <ul>
          <li>
          <Link href={'/shop/indoorPlants'} >
            <p>Todas as Plantas Internas</p>
          </Link>
          </li>
          <li>
          <Link href={'/shop/smallPlants'}>
            <p>Pequenas</p>
          </Link>
          </li>
          <li>
          <Link href={'/shop/flowers'}>
            <p>Flores</p>
          </Link>
          </li>
          <li>
          <Link href={'/shop/seeds'}>
            <p>Sementes</p>
          </Link>
          </li>
        </ul>
      }
    </CollapsibleList>
  );
};

export default IndoorPlantsFilter;
