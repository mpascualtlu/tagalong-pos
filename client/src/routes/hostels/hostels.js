import React, { useRef, useState } from 'react';
import './hostels.css';
import DisplaySection from '../../shared/display-section/display-section';
import BufferText from '../../shared/buffer-text/buffer-text';
import Room from '../../shared/room/room';
import DatePicker from '../../shared/datepicker/datepicker';
import { useNavigate } from 'react-router-dom';

const Hostels = () => {
    const [checkInDate, changeCheckInDate ] = useState(null);
    const [checkOutDate, changeCheckOutDate ] = useState(null);
    const [currentOrder, changeCurrentOrder] = useState(null);

    const myRef = useRef();
    const navigate = useNavigate();

    const executeScroll = () => myRef.current.scrollIntoView();

    const hostels = [
        {
            id: 1,
            name: "Backpacker's hostel",
            description: "Welcome to Tag Along Backpackers Hostel - the first of its kind in Gangtok, Sikkim." + 
            "The hostel came into existence when the sister duo, Manisha and Bhavana, spotted the need for having a space for backpackers in their hometown, Gangtok." +
            "The backpacker hostel is a short walk away from the town center, and backpackers across the globe have come and made it their home." + 
            "It helps that the sisters are naturals at being hosts, and are loved universally by their guests.",
            rooms: [
                {
                    hostelId: 1,
                    name: "Room 1",
                    description: "4 Bed Male Dorm",
                    nightlyPrice: 799,
                    roomImage: "/images/room1.jpg"
                },
                {
                    hostelId: 1,
                    name: "Room 2",
                    description: "6 Bed Mixed Dorm",
                    nightlyPrice: 699,
                    roomImage: "/images/room2.jpg"
                }
            ]
        },
        {
            id: 2,
            name: "Tag Along 2",
            description: "Tag Along 2.0 is your second home to find comfort and happiness." +
                "Surrounded by beautiful mountains, this place will give you a break from the hustle and" +
                "bustle of city life. This place is ideal for remote working. We also provide three times meals" +
                "every day according to your needs. But you also have a kitchen to cook for yourself.",
            rooms: [
                {
                    hostelId: 2,
                    name: "Kongchen",
                    description: "6 Bed Mixed Dorm",
                    nightlyPrice: 699,
                    roomImage: "/images/kongchen.jpg"
                },
                {
                    hostelId: 2,
                    name: "La La Land",
                    description: "Private Room",
                    nightlyPrice: 1099,
                    roomImage: "/images/la-la-land.jpg"
                }
            ]
        }
    ];

    const updateOrder = (num, room) => {
        if (num) {
            const newOrder = {
                hostelName: hostels.filter(hostel => hostel.id === room.hostelId)[0].name,
                roomName: room.roomName,
                roomDescription: room.description,
                numOfBeds: num
            }
            changeCurrentOrder(newOrder);
        }
    }

    const goToReview = (room) => {
        if (checkInDate != null && checkOutDate != null && currentOrder != null) {
            navigate('/review', {
                state: {
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                    currentOrder: currentOrder
                }
            })
        } else {

        }
    }
    
    return (
        <div className="Hostels">
            <DisplaySection
                largeText="Eat. Meet. Repeat."
                buttonText="Book Now"
                imageName="/images/backpacker2.jpg"
                handleClick={executeScroll}
            />
            <div>
                { hostels.map((hostel) => (
                    <div key={hostel.id} ref={hostel.id === 1 ? myRef : null}>
                        <BufferText
                            header={hostel.name}
                            text={hostel.description}
                        />
                        <div className="staying-dates">
                            <DatePicker
                                category="Check-in Date"
                                handleChange={changeCheckInDate}
                            />
                            <DatePicker
                                category="Check-out Date"
                                handleChange={changeCheckOutDate}
                            />
                        </div>
                        { hostel.rooms.map((room, index) => (
                            <div key={index}>
                                <Room
                                    roomName={room.name}
                                    description={room.description}
                                    nightlyPrice={room.nightlyPrice}
                                    roomImage={room.roomImage}
                                    hostelId={room.hostelId}
                                    handleChange={updateOrder}
                                    handleClick={goToReview}
                                />
                            </div>
                            )
                        )}
                    </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Hostels;