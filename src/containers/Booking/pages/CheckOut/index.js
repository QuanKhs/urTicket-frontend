import React from 'react';

import Page from 'components/Page/Page'
import BookingSummary from 'containers/Booking/components/BookingSummary/BookingSummary'
import FormPromo from 'containers/Booking/components/FormPromo/FormPromo'
import Info from 'containers/Booking/components/Info/Info'
import Payment from 'containers/Booking/components/Payment/Payment'


export default function CheckOut() {
    return (
        <Page title="CheckOut | UR-TICKET">
            <div className=" check-payment mt-16" >
                <div className="check-payment__title text-center my-5">
                    <h2 className="text-5xl font-bold uppercase mb-3">Yeah! Almost finished</h2>
                    <p className="text-lg">We need your payment information to complete the booking</p>
                </div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4 mt-10">
                    <div className="col-span-2">
                        {/* <Info /> */}
                        {/* <FormPromo /> */}
                        <Payment />
                    </div>
                    <div className="">
                        <BookingSummary />
                    </div>
                </div>
            </div>
        </Page>
    )
}
