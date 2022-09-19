import { motion } from "framer-motion";

function ExamplesPageModalBackdrop( {children, onClick} ) {

    return(
        <motion.div 
        className="fixed top-0 left-0 h-screen z-50 bg-black bg-opacity-50 w-full flex items-center justify-center px-6 md:px-12"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}

export default ExamplesPageModalBackdrop;