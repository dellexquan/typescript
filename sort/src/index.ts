import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

//const sorter = new Sorter(new NumbersCollection([10, 3, -5, 0]))
// const sorter = new Sorter(new CharactersCollection('swap'))
// sorter.sort()
// console.log(sorter.collection)

const numberCollection = new NumbersCollection([10, 3, -5, 0])
numberCollection.sort()
console.log(numberCollection)

const charactersCollection = new CharactersCollection('swap')
charactersCollection.sort()
console.log(charactersCollection)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()
