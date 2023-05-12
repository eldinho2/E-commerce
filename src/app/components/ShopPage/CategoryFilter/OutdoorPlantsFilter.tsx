import CollapsibleList from "./CollapsibleList";

import Link from "next/link";


const OutdoorPlantsFilter = () => {
  return (
    <CollapsibleList tittle="Plantas externas">
      {
        <ul>
          <li>
            <Link href={'/shop/outdoorPlants'}>
            <p>Todas as Plantas Externas</p>
            </Link>
          </li>
          <li>
            <Link href={'/shop/medium'}>
            <p>Medias</p>
            </Link>
          </li>
          <li>
          <Link href={'/shop/big'}>
          <p>Grandes</p>
            </Link>
          </li>
          <li>
          <Link href={'/shop/outseeds'}>
          <p>Sementes</p>
            </Link>
          </li>
        </ul>
      }
    </CollapsibleList>
  );
};

export default OutdoorPlantsFilter;
