import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

function Footer() {

    return(
     <div className="flex border bg-[#F4F4F4] p-5 mt-10">
        <footer className="flex my-auto">

            <div className="flex p-5 m-auto">
                        {/* 1 */}
                    <section className="flex flex-col flex-1 h-auto text-left leading-8 pl-5">
                        <h1 className="font-semibold">ONLINE SHOPPING</h1>
                        
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
                    <section className="flex flex-col flex-1 h-auto text-left leading-8 pl-5">
                    <h1 className="font-semibold">BRANDS</h1>
                        
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
                    <section className="flex flex-col flex-1 h-auto text-left leading-8 pl-5">
                    <h1 className="font-semibold">COMPANY</h1>
                        
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
                    <section className="flex flex-col flex-1 h-auto text-left leading-8 pl-5">
                    <h1 className="font-semibold">OFFLINE STORES</h1>
                        
                        <ul>
                            <li>
                                <a href="">Find Offline Stores</a>
                            </li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="flex flex-col flex-1 h-auto text-left leading-8 pl-5">
                    <h1 className="font-semibold">FAQ</h1>
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
           </div>

           <div className=" contactTo h-auto">

              <section className="h-auto border border-black px-2">
                    <strong>Customer Care:</strong> <span className="text-sm">(Mon to Sat 10:30 AM to 5:30 PM)</span>
                    <div className=" contactTo flex mt-5">

                        <div className="mailTo flex justify-left items-center">
                            <AiTwotoneMail className="w-5 h-5"/>
                            <a href="mailto:sagarsurya45@gmail.com">sagarsurya45@gmail.com</a>
                            <div className="h-4 ml-2 border border-black-700"></div>
                        </div>

                        <div className="phoneTo flex justify-left items-center">
                            <FiPhone className="w-5 h-5" />
                            <a href="tel:+919096519472">+91 9096519472</a>
                        </div>
                    </div>
                    <span className="bg-red-200">For Best Experience Please connect from the Registered Number.</span>
              </section>

                <span>Stay updated on Latest deals & happenings.</span>

              <section>
                <form action="" className="flex">
                    <input type="mail" placeholder="Enter Your email" className="h-20 w-[90%]"/>
                    <button className="bg-[#626262] w-20 h-20">Go</button>
                </form>

                {/* payment mode  */}
                <div className="paymentMode flex justify-center items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKaYFu855kzoydaqxJyEJZPwLXkbBG2OPlA&s"  className="w-[90%] h-22" alt="" />
                </div>
              </section>
        
             <div className="connect">
                <strong>Connect</strong>
                <div className="socialmedia flex">
                    <a href="" > <CiFacebook className="w-6 h-6"/></a>
                    <a href="" > <CiInstagram className="w-6 h-6"/></a>
                    <a href="" > <CiYoutube className="w-6 h-6"/></a>
                </div>

                <div className="appStores flex gap-5">
                    <a href="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s" className="w-20  h-15"  alt="" />
                    </a>
                    <a href="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PNom2p4QIvGrUg2RPWvmfLbeKZOKws8S8g&s " className="w-20  h-15"  alt="" />
                    </a>
                </div>
             
              </div>

          </div>

          

        </footer>
    </div>
    )

}

export default Footer;