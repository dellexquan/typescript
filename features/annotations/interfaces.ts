interface Reportable {
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `
            Name : ${this.name},
            Year: ${this.year},
            Broken: ${this.broken}
        `
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `
            Color : ${this.color},
            Carbonated: ${this.carbonated},
            Sugar: ${this.sugar}
        `
    }
}

const printItem = (item: Reportable): void => {
    console.log(item.summary())
}

printItem(oldCivic)
printItem(drink)
