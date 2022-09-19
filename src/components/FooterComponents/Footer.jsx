import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {

    var current = new Date();
    const navigate = useNavigate();

    return (
        <footer class="p-6 relative light-backdrop-box rounded-lg shadow md:px-12 md:py-12">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="pointer flex items-center mb-4 sm:mb-0">
                    <motion.img whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9, rotate: -15}} src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8 cursor-default" alt="Logo" />
                    <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={ () => navigate("/") } class="self-center text-2xl font-semibold whitespace-nowrap brown-text">Company Name</motion.span>
                </div>
                <ul class="flex flex-wrap items-center mb-6 text-xs md:text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={ () => navigate("/about") } >
                        <p href="#" class="pointer grey-text mr-4 hover:underline md:mr-6 ">About</p>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={null} >
                        <p href="#" class="pointer grey-text mr-4 hover:underline md:mr-6">Privacy Policy</p>
                    </motion.li>
                    {/* <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={null} >
                        <p href="#" class="pointer grey-text mr-4 hover:underline md:mr-6 ">Licensing</p>
                    </motion.li> */}
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={ () => navigate("/contact-us") } >
                        <p href="#" class="pointer grey-text hover:underline">Contact</p>
                    </motion.li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="flex flex-row justify-center items-center">
                {/* <span><motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={ () => navigate("/") } class="hover:underline">Company Name™</motion.p>. All Rights Reserved.            </span> */}
                <p class="block text-xs grey-text sm:text-center md:text-sm">© {current.getFullYear()}</p>
                <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} onClick={ () => navigate("/") } class="hover:underline cursor-pointer">Company Name™</motion.p>
                <p class="block text-xs grey-text sm:text-center md:text-sm">All Rights Reserved.</p>
            </div>
        </footer>
    );
}