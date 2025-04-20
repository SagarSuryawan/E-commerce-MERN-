import { AiTwotoneMail } from "react-icons/ai";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function Footer() {

    return(
        <div >

            <footer className="flex mt-20">
                {/* 1 */}
                <section className="flex flex-col border flex-1 h-auto text-left border border-black leading-8 pl-5">
                    <h1>ONLINE SHOPPING</h1>
                    
                    <ul>
                        <li>
                            <a href="">Mens Fashion</a>
                        </li>
                        <li>
                            <a href="">Womens Fashion</a>
                        </li>
                        <li>
                            <a href="">Ethnic Fashion</a>
                        </li>
                        <li>
                            <a href="">Shirts</a>
                        </li>
                        <li>
                            <a href="">Jeans</a>
                        </li>
                        <li>
                            <a href="">Tshirts</a>
                        </li>
                        <li>
                            <a href="">Tousers & Pants</a>
                        </li>
                        <li>
                            <a href="">Shorts</a>
                        </li>
                        <li>
                            <a href="">Brands</a>
                        </li>
                        <li>
                            <a href="">New Arrivals</a>
                        </li>
                        <li>
                            <a href="">Coupans</a>
                        </li>
                    </ul>
                    

                    
                    
                </section>


                {/* 2 */}
                <section className="flex flex-col border flex-1 h-auto text-left border border-black leading-8 pl-5">
                <h1>BRANDS</h1>
                    
                    <ul>
                        <li>
                            <a href="">Highlander</a>
                        </li>
                        <li>
                            <a href="">Locomotiv</a>
                        </li>
                        <li>
                            <a href="">Tokiyo Talkies</a>
                        </li>
                        <li>
                            <a href="">Ketch</a>
                        </li>
                        <li>
                            <a href="">Vishudh</a>
                        </li>
                        <li>
                            <a href="">Hoop</a>
                        </li>
                    </ul>
                </section>

                {/* 3 */}
                <section className="flex flex-col border flex-1 h-auto text-left border border-black leading-8 pl-5">
                <h1>COMPANY</h1>
                    
                    <ul>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Terms & Condition</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Site Map</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                    </ul>

                </section>

                {/* 4 */}
                <section className="flex flex-col border flex-1 h-auto text-left border border-black leading-8 pl-5">
                <h1>OFFLINE STORES</h1>
                    
                    <ul>
                        <li>
                            <a href="">Find Offline Stores</a>
                        </li>
                    </ul>
                </section>

                {/* 5 */}
                <section className="flex flex-col border flex-1 h-auto text-left border border-black leading-8 pl-5">
                <h1>FAQ</h1>
                   <ul>
                        <li>
                            <a href="">How To Place Order</a>
                        </li>
                        <li>
                            <a href="">Expected Delivert Dates</a>
                        </li>
                        <li>
                            <a href="">Initiates Returns /<br/>
                            Exchange / Refunds
                            </a>
                        </li>
                        <li>
                            <a href="">Policy-Oreder Tracking</a>
                        </li>
                        <li>
                            <a href="">Policy-Returns /<br/>
                            Exchange / Refunds</a>
                        </li>
                        <li>
                            <a href="">Policy-Refunds</a>
                        </li>
                        <li>
                            <a href="">Policy-Payments</a>
                        </li>
                        <li>
                            <a href="">Cancel Order</a>
                        </li>
                    </ul>
                </section>

                {/* 6 */}
                <section className="flex flex-col border  h-auto text-left border border-black leading-8 pl-5 pr-2">
                    <div>
                        <strong>Customer Care:</strong> <span className="text-sm">(Mon to Sat 10:30 AM to 5:30 PM)</span>
                        <AiTwotoneMail className="w-5 h-5" /> <span></span>
                    </div>
                </section>

            </footer>

        </div>
    )

}

export default Footer;