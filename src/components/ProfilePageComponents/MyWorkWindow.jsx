import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BiTimer } from "react-icons/bi";
import { BsLock }from "react-icons/bs";

import SecuredProjects from "./SecuredProjects";
import UnderwayProjects from "./UnderwayProjects";

const allIngredients = [
    { icon: <BsLock/>, label: "Secured", content: <SecuredProjects /> },
    { icon: <BiTimer/>, label: "Underway", content: <UnderwayProjects /> },
];
  
const [tomato, lettuce] = allIngredients;
const tabs = [tomato, lettuce];

function MyWorkWindow() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="my-work-position">
      <div className="my-work-window">
        <nav className="my-work-navigation">
          <ul id="my-work-map">
            {tabs.map((i) => (
              <li
                id="my-work-map-item"
                key={i.label}
                className={i === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(i)}
              >
                <div className="my-work-icon">
                    {i.icon}
                </div>
                {`${i.label}`}
                {i === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main id="my-work-content-container">
          <AnimatePresence exitBeforeEnter>
            <motion.div
                id="my-work-content"
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.content : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default MyWorkWindow;
