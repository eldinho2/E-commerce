import CollapsibleList from "./CollapsibleList";

import Link from "next/link";

interface Props {
  quantity: Array<Array<Object>>;
}

const OutdoorPlantsFilter = (props:Props) => {  
  return (
    <CollapsibleList tittle="Plantas externas">
      {
        <ul>
          <li>
            <Link href={'/shop/outdoorPlants'}>
            <p>Todas as Plantas Externas</p>
            {<span>({props.quantity[4].length})</span>}
            </Link>
          </li>
          <li>
            <Link href={'/shop/medium'}>
            <p>Medias</p>
            {<span>({props.quantity[5].length})</span>}
            </Link>
          </li>
          <li>
          <Link href={'/shop/big'}>
          <p>Grandes</p>
          {<span>({props.quantity[6].length})</span>}
            </Link>
          </li>
          <li>
          <Link href={'/shop/outseeds'}>
          <p>Sementes</p>
          {<span>({props.quantity[7].length})</span>}
            </Link>
          </li>
        </ul>
      }
    </CollapsibleList>
  );
};

export default OutdoorPlantsFilter;
