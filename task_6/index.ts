interface ITile {
    name: string       // tile title
    price: number      // tile price
    isActive: boolean  // tile status
}

interface IResult {
  totalPriceSum: number,   // summary price of all active tiles
  tileCount: number        // summary active tile's amount
  averagePriceSum: number  // average price amount of all active tiles
}

// array of available tiles
const tileArr: Array<ITile> = [
    {
        name: 'tile_1',
        price: 70,
        isActive: true
    },
    {
        name: 'tile_2',
        price: 50,
        isActive: false
    },
    {
        name: 'tile_3',
        price: 20,
        isActive: true
    },
    {
        name: 'tile_4',
        price: 110,
        isActive: true
    },
    {
        name: 'tile_5',
        price: 85,
        isActive: true
    },
    {
        name: 'tile_6',
        price: 25,
        isActive: false
    },
    {
        name: 'tile_7',
        price: 5,
        isActive: true
    },
];

const getResult = (tiles: ITile[]): IResult => {
    const activeTiles: ITile[] = tiles.filter((tile: ITile) => tile.isActive);
    const totalPriceSum: number = activeTiles.reduce((acc: number, tile: ITile) => {return tile.price + acc}, 0);
    const tileCount: number = activeTiles.length;
    const averagePriceSum: number = totalPriceSum / tileCount;
    return {totalPriceSum, tileCount, averagePriceSum};
}
// write You code here
const result: IResult = getResult(tileArr);

