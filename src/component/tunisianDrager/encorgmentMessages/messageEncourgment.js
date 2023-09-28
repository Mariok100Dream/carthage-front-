
import {encourgeMessages} from "./encourageMessage"

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }


export const getRandomEncourgmentMessage = () =>{
    const randomEncouragement = getRandomElement(encourgeMessages);
    const randomMessage = randomEncouragement.message;
    const randomIcon = randomEncouragement.icon;
    return {randomMessage,randomIcon}
}

