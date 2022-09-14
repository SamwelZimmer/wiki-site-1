import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { idText } from "typescript";

const items = [
  {key: 0, title: "title 1", desc: "desc 1", explain: "explain 1"},
  {key: 1, title: "title 2", desc: "desc 2", explain: "explain 2"},
  {key: 2, title: "title 3", desc: "desc 3", explain: "explain 3"},
  {key: 3, title: "title 4", desc: "desc 4", explain: "explain 4"}
];

export default function ExplainAccordian() {
  return (
      <LayoutGroup>
        <motion.ul className="flex flex-col rounded-xl md:px-20" layout initial={{ borderRadius: 25 }}>
          

          {items.map(
            function Item(i) {
              const [isOpen, setIsOpen] = useState(false);
              const toggleOpen = () => setIsOpen(!isOpen);
        
                  return (
                      <motion.li className="grey-bg w-full rounded-2xl p-5 mb-5 overflow-hidden cursor-pointer" layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
                        <motion.div layout className="flex flex-row gap-0">
                          {/* <motion.div className="brown-bg w-8 md:w-12 aspect-square rounded-full" layout /> */}
                          <motion.div className="flex flex-col gap-0">
                            <h3 className="p-0 brown-text text-xl">{i.title}</h3>
                            <h3 className="p-0 self-center brown-text text-xl">{i.desc}</h3>
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
                            <p>{i.explain}</p>
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


