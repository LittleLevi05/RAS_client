import EventModel from '@/data/model/EventModel'

export default class Formula1Event extends EventModel {
    driver1Name = ""
    driver2Name = ""
    driver3Name = ""
    driver4Name = ""
    driver5Name = ""
    driver6Name = ""
    driver7Name = ""
    driver8Name = ""
    driver9Name = ""
    driver10Name = ""
    driver11Name = ""
    driver12Name = ""
    driver13Name = ""
    driver14Name = ""
    driver15Name = ""
    driver16Name = ""
    driver17Name = ""
    driver18Name = ""
    driver19Name = ""
    driver20Name = ""
    driver1Wins = 0
    driver2Wins = 0
    driver3Wins = 0
    driver4Wins = 0
    driver5Wins = 0
    driver6Wins = 0
    driver7Wins = 0
    driver8Wins = 0
    driver9Wins = 0
    driver10Wins = 0
    driver11Wins = 0
    driver12Wins = 0
    driver13Wins = 0
    driver14Wins = 0
    driver15Wins = 0
    driver16Wins = 0
    driver17Wins = 0
    driver18Wins = 0
    driver19Wins = 0
    driver20Wins = 0

    constructor(driver1Name, driver2Name, driver3Name, driver4Name, driver5Name, driver6Name, driver7Name, driver8Name, driver9Name, driver10Name, driver11Name, driver12Name, driver13Name, driver14Name, driver15Name, driver16Name, driver17Name, driver18Name, driver19Name, driver20Name, driver1Wins, driver2Wins, driver3Wins, driver4Wins, driver5Wins, driver6Wins, driver7Wins, driver8Wins, driver9Wins, driver10Wins, driver11Wins, driver12Wins, driver13Wins, driver14Wins, driver15Wins, driver16Wins, driver17Wins, driver18Wins, driver19Wins, driver20Wins, date) {
        super(date)

        this.driver1Name = driver1Name
        this.driver2Name = driver2Name
        this.driver3Name = driver3Name
        this.driver4Name = driver4Name
        this.driver5Name = driver5Name
        this.driver6Name = driver6Name
        this.driver7Name = driver7Name
        this.driver8Name = driver8Name
        this.driver9Name = driver9Name
        this.driver10Name = driver10Name
        this.driver11Name = driver11Name
        this.driver12Name = driver12Name
        this.driver13Name = driver13Name
        this.driver14Name = driver14Name
        this.driver15Name = driver15Name
        this.driver16Name = driver16Name
        this.driver17Name = driver17Name
        this.driver18Name = driver18Name
        this.driver19Name = driver19Name
        this.driver20Name = driver20Name
        this.driver1Wins = driver1Wins
        this.driver2Wins = driver2Wins
        this.driver3Wins = driver3Wins
        this.driver4Wins = driver4Wins
        this.driver5Wins = driver5Wins
        this.driver6Wins = driver6Wins
        this.driver7Wins = driver7Wins
        this.driver8Wins = driver8Wins
        this.driver9Wins = driver9Wins
        this.driver10Wins = driver10Wins
        this.driver11Wins = driver11Wins
        this.driver12Wins = driver12Wins
        this.driver13Wins = driver13Wins
        this.driver14Wins = driver14Wins
        this.driver15Wins = driver15Wins
        this.driver16Wins = driver16Wins
        this.driver17Wins = driver17Wins
        this.driver18Wins = driver18Wins
        this.driver19Wins = driver19Wins
        this.driver20Wins = driver20Wins
    }
}