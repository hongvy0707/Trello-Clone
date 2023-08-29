/**
 * Order an array of objects based on another array & return a new Ordered Array
 * The original array will not be modified.
 * @param originalArray The original array of objects to be ordered
 * @param orderArray The array containing the order of keys
 * @param key The key to order
 * @returns New ordered array
 */
export const mapOrder = <T extends Record<string, any>>(
    originalArray: T[],
    orderArray: string[],
    key: keyof T
  ): T[] => {
    if (!originalArray || !orderArray || !key) return [];
  
    const clonedArray = [...originalArray];
    const orderedArray = clonedArray.sort((a, b) => {
      return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
    });
  
    return orderedArray;
  };
  
  /**
   * Example:
   */
  // const originalItems = [
  //   { id: 'id-1', name: 'One' },
  //   { id: 'id-2', name: 'Two' },
  //   { id: 'id-3', name: 'Three' },
  //   { id: 'id-4', name: 'Four' },
  //   { id: 'id-5', name: 'Five' }
  // ];
  // const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'];
  // const key = 'id';
  
  // const orderedArray = mapOrder(originalItems, itemOrderIds, key);
  // console.log('Original:', originalItems);
  // console.log('Ordered:', orderedArray);
  