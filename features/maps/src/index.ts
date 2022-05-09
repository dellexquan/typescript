import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

$(function () {
    const user = new User()
    console.log(user)
    $('#usermsg').text(user.summary())

    const company = new Company()
    console.log(company)
    $('#companymsg').text(company.summary())

    const map = new CustomMap('map')
    console.log(map)
    map.addMakrer(user)
    map.addMakrer(company)
    console.log(map.markers)
    console.log(map.displayMarkers())
    map.refresh()
})
