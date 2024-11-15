/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Nov 2024
 * This program sends messages
*/

// set up
radio.setGroup(60)
basic.showIcon(IconNames.Happy)

// reciving
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

// ending
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// if too close
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    let objectDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (objectDistance < 10) {
        basic.showIcon(IconNames.Triangle)
        radio.sendString("you're too close")
        basic.showIcon(IconNames.Happy)
    }
})
