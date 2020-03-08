import * as React from 'react';
import * as icons from "./icons";
import { SVGIcon } from './SvgIcon';

export const ViewAllIcons = () => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) { color +=letters[Math.floor(Math.random() * 16)]; } return color; 
    }

    return (
        <div>
            ArrowMenu: <SVGIcon icon={ icons.ArrowMenu } fill={getRandomColor()} /> <br/>
            ArrowNavDown: <SVGIcon icon={ icons.ArrowNavDown } fill={getRandomColor()} /> <br/>
            ArrowNavLeft: <SVGIcon icon={ icons.ArrowNavLeft } fill={getRandomColor()} /> <br/>
            ArrowNavRight: <SVGIcon icon={ icons.ArrowNavRight } fill={getRandomColor()} /> <br/>
            ArrowNavUp: <SVGIcon icon={ icons.ArrowNavUp } fill={getRandomColor()} /> <br/>
            ArrowTrendDownLeft: <SVGIcon icon={ icons.ArrowTrendDownLeft } fill={getRandomColor()} /> <br/>
            ArrowTrendUpLeft: <SVGIcon icon={ icons.ArrowTrendUpLeft } fill={getRandomColor()} /> <br/>
            ArrowTriangleDown: <SVGIcon icon={ icons.ArrowTriangleDown } fill={getRandomColor()} /> <br/>
            ArrowTriangleLeft: <SVGIcon icon={ icons.ArrowTriangleLeft } fill={getRandomColor()} /> <br/>
            ArrowTriangleRight: <SVGIcon icon={ icons.ArrowTriangleRight } fill={getRandomColor()} /> <br/>
            ArrowTriangleUp: <SVGIcon icon={ icons.ArrowTriangleUp } fill={getRandomColor()} /> <br/>
            ArrowUpLeft: <SVGIcon icon={ icons.ArrowUpLeft } fill={getRandomColor()} /> <br/>
            ArrowUpRight: <SVGIcon icon={ icons.ArrowUpRight } fill={getRandomColor()} /> <br/>
            BeachChairPaid: <SVGIcon icon={ icons.BeachChairPaid } fill={getRandomColor()} /> <br/>
            BedExisting: <SVGIcon icon={ icons.BedExisting } fill={getRandomColor()} /> <br/>
            BedPropertyToGuest: <SVGIcon icon={ icons.BedPropertyToGuest } fill={getRandomColor()} /> <br/>
            BedSingle: <SVGIcon icon={ icons.BedSingle } fill={getRandomColor()} /> <br/>
            Bidet: <SVGIcon icon={ icons.Bidet } fill={getRandomColor()} /> <br/>
            BrandWallet: <SVGIcon icon={ icons.BrandWallet } fill={getRandomColor()} /> <br/>
            BunkBedSelected: <SVGIcon icon={ icons.BunkBedSelected } fill={getRandomColor()} /> <br/>
            CalendarCheckIn: <SVGIcon icon={ icons.CalendarCheckIn } fill={getRandomColor()} /> <br/>
            CalendarCheckOut: <SVGIcon icon={ icons.CalendarCheckOut } fill={getRandomColor()} /> <br/>
            CalendarNewYear: <SVGIcon icon={ icons.CalendarNewYear } fill={getRandomColor()} /> <br/>
            CheckIn: <SVGIcon icon={ icons.CheckIn } fill={getRandomColor()} /> <br/>
            CheckInEarly: <SVGIcon icon={ icons.CheckInEarly } fill={getRandomColor()} /> <br/>
            CheckOut: <SVGIcon icon={ icons.CheckOut } fill={getRandomColor()} /> <br/>
            CheckOutLate: <SVGIcon icon={ icons.CheckOutLate } fill={getRandomColor()} /> <br/>
            Checkmark: <SVGIcon icon={ icons.Checkmark } fill={getRandomColor()} /> <br/>
            CheckmarkDot: <SVGIcon icon={ icons.CheckmarkDot } fill={getRandomColor()} /> <br/>
            CheckmarkFill: <SVGIcon icon={ icons.CheckmarkFill } fill={getRandomColor()} /> <br/>
            CheckmarkSelected: <SVGIcon icon={ icons.CheckmarkSelected } fill={getRandomColor()} /> <br/>
            CircleHalf: <SVGIcon icon={ icons.CircleHalf } fill={getRandomColor()} /> <br/>
            Clean: <SVGIcon icon={ icons.Clean } fill={getRandomColor()} /> <br/>
            Close: <SVGIcon icon={ icons.Close } fill={getRandomColor()} /> <br/>
            Coral: <SVGIcon icon={ icons.Coral } fill={getRandomColor()} /> <br/>
            CreditCard: <SVGIcon icon={ icons.CreditCard } fill={getRandomColor()} /> <br/>
            CreditCardCrossed: <SVGIcon icon={ icons.CreditCardCrossed } fill={getRandomColor()} /> <br/>
            CreditCardFront: <SVGIcon icon={ icons.CreditCardFront } fill={getRandomColor()} /> <br/>
            Cut: <SVGIcon icon={ icons.Cut } fill={getRandomColor()} /> <br/>
            DiamondDown: <SVGIcon icon={ icons.DiamondDown } fill={getRandomColor()} /> <br/>
            DiamondFill: <SVGIcon icon={ icons.DiamondFill } fill={getRandomColor()} /> <br/>
            DiamondHalf: <SVGIcon icon={ icons.DiamondHalf } fill={getRandomColor()} /> <br/>
            DiamondUp: <SVGIcon icon={ icons.DiamondUp } fill={getRandomColor()} /> <br/>
            Dishwasher: <SVGIcon icon={ icons.Dishwasher } fill={getRandomColor()} /> <br/>
            DotsVertical: <SVGIcon icon={ icons.DotsVertical } fill={getRandomColor()} /> <br/>
            FoodAndDrink: <SVGIcon icon={ icons.FoodAndDrink } fill={getRandomColor()} /> <br/>
            FoodWaffle: <SVGIcon icon={ icons.FoodWaffle } fill={getRandomColor()} /> <br/>
            GeoPinHeart: <SVGIcon icon={ icons.GeoPinHeart } fill={getRandomColor()} /> <br/>
            GeoPinStar: <SVGIcon icon={ icons.GeoPinStar } fill={getRandomColor()} /> <br/>
            GiftCard: <SVGIcon icon={ icons.GiftCard } fill={getRandomColor()} /> <br/>
            Hour: <SVGIcon icon={ icons.Hour } fill={getRandomColor()} /> <br/>
            InstantConf: <SVGIcon icon={ icons.InstantConf } fill={getRandomColor()} /> <br/>
            Kaabaa: <SVGIcon icon={ icons.Kaabaa } fill={getRandomColor()} /> <br/>
            KeyboardSimple: <SVGIcon icon={ icons.KeyboardSimple } fill={getRandomColor()} /> <br/>
            LuggageStorage: <SVGIcon icon={ icons.LuggageStorage } fill={getRandomColor()} /> <br/>
            LunchPacked: <SVGIcon icon={ icons.LunchPacked } fill={getRandomColor()} /> <br/>
            Massage: <SVGIcon icon={ icons.Massage } fill={getRandomColor()} /> <br/>
            Minus: <SVGIcon icon={ icons.Minus } fill={getRandomColor()} /> <br/>
            Mountains: <SVGIcon icon={ icons.Mountains } fill={getRandomColor()} /> <br/>
            NightMarket: <SVGIcon icon={ icons.NightMarket } fill={getRandomColor()} /> <br/>
            Northernlights: <SVGIcon icon={ icons.Northernlights } fill={getRandomColor()} /> <br/>
            ParkingSignPaid: <SVGIcon icon={ icons.ParkingSignPaid } fill={getRandomColor()} /> <br/>
            PersonChild: <SVGIcon icon={ icons.PersonChild } fill={getRandomColor()} /> <br/>
            Pillow: <SVGIcon icon={ icons.Pillow } fill={getRandomColor()} /> <br/>
            Plus: <SVGIcon icon={ icons.Plus } fill={getRandomColor()} /> <br/>
            QuestionMark: <SVGIcon icon={ icons.QuestionMark } fill={getRandomColor()} /> <br/>
            ReviewTimeline: <SVGIcon icon={ icons.ReviewTimeline } fill={getRandomColor()} /> <br/>
            Sand: <SVGIcon icon={ icons.Sand } fill={getRandomColor()} /> <br/>
            SeparatorDotted: <SVGIcon icon={ icons.SeparatorDotted } fill={getRandomColor()} /> <br/>
            SignOut: <SVGIcon icon={ icons.SignOut } fill={getRandomColor()} /> <br/>
            SinglesDay: <SVGIcon icon={ icons.SinglesDay } fill={getRandomColor()} /> <br/>
            Slippers: <SVGIcon icon={ icons.Slippers } fill={getRandomColor()} /> <br/>
            SoftDrinksCoconut: <SVGIcon icon={ icons.SoftDrinksCoconut } fill={getRandomColor()} /> <br/>
            Solarium: <SVGIcon icon={ icons.Solarium } fill={getRandomColor()} /> <br/>
            Sparkles: <SVGIcon icon={ icons.Sparkles } fill={getRandomColor()} /> <br/>
            SpeechBubbleEmail: <SVGIcon icon={ icons.SpeechBubbleEmail } fill={getRandomColor()} /> <br/>
            SportsKitesurfing: <SVGIcon icon={ icons.SportsKitesurfing } fill={getRandomColor()} /> <br/>
            SportsRunning: <SVGIcon icon={ icons.SportsRunning } fill={getRandomColor()} /> <br/>
            Square: <SVGIcon icon={ icons.Square } fill={getRandomColor()} /> <br/>
            StarDown: <SVGIcon icon={ icons.StarDown } fill={getRandomColor()} /> <br/>
            StarHalf: <SVGIcon icon={ icons.StarHalf } fill={getRandomColor()} /> <br/>
            StarOutline: <SVGIcon icon={ icons.StarOutline } fill={getRandomColor()} /> <br/>
            StarUp: <SVGIcon icon={ icons.StarUp } fill={getRandomColor()} /> <br/>
            SwitchProperty: <SVGIcon icon={ icons.SwitchProperty } fill={getRandomColor()} /> <br/>
            TransportBikeFee: <SVGIcon icon={ icons.TransportBikeFee } fill={getRandomColor()} /> <br/>
            TransportCarDoor: <SVGIcon icon={ icons.TransportCarDoor } fill={getRandomColor()} /> <br/>
            TransportCarSeat: <SVGIcon icon={ icons.TransportCarSeat } fill={getRandomColor()} /> <br/>
            TransportShuttle: <SVGIcon icon={ icons.TransportShuttle } fill={getRandomColor()} /> <br/>
            TransportShuttleFee: <SVGIcon icon={ icons.TransportShuttleFee } fill={getRandomColor()} /> <br/>
            Update: <SVGIcon icon={ icons.Update } fill={getRandomColor()} /> <br/>
            ValetParking: <SVGIcon icon={ icons.ValetParking } fill={getRandomColor()} /> <br/>
            WaveOne: <SVGIcon icon={ icons.WaveOne } fill={getRandomColor()} /> <br/>
            WaveThree: <SVGIcon icon={ icons.WaveThree } fill={getRandomColor()} /> <br/>
            WaveTwo: <SVGIcon icon={ icons.WaveTwo } fill={getRandomColor()} /> <br/>
        </div>
    )
}