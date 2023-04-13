import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

describe( "Booking form component", () => {
  it( "should render Booking form component correctly", () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <BookingForm />
        </BrowserRouter>
      </RecoilRoot>
    );

    const formElement = screen.getByTestId( "booking-form" );
    expect( formElement ).toBeInTheDocument();
  } );
} );