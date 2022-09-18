import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { idText } from "typescript";

const items = [
  {key: 0, title: "Foreplay", desc: "You decide you want to save future yourself from creative fraud", explain: "Traditional copyrighting is flawed, a written sigature proves nothing. You are worried that you will not have enough capital for a legal battle if your work is stolen."},
  {key: 1, title: "Your Turn", desc: "You give us the peice of work you want to protect.", explain: "By uploading a digital file, we can form a unique 256 btye hash of your work. This can be uploaded to both the BTC and ETH blockchains for storage."},
  {key: 2, title: "My Turn", desc: "We give you a document proving it's yours", explain: "By uploading this hash to a blockchain, an immutable timestamp can be made proving the time of creation. Only you will know this unique hash essentailly proving you're the uploader. This information will be given to you in the form of a digital PDF certificate."},
  {key: 3, title: "The Aftercare", desc: "If you run into any problems, we'll try and help", explain: "We will also hold a copy but its ownership is anonymous to us unless you provide us permission. In the event that your work is unlawfully stolen, this is as a precaution so he can attempt to aid you in document validation - if neccesary."}
];

export default function ExplainAccordian() {
  return (
      <LayoutGroup>
        <motion.ul className="flex mb-0 flex-col rounded-xl md:px-20" layout initial={{ borderRadius: 25 }}>
          

          {items.map(
            function Item(i) {
              const [isOpen, setIsOpen] = useState(false);
              const toggleOpen = () => setIsOpen(!isOpen);
        
                  return (
                      <motion.li className="grey-bg w-full rounded-2xl p-5 overflow-hidden cursor-pointer" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                        <motion.div layout className="flex flex-row gap-0">
                          {/* <motion.div className="brown-bg w-8 md:w-12 aspect-square rounded-full" layout /> */}
                          <motion.div className="flex flex-col w-full gap-3">
                            <h3 className="p-0 white-text font-bold text-2xl">{i.title}</h3>
                            <h3 className="p-0 brown-text text-xl">{i.desc}</h3>
                          </motion.div>
                        </motion.div>
                        <AnimatePresence>{isOpen && (
                          <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-8"
                          >
                            <p className="white-text opacity-60">{i.explain}</p>
                            {/* text placeholders */}
                            {/* <div className="w-full bg-slate-500 h-2 mt-3 rounded-lg" /> */}
                            {/* <div className="w-full bg-slate-500 h-2 mt-3 rounded-lg" />
                            <div className="w-full bg-slate-500 h-2 mt-3 rounded-lg" /> */}
                          </motion.div>
                        ) }</AnimatePresence>
                      </motion.li>
                    );
              }
          )}
        </motion.ul>
      </LayoutGroup>
    );
}



// export default function ExplainAccordian() {
//     return (
//         <LayoutGroup>
//           <motion.ul className="flex flex-col rounded-xl md:px-20" layout initial={{ borderRadius: 25 }}>
//             {/* {items.map(item => (
//               <Item key={item.key} item={item.item}  />
//             ))} */}

//             {items.map(function(item) {
//               let i = item.key
//               return (
//                 <Item key={i}  />
//               );
//             })}

//           </motion.ul>
//         </LayoutGroup>
//       );
// }



// function Item(i) {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleOpen = () => setIsOpen(!isOpen);
//     return (
//         <motion.li className="grey-bg w-full rounded-2xl p-5 mb-5 overflow-hidden cursor-pointer" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
//           <motion.div layout className="flex flex-row gap-0">
//             {/* <motion.div className="brown-bg w-8 md:w-12 aspect-square rounded-full" layout /> */}
//             <motion.div className="flex flex-col gap-0">
//               <h3 className="p-0 brown-text text-xl"></h3>
//               <h3 className="p-0 self-center brown-text text-xl"></h3>
//             </motion.div>
//           </motion.div>
//           <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
//         </motion.li>
//       );
// }



// function Content(text) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="mt-8"
//     >
//       <div className="w-full bg-slate-500 h-2 mt-3 rounded-lg" />
//       <p>{text}</p>
//       <div className="w-full bg-slate-500 h-2 mt-3 rounded-lg" />
//       <div className="w-full bg-slate-500 h-2 mt-3 rounded-lg" />
//     </motion.div>
//   );
// }


