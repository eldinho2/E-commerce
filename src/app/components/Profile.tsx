'use client'; 

import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import styles from '@/app/styles/cart.module.css'


const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CgProfile onClick={handleOpenProfile} />
      {isOpen && (
        <div>
          <span>Voce</span>
          <span>Deslogar</span>
        </div>
      )}
    </div>
  )
};

export default Profile;