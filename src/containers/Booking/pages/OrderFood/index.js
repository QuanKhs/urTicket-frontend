import Page from 'components/Page/Page';
import Food from 'containers/Booking/components/Food/Food'
import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner';
import React from 'react';
import './OrderFood.scss';

export default function OrderFood() {
    return (
        <Page title="Order Food | UR-TICKET">
            <div className="order-food pb-10 mt-16" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="order-food__title">
                    <h2>we have food</h2>
                    <p className="text-lg">Pre-order Your Meal and Save More!</p>
                </div>
                <div className="order-food__wrapper max-w-screen-xl mx-auto grid grid-cols-3 gap-6">
                    <div className="py-8">
                        <MovieSummaryBanner />
                    </div>
                    <div className="menu col-span-2 ">
                        <Food />
                    </div>
                </div>
            </div>
        </Page>
    )
}
