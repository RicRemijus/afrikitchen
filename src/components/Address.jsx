import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setBillingInfo } from '../Reducer/cartSlice';

const Address = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setBillingInfo({email, name, cardNumber, expiryDate, cvv, address, city, zip}))
    }
  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Epiry Date</label>
            <input type="date" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="email" value={city} onChange={(e) => setCity(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip</label>
            <input type="number" id="zip" value={zip} onChange={(e) => setZip(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Save Info</button>
    </form>
  )
}

export default Address;