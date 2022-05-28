export interface ReservationTypeDetails {
    stay: {
        arrivalDate: string,
        departureDate: string
    },
    room: {
        roomSize: string,
        roomQuantity: number
    },
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    addressStreet: {
        streetName: string,
        streetNumber: string
    },
    addressLocation: {
        zipCode: string,
        state: string,
        city: string
    },
    extras: Array<string>
    payment: string,
    note: string,
    tags:Array<string>,
    reminder: false,
    newsletter: false,
    confirm: false
     
};


export interface stateContexType {
    reservations:Array<ReservationTypeDetails> | [],
    selectedReservatio:ReservationTypeDetails  | object
  };